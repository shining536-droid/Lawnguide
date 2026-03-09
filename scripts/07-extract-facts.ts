/**
 * Step 3: Extract legal facts from normalized units
 * Creates structured legal facts for each domain
 * Saves to kb/{domain}/legal_facts.json
 */
import * as fs from 'fs';
import * as path from 'path';

const targetsPath = path.join(__dirname, '..', 'config', 'targets.json');
const targets = JSON.parse(fs.readFileSync(targetsPath, 'utf-8')).targets;

interface LegalFact {
  id: string;
  topic: string;
  statement: string;
  law_refs: string[];
  prerequisites: string[];
  exceptions?: string[];
  source_pages: string[];
}

function extractFactsFromUnit(unit: any): LegalFact[] {
  const facts: LegalFact[] = [];
  const allText = unit.text_blocks.join(' ');
  const pageId = unit.page_id;

  // Extract condition-based facts
  const conditionSentences = extractSentencesWithConditions(unit.text_blocks);
  const lawRefTexts = (unit.law_refs || []).map((r: any) => r.fullText);

  // Group related text blocks into fact candidates
  const factCandidates = groupIntoFactCandidates(unit.text_blocks, unit.conditions);

  for (let i = 0; i < factCandidates.length; i++) {
    const candidate = factCandidates[i];
    const topic = generateTopic(candidate.keyPhrase, unit.title);

    // Find related law refs in this candidate's text
    const relatedLawRefs: string[] = [];
    for (const ref of (unit.law_refs || [])) {
      if (candidate.text.includes(ref.lawName) || candidate.text.includes(ref.fullText)) {
        relatedLawRefs.push(ref.fullText);
      }
    }

    // Extract prerequisites from conditions
    const prerequisites = candidate.conditions
      .filter((c: string) => c.includes('경우') || c.includes('때'))
      .map((c: string) => c.replace(/[의를이가은는]/g, '').trim())
      .filter((c: string) => c.length > 2);

    // Extract exceptions
    const exceptions = extractExceptions(candidate.text);

    if (candidate.keyPhrase && candidate.text.length > 10) {
      facts.push({
        id: '', // will be assigned later
        topic,
        statement: candidate.summary || candidate.text.substring(0, 200),
        law_refs: relatedLawRefs,
        prerequisites: prerequisites.slice(0, 5),
        exceptions: exceptions.length > 0 ? exceptions : undefined,
        source_pages: [pageId],
      });
    }
  }

  return facts;
}

function extractSentencesWithConditions(textBlocks: string[]): string[] {
  const sentences: string[] = [];
  const conditionPatterns = [
    /[^.]*경우[^.]*/g,
    /[^.]*여부[^.]*/g,
    /[^.]*(?:이상|이하|초과|미만)[^.]*/g,
  ];

  for (const block of textBlocks) {
    for (const pattern of conditionPatterns) {
      const matches = block.match(pattern);
      if (matches) {
        sentences.push(...matches.map(m => m.trim()));
      }
    }
  }
  return [...new Set(sentences)];
}

function groupIntoFactCandidates(textBlocks: string[], conditions: string[]): Array<{
  keyPhrase: string;
  text: string;
  summary: string;
  conditions: string[];
}> {
  const candidates: Array<{ keyPhrase: string; text: string; summary: string; conditions: string[] }> = [];

  // Group consecutive text blocks that share a theme
  let currentGroup: string[] = [];
  let currentConditions: string[] = [];

  for (const block of textBlocks) {
    if (block.length < 5) continue;

    // Check if this block has conditions
    const blockConditions = conditions.filter(c => block.includes(c));

    if (currentGroup.length > 0 && (
      block.match(/^[①②③④⑤⑥⑦⑧⑨⑩]/) ||
      block.match(/^\d+\./) ||
      block.match(/^[가-힣]+\s*:/) ||
      (currentGroup.length >= 5 && blockConditions.length === 0)
    )) {
      // Flush current group
      const text = currentGroup.join(' ');
      const keyPhrase = extractKeyPhrase(text);
      candidates.push({
        keyPhrase,
        text,
        summary: text.substring(0, 200),
        conditions: currentConditions,
      });
      currentGroup = [];
      currentConditions = [];
    }

    currentGroup.push(block);
    currentConditions.push(...blockConditions);
  }

  // Flush remaining
  if (currentGroup.length > 0) {
    const text = currentGroup.join(' ');
    const keyPhrase = extractKeyPhrase(text);
    candidates.push({
      keyPhrase,
      text,
      summary: text.substring(0, 200),
      conditions: currentConditions,
    });
  }

  return candidates;
}

