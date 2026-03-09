/**
 * Step 5: Build engine data for jeonse (주택임대차) domain only
 * Generates questions.json, branches.json, question_map.json, results.json (draft)
 * Saves to domains/jeonse/
 */
import * as fs from 'fs';
import * as path from 'path';

const domainsDir = path.join(__dirname, '..', 'domains', 'jeonse');
fs.mkdirSync(domainsDir, { recursive: true });

function buildQuestions() {
  return {
    domain: "jeonse",
    version: new Date().toISOString().split('T')[0],
    totalQuestions: 12,
    questions: [
      {
        id: "Q001",
        field: "property_type",
        stage: "유형구분",
        text: "어떤 유형의 부동산인가요?",
        type: "enum",
        options: [
          { value: "주택", label: "주택 (아파트, 빌라, 단독주택, 오피스텔 등)" },
          { value: "상가", label: "상가 (사무실, 점포 등)" }
        ],
        next: { "주택": "Q002", "상가": "REDIRECT_SANGGA" }
      },
      {
        id: "Q002",
        field: "contract_ended",
        stage: "유형구분",
        text: "임대차 계약이 종료되었나요?",
        type: "boolean",
        options: [
          { value: true, label: "예, 계약 기간이 만료되었거나 해지했습니다" },
          { value: false, label: "아니요, 아직 계약 기간 중입니다" }
        ],
        next: { "true": "Q003", "false": "Q003" }
      },
      {
        id: "Q003",
        field: "currently_residing",
        stage: "유형구분",
        text: "지금도 해당 주택에 거주 중인가요?",
        type: "enum",
        options: [
          { value: "거주중", label: "네, 현재 거주 중입니다" },
          { value: "퇴거예정", label: "곧 이사할 예정입니다" },
          { value: "이미퇴거", label: "이미 이사했습니다" }
        ],
        next: { "거주중": "Q004", "퇴거예정": "Q004", "이미퇴거": "Q004" }
      },
      {
        id: "Q004",
        field: "deposit_returned",
        stage: "위험구분",
        text: "보증금을 돌려받았나요?",
        type: "enum",
        options: [
          { value: "전액", label: "전액 반환받았습니다" },
          { value: "일부", label: "일부만 받았습니다" },
          { value: "미반환", label: "아직 받지 못했습니다" }
        ],
        next: { "전액": "TYPE_OK", "일부": "Q005", "미반환": "Q005" }
      },
      {
        id: "Q005",
        field: "landlord_reachable",
        stage: "위험구분",
        text: "임대인(집주인)과 연락이 되나요?",
        type: "boolean",
        options: [
          { value: true, label: "예, 연락이 됩니다" },
          { value: false, label: "아니요, 연락이 안 됩니다 (잠적, 번호 변경 등)" }
        ],
        next: { "true": "Q006", "false": "Q006" }
      },
      {
        id: "Q006",
        field: "deposit_insurance",
        stage: "위험구분",
        text: "전세보증금반환보증(보증보험)에 가입했나요?",
        type: "enum",
        options: [
          { value: "예", label: "예, 가입했습니다 (HUG, HF, SGI 등)" },
          { value: "아니오", label: "아니요, 가입하지 않았습니다" },
          { value: "모름", label: "잘 모르겠습니다" }
        ],
        next: { "예": "Q007", "아니오": "Q007", "모름": "Q007" }
      },
      {
        id: "Q007",
        field: "registration_status_movein",
        stage: "권리보호",
        text: "전입신고를 했나요?",
        type: "boolean",
        options: [
          { value: true, label: "예, 전입신고 완료했습니다" },
          { value: false, label: "아니요, 하지 않았습니다" }
        ],
        next: { "true": "Q008", "false": "Q008" }
      },
      {
        id: "Q008",
        field: "registration_status_fixeddate",
        stage: "권리보호",
        text: "확정일자를 받았나요?",
        type: "boolean",
        options: [
          { value: true, label: "예, 확정일자를 받았습니다" },
          { value: false, label: "아니요 / 잘 모르겠습니다" }
        ],
        next: { "true": "Q009", "false": "Q009" }
      },
      {
        id: "Q009",
        field: "fraud_suspicion",
        stage: "특수상황",
        text: "전세사기가 의심되는 정황이 있나요?",
        description: "예: 임대인 잠적, 다중 피해, 허위 설명, 근저당 과다 설정 등",
        type: "boolean",
        options: [
          { value: true, label: "예, 사기가 의심됩니다" },
          { value: false, label: "아니요, 단순 미반환입니다" }
        ],
        next: { "true": "Q010", "false": "Q010" }
      },
      {
        id: "Q010",
        field: "auction_notice",
        stage: "특수상황",
        text: "경매 또는 공매 통지를 받았나요?",
        type: "boolean",
        options: [
          { value: true, label: "예, 경매/공매 통지를 받았습니다" },
          { value: false, label: "아니요" }
        ],
        next: { "true": "Q011", "false": "Q011" }
      },
      {
        id: "Q011",
        field: "deposit_amount_range",
        stage: "금액_지역",
        text: "보증금 금액대는 어느 정도인가요?",
        type: "range",
        options: [
          { value: "5천만원이하", label: "5,000만원 이하" },
          { value: "5천만~1억", label: "5,000만원 ~ 1억원" },
          { value: "1억~2억", label: "1억원 ~ 2억원" },
          { value: "2억초과", label: "2억원 초과" }
        ],
        next: { "5천만원이하": "Q012", "5천만~1억": "Q012", "1억~2억": "Q012", "2억초과": "Q012" }
      },
      {
        id: "Q012",
        field: "property_region",
        stage: "금액_지역",
        text: "주택 소재지는 어디인가요?",
        description: "소액보증금 우선변제 기준액 판단에 사용됩니다",
        type: "region",
        options: [
          { value: "서울", label: "서울특별시" },
          { value: "수도권과밀", label: "수도권 과밀억제권역 (세종, 용인, 화성, 김포 등)" },
          { value: "광역시등", label: "광역시 등 (안산, 광주, 파주 등)" },
          { value: "기타", label: "그 외 지역" }
        ],
        next: { "서울": "RESULT", "수도권과밀": "RESULT", "광역시등": "RESULT", "기타": "RESULT" }
      }
    ]
  };
}

