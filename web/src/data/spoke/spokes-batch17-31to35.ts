import { SpokePage } from '../spoke-pages';

// Batch 17 - 31 to 35: small-claims(2), prostitution(2), real-estate-auction(1)
// 고유 존재 이유:
// 31. 이 페이지는 [채권자]의 [지급명령 신청~확정까지 전 과정]에서 [단계별 소요 기간과 준비사항 파악]을 돕는 페이지다.
// 32. 이 페이지는 [중고거래 사기 피해자]의 [소액소송 가능 여부 판단 상황]에서 [소송 요건 확인과 청구 준비]를 돕는 페이지다.
// 33. 이 페이지는 [성매매 알선 혐의자]의 [수사 개시~재판 선고까지 전 과정]에서 [단계별 대응 전략 수립]을 돕는 페이지다.
// 34. 이 페이지는 [성매매 관련 당사자]의 [매수자·매도자 처벌 차이 비교 상황]에서 [자신의 법적 위치와 형량 예측]을 돕는 페이지다.
// 35. 이 페이지는 [경매 입찰 참여자]의 [입찰 서류 준비 단계]에서 [필수 서류 목록 확인과 누락 방지]를 돕는 페이지다.

export const spokesBatch17_31to35: SpokePage[] = [
  {
    domain: 'small-claims',
    slug: 'payment-order-application-to-confirmation',
    keyword: '지급명령 신청에서 확정까지 절차와 기간 총정리',
    questionKeyword: '지급명령 신청하면 확정까지 얼마나 걸리나요?',
    ctaKeyword: '지급명령 신청 절차 확인',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '지급명령 신청~확정 5단계 절차와 기간 | 로앤가이드',
      description: '돈을 빌려줬는데 갚지 않아 지급명령을 신청하려는데 절차가 복잡해 보이시나요? 신청부터 확정까지 5단계와 소요 기간을 지금 확인하세요.',
    },
    intro: '100만원을 빌려준 지인이 6개월째 연락을 피하고 있습니다. 소송까지 가자니 시간과 비용이 걱정되고, 지급명령이라는 제도가 있다는데 어떻게 시작해야 할지 막막합니다. 지급명령은 소액소송보다 빠르고 간편한 채권 회수 수단입니다. 신청서 작성부터 확정까지 단계별 절차와 소요 기간을 정리했습니다.',
    timelineSteps: ['신청서 작성·제출', '법원 심사·발령', '채무자 송달', '이의신청 기간 경과', '확정·강제집행'],
    sections: [
      {
        title: '첫째, 지급명령 신청서를 작성하고 법원에 제출하세요',
        content:
          '<p><strong style="color:#1e3a5f">신청서에는 청구 원인과 금액을 명확히 기재해야 합니다</strong></p>\n<p>지급명령 신청서는 채무자의 <strong>주소지 관할 법원</strong>에 제출합니다. 신청서에는 채권자·채무자 인적사항, <strong>청구금액</strong>, 청구 원인(차용증, 계약서, 이체내역 등)을 기재합니다. 민사소송법 제462조에 따라 금전 기타 대체물의 지급을 목적으로 하는 청구에 대해 신청할 수 있습니다.</p>\n<p>전자소송(ecfs.scourt.go.kr)으로도 신청 가능하며, 수수료는 소장 인지액의 <strong>10분의 1</strong> 수준입니다. 예를 들어 청구금액 500만원 기준 인지액은 약 <strong>2,500원</strong>입니다. 증거서류를 첨부할 필요 없이 청구 원인만 소명하면 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비물: 신청서 + 채무자 주소 + 청구 원인 자료 | 수수료: 소송의 1/10 수준</blockquote>',
      },
      {
        title: '둘째, 법원이 서면 심사 후 지급명령을 발령합니다',
        content:
          '<p><strong style="color:#1e3a5f">별도의 재판 없이 서류만으로 심사합니다</strong></p>\n<p>법원은 신청서를 접수한 후 <strong>서면 심사</strong>만으로 지급명령 발령 여부를 결정합니다. 변론 기일이 없으므로 법원에 출석할 필요가 없습니다. 보통 접수 후 <strong>3~7일</strong> 이내에 지급명령이 발령됩니다.</p>\n<p>다만 청구 원인이 불명확하거나 관할이 잘못된 경우 <strong>보정 명령</strong>이 나올 수 있습니다. 보정 기간까지 합치면 최대 2주 정도 걸릴 수 있으니 신청서를 꼼꼼히 작성하세요.</p>\n<p style="margin-top:12px;padding:12px 16px;background:linear-gradient(135deg,#fff8e1,#fff3c4);border-left:4px solid #f9a825;border-radius:6px;font-weight:600;color:#1e3a5f">지금 내 상황에서 지급명령이 적합한지 확인해보세요 → <a href="/diagnosis/small-claims" style="color:#1e3a5f;text-decoration:underline">무료 진단하기</a></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">소요 기간: 접수 후 3~7일 | 출석 불요 | 서면 심사만으로 발령</blockquote>',
      },
      {
        title: '셋째, 채무자에게 지급명령이 송달됩니다',
        content:
          '<p><strong style="color:#1e3a5f">송달이 실패하면 지급명령 절차가 중단될 수 있습니다</strong></p>\n<p>법원은 발령된 지급명령을 채무자에게 <strong>특별송달</strong>로 보냅니다. 채무자가 주소지에서 정상적으로 수령하면 송달이 완료됩니다. 송달까지 보통 <strong>1~2주</strong>가 소요됩니다.</p>\n<p>문제는 채무자가 <strong>주소 불명</strong>이거나 송달을 회피하는 경우입니다. 민사소송법 제466조에 따라 송달이 불가능하면 지급명령 신청은 <strong>각하</strong>됩니다. 이 경우 소액소송이나 민사소송으로 전환해야 합니다. 채무자 주소를 정확히 확인한 후 신청하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 송달 실패 = 지급명령 각하 | 채무자 주소 사전 확인 필수</blockquote>',
      },
      {
        title: '넷째, 채무자의 이의신청 기간 2주를 기다려야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">채무자가 이의를 신청하면 소송으로 전환됩니다</strong></p>\n<p>채무자는 지급명령을 송달받은 날로부터 <strong>2주 이내</strong>에 이의신청을 할 수 있습니다(민사소송법 제470조). 이의신청이 있으면 지급명령은 효력을 잃고 <strong>통상의 민사소송</strong>으로 이행됩니다.</p>\n<p>반대로 채무자가 2주 이내에 이의신청을 하지 않으면 지급명령이 <strong>확정</strong>됩니다. 확정된 지급명령은 확정판결과 동일한 효력을 가집니다. 통계적으로 지급명령의 약 <strong>60~70%</strong>가 이의 없이 확정됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">이의신청 기간: 송달 후 2주 | 이의 없으면 확정 | 이의 시 소송 전환</blockquote>',
      },
      {
        title: '다섯째, 확정 후 강제집행으로 채권을 회수하세요',
        content:
          '<p><strong style="color:#1e3a5f">확정된 지급명령으로 채무자의 재산을 압류할 수 있습니다</strong></p>\n<p>지급명령이 확정되면 법원에서 <strong>집행문</strong>을 부여받아 강제집행을 신청할 수 있습니다. 채무자의 <strong>예금, 급여, 부동산</strong> 등에 대해 압류 및 추심 명령을 받을 수 있습니다.</p>\n<p>전체 절차(신청~확정)는 순조롭게 진행될 경우 약 <strong>4~6주</strong>면 완료됩니다. 소액소송(2~3개월)이나 일반 민사소송(6개월~1년)에 비해 훨씬 빠릅니다. 다만 채무자의 재산이 없으면 강제집행이 실효성이 없을 수 있으니, 사전에 <strong>재산 조회</strong>를 해두면 좋습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">전체 소요: 약 4~6주 | 확정 후 예금·급여·부동산 압류 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '지급명령 송달 전 이의신청의 효력에 관한 판례',
        summary:
          '대법원 2024마5496 사건(대법원, 2024.06.07)에서 법원은 지급명령이 채무자에게 송달되기 전에 한 이의신청은 부적법하지만, 그 후 채무자에게 지급명령이 적법하게 송달되면 그 하자는 치유된다고 판시했습니다.',
        takeaway:
          '지급명령의 효력은 송달 시점부터 발생합니다. 송달이 정상적으로 이루어졌는지 확인하고, 이의신청 기간 2주가 경과한 후 확정 여부를 반드시 확인하세요.',
      },
    ],
    faq: [
      {
        question: '지급명령 신청 비용은 얼마인가요?',
        answer: '소송 인지액의 <strong>10분의 1</strong>만 납부하면 됩니다. 청구금액 500만원 기준 약 2,500원이며, 송달료(약 5,000~10,000원)를 포함해도 <strong>2만원 이하</strong>로 가능합니다.',
      },
      {
        question: '채무자가 이의신청하면 어떻게 되나요?',
        answer: '지급명령은 효력을 잃고 <strong>통상의 민사소송</strong>으로 자동 전환됩니다. 이 경우 추가 인지액을 납부하고 소송을 진행해야 합니다.',
      },
      {
        question: '지급명령은 어떤 채권에 신청할 수 있나요?',
        answer: '<strong>금전 기타 대체물의 지급</strong>을 목적으로 하는 청구에 한합니다. 물건 인도나 부동산 명도 등은 지급명령 대상이 아닙니다.',
      },
      {
        question: '채무자 주소를 모르면 지급명령을 신청할 수 없나요?',
        answer: '원칙적으로 채무자 주소가 필요합니다. 주소를 모르면 <strong>주민등록 초본 발급</strong>(법원 사실조회 신청)으로 확인할 수 있습니다. 공시송달은 지급명령에서 허용되지 않습니다.',
      },
      {
        question: '지급명령과 소액소송 중 어떤 것이 유리한가요?',
        answer: '상대방이 다투지 않을 것으로 예상되면 <strong>지급명령</strong>이 빠르고 저렴합니다. 상대방이 이의할 가능성이 높으면 처음부터 <strong>소액소송</strong>을 제기하는 것이 시간 낭비를 줄일 수 있습니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/small-claims',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '소액소송 진단', href: '/diagnosis/small-claims' },
      { label: '소액소송 소장 작성 가이드', href: '/guide/small-claims/small-claims-complaint-template' },
      { label: '지급명령 vs 소액소송 비교', href: '/guide/small-claims/small-claims-vs-payment-order' },
      { label: '소액소송 셀프 접수 방법', href: '/guide/small-claims/small-claims-self-filing-guide' },
    ],
  },
  {
    domain: 'small-claims',
    slug: 'used-goods-fraud-small-claims',
    keyword: '중고거래 사기 당했을 때 소액소송 가능 여부와 절차',
    questionKeyword: '중고거래에서 사기 당했는데 소액소송으로 돈을 돌려받을 수 있나요?',
    ctaKeyword: '중고거래 사기 소액소송 방법',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '중고거래 사기 소액소송 가능 여부 3가지 기준 | 로앤가이드',
      description: '중고거래에서 돈만 보내고 물건을 못 받았는데 소액소송으로 돌려받을 수 있는지 궁금하신가요? 소송 가능 요건부터 청구 절차까지 지금 확인하세요.',
    },
    intro: '당근마켓에서 30만원짜리 물건을 구매하고 송금했는데 판매자가 잠적했습니다. 경찰에 신고했지만 수사가 느리고, 돈을 빨리 돌려받을 방법이 필요합니다. 형사 고소와 별도로 민사 소액소송을 통해 직접 돈을 청구할 수 있습니다. 소송이 가능한 조건과 구체적인 절차를 정리했습니다.',
    sections: [
      {
        title: '첫째, 소액소송 대상인지 먼저 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">청구금액 3,000만원 이하면 소액소송이 가능합니다</strong></p>\n<p>소액사건심판법에 따라 청구금액이 <strong>3,000만원 이하</strong>인 금전 청구는 소액소송으로 처리됩니다. 중고거래 사기의 경우 대부분 이 범위에 해당합니다. 피고(판매자)의 <strong>주소지 관할 법원</strong>에 소장을 제출합니다.</p>\n<p>다만 판매자 주소를 알아야 합니다. 판매자가 실명과 주소를 공개하지 않은 경우, 경찰 수사를 통해 <strong>신원 확인</strong>이 선행되어야 합니다. 형사 고소와 민사 소송은 <strong>별도의 절차</strong>이므로 동시에 진행할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조건: 청구금액 3,000만원 이하 + 피고 주소 확인 | 형사·민사 병행 가능</blockquote>',
      },
      {
        title: '둘째, 증거를 체계적으로 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">대화 내역과 송금 증빙이 핵심 증거입니다</strong></p>\n<p>소액소송에서 승소하려면 ①<strong>거래 대화 캡처</strong>(카카오톡, 당근마켓 채팅 등), ②<strong>계좌이체 내역</strong>, ③상품 게시글 캡처가 필수입니다. 상대방이 물건을 보내겠다고 약속한 내용과 실제로 보내지 않은 사실을 <strong>시간 순서대로</strong> 정리하세요.</p>\n<p>택배 송장번호를 요청했는데 답이 없거나, 가짜 송장번호를 알려준 경우 그 내역도 중요한 증거입니다. 상대방이 잠적하기 전에 <strong>내용증명</strong>을 보내두면 소송에서 더 유리합니다.</p>\n<p style="margin-top:12px;padding:12px 16px;background:linear-gradient(135deg,#fff8e1,#fff3c4);border-left:4px solid #f9a825;border-radius:6px;font-weight:600;color:#1e3a5f">내 중고거래 사기 피해, 소송 가능한지 확인해보세요 → <a href="/diagnosis/small-claims" style="color:#1e3a5f;text-decoration:underline">무료 진단하기</a></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 증거: 채팅 캡처 + 이체 내역 + 게시글 캡처 + 내용증명</blockquote>',
      },
      {
        title: '셋째, 소장을 작성하고 접수하세요',
        content:
          '<p><strong style="color:#1e3a5f">소장에는 청구 원인과 금액을 구체적으로 적어야 합니다</strong></p>\n<p>소장에 기재할 핵심은 ①원고·피고 인적사항, ②<strong>청구 취지</strong>("피고는 원고에게 OO만원을 지급하라"), ③<strong>청구 원인</strong>(거래 경위, 송금 사실, 미이행 사실)입니다. 대한법률구조공단 홈페이지에서 <strong>소장 양식</strong>을 다운받을 수 있습니다.</p>\n<p>인지대는 청구금액 100만원 기준 약 <strong>5,000원</strong>, 송달료는 약 <strong>5,000~10,000원</strong>입니다. 전자소송으로 접수하면 인지대 <strong>10% 할인</strong>도 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">비용: 100만원 청구 시 인지대 약 5,000원 + 송달료 | 전자소송 시 할인</blockquote>',
      },
      {
        title: '넷째, 변론기일에 출석하여 주장을 하세요',
        content:
          '<p><strong style="color:#1e3a5f">소액소송은 1회 변론으로 판결이 나오는 것이 원칙입니다</strong></p>\n<p>소액사건심판법 제7조에 따라 소액소송은 <strong>1회 변론</strong>으로 심리를 마치는 것이 원칙입니다. 변론기일에 출석하여 준비한 증거를 제출하고, 피해 사실을 간결하게 진술하세요.</p>\n<p>피고가 출석하지 않으면 <strong>무변론 판결</strong>로 원고 승소 판결이 나올 수 있습니다. 피고가 출석하더라도 증거가 충분하면 <strong>즉시 판결</strong>을 선고합니다. 접수 후 판결까지 보통 <strong>1~2개월</strong>이 걸립니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 1회 변론 원칙 | 피고 불출석 시 무변론 판결 가능 | 소요: 1~2개월</blockquote>',
      },
      {
        title: '다섯째, 판결 후 강제집행으로 돈을 돌려받으세요',
        content:
          '<p><strong style="color:#1e3a5f">승소 판결만으로는 돈이 자동으로 입금되지 않습니다</strong></p>\n<p>판결이 확정되면 <strong>집행문을 부여</strong>받아 상대방의 재산에 강제집행을 신청해야 합니다. 가장 실효성 있는 방법은 상대방의 <strong>은행 계좌 압류</strong>입니다. 법원에 재산명시 신청을 하면 상대방의 재산 내역을 조회할 수 있습니다.</p>\n<p>재산명시 명령을 받은 채무자가 <strong>정당한 사유 없이 불출석</strong>하거나 거짓 진술을 하면 <strong>20일 이내의 감치</strong>에 처해질 수 있습니다. 중고거래 사기범이 재산을 은닉할 우려가 있으면 소송 전 <strong>가압류</strong>를 먼저 신청하는 것도 방법입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">회수 방법: 계좌 압류 + 재산명시 + 감치 신청 | 가압류 선제 신청도 검토</blockquote>',
      },
    ],
    cases: [
      {
        title: '추심명령이 있는 채권에 대한 채무자의 소 제기 권한',
        summary:
          '대법원 2022다299829 사건(대법원, 2025.12.04)에서 법원은 채무자의 제3채무자에 대한 채권에 관하여 추심명령이 있더라도 채무자는 제3채무자를 상대로 피압류채권에 관한 이행의 소를 제기할 당사자적격을 상실하지 않는다고 판시했습니다.',
        takeaway:
          '소액소송 승소 후 강제집행 단계에서 추심명령을 받더라도, 추가적인 권리 행사가 가능합니다. 판결 확정 후 신속하게 강제집행을 진행하세요.',
      },
    ],
    faq: [
      {
        question: '중고거래 사기도 소액소송으로 해결할 수 있나요?',
        answer: '네, 물건 대금 미지급이나 미배송 등 <strong>금전 청구</strong>에 해당하면 소액소송이 가능합니다. 형사 고소와 별도로 진행할 수 있습니다.',
      },
      {
        question: '판매자 실명을 모르는데 소송이 가능한가요?',
        answer: '소장에 피고의 <strong>성명과 주소</strong>를 기재해야 합니다. 경찰 수사를 통해 신원이 확인된 후 소송을 진행하는 것이 일반적입니다.',
      },
      {
        question: '사기 금액이 10만원인데 소송할 가치가 있나요?',
        answer: '소액소송 비용(인지대+송달료)은 <strong>1~2만원</strong> 수준이므로 10만원 청구도 경제적으로 의미가 있습니다. 다만 강제집행 비용도 고려하세요.',
      },
      {
        question: '형사 고소하면 민사 소송은 안 해도 되나요?',
        answer: '형사 고소는 <strong>처벌</strong>을 위한 것이고, 민사 소송은 <strong>돈을 돌려받기</strong> 위한 것입니다. 돈을 받으려면 민사 소송이나 합의가 별도로 필요합니다.',
      },
      {
        question: '피고가 재판에 안 나오면 어떻게 되나요?',
        answer: '피고가 답변서도 제출하지 않고 변론기일에도 불출석하면 <strong>무변론 판결</strong>로 원고 승소 판결이 선고될 수 있습니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/small-claims',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '소액소송 진단', href: '/diagnosis/small-claims' },
      { label: '지급명령 신청~확정 절차', href: '/guide/small-claims/payment-order-application-to-confirmation' },
      { label: '소액소송 소장 작성법', href: '/guide/small-claims/small-claims-complaint-template' },
      { label: '사기 피해자 첫 대응 가이드', href: '/guide/fraud/fraud-victim-where-to-start' },
    ],
  },
  {
    domain: 'prostitution',
    slug: 'solicitation-investigation-to-trial',
    keyword: '성매매 알선 혐의 수사부터 재판까지 절차 총정리',
    questionKeyword: '성매매 알선 혐의로 수사를 받고 있는데 앞으로 어떻게 되나요?',
    ctaKeyword: '성매매 알선 수사 재판 절차',
    type: '절차타임라인형',
    perspective: 'accused',
    meta: {
      title: '성매매 알선 수사~재판 5단계 절차 정리 | 로앤가이드',
      description: '성매매 알선 혐의로 경찰 조사를 받게 됐는데 앞으로 어떤 절차가 진행되는지 불안하신가요? 수사부터 재판까지 5단계를 지금 확인하세요.',
    },
    intro: '업소를 운영하다가 성매매 알선 혐의로 경찰에서 출석 요구서를 받았습니다. 처음 겪는 일이라 어디서부터 어떻게 대응해야 할지 모르겠습니다. 경찰 조사, 검찰 송치, 재판까지 어떤 순서로 진행되는지, 각 단계에서 무엇을 준비해야 하는지 정리했습니다.',
    timelineSteps: ['경찰 조사', '검찰 송치·기소 여부 결정', '기소 후 공판 준비', '재판 진행', '판결 선고'],
    sections: [
      {
        title: '첫째, 경찰 조사에서 진술권을 정확히 행사하세요',
        content:
          '<p><strong style="color:#1e3a5f">첫 조사에서의 진술이 재판 결과에 큰 영향을 줍니다</strong></p>\n<p>경찰로부터 출석 요구를 받으면 <strong>피의자 신분</strong>으로 조사를 받게 됩니다. 헌법상 <strong>진술거부권</strong>이 보장되므로, 준비 없이 진술하는 것은 위험합니다. 조사 전 반드시 변호사와 상담하세요.</p>\n<p>성매매알선등행위의처벌에관한법률 제19조 제2항 제1호에 따라 성매매 알선은 <strong>7년 이하의 징역 또는 7,000만원 이하의 벌금</strong>에 처해집니다. 영업으로 한 경우에는 <strong>3년 이상의 유기징역</strong>까지 가능합니다. 혐의 내용과 증거 상황에 따라 대응 전략이 크게 달라집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 진술거부권 행사 가능 | 변호사 상담 후 조사 출석 | 첫 진술이 중요</blockquote>',
      },
      {
        title: '둘째, 검찰 송치 후 기소 여부가 결정됩니다',
        content:
          '<p><strong style="color:#1e3a5f">검찰이 기소·불기소·약식기소 중 하나를 결정합니다</strong></p>\n<p>경찰 수사가 끝나면 사건이 <strong>검찰로 송치</strong>됩니다. 검사는 증거와 혐의를 검토하여 ①<strong>정식 기소</strong>(공판 청구), ②<strong>약식 기소</strong>(벌금형 구형), ③<strong>불기소</strong>(혐의없음·기소유예) 중 하나를 결정합니다.</p>\n<p>초범이고 알선 규모가 작으며 반성하는 태도를 보이면 <strong>기소유예</strong>나 <strong>약식명령</strong>(벌금)으로 종결될 가능성이 있습니다. 검찰 조사 시에도 변호인 조력권이 보장됩니다.</p>\n<p style="margin-top:12px;padding:12px 16px;background:linear-gradient(135deg,#fff8e1,#fff3c4);border-left:4px solid #f9a825;border-radius:6px;font-weight:600;color:#1e3a5f">혐의를 받고 있다면, 단계별 대응 전략을 확인해보세요 → <a href="/diagnosis/prostitution" style="color:#1e3a5f;text-decoration:underline">무료 진단하기</a></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">결정 유형: 정식 기소 / 약식 기소(벌금) / 불기소(기소유예·혐의없음)</blockquote>',
      },
      {
        title: '셋째, 기소 후 공판 준비 절차가 시작됩니다',
        content:
          '<p><strong style="color:#1e3a5f">공소장을 꼼꼼히 확인하고 방어 전략을 수립해야 합니다</strong></p>\n<p>정식 기소되면 법원에서 <strong>공소장 부본</strong>을 송달받습니다. 공소장에는 혐의 내용, 적용 법조, 증거 목록이 기재됩니다. 공소장 내용을 면밀히 분석하여 <strong>무죄 주장</strong>을 할지, <strong>양형 다툼</strong>에 집중할지 전략을 정해야 합니다.</p>\n<p>공판 전 <strong>증거기록 열람·등사</strong>를 신청하여 검찰이 확보한 증거를 확인하세요. 수사기관의 녹음 파일, CCTV 영상, 계좌 추적 자료 등이 핵심 증거가 됩니다. 증거의 <strong>위법수집 여부</strong>를 검토하는 것도 중요한 방어 수단입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">할 일: 공소장 분석 + 증거 열람·등사 + 방어 전략 수립</blockquote>',
      },
      {
        title: '넷째, 재판에서 유리한 양형 자료를 제출하세요',
        content:
          '<p><strong style="color:#1e3a5f">양형 자료에 따라 실형과 집행유예가 갈립니다</strong></p>\n<p>재판 과정에서 혐의를 인정하는 경우, <strong>양형에 유리한 자료</strong>를 적극 제출해야 합니다. ①<strong>반성문</strong>, ②범죄수익 자진 반환, ③가족 탄원서, ④사회봉사 활동 증빙 등이 대표적입니다.</p>\n<p>성매매처벌법 제25조에 따라 범죄로 얻은 금품은 <strong>추징</strong> 대상입니다. 수익금을 자진 반환하거나 공탁하면 양형에서 유리하게 작용합니다. 초범이고 알선 기간이 짧으면 <strong>집행유예</strong> 선고 가능성이 높아집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">양형 자료: 반성문 + 수익금 반환 + 탄원서 + 봉사활동 | 추징금 자진 납부 권장</blockquote>',
      },
      {
        title: '다섯째, 판결 선고 후 항소 여부를 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">1심 판결에 불복하면 14일 이내 항소해야 합니다</strong></p>\n<p>판결 선고일에 법원이 형량을 선고합니다. 영업 목적 알선의 경우 <strong>실형 1~3년</strong>이 선고되는 사례가 많고, 단순 알선이나 초범은 <strong>벌금형 또는 집행유예</strong>가 나올 수 있습니다.</p>\n<p>판결에 불복하면 선고일로부터 <strong>14일 이내</strong>에 항소장을 제출해야 합니다. 항소심에서는 새로운 양형 자료 제출이 가능하며, 1심보다 유리한 결과가 나오는 경우도 있습니다. 벌금형이 선고되면 <strong>30일 이내</strong>에 납부해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 항소 14일 이내 | 벌금 납부 30일 이내 | 항소심 추가 양형 자료 제출 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '성매매 알선죄 추징금 산정 기준에 관한 판례',
        summary:
          '대법원 2024도8707 사건(대법원, 2024.09.27)에서 법원은 성매매 알선 행위를 한 주범이 공범인 직원에게 급여를 지급한 경우, 단순히 비용 지출의 일환으로 지급한 것이라면 직원에 대한 성매매처벌법상 추징은 허용될 수 없다고 판시했습니다.',
        takeaway:
          '추징금은 실질적으로 귀속된 이익금을 기준으로 개별 산정됩니다. 수익 구조와 비용 지출 내역을 정확히 정리해두면 추징금 감경에 유리합니다.',
      },
    ],
    faq: [
      {
        question: '성매매 알선 혐의로 구속될 수 있나요?',
        answer: '영업 목적 알선이거나 수익 규모가 크면 <strong>구속영장</strong>이 청구될 수 있습니다. 초범이고 주거가 일정하며 도주 우려가 없으면 불구속 수사가 일반적입니다.',
      },
      {
        question: '초범이면 벌금형으로 끝날 수 있나요?',
        answer: '초범이고 알선 규모가 작으면 <strong>벌금 300~1,000만원</strong> 수준의 약식명령이 나올 수 있습니다. 다만 영업 목적이면 가중처벌 대상이므로 변호사와 상담하세요.',
      },
      {
        question: '수사 중에 변호사를 선임해야 하나요?',
        answer: '경찰 조사 단계부터 <strong>변호사 선임을 강력히 권장</strong>합니다. 첫 진술이 이후 재판에 중대한 영향을 미치므로 전문가 조력이 중요합니다.',
      },
      {
        question: '성매매 알선으로 전과가 남으면 어떤 불이익이 있나요?',
        answer: '<strong>벌금형 이상</strong>의 형이 확정되면 전과 기록이 남습니다. 특정 직업(교사, 의료인, 아동 관련 종사자) 취업에 제한이 생길 수 있습니다.',
      },
      {
        question: '추징금이란 무엇인가요?',
        answer: '성매매 알선으로 얻은 <strong>범죄수익을 국가가 환수</strong>하는 것입니다. 실질적으로 귀속된 이익금이 기준이며, 자진 반환하면 양형에 유리합니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/prostitution',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '성매매 사건 진단', href: '/diagnosis/prostitution' },
      { label: '성매매 매수자 vs 매도자 처벌 비교', href: '/guide/prostitution/buyer-vs-seller-penalty-comparison' },
      { label: '성범죄 수사 절차 안내', href: '/guide/sex-crime/sexual-assault-procedure-trial' },
      { label: '형사사건 변호사 선임 가이드', href: '/guide/assault/assault-settlement-amount-guide' },
    ],
  },
  {
    domain: 'prostitution',
    slug: 'buyer-vs-seller-penalty-comparison',
    keyword: '성매매 매수자 vs 매도자 처벌 수위 비교',
    questionKeyword: '성매매에서 산 사람과 판 사람의 처벌이 다른가요?',
    ctaKeyword: '성매매 매수자 매도자 처벌 비교',
    type: '비교형',
    perspective: 'accused',
    meta: {
      title: '성매매 매수자 vs 매도자 처벌 3가지 차이 | 로앤가이드',
      description: '성매매 혐의로 입건됐는데 산 쪽과 판 쪽의 처벌이 어떻게 다른지 궁금하신가요? 법정형·실제 양형·전과 영향까지 3가지 차이를 지금 확인하세요.',
    },
    intro: '성매매 사건에 연루되어 경찰 조사를 받게 됐습니다. 매수한 쪽과 매도한 쪽의 처벌이 같은지 다른지, 자신의 상황에서 어느 정도의 처벌을 받게 될지 불안합니다. 성매매처벌법상 매수자와 매도자는 동일한 법조가 적용되지만 실제 양형에서는 차이가 있습니다.',
    sections: [
      {
        title: '첫째, 법정형은 매수자와 매도자가 동일합니다',
        content:
          '<p><strong style="color:#1e3a5f">성매매처벌법 제21조 제1항에 따라 양쪽 모두 처벌 대상입니다</strong></p>\n<p>성매매알선등행위의처벌에관한법률 제21조 제1항은 성매매를 한 사람을 <strong>1년 이하의 징역이나 300만원 이하의 벌금, 구류 또는 과료</strong>에 처한다고 규정합니다. 법문상 "성매매를 한 사람"이므로 매수자와 매도자를 <strong>구별하지 않습니다</strong>.</p>\n<p>다만 성매매에 유인·강요된 경우(제6조)에는 매도자가 <strong>처벌 면제</strong>될 수 있고, 보호처분 대상이 됩니다. 이것이 매수자와 매도자 처벌에서 가장 큰 차이를 만드는 조항입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">법정형: 양쪽 동일 (1년 이하 징역/300만원 이하 벌금) | 강요된 매도자는 처벌 면제 가능</blockquote>',
      },
      {
        title: '둘째, 실제 양형은 매수자가 더 무거운 경향이 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">매수자는 벌금형, 매도자는 보호처분이나 기소유예가 많습니다</strong></p>\n<p>실무에서 성매매 <strong>매수자</strong>에게는 초범 기준 <strong>벌금 100~200만원</strong>의 약식명령이 주로 내려집니다. 재범의 경우 벌금이 <strong>200~300만원</strong>으로 올라갑니다.</p>\n<p>반면 <strong>매도자</strong>는 자발적 성매매라도 생계형인 경우 <strong>기소유예</strong>나 <strong>보호처분</strong>(성매매방지교육 40시간 등)으로 종결되는 비율이 높습니다. 특히 성매매에 유인·강요된 경우에는 피해자로 보아 <strong>처벌 대상에서 제외</strong>됩니다.</p>\n<p style="margin-top:12px;padding:12px 16px;background:linear-gradient(135deg,#fff8e1,#fff3c4);border-left:4px solid #f9a825;border-radius:6px;font-weight:600;color:#1e3a5f">혐의를 받고 있다면, 내 상황에 맞는 대응 방법을 확인해보세요 → <a href="/diagnosis/prostitution" style="color:#1e3a5f;text-decoration:underline">무료 진단하기</a></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">매수자: 벌금 100~300만원 | 매도자: 기소유예·보호처분 비율 높음</blockquote>',
      },
      {
        title: '셋째, 알선자에 대한 처벌이 가장 무겁습니다',
        content:
          '<p><strong style="color:#1e3a5f">알선·매개·방조는 매수·매도와 별개로 가중처벌됩니다</strong></p>\n<p>성매매처벌법 제19조 제2항 제1호에 따라 <strong>영업으로 성매매를 알선</strong>한 사람은 <strong>7년 이하의 징역 또는 7,000만원 이하의 벌금</strong>에 처해집니다. 매수·매도(1년 이하)와 비교하면 <strong>7배 이상</strong> 무거운 형량입니다.</p>\n<p>업소 운영자, 앱/사이트 운영자, 중개자 등이 모두 알선 혐의에 해당합니다. 영업 목적이 아닌 단순 알선이라도 <strong>3년 이하의 징역 또는 3,000만원 이하의 벌금</strong>이 적용됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">알선: 영업 목적 7년/7,000만원 | 단순 알선 3년/3,000만원 | 매수·매도보다 훨씬 무거움</blockquote>',
      },
      {
        title: '넷째, 전과 기록과 신상정보 공개에 차이가 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">성매매 전과는 취업 제한과 신상정보 공개에 영향을 줄 수 있습니다</strong></p>\n<p>성매매 <strong>매수자</strong>가 벌금형을 받으면 전과 기록이 남지만, <strong>신상정보 공개·고지 대상</strong>은 아닙니다(성매매처벌법상 신상공개는 알선 대상). 다만 아동·청소년 대상 성매수의 경우 <strong>아동·청소년의 성보호에 관한 법률</strong>에 따라 신상정보가 공개될 수 있습니다.</p>\n<p>매도자가 <strong>보호처분</strong>을 받은 경우에는 전과 기록이 남지 않습니다. 기소유예도 마찬가지로 전과 기록이 남지 않으므로, 매도자의 실질적 불이익은 매수자보다 적은 경우가 많습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">매수자: 벌금형 시 전과 기록 | 매도자: 보호처분 시 전과 없음 | 아동 대상은 신상공개</blockquote>',
      },
      {
        title: '다섯째, 자신의 상황에 맞는 대응 전략이 다릅니다',
        content:
          '<p><strong style="color:#1e3a5f">매수자와 매도자는 방어 포인트가 완전히 다릅니다</strong></p>\n<p><strong>매수자</strong>의 경우, 성매매 사실 자체를 다투기 어려우면 <strong>존 스쿨(재범 방지 교육)</strong> 이수, 반성문, 사회봉사 등 양형 자료를 준비하여 벌금을 최소화하는 전략이 유효합니다.</p>\n<p><strong>매도자</strong>의 경우, 유인·강요에 의한 성매매였음을 입증하면 <strong>처벌 면제</strong>를 받을 수 있습니다. 업주의 강요, 채무 관계에 의한 종속 등을 증명하는 자료가 핵심입니다. 자발적 성매매라도 생계형임을 소명하면 보호처분으로 종결될 가능성이 높습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">매수자: 양형 감경 자료 준비 | 매도자: 강요·유인 입증 또는 보호처분 유도</blockquote>',
      },
    ],
    comparison: {
      title: '성매매 매수자 vs 매도자 vs 알선자 처벌 비교표',
      headers: ['매수자', '매도자', '알선자(영업)'],
      rows: [
        {
          label: '적용 법조',
          values: ['제21조 제1항', '제21조 제1항', '제19조 제2항'],
        },
        {
          label: '법정형',
          values: ['1년↓ / 300만원↓', '1년↓ / 300만원↓', '7년↓ / 7,000만원↓'],
        },
        {
          label: '실제 양형(초범)',
          values: ['벌금 100~200만원', '기소유예·보호처분', '징역 1~3년(집행유예 가능)'],
        },
        {
          label: '전과 기록',
          values: ['벌금형 시 있음', '보호처분 시 없음', '있음'],
        },
        {
          label: '추징금',
          values: ['없음', '없음', '범죄수익 전액'],
        },
        {
          label: '처벌 면제 가능',
          values: ['불가', '강요·유인 시 가능', '불가'],
        },
      ],
    },
    cases: [
      {
        title: '성매매 알선죄의 성립 요건에 관한 판례',
        summary:
          '대법원 2020도3626 사건(대법원, 2023.06.29)에서 법원은 성매매 알선은 당사자들의 의사를 연결하여 더 이상 알선자의 개입 없이도 성매매에 이를 수 있을 정도의 주선행위만 있으면 성립하며, 성매수자에게 실제 성매매 의사가 없었더라도 알선죄가 성립한다고 판시했습니다.',
        takeaway:
          '알선죄는 실제 성매매 성사 여부와 관계없이 주선행위만으로 성립합니다. 매수자·매도자와 알선자는 처벌 수위가 크게 다르니 자신의 법적 지위를 정확히 파악하세요.',
      },
    ],
    faq: [
      {
        question: '성매매 매수 초범이면 벌금이 얼마나 나오나요?',
        answer: '초범 기준 <strong>벌금 100~200만원</strong>의 약식명령이 일반적입니다. 재범은 200~300만원으로 올라가며, 3범 이상은 정식 재판에 회부될 수 있습니다.',
      },
      {
        question: '성매매 매도자도 처벌받나요?',
        answer: '자발적 성매매의 경우 <strong>처벌 대상</strong>입니다. 다만 유인·강요에 의한 경우 처벌이 면제되고, 자발적이라도 <strong>보호처분</strong>으로 종결되는 경우가 많습니다.',
      },
      {
        question: '성매매 전과가 있으면 취업에 불이익이 있나요?',
        answer: '일반 기업 취업에는 직접적 제한이 없지만, <strong>교사·아동 관련 종사자·의료인</strong> 등 특정 직종은 결격사유에 해당할 수 있습니다.',
      },
      {
        question: '성매매로 적발되면 가족에게 통보되나요?',
        answer: '수사기관이 가족에게 <strong>별도로 통보하지 않습니다</strong>. 다만 구속되거나 재판에 회부되면 가족이 알게 될 가능성은 있습니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/prostitution',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '성매매 사건 진단', href: '/diagnosis/prostitution' },
      { label: '성매매 알선 수사~재판 절차', href: '/guide/prostitution/solicitation-investigation-to-trial' },
      { label: '형사사건 변호사 선임 시기', href: '/guide/assault/assault-settlement-amount-guide' },
      { label: '약식명령 이의 신청 방법', href: '/guide/fraud/fraud-accused-settlement-penalty' },
    ],
  },
  {
    domain: 'real-estate-auction',
    slug: 'bidding-required-documents',
    keyword: '경매 입찰 시 필요한 서류 총정리 체크리스트',
    questionKeyword: '경매 입찰하려면 어떤 서류를 준비해야 하나요?',
    ctaKeyword: '경매 입찰 필요 서류 확인',
    type: '준비서류형',
    perspective: 'victim',
    meta: {
      title: '경매 입찰 필수 서류 7가지 체크리스트 | 로앤가이드',
      description: '부동산 경매 입찰에 참여하려는데 어떤 서류를 준비해야 하는지 막막하신가요? 입찰표부터 보증금 영수증까지 7가지 필수 서류를 지금 확인하세요.',
    },
    intro: '처음으로 부동산 경매에 입찰하려고 합니다. 법원 경매 공고를 보고 물건을 정했는데, 입찰 당일에 어떤 서류를 가져가야 하는지 정보가 제각각입니다. 서류 하나 빠뜨리면 입찰 자체가 무효가 될 수 있습니다. 개인·법인별 필수 서류를 빠짐없이 정리했습니다.',
    sections: [
      {
        title: '첫째, 입찰표를 작성하세요',
        content:
          '<p><strong style="color:#1e3a5f">입찰표는 법원 현장에서 교부받아 작성합니다</strong></p>\n<p>경매 입찰표는 해당 물건의 경매를 진행하는 <strong>집행법원</strong>에서 입찰 당일에 교부받습니다. 입찰표에는 ①사건번호, ②물건번호, ③<strong>입찰가격</strong>, ④입찰자 인적사항을 기재합니다.</p>\n<p>입찰가격은 <strong>최저매각가격 이상</strong>이어야 하며, 한 번 제출하면 <strong>취소나 변경이 불가</strong>합니다. 글씨를 틀리거나 수정하면 입찰이 무효가 될 수 있으니 정확히 기재하세요. 입찰표 봉투에 넣어 밀봉한 후 제출합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 제출 후 취소·변경 불가 | 수정 시 무효 가능 | 최저매각가격 이상 기재</blockquote>',
      },
      {
        title: '둘째, 매각보증금을 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">최저매각가격의 10%를 보증금으로 납부해야 합니다</strong></p>\n<p>민사집행법 제113조에 따라 입찰 시 <strong>최저매각가격의 10분의 1</strong>에 해당하는 금액을 보증금으로 제공해야 합니다. 보증 방법은 ①<strong>현금</strong>, ②<strong>은행 보증수표(자기앞수표)</strong>, ③법원이 인정하는 <strong>지급보증위탁계약 체결문서</strong> 중 선택합니다.</p>\n<p>가장 일반적인 방법은 <strong>은행 자기앞수표</strong>입니다. 보증금이 1,000만원을 초과하면 은행에서 자기앞수표를 발행받아야 합니다. 낙찰 실패 시 보증금은 <strong>즉시 반환</strong>되고, 낙찰 후 잔금에 포함됩니다.</p>\n<p style="margin-top:12px;padding:12px 16px;background:linear-gradient(135deg,#fff8e1,#fff3c4);border-left:4px solid #f9a825;border-radius:6px;font-weight:600;color:#1e3a5f">경매 입찰 전 권리분석이 필요하다면 확인해보세요 → <a href="/diagnosis/real-estate-auction" style="color:#1e3a5f;text-decoration:underline">무료 진단하기</a></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">보증금: 최저매각가의 10% | 방법: 현금·자기앞수표·지급보증서 | 미낙찰 시 즉시 반환</blockquote>',
      },
      {
        title: '셋째, 신분증과 도장을 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">본인 입찰 시 신분증, 대리 입찰 시 위임장이 추가로 필요합니다</strong></p>\n<p><strong>개인 입찰</strong> 시 필요한 서류는 ①<strong>주민등록증 또는 운전면허증</strong>(원본), ②<strong>도장</strong>(서명으로 대체 가능)입니다. 인감도장이 아닌 일반 도장도 가능합니다.</p>\n<p><strong>대리인이 입찰</strong>하는 경우에는 ①본인의 <strong>위임장</strong>(인감도장 날인), ②본인의 <strong>인감증명서</strong>(3개월 이내 발급), ③대리인 신분증, ④대리인 도장이 필요합니다. 위임장에는 대리 권한의 범위와 입찰 물건을 특정해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">본인: 신분증 + 도장 | 대리: 위임장 + 인감증명서 + 대리인 신분증 + 대리인 도장</blockquote>',
      },
      {
        title: '넷째, 법인 입찰 시 추가 서류를 챙기세요',
        content:
          '<p><strong style="color:#1e3a5f">법인은 등기사항증명서와 법인인감증명서가 필수입니다</strong></p>\n<p>법인 명의로 입찰하는 경우 ①<strong>법인 등기사항전부증명서</strong>(3개월 이내), ②<strong>법인 인감증명서</strong>(3개월 이내), ③<strong>법인 인감도장</strong>, ④대표이사 신분증이 필요합니다.</p>\n<p>대표이사가 아닌 직원이 입찰하는 경우에는 <strong>법인 위임장</strong>(법인 인감도장 날인)과 대리인 신분증이 추가로 필요합니다. 법인의 <strong>정관상 부동산 취득 관련 이사회 결의</strong>가 필요한 경우에는 이사회 의사록도 준비하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">법인: 등기사항증명서 + 법인인감증명서 + 법인인감 + 대표 신분증 | 대리 시 위임장 추가</blockquote>',
      },
      {
        title: '다섯째, 입찰 당일 체크리스트를 최종 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">서류 하나라도 빠지면 입찰이 무효가 됩니다</strong></p>\n<p>입찰 당일에는 법원 도착 후 ①<strong>입찰표 수령·작성</strong>, ②<strong>보증금 봉투 밀봉</strong>, ③<strong>입찰표 봉투 밀봉·제출</strong> 순서로 진행합니다. 입찰 마감 시각까지 제출해야 하며, 보통 <strong>오전 10시~11시</strong>에 마감합니다.</p>\n<p>입찰 전에 반드시 <strong>매각물건명세서, 현황조사보고서, 감정평가서</strong>를 확인하세요. 이 3가지 문서는 대법원 경매정보 사이트(www.courtauction.go.kr)에서 열람할 수 있으며, 물건의 <strong>권리관계, 점유현황, 시세</strong>를 파악하는 핵심 자료입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">최종 체크: 입찰표 + 보증금 + 신분증 + 도장 + (법인·대리 시 추가서류) | 입찰 마감 시각 엄수</blockquote>',
      },
    ],
    cases: [
      {
        title: '경매 배당 시 우선변제권 확정 시점에 관한 판례',
        summary:
          '대법원 2025다212005 사건(대법원, 2025.09.25)에서 법원은 근저당권이 설정된 부동산에 대해 제3자가 경매를 신청한 경우, 근저당권의 피담보채권은 매수인이 매각대금을 지급한 때에 확정된다고 판시했습니다.',
        takeaway:
          '경매 낙찰 후 매각대금 납부 시점이 권리관계 확정의 기준입니다. 입찰 전에 권리분석을 철저히 하고, 낙찰 후 잔금 납부까지의 절차를 미리 파악해두세요.',
      },
    ],
    faq: [
      {
        question: '경매 보증금은 현금으로만 내야 하나요?',
        answer: '<strong>현금, 자기앞수표, 지급보증위탁계약 체결문서</strong> 중 선택할 수 있습니다. 금액이 크면 은행에서 자기앞수표를 발행받는 것이 일반적입니다.',
      },
      {
        question: '입찰에 실패하면 보증금은 어떻게 되나요?',
        answer: '낙찰받지 못한 입찰자에게는 보증금이 <strong>즉시 반환</strong>됩니다. 입찰 당일 현장에서 돌려받습니다.',
      },
      {
        question: '공동 명의로 입찰할 수 있나요?',
        answer: '가능합니다. 공동 입찰 시 <strong>지분 비율을 입찰표에 기재</strong>해야 하며, 공동 입찰자 전원의 신분증과 도장이 필요합니다.',
      },
      {
        question: '입찰표를 잘못 기재하면 수정할 수 있나요?',
        answer: '입찰표 제출 후에는 <strong>수정·취소가 불가능</strong>합니다. 금액을 잘못 기재하면 무효 처리될 수 있으니 제출 전에 반드시 확인하세요.',
      },
      {
        question: '낙찰 후 잔금은 언제까지 내야 하나요?',
        answer: '법원이 정한 <strong>매각대금 납부기한(보통 낙찰일로부터 1개월)</strong> 이내에 잔금을 납부해야 합니다. 미납 시 보증금이 몰수됩니다.',
      },
      {
        question: '외국인도 경매 입찰에 참여할 수 있나요?',
        answer: '외국인도 입찰 가능합니다. <strong>외국인등록증</strong>과 도장을 지참하고, 부동산 취득 시 외국인 토지법에 따른 <strong>신고 의무</strong>가 있으니 사전에 확인하세요.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/real-estate-auction',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '부동산 경매 진단', href: '/diagnosis/real-estate-auction' },
      { label: '경매 권리분석 기초 가이드', href: '/guide/real-estate-auction/auction-rights-analysis-checklist' },
      { label: '경매 낙찰 후 명도 절차', href: '/guide/real-estate-auction/auction-bidding-procedure' },
      { label: '경매 배당 절차 안내', href: '/guide/real-estate-auction/auction-bidding-procedure' },
    ],
  },
];
