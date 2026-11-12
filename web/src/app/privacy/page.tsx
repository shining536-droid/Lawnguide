import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '개인정보처리방침 | 로앤가이드',
  description:
    '로앤가이드가 처리하는 정보의 항목·목적·보유기간, Google 애널리틱스 쿠키, 이용자의 권리와 문의처를 안내합니다.',
  alternates: { canonical: 'https://www.lawnguide.co.kr/privacy' },
  openGraph: {
    title: '개인정보처리방침 | 로앤가이드',
    url: 'https://www.lawnguide.co.kr/privacy',
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

export default function PrivacyPage() {
  return (
    <div className="container-narrow py-10 md:py-14">
      <article>
        <h1 className="text-2xl font-bold text-navy-700 md:text-3xl">개인정보처리방침</h1>
        <p className="mt-2 text-sm text-gray-500">시행일 {EFFECTIVE_DATE}</p>

        <p className="mt-6 text-sm leading-relaxed text-gray-700">
          로앤가이드(이하 &ldquo;서비스&rdquo;)는 이용자의 개인정보를 중요하게 생각하며, 「개인정보 보호법」 등 관련
          법령을 준수합니다. 이 방침은 서비스가 어떤 정보를 어떤 목적으로 처리하는지, 얼마나 보관하는지, 이용자가 어떤
          권리를 갖는지를 설명합니다.
        </p>

        <Section title="1. 처리하는 정보와 목적">
          <h3 className="mt-4 text-base font-semibold text-gray-900">가. 진단·안내 기능에서 선택하신 답변</h3>
          <p>
            상황 진단과 결과 안내는 이용자의 브라우저 안에서만 처리됩니다. 선택하신 답변과 결과는 서비스 서버로
            전송되거나 저장되지 않으며, 페이지를 닫거나 새로고침하면 사라집니다. 진단 질문은 선택지 방식으로만 답변을
            받습니다. 결과 화면의 &ldquo;상담 전 준비 메모&rdquo; 입력란에 적으신 내용도 이용자의 브라우저 안에만 머물며
            서버로 전송되지 않습니다. 서비스는 생성형 AI 등 외부 인공지능 API 에 이용자 답변을 전송하지 않습니다.
          </p>
          <p>
            &ldquo;PDF 저장&rdquo; 기능은 브라우저의 인쇄 기능을 호출할 뿐이며, 파일은 이용자의 기기에만 생성됩니다.
            &ldquo;링크 복사&rdquo; 기능은 선택하신 답변을 포함하지 않는 페이지 주소만 복사합니다.
          </p>

          <h3 className="mt-6 text-base font-semibold text-gray-900">나. 웹사이트 이용 통계 (Google 애널리틱스)</h3>
          <p>
            서비스는 어떤 페이지가 얼마나 이용되는지 파악하고 서비스를 개선하기 위해 Google LLC 가 제공하는 Google
            애널리틱스 4(GA4) 를 사용합니다. GA4 는 다음 정보를 수집합니다.
          </p>
          <ul>
            <li>쿠키에 저장되는 무작위 식별자(아래 2. 참조)</li>
            <li>방문한 페이지 주소, 유입 경로, 방문 일시, 체류·스크롤 정도</li>
            <li>브라우저 종류, 운영체제, 기기 유형, 화면 크기, 언어 설정</li>
            <li>
              IP 주소로부터 추정한 대략적인 위치(국가·도시 수준). GA4 는 IP 주소 자체를 저장하지 않는 것으로 안내되고
              있습니다.
            </li>
            <li>
              서비스가 정의한 이용 행동 이벤트(예: 진단 시작·완료, 버튼 클릭, 스크롤 깊이). 이벤트에는 법률 분야명,
              결과 유형 코드, 위험도 구간, 버튼 문구 등 서비스가 미리 정한 분류값만 포함되며, 이용자가 선택한 개별
              답변 내용은 포함하지 않습니다.
            </li>
          </ul>
          <p>
            이 정보는 쿠키 식별자와 결합되어 같은 브라우저의 재방문을 구분할 수 있으므로 완전히 익명이라고는 할 수
            없습니다. 다만 서비스는 이름·연락처 등 이용자를 직접 식별할 수 있는 정보를 수집하지 않으며, GA4 에
            그러한 정보를 전송하지 않습니다.
          </p>

          <h3 className="mt-6 text-base font-semibold text-gray-900">다. 이메일 문의</h3>
          <p>
            이용자가 문의·정정 요청을 위해 이메일을 보내는 경우, 발신 이메일 주소와 문의 내용이 운영자의 이메일
            계정에 보관됩니다. 이 정보는 문의 응대와 정보 정정 목적으로만 사용합니다.
          </p>

          <h3 className="mt-6 text-base font-semibold text-gray-900">라. 호스팅 접속 기록</h3>
          <p>
            서비스는 Vercel Inc. 의 호스팅 인프라에서 운영됩니다. 웹사이트 운영 과정에서 접속 IP 주소, 요청한 주소,
            접속 일시, 브라우저 정보가 포함된 접속 기록이 호스팅 사업자 측에 일시적으로 생성될 수 있습니다. 이 기록은
            장애 대응과 보안 목적에 한해 사용됩니다.
          </p>
        </Section>

        <Section title="2. 쿠키">
          <p>
            서비스 자체는 로그인·설정 저장용 쿠키나 브라우저 저장소를 사용하지 않습니다. GA4 가 설정하는 쿠키는 다음과
            같습니다.
          </p>
          <div className="my-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="py-2 pr-4 font-medium">쿠키 이름</th>
                  <th className="py-2 pr-4 font-medium">용도</th>
                  <th className="py-2 font-medium">유효기간</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-mono text-xs">_ga</td>
                  <td className="py-2 pr-4">브라우저를 구분하기 위한 무작위 식별자</td>
                  <td className="py-2">최대 2년 (브라우저에 따라 400일로 제한)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">_ga_DVMXWW15NR</td>
                  <td className="py-2 pr-4">방문(세션) 상태 유지</td>
                  <td className="py-2">최대 2년 (브라우저에 따라 400일로 제한)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            쿠키는 브라우저 설정에서 차단하거나 삭제할 수 있습니다. 쿠키를 차단해도 서비스의 모든 기능을 이용할 수
            있습니다. Google 이 제공하는{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              Google 애널리틱스 차단 브라우저 부가기능
            </a>
            을 설치하면 GA4 수집을 중단할 수 있습니다.
          </p>
        </Section>

        <Section title="3. 보유 기간">
          <ul>
            <li>진단 답변·결과: 서버에 저장하지 않으므로 보유하지 않습니다.</li>
            <li>
              GA4 이용 통계: Google 서버에 보관되며, 이용자·이벤트 단위 데이터의 보관 기간은 GA4 설정에 따릅니다(기본
              2개월, 최대 14개월). 집계된 보고서 데이터는 그보다 오래 보관될 수 있습니다.
            </li>
            <li>
              이메일 문의: 문의 처리 완료 후 1년간 보관한 뒤 삭제합니다. 다만 분쟁 대응 등을 위해 필요한 경우 관련
              법령이 정한 기간 동안 보관할 수 있습니다.
            </li>
            <li>호스팅 접속 기록: 호스팅 사업자의 정책에 따라 단기간 보관 후 삭제됩니다.</li>
          </ul>
        </Section>

        <Section title="4. 제3자 제공 및 처리 위탁·국외 이전">
          <p>
            서비스는 이용자의 정보를 판매하거나 광고 목적으로 제3자에게 제공하지 않습니다. 서비스 운영을 위해 다음
            사업자가 정보를 처리합니다.
          </p>
          <div className="my-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="py-2 pr-4 font-medium">수탁·이전받는 자</th>
                  <th className="py-2 pr-4 font-medium">처리 내용</th>
                  <th className="py-2 pr-4 font-medium">이전 국가</th>
                  <th className="py-2 font-medium">근거</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Google LLC</td>
                  <td className="py-2 pr-4">웹사이트 이용 통계 분석(GA4)</td>
                  <td className="py-2 pr-4">미국 등 Google 데이터센터 소재지</td>
                  <td className="py-2">이용자의 쿠키 설정에 따른 수집</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Vercel Inc.</td>
                  <td className="py-2 pr-4">웹사이트 호스팅, 접속 기록 생성</td>
                  <td className="py-2 pr-4">미국 등 Vercel 인프라 소재지</td>
                  <td className="py-2">서비스 제공을 위한 처리 위탁</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            각 사업자의 개인정보 처리에 관한 자세한 내용은{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google 개인정보처리방침
            </a>{' '}
            및{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              Vercel 개인정보처리방침
            </a>
            에서 확인하실 수 있습니다.
          </p>
        </Section>

        <Section title="5. 이용자의 권리">
          <p>
            이용자는 자신의 개인정보에 대한 열람·정정·삭제·처리정지를 요구할 수 있습니다. 다만 서비스는 진단 답변을
            저장하지 않으며 GA4 데이터는 쿠키 식별자 단위로만 존재하므로, 특정 이용자의 기록을 찾아 열람·삭제해 드리기
            어려운 경우가 있습니다. 이 경우 브라우저에서 쿠키를 삭제하시면 이후 수집이 기존 기록과 연결되지 않습니다.
          </p>
          <p>이메일 문의로 제공하신 정보의 열람·정정·삭제는 아래 문의처로 요청하시면 지체 없이 처리합니다.</p>
        </Section>

        <Section title="6. 아동의 개인정보">
          <p>서비스는 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 개인정보를 의도적으로 수집하지 않습니다.</p>
        </Section>

        <Section title="7. 안전성 확보 조치">
          <p>
            서비스는 HTTPS 암호화 통신을 사용하고, 서버에 이용자 입력값을 저장하지 않는 구조로 설계하여 유출 위험을
            최소화하고 있습니다. 서비스가 사용하는 외부 사업자는 각자의 보안 기준에 따라 정보를 보호합니다.
          </p>
        </Section>

        <Section title="8. 문의처">
          <p>개인정보 처리에 관한 문의, 정정 요청, 권리 행사는 아래 이메일로 연락해 주세요.</p>
          <ul>
            <li>
              이메일:{' '}
              <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('[로앤가이드] 개인정보 문의')}`}>
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
          <p>
            개인정보 침해에 관한 상담이 필요하시면 개인정보침해신고센터(국번 없이 118), 개인정보분쟁조정위원회(1833-6972)에
            문의하실 수 있습니다.
          </p>
        </Section>

        <Section title="9. 방침의 변경">
          <p>
            이 방침이 변경되는 경우 이 페이지에 변경 내용과 시행일을 게시합니다. 수집 항목이나 이용 목적이 실질적으로
            달라지는 경우에는 시행 전에 페이지 상단에 안내합니다.
          </p>
        </Section>

        <p className="mt-10 text-sm text-gray-500">
          관련 문서:{' '}
          <Link href="/terms" className="text-primary-600 underline">
            이용약관
          </Link>
        </p>
      </article>
    </div>
  );
}