function buildBranches() {
  return {
    domain: "jeonse",
    version: new Date().toISOString().split('T')[0],
    types: [
      {
        id: "TYPE_A",
        name: "단순 협의 지연형",
        description: "계약 종료 후 연락은 되지만 보증금을 돌려주지 않는 상황",
        conditions: {
          contract_ended: true,
          deposit_returned: ["일부", "미반환"],
          landlord_reachable: true,
          fraud_suspicion: false,
          auction_notice: false
        },
        priority: 1
      },
      {
        id: "TYPE_B",
        name: "퇴거 전 위험형",
        description: "계약 종료 후 퇴거 예정이지만 보증금을 받지 못한 상황",
        conditions: {
          contract_ended: true,
          currently_residing: "퇴거예정",
          deposit_returned: ["일부", "미반환"]
        },
        priority: 2
      },
      {
        id: "TYPE_C",
        name: "퇴거 후 미반환형",
        description: "이미 이사했지만 보증금을 돌려받지 못한 상황",
        conditions: {
          currently_residing: "이미퇴거",
          deposit_returned: ["일부", "미반환"]
        },
        priority: 3
      },
      {
        id: "TYPE_D",
        name: "연락두절형",
        description: "임대인과 연락이 되지 않는 상황",
        conditions: {
          landlord_reachable: false,
          deposit_returned: ["일부", "미반환"]
        },
        priority: 4
      },
      {
        id: "TYPE_E",
        name: "전세사기 의심형",
        description: "전세사기가 의심되는 정황이 있는 상황",
        conditions: {
          fraud_suspicion: true
        },
        priority: 5
      },
      {
        id: "TYPE_F",
        name: "보증보험 가입형",
        description: "전세보증금반환보증에 가입한 경우",
        conditions: {
          deposit_insurance: "예",
          deposit_returned: ["일부", "미반환"]
        },
        priority: 6
      },
      {
        id: "TYPE_G",
        name: "경매/공매 진행형",
        description: "경매 또는 공매 통지를 받은 상황",
        conditions: {
          auction_notice: true
        },
        priority: 7
      },
      {
        id: "TYPE_OK",
        name: "해결형",
        description: "보증금을 전액 반환받은 경우",
        conditions: {
          deposit_returned: "전액"
        },
        priority: 99
      }
    ],
    resolution_order: [
      "TYPE_E", "TYPE_G", "TYPE_F", "TYPE_D", "TYPE_B", "TYPE_C", "TYPE_A", "TYPE_OK"
    ],
    resolution_note: "우선순위가 높은 유형부터 매칭. 복수 해당 시 가장 높은 우선순위 유형 적용"
  };
}

