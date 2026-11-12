import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '이용약관 | 로앤가이드',
  description: '로앤가이드 서비스의 성격, 제공 범위, 이용자와 운영자의 책임에 관한 이용약관입니다.',
  alternates: { canonical: 'https://www.lawnguide.co.kr/terms' },
  openGraph: {
    title: '이용약관 | 로앤가이드',
    url: 'https://www.lawnguide.co.kr/terms',
    siteName: '로앤가이드',
    type: 'website',
  },
};

const CONTACT_EMAIL = 'shining8930@naver.com';
const EFFECTIVE_DATE = '2026-11-10';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 space-y-3 text-sm leading-relaxed text-gray-700 [&_a]:text-primary-600 [&_a]:underline [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
      <h2 className="text-lg font-bold text-navy-700">{title}</h2>
      {children}
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="container-narrow py-10 md:py-14">
      <article>
        <h1 className="text-2xl font-bold text-navy-700 md:text-3xl">이용약관</h1>
        <p className="mt-2 text-sm text-gray-500">시행일 {EFFECTIVE_DATE}</p>

        <Section title="제1조 (목적)">
          <p>
            이 약관은 로앤가이드(이하 &ldquo;서비스&rdquo;)가 제공하는 법률정보 안내 서비스의 이용 조건과 절차,
            이용자와 운영자의 권리·의무를 정하는 것을 목적으로 합니다.
          </p>
        </Section>

        <Section title="제2조 (서비스의 성격)">
          <ul>
            <li>
              서비스는 이용자가 법률문제를 이해하고 상담 전에 필요한 자료와 절차를 확인할 수 있도록 일반적인
              법률정보를 제공하는 <strong>정보 안내 서비스</strong>입니다.
            </li>
            <li>
              상황 진단과 결과 안내는 미리 설계된 질문 분기와 정리된 법률정보를 바탕으로 자동 제공됩니다. 변호사 등
              전문가가 이용자의 개별 사안을 검토하여 제공하는 것이 아닙니다.
            </li>
            <li>
              서비스는 법률사무소가 아니며, 법률자문·소송대리·서류 작성 대행 등 변호사법상 법률사무를 제공하지
              않습니다.
            </li>
            <li>
              서비스는 현재 변호사 매칭, 상담 예약·접수, 상담 알림 등의 기능을 운영하지 않습니다. 화면에 &ldquo;전문가
              상담 안내&rdquo; 관련 표시가 있더라도 이는 향후 기능에 대한 안내일 뿐, 이를 통해 상담 신청이 접수되지
              않습니다.
            </li>
          </ul>
        </Section>

        <Section title="제3조 (이용 조건)">
          <ul>
            <li>서비스는 회원가입 없이 누구나 무료로 이용할 수 있습니다.</li>
            <li>서비스 이용에 별도의 요금이 부과되지 않으며, 운영자는 이용자에게 유료 상품을 판매하지 않습니다.</li>
            <li>
              운영자는 서비스의 내용을 수시로 수정·보완하거나, 사전 안내 후 서비스의 전부 또는 일부를 중단할 수
              있습니다.
            </li>
          </ul>
        </Section>

        <Section title="제4조 (정보의 정확성과 이용자의 주의)">
          <ul>
            <li>
              운영자는 법제처 국가법령정보, 판례 공개 자료 등 공신력 있는 출처를 바탕으로 정보를 작성하고 정확성을
              유지하기 위해 노력합니다. 그러나 법령·판례·기관 절차는 수시로 변경되므로, 서비스의 정보가 항상 최신이거나
              이용자의 개별 사안에 그대로 적용된다고 보장하지는 않습니다.
            </li>
            <li>
              구체적인 법률적 판단은 사건의 사실관계에 따라 달라집니다. 중요한 결정을 하기 전에는 변호사,
              대한법률구조공단(국번 없이 132) 등 전문가·공공기관의 상담을 받으시기 바랍니다.
            </li>
            <li>
              서비스의 정보에 오류가 있다고 판단되면 아래 문의처로 알려주세요. 운영자는 확인 후 지체 없이 정정합니다.
            </li>
          </ul>
        </Section>

        <Section title="제5조 (책임의 범위)">
          <ul>
            <li>
              운영자는 서비스에서 제공한 일반적인 법률정보를 이용자가 자신의 사안에 적용하여 내린 판단이나 행동의
              결과에 대하여, 운영자의 고의 또는 중대한 과실이 없는 한 책임을 지지 않습니다.
            </li>
            <li>
              운영자는 천재지변, 통신 장애, 호스팅 사업자의 사정 등 운영자가 통제할 수 없는 사유로 서비스가 중단되는
              경우 그로 인한 손해에 대해 운영자의 고의 또는 중대한 과실이 없는 한 책임을 지지 않습니다.
            </li>
            <li>이 조항은 관련 법령이 허용하는 범위에서만 적용되며, 법령상 배제할 수 없는 책임을 제한하지 않습니다.</li>
          </ul>
        </Section>

        <Section title="제6조 (지식재산권)">
          <ul>
            <li>서비스의 구성, 디자인, 설명문 등 운영자가 작성한 콘텐츠의 저작권은 운영자에게 있습니다.</li>
            <li>법령·판례 원문 등 공공저작물은 해당 기관의 이용 조건에 따릅니다.</li>
            <li>
              이용자는 개인적인 참고·상담 준비 목적으로 서비스의 콘텐츠를 출력·저장할 수 있으며, 운영자의 허락 없이
              상업적으로 복제·배포할 수 없습니다.
            </li>
          </ul>
        </Section>

        <Section title="제7조 (금지 행위)">
          <ul>
            <li>자동화된 수단으로 서비스에 과도한 부하를 주는 행위</li>
            <li>서비스의 정보를 변조하여 운영자가 제공한 것처럼 유포하는 행위</li>
            <li>서비스가 법률자문 또는 변호사의 의견인 것처럼 제3자에게 제시하는 행위</li>
          </ul>
        </Section>

        <Section title="제8조 (개인정보)">
          <p>
            이용자의 개인정보 처리에 관한 사항은 <Link href="/privacy">개인정보처리방침</Link>에 따릅니다.
          </p>
        </Section>

        <Section title="제9조 (약관의 변경)">
          <p>
            운영자는 관련 법령을 위반하지 않는 범위에서 이 약관을 변경할 수 있으며, 변경 시 이 페이지에 변경 내용과
            시행일을 게시합니다. 이용자에게 불리한 변경은 시행일 7일 전부터 안내합니다.
          </p>
        </Section>

        <Section title="제10조 (준거법 및 분쟁 해결)">
          <p>
            이 약관은 대한민국 법률에 따라 해석됩니다. 서비스 이용과 관련한 분쟁은 당사자 간 협의로 해결하도록
            노력하며, 협의가 이루어지지 않는 경우 민사소송법에 따른 관할 법원에 제기합니다.
          </p>
        </Section>

        <Section title="문의처">
          <p>
            이메일:{' '}
            <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('[로앤가이드] 이용약관 문의')}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </Section>
      </article>
    </div>
  );
}