function extractKeyPhrase(text: string): string {
  // Try to extract the main subject
  const patterns = [
    /「[^」]+」\s*제\d+조/,
    /[가-힣]{2,10}(?:권|금|제도|절차|신청|등기|계약|보호|보증)/,
    /[가-힣]{2,6}(?:의\s)?[가-힣]{2,6}/,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return match[0];
  }

  return text.substring(0, 20);
}

function generateTopic(keyPhrase: string, pageTitle: string): string {
  // Create a topic ID from key phrase
  const combined = keyPhrase || pageTitle;
  return combined
    .replace(/[「」\s]/g, '')
    .replace(/제\d+조(의\d+)?/g, '')
    .substring(0, 20)
    .replace(/[^가-힣a-zA-Z0-9_]/g, '_');
}

function extractExceptions(text: string): string[] {
  const exceptions: string[] = [];
  const patterns = [
    /다만[,\s]([^.]+)/g,
    /예외적으로\s*([^.]+)/g,
    /그러나\s*([^.]+)/g,
    /단[,\s]([^.]+)/g,
  ];

  for (const pattern of patterns) {
    let match: RegExpExecArray | null;
    while ((match = pattern.exec(text)) !== null) {
      exceptions.push(match[1].trim());
    }
  }
  return exceptions;
}

async function main() {
  console.log('=== Step 3: Extract Legal Facts ===');

  for (const target of targets) {
    const kbDir = path.join(__dirname, '..', 'kb', target.domainId);
    const normalizedFile = path.join(kbDir, 'normalized_units.json');

    if (!fs.existsSync(normalizedFile)) {
      console.log(`\nSkipping ${target.name} - no normalized data`);
      continue;
    }

    console.log(`\nExtracting facts for ${target.name}...`);
    const normalized = JSON.parse(fs.readFileSync(normalizedFile, 'utf-8'));
    const allFacts: LegalFact[] = [];

    for (const unit of normalized.units) {
      const facts = extractFactsFromUnit(unit);
      allFacts.push(...facts);
    }

    // Assign IDs and deduplicate
    const uniqueFacts: LegalFact[] = [];
    const seenTopics = new Set<string>();

    for (let i = 0; i < allFacts.length; i++) {
      const fact = allFacts[i];
      const topicKey = `${fact.topic}_${fact.statement.substring(0, 50)}`;
      if (!seenTopics.has(topicKey)) {
        seenTopics.add(topicKey);
        fact.id = `F${String(uniqueFacts.length + 1).padStart(3, '0')}`;
        uniqueFacts.push(fact);
      }
    }

    const result = {
      domain: target.domainId,
      version: new Date().toISOString().split('T')[0],
      extractedAt: new Date().toISOString(),
      totalFacts: uniqueFacts.length,
      facts: uniqueFacts,
    };

    const outFile = path.join(kbDir, 'legal_facts.json');
    fs.writeFileSync(outFile, JSON.stringify(result, null, 2), 'utf-8');
    console.log(`  Extracted ${uniqueFacts.length} legal facts`);
    uniqueFacts.slice(0, 3).forEach(f => {
      console.log(`    ${f.id}: ${f.topic} - ${f.statement.substring(0, 60)}...`);
    });
    console.log(`  Saved to ${outFile}`);
  }

  console.log('\n=== Step 3 Complete ===');
}

main().catch(console.error);