function buildQuestionMap() {
  return {
    domain: "jeonse",
    version: new Date().toISOString().split('T')[0],
    mappings: [
      { question_id: "Q001", field: "property_type", affects_facts: [] },
      { question_id: "Q002", field: "contract_ended", affects_facts: ["F003", "F004"] },
      { question_id: "Q003", field: "currently_residing", affects_facts: ["F001", "F004"] },
      { question_id: "Q004", field: "deposit_returned", affects_facts: ["F004", "F005"] },
      { question_id: "Q005", field: "landlord_reachable", affects_facts: ["F004"] },
      { question_id: "Q006", field: "deposit_insurance", affects_facts: ["F006"] },
      { question_id: "Q007", field: "registration_status_movein", affects_facts: ["F001", "F002", "F005"] },
      { question_id: "Q008", field: "registration_status_fixeddate", affects_facts: ["F002", "F005"] },
      { question_id: "Q009", field: "fraud_suspicion", affects_facts: [] },
      { question_id: "Q010", field: "auction_notice", affects_facts: ["F005"] },
      { question_id: "Q011", field: "deposit_amount_range", affects_facts: ["F005"] },
      { question_id: "Q012", field: "property_region", affects_facts: ["F005"] }
    ]
  };
}

function buildResults() {
  // WARNING: This is a DRAFT. Manual review is required before production use.
  return {
    _WARNING: "이 파일은 자동 생성된 초안입니다. 반드시 수동 검수 후 사용하세요.",
    _REVIEW_STATUS: "DRAFT - NOT REVIEWED",
    domain: "jeonse",
    version: new Date().toISOString().split('T')[0],
    results: [
      {
        type_id: "TYPE_A",
        type_name: "단순 협의 지연형",
        status_summary: "계약 종료 후 보증금 미반환 상태 (임대인 연락 가능)",
        risk_level: "중간",
        actions: {
          today: [
            "등기부등본 발급하여 권리관계 확인 (인터넷등기소: iros.go.kr)",
            "임대인에게 내용증명 발송 준비 (보증금 반환 요구)"
          ],
          this_week: [
            "내용증명 발송 (우체국 방문 또는 전자내용증명)",
            "반환 기한 설정 (통상 14일~1개월)"
          ],
          if_no_response: [
            "지급명령 신청 검토 (소액사건: 간편하고 비용 저렴)",
            "민사조정 또는 소송 검토"
          ],
          do_not: [
            "구두 약속만 믿고 기다리지 마세요",
            "임차권등기 없이 이사하지 마세요 (대항력 상실 위험)"
          ]
        },
        documents: [
          "임대차계약서",
          "보증금 입금 증빙 (계좌이체 내역)",
          "문자/카톡 대화 내역",
          "등기부등본",
          "전입세대확인서",
          "확정일자 부여 확인서"
        ],
        related_systems: [
          {
            name: "임차권등기명령",
            law_ref: "주택임대차보호법 제3조의3",
            description: "이사 후에도 대항력/우선변제권을 유지하기 위한 제도"
          },
          {
            name: "지급명령",
            description: "간편한 채권 추심 방법 (소송보다 빠르고 저렴)"
          }
        ],
        connections: {
          public: [
            { name: "대한법률구조공단", url: "https://www.klac.or.kr", phone: "132", note: "무료 법률상담" },
            { name: "법률홈닥터", url: "https://www.klac.or.kr", note: "찾아가는 법률서비스" },
            { name: "대한법률구조공단 인터넷상담", note: "온라인 무료 상담" }
          ],
          professional: [
            { type: "변호사", note: "⚠️ 광고 포함. 복잡한 사안이면 전문가 상담 권장" }
          ]
        },
        legal_basis: [
          "「주택임대차보호법」 제3조 (대항력)",
          "「주택임대차보호법」 제3조의2 (우선변제권)",
          "「주택임대차보호법」 제3조의3 (임차권등기명령)",
          "「민사소송법」 제462조 (지급명령)"
        ],
        disclaimer: "이 정보는 법적 효력을 갖는 유권해석이 아닙니다. 구체적인 사안에 대해서는 반드시 법률 전문가와 상담하시기 바랍니다."
      },
      {
        type_id: "TYPE_B",
        type_name: "퇴거 전 위험형",
        status_summary: "계약 종료 후 퇴거 예정이나 보증금 미반환 상태",
        risk_level: "높음",
        actions: {
          today: [
            "등기부등본 발급하여 근저당, 가압류 등 확인",
            "임차권등기명령 신청 가능 여부 확인"
          ],
          this_week: [
            "임차권등기명령 신청 (관할 법원)",
            "내용증명 발송 (보증금 반환 요구)"
          ],
          important: [
            "임차권등기 완료 전에는 절대 이사하지 마세요",
            "등기 '결정'이 아니라 '등기 완료'를 확인해야 합니다"
          ],
          do_not: [
            "등기 완료 전 이사 (대항력/우선변제권 상실)",
            "전입신고 말소 (주민센터에서 전출 처리하지 마세요)"
          ]
        },
        documents: [
          "임대차계약서",
          "보증금 입금 증빙",
          "등기부등본",
          "전입세대확인서",
          "확정일자 부여 확인서",
          "건물 인도 관련 증빙"
        ],
        related_systems: [
          {
            name: "임차권등기명령",
            law_ref: "주택임대차보호법 제3조의3 제1항",
            description: "임대차 종료 후 보증금 미반환 시 법원에 신청. 등기 완료되면 이사해도 대항력/우선변제권 유지"
          }
        ],
        connections: {
          public: [
            { name: "대한법률구조공단", url: "https://www.klac.or.kr", phone: "132" },
            { name: "주택임대차분쟁조정위원회", note: "분쟁조정 신청 가능" }
          ],
          professional: [
            { type: "변호사", note: "⚠️ 광고 포함" }
          ]
        },
        legal_basis: [
          "「주택임대차보호법」 제3조의3 (임차권등기명령)",
          "「주택임대차보호법」 제3조 제1항 (대항력)"
        ],
        disclaimer: "이 정보는 법적 효력을 갖는 유권해석이 아닙니다."
      },
      {
        type_id: "TYPE_C",
        type_name: "퇴거 후 미반환형",
        status_summary: "이미 이사했으나 보증금을 돌려받지 못한 상태",
        risk_level: "높음",
        actions: {
          today: [
            "임차권등기명령 신청 여부 확인 (미신청 시 대항력 상실 가능)",
            "등기부등본에서 임차권등기 완료 여부 확인"
          ],
          this_week: [
            "임차권등기 미완료 시: 법원에 임차권등기명령 신청",
            "내용증명 발송",
            "집행권원 확보 방안 검토 (지급명령, 소송)"
          ],
          do_not: [
            "시간을 끌지 마세요 (소멸시효 주의)"
          ]
        },
        documents: [
          "임대차계약서",
          "보증금 입금 증빙",
          "등기부등본",
          "이전 주소지 전입세대확인서"
        ],
        related_systems: [
          {
            name: "임차권등기명령",
            law_ref: "주택임대차보호법 제3조의3"
          },
          {
            name: "집행권원 확보",
            description: "지급명령, 이행권고결정, 민사소송 중 선택"
          }
        ],
        connections: {
          public: [
            { name: "대한법률구조공단", phone: "132" }
          ],
          professional: [
            { type: "변호사", note: "⚠️ 광고 포함" }
          ]
        },
        legal_basis: [
          "「주택임대차보호법」 제3조의3",
          "「민사집행법」 관련 조항"
        ],
        disclaimer: "이 정보는 법적 효력을 갖는 유권해석이 아닙니다."
      },
      {
        type_id: "TYPE_D",
        type_name: "연락두절형",
        status_summary: "임대인과 연락이 되지 않는 상태",
        risk_level: "높음",
        actions: {
          today: [
            "등기부등본 발급 (소유자 변동 확인)",
            "임대인 주소지 확인 (등기부 또는 계약서 기재 주소)"
          ],
          this_week: [
            "내용증명 발송 (등기우편 - 반송 시 공시송달 근거)",
            "임차권등기명령 신청"
          ],
          if_no_response: [
            "공시송달 신청 후 소송 진행",
            "경찰 신고 검토 (사기 정황 시)"
          ],
          do_not: [
            "연락될 때까지 기다리지 마세요",
            "증거자료(문자, 카톡, 녹취)를 보존하세요"
          ]
        },
        documents: [
          "임대차계약서",
          "보증금 입금 증빙",
          "임대인 연락 시도 증빙 (문자, 카톡, 전화기록)",
          "등기부등본"
        ],
        related_systems: [
          {
            name: "공시송달",
            description: "상대방 주소 불명 시 법원 게시판 공고로 송달 갈음"
          }
        ],
        connections: {
          public: [
            { name: "대한법률구조공단", phone: "132" },
            { name: "경찰 (사기 의심 시)", phone: "112" }
          ],
          professional: [
            { type: "변호사", note: "⚠️ 광고 포함. 공시송달이 필요한 경우 전문가 도움 권장" }
          ]
        },
        legal_basis: [
          "「민사소송법」 제194조~제196조 (공시송달)"
        ],
        disclaimer: "이 정보는 법적 효력을 갖는 유권해석이 아닙니다."
      },
      {
        type_id: "TYPE_E",
        type_name: "전세사기 의심형",
        status_summary: "전세사기가 의심되는 상황",
        risk_level: "매우 높음",
        actions: {
          today: [
            "경찰서 방문하여 사기 피해 신고",
            "전세사기피해지원센터 상담 신청 (1533-8119)"
          ],
          this_week: [
            "전세사기 피해자 지원 및 주거안정에 관한 특별법에 따른 피해자 인정 신청",
            "긴급 주거지원 신청 (해당 시)",
            "법률구조공단 무료 소송대리 신청"
          ],
          do_not: [
            "합의 요구에 성급하게 응하지 마세요",
            "증거자료를 폐기하지 마세요"
          ]
        },
        documents: [
          "임대차계약서",
          "보증금 입금 증빙",
          "등기부등본",
          "사기 정황 증빙 (허위 설명, 다중계약 등)",
          "피해 사실 진술서"
        ],
        related_systems: [
          {
            name: "전세사기 피해자 지원 특별법",
            description: "피해자 인정 시 경매 유예, 우선매수권, 긴급 주거지원 등"
          }
        ],
        connections: {
          public: [
            { name: "전세사기피해지원센터", phone: "1533-8119" },
            { name: "대한법률구조공단", phone: "132" },
            { name: "경찰", phone: "112" },
            { name: "LH 긴급 주거지원", note: "임시 주거 제공" }
          ],
          professional: [
            { type: "변호사", note: "⚠️ 광고 포함" }
          ]
        },
        legal_basis: [
          "「전세사기 피해자 지원 및 주거안정에 관한 특별법」",
          "「형법」 제347조 (사기)"
        ],
        disclaimer: "이 정보는 법적 효력을 갖는 유권해석이 아닙니다."
      },
      {
        type_id: "TYPE_F",
        type_name: "보증보험 가입형",
        status_summary: "전세보증금반환보증에 가입된 상태",
        risk_level: "낮음",
        actions: {
          today: [
            "보증보험 가입 증서 확인 (HUG/HF/SGI)",
            "보증기관 고객센터에 전화하여 보증금 반환 청구 절차 문의"
          ],
          this_week: [
            "보증기관에 보증금 반환 청구 접수",
            "필요 서류 준비하여 제출"
          ],
          do_not: [
            "보증기관 청구 전에 임의로 소송을 먼저 진행하지 마세요",
            "보증기관의 안내를 우선 따르세요"
          ]
        },
        documents: [
          "보증보험 증서",
          "임대차계약서",
          "보증금 입금 증빙",
          "내용증명 발송 증빙"
        ],
        related_systems: [
          {
            name: "전세보증금반환보증",
            description: "보증기관이 임대인 대신 보증금을 반환하고 임대인에게 구상"
          }
        ],
        connections: {
          public: [
            { name: "HUG 주택도시보증공사", phone: "1566-9009" },
            { name: "HF 한국주택금융공사", phone: "1688-8114" },
            { name: "SGI서울보증", phone: "1670-7000" }
          ],
          professional: []
        },
        legal_basis: [
          "보증보험 약관에 따른 보증금 반환 청구"
        ],
        disclaimer: "이 정보는 법적 효력을 갖는 유권해석이 아닙니다."
      },
      {
        type_id: "TYPE_G",
        type_name: "경매/공매 진행형",
        status_summary: "해당 주택에 대한 경매 또는 공매가 진행 중",
        risk_level: "매우 높음",
        actions: {
          today: [
            "배당요구 종기일 확인 (법원 경매 공고)",
            "배당요구 신청 준비"
          ],
          this_week: [
            "배당요구 종기일 전에 법원에 배당요구 신청",
            "소액보증금 우선변제 해당 여부 확인",
            "대항력 유지 여부 확인"
          ],
          do_not: [
            "배당요구 종기일을 넘기지 마세요 (배당에서 제외될 수 있음)",
            "경매 진행 중 이사하지 마세요 (대항력 상실)"
          ]
        },
        documents: [
          "임대차계약서",
          "보증금 입금 증빙",
          "전입세대확인서",
          "확정일자 부여 확인서",
          "등기부등본",
          "경매/공매 통지서"
        ],
        related_systems: [
          {
            name: "배당요구",
            description: "경매 절차에서 보증금을 배당받기 위해 반드시 신청해야 함"
          },
          {
            name: "소액보증금 우선변제",
            law_ref: "주택임대차보호법 제8조",
            description: "소액임차인은 다른 담보권자보다 우선하여 일정액을 변제받을 수 있음"
          }
        ],
        connections: {
          public: [
            { name: "대한법률구조공단", phone: "132" },
            { name: "법원 경매정보", url: "https://www.courtauction.go.kr" }
          ],
          professional: [
            { type: "변호사", note: "⚠️ 광고 포함. 경매 절차는 복잡하므로 전문가 상담 강력 권장" }
          ]
        },
        legal_basis: [
          "「주택임대차보호법」 제3조의5 (경매에 의한 임차권의 소멸)",
          "「주택임대차보호법」 제8조 (보증금 중 일정액의 보호)",
          "「민사집행법」 제148조 (배당요구)"
        ],
        disclaimer: "이 정보는 법적 효력을 갖는 유권해석이 아닙니다."
      },
      {
        type_id: "TYPE_OK",
        type_name: "해결형",
        status_summary: "보증금을 전액 반환받은 상태",
        risk_level: "없음",
        actions: {
          checklist: [
            "임대차계약 관련 서류 보관 (향후 분쟁 대비)",
            "전입신고 변경/말소 처리 확인",
            "공과금 정산 완료 확인"
          ]
        },
        documents: [],
        related_systems: [],
        connections: { public: [], professional: [] },
        legal_basis: [],
        disclaimer: "이 정보는 법적 효력을 갖는 유권해석이 아닙니다."
      }
    ]
  };
}

