import Link from 'next/link';
import DomainIcon from './DomainIcon';

interface DomainCardProps {
  href: string;
  domainId: string;
  name: string;
  description: string;
  /** 리스트 안에서 제목 레벨을 맞추기 위한 옵션. 기본은 span(제목 없음). */
  headingLevel?: 'h3' | 'span';
}

/**
 * 분야 선택 카드 (모바일 우선, 2열 그리드 기준).
 * - 1px 테두리(brand.line), 반경 14px, 그림자 없음
 * - 1행: 32px 아이콘 컨테이너 + 15px 제목 / 2행: 12.5px 설명(최대 2줄)
 * - 320px 에서는 1열로 떨어뜨려 글자 잘림을 막는다 (그리드 쪽에서 처리)
 */
export default function DomainCard({ href, domainId, name, description, headingLevel = 'span' }: DomainCardProps) {
  const Title = headingLevel;
  return (
    <Link
      href={href}
      className="group flex min-h-[92px] flex-col rounded-[14px] border border-brand-line bg-white p-3.5 transition-colors hover:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/40 active:bg-brand-surface md:p-4"
    >
      <span className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-brand-surface text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-white">
          <DomainIcon domain={domainId} size={20} />
        </span>
        <Title className="min-w-0 break-keep text-[15px] font-semibold leading-snug text-navy-700 [overflow-wrap:anywhere] md:text-base">
          {name}
        </Title>
      </span>
      <span className="mt-2 line-clamp-2 break-keep text-[12.5px] leading-snug text-brand-muted [overflow-wrap:anywhere] md:text-[13px]">
        {description}
      </span>
    </Link>
  );
}