async function main() {
  console.log('=== Step 5: Build Engine Data (jeonse only) ===');

  // Questions
  const questions = buildQuestions();
  fs.writeFileSync(
    path.join(domainsDir, 'questions.json'),
    JSON.stringify(questions, null, 2), 'utf-8'
  );
  console.log(`questions.json: ${questions.totalQuestions} questions`);

  // Branches
  const branches = buildBranches();
  fs.writeFileSync(
    path.join(domainsDir, 'branches.json'),
    JSON.stringify(branches, null, 2), 'utf-8'
  );
  console.log(`branches.json: ${branches.types.length} branch types`);

  // Question Map
  const questionMap = buildQuestionMap();
  fs.writeFileSync(
    path.join(domainsDir, 'question_map.json'),
    JSON.stringify(questionMap, null, 2), 'utf-8'
  );
  console.log(`question_map.json: ${questionMap.mappings.length} mappings`);

  // Results (DRAFT)
  const results = buildResults();
  fs.writeFileSync(
    path.join(domainsDir, 'results.json'),
    JSON.stringify(results, null, 2), 'utf-8'
  );
  console.log(`results.json: ${results.results.length} result cards (DRAFT - manual review required)`);

  console.log('\n=== Step 5 Complete ===');
  console.log('WARNING: results.json is a DRAFT. Manual review is required before production use.');
}

main().catch(console.error);
