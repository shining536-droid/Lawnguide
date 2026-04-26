// AUTO-GENERATED — do not edit by hand.
// Source: scripts/generate-procedure-data.mjs (run from project root)
// 이유: /chat 동적 렌더에서 fs.readFileSync(kb/...) 사용 시 NFT 가 kb/ 전체를
// 함수 번들에 끌어옴 → Vercel 250MB 한도 초과. 빌드타임에 단일 TS 상수로 사전생성.
//
// 이 파일은 `node scripts/generate-procedure-data.mjs` 실행해 재생성.
// 톤 안전장치: 결과화면에서 표시할 때는 단정형 금지, "검토해볼 수 있습니다" 톤 유지.
// CLAUDE.md "결과화면 첫 문장·요약 톤" 섹션 참조.

export interface ProcedureStep {
  step: number;
  title: string;
  description?: string;
  deadline?: string;
}

export interface ProcedureFlow {
  id: string;
  name: string;
  applies_to?: string;
  steps: ProcedureStep[];
}

export interface RequiredDocCategory {
  category: string;
  items: string[];
}

export interface KeyDeadline {
  label: string;
  value: string;
  source?: string;
}

export interface DomainProcedure {
  domain: string;
  primary_flow: ProcedureFlow | null;
  all_flows: ProcedureFlow[];
  agency_names: string[];
  required_documents: RequiredDocCategory[];
  key_deadlines: KeyDeadline[];
  source_urls: string[];
  common_mistakes: string[];
  contacts: Record<string, string>;
}

export const PROCEDURE_DATA: Record<string, DomainProcedure> = {
  "jeonse": {
    "domain": "jeonse",
    "primary_flow": {
      "id": "hug-jeonse-procedure-main",
      "name": "전세보증금반환보증 이행청구 절차",
      "applies_to": "보증보험 가입 임차인이 보증금을 반환받지 못한 경우",
      "steps": [
        {
          "step": 1,
          "title": "보증사고 발생 및 통지",
          "description": "전세계약 종료·해지 후 1개월 내 보증금을 반환받지 못한 경우 또는 전세목적물 경매·공매로 보증채권자가 배당 후 보증금을 반환받지 못한 경우 보증사고로 인정. 영업점에 사고통지서 제출."
        },
        {
          "step": 2,
          "title": "이행청구서 제출",
          "description": "이행청구서·구비서류를 영업점 또는 모바일HUG 통해 제출. 청구 후 24시간 이내 모든 필요서류 제출 권장."
        },
        {
          "step": 3,
          "title": "보증조사 (이행심사)",
          "description": "HUG 가 청구의 적정성·요건 충족 여부 확인 (계약해지 정당성, 보증사고 인정 여부, 임차권등기 여부 등)."
        },
        {
          "step": 4,
          "title": "보증결정",
          "description": "심사 완료 시 보증이행 결정 통보 (불승인 시 사유 통보)."
        },
        {
          "step": 5,
          "title": "대위변제 (보증금 지급)",
          "description": "임차인 계좌로 보증금 지급. HUG 는 임대인을 상대로 구상권 행사."
        }
      ]
    },
    "all_flows": [
      {
        "id": "hug-jeonse-procedure-main",
        "name": "전세보증금반환보증 이행청구 절차",
        "applies_to": "보증보험 가입 임차인이 보증금을 반환받지 못한 경우",
        "steps": [
          {
            "step": 1,
            "title": "보증사고 발생 및 통지",
            "description": "전세계약 종료·해지 후 1개월 내 보증금을 반환받지 못한 경우 또는 전세목적물 경매·공매로 보증채권자가 배당 후 보증금을 반환받지 못한 경우 보증사고로 인정. 영업점에 사고통지서 제출."
          },
          {
            "step": 2,
            "title": "이행청구서 제출",
            "description": "이행청구서·구비서류를 영업점 또는 모바일HUG 통해 제출. 청구 후 24시간 이내 모든 필요서류 제출 권장."
          },
          {
            "step": 3,
            "title": "보증조사 (이행심사)",
            "description": "HUG 가 청구의 적정성·요건 충족 여부 확인 (계약해지 정당성, 보증사고 인정 여부, 임차권등기 여부 등)."
          },
          {
            "step": 4,
            "title": "보증결정",
            "description": "심사 완료 시 보증이행 결정 통보 (불승인 시 사유 통보)."
          },
          {
            "step": 5,
            "title": "대위변제 (보증금 지급)",
            "description": "임차인 계좌로 보증금 지급. HUG 는 임대인을 상대로 구상권 행사."
          }
        ]
      },
      {
        "id": "hug-jeonse-precondition",
        "name": "이행청구 전 임차인이 해야 할 단계 (계약종료/해지 시)",
        "steps": [
          {
            "step": 1,
            "title": "계약해지 의사 서면 통보",
            "description": "임대인에게 계약해지·갱신거절 의사를 서면(내용증명) 으로 통지. 카카오톡·문자·전화녹음으로도 증거 확보."
          },
          {
            "step": 2,
            "title": "보증금 반환 요청 및 거절 확인",
            "description": "임대인이 보증금 반환을 거절하거나 잠적 시 그 사실을 객관적으로 입증할 자료(통화녹음·메시지·내용증명 회신) 보존."
          },
          {
            "step": 3,
            "title": "임차권등기명령 신청",
            "description": "법원에 임차권등기명령 신청 (주임법 제3조의3). 임대인 잠적·주소불명 시 주소보정명령 절차 거침. 등기 완료 후 이사 가능 (대항력·우선변제권 유지)."
          },
          {
            "step": 4,
            "title": "HUG 보증이행 청구",
            "description": "임차권등기명령 등기 완료 + 계약종료 1개월 경과 후 보증이행 청구 가능. 거절일로부터 2년 내 청구 필수."
          }
        ]
      },
      {
        "id": "hug-special-jeonse-tenant-type",
        "name": "특례반환보증(임차인형) 신청 절차",
        "applies_to": "임대인이 보증가입 못한 경우 임차인이 직접 가입 (특례)",
        "steps": [
          {
            "step": 1,
            "title": "신청 자격 확인",
            "description": "임차인 본인 + 임차주택 + 보증금액 요건 충족 여부 자가 점검."
          },
          {
            "step": 2,
            "title": "보증신청",
            "description": "온라인(모바일HUG) 또는 영업점 방문 신청."
          },
          {
            "step": 3,
            "title": "보증심사",
            "description": "제출서류 검토·물건 심사."
          },
          {
            "step": 4,
            "title": "보증발급",
            "description": "심사 승인 시 보증서 발급, 임차인이 보증료 납부."
          }
        ]
      },
      {
        "id": "jeonsesagi-victim-decision",
        "name": "전세사기피해자 결정신청 절차 (특별법)",
        "applies_to": "전세사기피해자 지원 및 주거안정에 관한 특별법 요건 충족 임차인",
        "steps": [
          {
            "step": 1,
            "title": "요건 자가점검",
            "description": "다음 4가지 요건 모두 충족해야 함: ①주택인도+전입신고+확정일자(또는 전세권등기), ②임차보증금 5억원 이하(지역·사정에 따라 7억까지), ③다수 임차인 보증금 미반환(임대인 도산·경매·집행권원 보유), ④임대인 보증금 미반환 의사 합리적 의심(기망·재산은닉·다주택 취득 등)."
          },
          {
            "step": 2,
            "title": "신청 (전세사기피해자 지원관리시스템)",
            "description": "jeonse.kgeop.go.kr 에 온라인 신청 또는 관할 자치구청 방문. 피해 내용 + 입증서류 업로드."
          },
          {
            "step": 3,
            "title": "관할 시·도지사 사실조사 + 국토부 위원회 심의",
            "description": "사실조사 → 국토부 전세사기피해지원위원회 심의 → 결정."
          },
          {
            "step": 4,
            "title": "결정 통보",
            "description": "전세사기피해자 결정서 송달. 결정 내용에 따라 1~3유형 분류."
          },
          {
            "step": 5,
            "title": "이의신청",
            "description": "결정 통지일로부터 30일 이내 이의신청 가능. 국토부가 이의신청 받은 날로부터 20일 이내 결정.",
            "deadline": "30일 이의신청, 20일 결정"
          }
        ]
      },
      {
        "id": "jutaek-rental-mediation",
        "name": "주택임대차분쟁조정위원회 분쟁조정 절차",
        "applies_to": "전·월세 보증금 반환, 월세 인상, 수리 책임, 계약 갱신, 원상복구 등 분쟁",
        "steps": [
          {
            "step": 1,
            "title": "조정신청",
            "description": "한국부동산원·LH 임대차분쟁조정위원회 또는 주택임대차분쟁조정위원회에 신청. 온라인·우편·팩스·방문.",
            "deadline": "분쟁 발생 후 언제든"
          },
          {
            "step": 2,
            "title": "피신청인 통지·자료 수집",
            "description": "상대방에게 조정 참여 통지 + 양측 자료·사실관계 조사."
          },
          {
            "step": 3,
            "title": "조정기일 통지·조정 개최",
            "description": "변호사·공인중개사 등 전문가 위원이 양측 주장 청취 → 합의 시도."
          },
          {
            "step": 4,
            "title": "조정안 제시·수락 결정",
            "description": "조정안 제시 → 당사자 양측 수락 시 조정조서 작성."
          },
          {
            "step": 5,
            "title": "조정 성립",
            "description": "조정조서는 강제집행권원과 동일 효력. 양측 어느 쪽이라도 거부 시 불성립.",
            "deadline": "신청일로부터 60일 이내 종료 (30일 연장 가능)"
          }
        ]
      },
      {
        "id": "klac-payment-order",
        "name": "지급명령 신청 절차 (소액·금전 청구 우선 수단)",
        "applies_to": "금전·대체물·유가증권 일정 수량 지급 청구",
        "steps": [
          {
            "step": 1,
            "title": "신청서 작성",
            "description": "당사자(채권자·채무자) + 법정대리인 + 청구취지(청구금액·법정이자·소송비용) + 청구원인 기재."
          },
          {
            "step": 2,
            "title": "관할법원 제출",
            "description": "채무자 주소지 관할 지방법원 또는 근무지·거소지·의무이행지·어음수표 지급지·사무소 영업소 소재지·불법행위지 관할법원."
          },
          {
            "step": 3,
            "title": "법원 심사·결정",
            "description": "변론 없이 신속 심사. 특별 사정 없으면 지급명령 결정.",
            "deadline": "통상 신청 후 1~2개월"
          },
          {
            "step": 4,
            "title": "채무자 송달",
            "description": "채무자에게 결정문 송달. 송달일로부터 2주 이내 이의신청 가능."
          },
          {
            "step": 5,
            "title": "확정 또는 소송 전환",
            "description": "이의 없으면 확정 (확정판결 동일 효력). 이의 시 통상 소송으로 자동 이행."
          }
        ]
      },
      {
        "id": "klac-deposit-return-suit",
        "name": "전세보증금 반환 소송 절차",
        "applies_to": "임대차 종료 후 보증금 미반환 임차인",
        "steps": [
          {
            "step": 1,
            "title": "내용증명 발송",
            "description": "임대인에게 보증금 반환 청구 내용증명. 시효 중단 + 협상 시도."
          },
          {
            "step": 2,
            "title": "임차권등기명령 신청 (이사 가야 할 때)",
            "description": "관할 지방법원에 신청 → 등기 완료 후에야 이사해도 대항력·우선변제권 유지.",
            "deadline": "이사 전 필수, 등기 완료 통상 1~2개월"
          },
          {
            "step": 3,
            "title": "지급명령 또는 보증금반환소송 제기",
            "description": "다툼 적으면 지급명령, 계약·금액 다툼 있으면 본안소송. 인지·송달료 납부."
          },
          {
            "step": 4,
            "title": "강제집행",
            "description": "확정 후 임대인 부동산·예금·급여 등에 강제집행. 부동산 경매 → 보증금 회수."
          }
        ]
      },
      {
        "id": "klac-imgwondoungi",
        "name": "임차권등기명령 신청 절차",
        "applies_to": "임대차 만료 후 보증금 미반환 임차인 (이사 가야 하는 경우)",
        "steps": [
          {
            "step": 1,
            "title": "신청서 작성·날인",
            "description": "임차권등기명령신청서 작성 + 기명날인 또는 서명. 첨부서류 준비."
          },
          {
            "step": 2,
            "title": "관할법원 제출",
            "description": "임차주택 소재지 관할 지방법원·지원 또는 시·군 법원."
          },
          {
            "step": 3,
            "title": "법원 결정",
            "description": "신청 요건 충족 시 결정. 결정문 등기 촉탁.",
            "deadline": "통상 신청 후 2~6주"
          },
          {
            "step": 4,
            "title": "등기 완료 후 이사",
            "description": "등기부 확인 후 이사 → 대항력·우선변제권 유지."
          }
        ]
      },
      {
        "id": "klac-rehab-bankruptcy-support",
        "name": "개인회생·파산 신청 무료 지원 절차",
        "applies_to": "기준 중위소득 125% 이하·기초생활수급자·국가유공자 등 (구조 대상)",
        "steps": [
          {
            "step": 1,
            "title": "법률상담 (사이버·화상·방문)",
            "description": "klac.or.kr 사이버상담 또는 132 전화 또는 사무소 방문(예약 필수). 자격·요건 검토."
          },
          {
            "step": 2,
            "title": "구조대상 심사",
            "description": "소득·재산·부양가족 기준 충족 시 무료 법률구조 결정."
          },
          {
            "step": 3,
            "title": "신청서 자동작성",
            "description": "resu.klac.or.kr 종합지원센터에서 개인회생·파산 신청서 자동작성 프로그램 사용."
          },
          {
            "step": 4,
            "title": "지정변호사 대리 신청",
            "description": "공단 지정변호사가 법원 신청 + 절차 진행 (변호사 비용 면제)."
          },
          {
            "step": 5,
            "title": "변제계획인가/면책 결정까지 동행",
            "description": "회생: 변제계획안 → 인가 → 변제 진행. 파산: 면책 결정."
          }
        ]
      }
    ],
    "agency_names": [
      "HUG 주택도시보증공사",
      "전세사기피해지원센터(jeonse.kgeop.go.kr) + 주택임대차분쟁조정위원회",
      "대한법률구조공단 (KLAC) — 혼자하는소송 법률지원센터 + 개인회생·파산 종합지원센터"
    ],
    "required_documents": [
      {
        "category": "임차인 본인",
        "items": [
          "신분증 사본",
          "주민등록등본 또는 초본 (주소변경 기록 포함, 발급 1개월 이내)",
          "인감증명서 (발급 3개월 이내)",
          "임차인 계좌 통장사본"
        ]
      },
      {
        "category": "임대차 계약",
        "items": [
          "전세계약서 원본 또는 사본",
          "전세보증금 반환 채무자(임대인) 확인 서류",
          "임대인 주소·연락처 확인 서류"
        ]
      },
      {
        "category": "보증사고 입증",
        "items": [
          "계약해지 통보 내용증명 사본",
          "보증금 반환 거절 입증자료 (카톡·문자·통화녹음 녹취록)",
          "임차권등기명령 결정문 또는 등기부등본 (등기 완료본)"
        ]
      },
      {
        "category": "추가 (해당 시)",
        "items": [
          "경매·공매 배당표 (경매 진행 시)",
          "사망진단서·상속관계증명서 (임대인 사망 시)",
          "외국 거주 증빙 (임대인 해외거주 시)",
          "법원 판결문·확정증명서 (소송 진행 시)"
        ]
      },
      {
        "category": "전세사기피해자 결정신청",
        "items": [
          "피해자 결정신청서 (jeonse.kgeop.go.kr 양식)",
          "임대차계약서 사본",
          "주민등록등본·초본 (확정일자 확인)",
          "건물등기부등본",
          "보증금 반환 거절 입증자료 (내용증명·문자·녹취)",
          "임대인 다주택·재산은닉 등 의심 입증자료",
          "경매·공매 진행 증빙 (있는 경우)"
        ]
      },
      {
        "category": "주택임대차 분쟁조정",
        "items": [
          "분쟁조정 신청서",
          "신분증",
          "주민등록초본",
          "건물등기부등본",
          "임대차계약서",
          "건축물대장",
          "기타 입증자료 (사진·영수증·견적서 등)"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "보증이행 청구기한",
        "value": "보증금 반환 거절일로부터 2년 이내",
        "source": "khug.or.kr 계약종료(해지)안내"
      },
      {
        "label": "보증결정 소요",
        "value": "이행청구 후 약 2주 이내",
        "source": "khug.or.kr 이행절차"
      },
      {
        "label": "계약갱신·해지 통보",
        "value": "계약 만료 6개월~2개월 전 (주임법 제6조의2)"
      },
      {
        "label": "보증사고 인정 기준",
        "value": "계약 종료·해지 후 1개월 내 보증금 미반환 OR 경매·공매 배당 후 미회수"
      },
      {
        "label": "피해자 결정 이의신청",
        "value": "30일 이내"
      },
      {
        "label": "이의신청 결정",
        "value": "20일 이내"
      },
      {
        "label": "분쟁조정 처리",
        "value": "60일 (30일 연장 가능)"
      },
      {
        "label": "지급명령 결정",
        "value": "신청 후 1~2개월"
      },
      {
        "label": "지급명령 이의신청",
        "value": "송달일로부터 2주"
      },
      {
        "label": "임차권등기명령 결정",
        "value": "신청 후 2~6주"
      },
      {
        "label": "보증금반환 소멸시효",
        "value": "10년 (민법 제162조)"
      },
      {
        "label": "법률구조 신청 자격",
        "value": "기준 중위소득 125% 이하 등"
      }
    ],
    "source_urls": [
      "https://www.khug.or.kr/hug/web/ge/er/geer001200.jsp",
      "https://www.khug.or.kr/hug/web/ge/er/geer004001.jsp",
      "https://www.khug.or.kr/hug/web/ge/er/geer001100.jsp",
      "https://www.khug.or.kr/hug/web/cs/el/csel000021.jsp",
      "https://www.khug.or.kr/hug/web/ig/dr/igdr000008.jsp",
      "https://jeonse.kgeop.go.kr/",
      "https://jeonse.kgeop.go.kr/victimRcpt/aplyProcessGuidance.do",
      "https://jeonse.kgeop.go.kr/infoYard/victimSpGuidance.do",
      "https://www.khug.or.kr/jeonse/web/s01/s010002.jsp",
      "https://adrhome.reb.or.kr/adrhome/reb/LO010100/03/10301000000002022101316",
      "https://www.hldcc.or.kr/",
      "https://www.klac.or.kr/",
      "https://support.klac.or.kr/",
      "https://support.klac.or.kr/front/contents/02/003.do",
      "https://www.klac.or.kr/legalinfo/legalFrm.do",
      "https://resu.klac.or.kr/",
      "https://resu.klac.or.kr/main.jsp"
    ],
    "common_mistakes": [
      "임차권등기명령 없이 이사 → 대항력·우선변제권 상실",
      "내용증명 없이 구두로만 해지 통보 → 거절 입증 어려움",
      "2년 청구기한 도과 → 보증이행 거절",
      "주소변경 후 등본 미갱신 → 서류 보완 요청으로 지연",
      "확정일자 없이 피해자 결정 신청 → 요건 미충족",
      "30일 이의신청 시한 도과 → 결정 확정",
      "분쟁조정 신청 = 강제 합의 오해 → 양측 수락해야 효력",
      "다수 임차인 요건 입증 자료 누락 → 결정 불가",
      "법률지원·금융지원 동시 신청 가능한데 한쪽만 신청 → 손해",
      "임차권등기 안 하고 이사 → 대항력 상실, 후순위 채권자에 밀림",
      "지급명령에 이의신청 가능성 놓치고 단순 가압류만 → 시간·비용 증가",
      "공단 지정변호사 무료 지원 자격 미확인 → 일반 변호사 비용 발생",
      "재산 다투는 사건을 지급명령으로 신청 → 자동 본안소송 전환되면서 시간 낭비",
      "내용증명 없이 바로 소송 → 시효 중단 효과 놓칠 수 있음"
    ],
    "contacts": {
      "phone": "1566-9009",
      "online": "https://onestop.khug.or.kr",
      "대표전화": "132 (국번없이)",
      "사이버상담": "klac.or.kr"
    }
  },
  "jeonse-fraud": {
    "domain": "jeonse-fraud",
    "primary_flow": {
      "id": "hug-jeonse-procedure-main",
      "name": "전세보증금반환보증 이행청구 절차",
      "applies_to": "보증보험 가입 임차인이 보증금을 반환받지 못한 경우",
      "steps": [
        {
          "step": 1,
          "title": "보증사고 발생 및 통지",
          "description": "전세계약 종료·해지 후 1개월 내 보증금을 반환받지 못한 경우 또는 전세목적물 경매·공매로 보증채권자가 배당 후 보증금을 반환받지 못한 경우 보증사고로 인정. 영업점에 사고통지서 제출."
        },
        {
          "step": 2,
          "title": "이행청구서 제출",
          "description": "이행청구서·구비서류를 영업점 또는 모바일HUG 통해 제출. 청구 후 24시간 이내 모든 필요서류 제출 권장."
        },
        {
          "step": 3,
          "title": "보증조사 (이행심사)",
          "description": "HUG 가 청구의 적정성·요건 충족 여부 확인 (계약해지 정당성, 보증사고 인정 여부, 임차권등기 여부 등)."
        },
        {
          "step": 4,
          "title": "보증결정",
          "description": "심사 완료 시 보증이행 결정 통보 (불승인 시 사유 통보)."
        },
        {
          "step": 5,
          "title": "대위변제 (보증금 지급)",
          "description": "임차인 계좌로 보증금 지급. HUG 는 임대인을 상대로 구상권 행사."
        }
      ]
    },
    "all_flows": [
      {
        "id": "hug-jeonse-procedure-main",
        "name": "전세보증금반환보증 이행청구 절차",
        "applies_to": "보증보험 가입 임차인이 보증금을 반환받지 못한 경우",
        "steps": [
          {
            "step": 1,
            "title": "보증사고 발생 및 통지",
            "description": "전세계약 종료·해지 후 1개월 내 보증금을 반환받지 못한 경우 또는 전세목적물 경매·공매로 보증채권자가 배당 후 보증금을 반환받지 못한 경우 보증사고로 인정. 영업점에 사고통지서 제출."
          },
          {
            "step": 2,
            "title": "이행청구서 제출",
            "description": "이행청구서·구비서류를 영업점 또는 모바일HUG 통해 제출. 청구 후 24시간 이내 모든 필요서류 제출 권장."
          },
          {
            "step": 3,
            "title": "보증조사 (이행심사)",
            "description": "HUG 가 청구의 적정성·요건 충족 여부 확인 (계약해지 정당성, 보증사고 인정 여부, 임차권등기 여부 등)."
          },
          {
            "step": 4,
            "title": "보증결정",
            "description": "심사 완료 시 보증이행 결정 통보 (불승인 시 사유 통보)."
          },
          {
            "step": 5,
            "title": "대위변제 (보증금 지급)",
            "description": "임차인 계좌로 보증금 지급. HUG 는 임대인을 상대로 구상권 행사."
          }
        ]
      },
      {
        "id": "hug-jeonse-precondition",
        "name": "이행청구 전 임차인이 해야 할 단계 (계약종료/해지 시)",
        "steps": [
          {
            "step": 1,
            "title": "계약해지 의사 서면 통보",
            "description": "임대인에게 계약해지·갱신거절 의사를 서면(내용증명) 으로 통지. 카카오톡·문자·전화녹음으로도 증거 확보."
          },
          {
            "step": 2,
            "title": "보증금 반환 요청 및 거절 확인",
            "description": "임대인이 보증금 반환을 거절하거나 잠적 시 그 사실을 객관적으로 입증할 자료(통화녹음·메시지·내용증명 회신) 보존."
          },
          {
            "step": 3,
            "title": "임차권등기명령 신청",
            "description": "법원에 임차권등기명령 신청 (주임법 제3조의3). 임대인 잠적·주소불명 시 주소보정명령 절차 거침. 등기 완료 후 이사 가능 (대항력·우선변제권 유지)."
          },
          {
            "step": 4,
            "title": "HUG 보증이행 청구",
            "description": "임차권등기명령 등기 완료 + 계약종료 1개월 경과 후 보증이행 청구 가능. 거절일로부터 2년 내 청구 필수."
          }
        ]
      },
      {
        "id": "hug-special-jeonse-tenant-type",
        "name": "특례반환보증(임차인형) 신청 절차",
        "applies_to": "임대인이 보증가입 못한 경우 임차인이 직접 가입 (특례)",
        "steps": [
          {
            "step": 1,
            "title": "신청 자격 확인",
            "description": "임차인 본인 + 임차주택 + 보증금액 요건 충족 여부 자가 점검."
          },
          {
            "step": 2,
            "title": "보증신청",
            "description": "온라인(모바일HUG) 또는 영업점 방문 신청."
          },
          {
            "step": 3,
            "title": "보증심사",
            "description": "제출서류 검토·물건 심사."
          },
          {
            "step": 4,
            "title": "보증발급",
            "description": "심사 승인 시 보증서 발급, 임차인이 보증료 납부."
          }
        ]
      },
      {
        "id": "jeonsesagi-victim-decision",
        "name": "전세사기피해자 결정신청 절차 (특별법)",
        "applies_to": "전세사기피해자 지원 및 주거안정에 관한 특별법 요건 충족 임차인",
        "steps": [
          {
            "step": 1,
            "title": "요건 자가점검",
            "description": "다음 4가지 요건 모두 충족해야 함: ①주택인도+전입신고+확정일자(또는 전세권등기), ②임차보증금 5억원 이하(지역·사정에 따라 7억까지), ③다수 임차인 보증금 미반환(임대인 도산·경매·집행권원 보유), ④임대인 보증금 미반환 의사 합리적 의심(기망·재산은닉·다주택 취득 등)."
          },
          {
            "step": 2,
            "title": "신청 (전세사기피해자 지원관리시스템)",
            "description": "jeonse.kgeop.go.kr 에 온라인 신청 또는 관할 자치구청 방문. 피해 내용 + 입증서류 업로드."
          },
          {
            "step": 3,
            "title": "관할 시·도지사 사실조사 + 국토부 위원회 심의",
            "description": "사실조사 → 국토부 전세사기피해지원위원회 심의 → 결정."
          },
          {
            "step": 4,
            "title": "결정 통보",
            "description": "전세사기피해자 결정서 송달. 결정 내용에 따라 1~3유형 분류."
          },
          {
            "step": 5,
            "title": "이의신청",
            "description": "결정 통지일로부터 30일 이내 이의신청 가능. 국토부가 이의신청 받은 날로부터 20일 이내 결정.",
            "deadline": "30일 이의신청, 20일 결정"
          }
        ]
      },
      {
        "id": "jutaek-rental-mediation",
        "name": "주택임대차분쟁조정위원회 분쟁조정 절차",
        "applies_to": "전·월세 보증금 반환, 월세 인상, 수리 책임, 계약 갱신, 원상복구 등 분쟁",
        "steps": [
          {
            "step": 1,
            "title": "조정신청",
            "description": "한국부동산원·LH 임대차분쟁조정위원회 또는 주택임대차분쟁조정위원회에 신청. 온라인·우편·팩스·방문.",
            "deadline": "분쟁 발생 후 언제든"
          },
          {
            "step": 2,
            "title": "피신청인 통지·자료 수집",
            "description": "상대방에게 조정 참여 통지 + 양측 자료·사실관계 조사."
          },
          {
            "step": 3,
            "title": "조정기일 통지·조정 개최",
            "description": "변호사·공인중개사 등 전문가 위원이 양측 주장 청취 → 합의 시도."
          },
          {
            "step": 4,
            "title": "조정안 제시·수락 결정",
            "description": "조정안 제시 → 당사자 양측 수락 시 조정조서 작성."
          },
          {
            "step": 5,
            "title": "조정 성립",
            "description": "조정조서는 강제집행권원과 동일 효력. 양측 어느 쪽이라도 거부 시 불성립.",
            "deadline": "신청일로부터 60일 이내 종료 (30일 연장 가능)"
          }
        ]
      },
      {
        "id": "klac-payment-order",
        "name": "지급명령 신청 절차 (소액·금전 청구 우선 수단)",
        "applies_to": "금전·대체물·유가증권 일정 수량 지급 청구",
        "steps": [
          {
            "step": 1,
            "title": "신청서 작성",
            "description": "당사자(채권자·채무자) + 법정대리인 + 청구취지(청구금액·법정이자·소송비용) + 청구원인 기재."
          },
          {
            "step": 2,
            "title": "관할법원 제출",
            "description": "채무자 주소지 관할 지방법원 또는 근무지·거소지·의무이행지·어음수표 지급지·사무소 영업소 소재지·불법행위지 관할법원."
          },
          {
            "step": 3,
            "title": "법원 심사·결정",
            "description": "변론 없이 신속 심사. 특별 사정 없으면 지급명령 결정.",
            "deadline": "통상 신청 후 1~2개월"
          },
          {
            "step": 4,
            "title": "채무자 송달",
            "description": "채무자에게 결정문 송달. 송달일로부터 2주 이내 이의신청 가능."
          },
          {
            "step": 5,
            "title": "확정 또는 소송 전환",
            "description": "이의 없으면 확정 (확정판결 동일 효력). 이의 시 통상 소송으로 자동 이행."
          }
        ]
      },
      {
        "id": "klac-deposit-return-suit",
        "name": "전세보증금 반환 소송 절차",
        "applies_to": "임대차 종료 후 보증금 미반환 임차인",
        "steps": [
          {
            "step": 1,
            "title": "내용증명 발송",
            "description": "임대인에게 보증금 반환 청구 내용증명. 시효 중단 + 협상 시도."
          },
          {
            "step": 2,
            "title": "임차권등기명령 신청 (이사 가야 할 때)",
            "description": "관할 지방법원에 신청 → 등기 완료 후에야 이사해도 대항력·우선변제권 유지.",
            "deadline": "이사 전 필수, 등기 완료 통상 1~2개월"
          },
          {
            "step": 3,
            "title": "지급명령 또는 보증금반환소송 제기",
            "description": "다툼 적으면 지급명령, 계약·금액 다툼 있으면 본안소송. 인지·송달료 납부."
          },
          {
            "step": 4,
            "title": "강제집행",
            "description": "확정 후 임대인 부동산·예금·급여 등에 강제집행. 부동산 경매 → 보증금 회수."
          }
        ]
      },
      {
        "id": "klac-imgwondoungi",
        "name": "임차권등기명령 신청 절차",
        "applies_to": "임대차 만료 후 보증금 미반환 임차인 (이사 가야 하는 경우)",
        "steps": [
          {
            "step": 1,
            "title": "신청서 작성·날인",
            "description": "임차권등기명령신청서 작성 + 기명날인 또는 서명. 첨부서류 준비."
          },
          {
            "step": 2,
            "title": "관할법원 제출",
            "description": "임차주택 소재지 관할 지방법원·지원 또는 시·군 법원."
          },
          {
            "step": 3,
            "title": "법원 결정",
            "description": "신청 요건 충족 시 결정. 결정문 등기 촉탁.",
            "deadline": "통상 신청 후 2~6주"
          },
          {
            "step": 4,
            "title": "등기 완료 후 이사",
            "description": "등기부 확인 후 이사 → 대항력·우선변제권 유지."
          }
        ]
      },
      {
        "id": "klac-rehab-bankruptcy-support",
        "name": "개인회생·파산 신청 무료 지원 절차",
        "applies_to": "기준 중위소득 125% 이하·기초생활수급자·국가유공자 등 (구조 대상)",
        "steps": [
          {
            "step": 1,
            "title": "법률상담 (사이버·화상·방문)",
            "description": "klac.or.kr 사이버상담 또는 132 전화 또는 사무소 방문(예약 필수). 자격·요건 검토."
          },
          {
            "step": 2,
            "title": "구조대상 심사",
            "description": "소득·재산·부양가족 기준 충족 시 무료 법률구조 결정."
          },
          {
            "step": 3,
            "title": "신청서 자동작성",
            "description": "resu.klac.or.kr 종합지원센터에서 개인회생·파산 신청서 자동작성 프로그램 사용."
          },
          {
            "step": 4,
            "title": "지정변호사 대리 신청",
            "description": "공단 지정변호사가 법원 신청 + 절차 진행 (변호사 비용 면제)."
          },
          {
            "step": 5,
            "title": "변제계획인가/면책 결정까지 동행",
            "description": "회생: 변제계획안 → 인가 → 변제 진행. 파산: 면책 결정."
          }
        ]
      }
    ],
    "agency_names": [
      "HUG 주택도시보증공사",
      "전세사기피해지원센터(jeonse.kgeop.go.kr) + 주택임대차분쟁조정위원회",
      "대한법률구조공단 (KLAC) — 혼자하는소송 법률지원센터 + 개인회생·파산 종합지원센터"
    ],
    "required_documents": [
      {
        "category": "임차인 본인",
        "items": [
          "신분증 사본",
          "주민등록등본 또는 초본 (주소변경 기록 포함, 발급 1개월 이내)",
          "인감증명서 (발급 3개월 이내)",
          "임차인 계좌 통장사본"
        ]
      },
      {
        "category": "임대차 계약",
        "items": [
          "전세계약서 원본 또는 사본",
          "전세보증금 반환 채무자(임대인) 확인 서류",
          "임대인 주소·연락처 확인 서류"
        ]
      },
      {
        "category": "보증사고 입증",
        "items": [
          "계약해지 통보 내용증명 사본",
          "보증금 반환 거절 입증자료 (카톡·문자·통화녹음 녹취록)",
          "임차권등기명령 결정문 또는 등기부등본 (등기 완료본)"
        ]
      },
      {
        "category": "추가 (해당 시)",
        "items": [
          "경매·공매 배당표 (경매 진행 시)",
          "사망진단서·상속관계증명서 (임대인 사망 시)",
          "외국 거주 증빙 (임대인 해외거주 시)",
          "법원 판결문·확정증명서 (소송 진행 시)"
        ]
      },
      {
        "category": "전세사기피해자 결정신청",
        "items": [
          "피해자 결정신청서 (jeonse.kgeop.go.kr 양식)",
          "임대차계약서 사본",
          "주민등록등본·초본 (확정일자 확인)",
          "건물등기부등본",
          "보증금 반환 거절 입증자료 (내용증명·문자·녹취)",
          "임대인 다주택·재산은닉 등 의심 입증자료",
          "경매·공매 진행 증빙 (있는 경우)"
        ]
      },
      {
        "category": "주택임대차 분쟁조정",
        "items": [
          "분쟁조정 신청서",
          "신분증",
          "주민등록초본",
          "건물등기부등본",
          "임대차계약서",
          "건축물대장",
          "기타 입증자료 (사진·영수증·견적서 등)"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "보증이행 청구기한",
        "value": "보증금 반환 거절일로부터 2년 이내",
        "source": "khug.or.kr 계약종료(해지)안내"
      },
      {
        "label": "보증결정 소요",
        "value": "이행청구 후 약 2주 이내",
        "source": "khug.or.kr 이행절차"
      },
      {
        "label": "계약갱신·해지 통보",
        "value": "계약 만료 6개월~2개월 전 (주임법 제6조의2)"
      },
      {
        "label": "보증사고 인정 기준",
        "value": "계약 종료·해지 후 1개월 내 보증금 미반환 OR 경매·공매 배당 후 미회수"
      },
      {
        "label": "피해자 결정 이의신청",
        "value": "30일 이내"
      },
      {
        "label": "이의신청 결정",
        "value": "20일 이내"
      },
      {
        "label": "분쟁조정 처리",
        "value": "60일 (30일 연장 가능)"
      },
      {
        "label": "지급명령 결정",
        "value": "신청 후 1~2개월"
      },
      {
        "label": "지급명령 이의신청",
        "value": "송달일로부터 2주"
      },
      {
        "label": "임차권등기명령 결정",
        "value": "신청 후 2~6주"
      },
      {
        "label": "보증금반환 소멸시효",
        "value": "10년 (민법 제162조)"
      },
      {
        "label": "법률구조 신청 자격",
        "value": "기준 중위소득 125% 이하 등"
      }
    ],
    "source_urls": [
      "https://www.khug.or.kr/hug/web/ge/er/geer001200.jsp",
      "https://www.khug.or.kr/hug/web/ge/er/geer004001.jsp",
      "https://www.khug.or.kr/hug/web/ge/er/geer001100.jsp",
      "https://www.khug.or.kr/hug/web/cs/el/csel000021.jsp",
      "https://www.khug.or.kr/hug/web/ig/dr/igdr000008.jsp",
      "https://jeonse.kgeop.go.kr/",
      "https://jeonse.kgeop.go.kr/victimRcpt/aplyProcessGuidance.do",
      "https://jeonse.kgeop.go.kr/infoYard/victimSpGuidance.do",
      "https://www.khug.or.kr/jeonse/web/s01/s010002.jsp",
      "https://adrhome.reb.or.kr/adrhome/reb/LO010100/03/10301000000002022101316",
      "https://www.hldcc.or.kr/",
      "https://www.klac.or.kr/",
      "https://support.klac.or.kr/",
      "https://support.klac.or.kr/front/contents/02/003.do",
      "https://www.klac.or.kr/legalinfo/legalFrm.do",
      "https://resu.klac.or.kr/",
      "https://resu.klac.or.kr/main.jsp"
    ],
    "common_mistakes": [
      "임차권등기명령 없이 이사 → 대항력·우선변제권 상실",
      "내용증명 없이 구두로만 해지 통보 → 거절 입증 어려움",
      "2년 청구기한 도과 → 보증이행 거절",
      "주소변경 후 등본 미갱신 → 서류 보완 요청으로 지연",
      "확정일자 없이 피해자 결정 신청 → 요건 미충족",
      "30일 이의신청 시한 도과 → 결정 확정",
      "분쟁조정 신청 = 강제 합의 오해 → 양측 수락해야 효력",
      "다수 임차인 요건 입증 자료 누락 → 결정 불가",
      "법률지원·금융지원 동시 신청 가능한데 한쪽만 신청 → 손해",
      "임차권등기 안 하고 이사 → 대항력 상실, 후순위 채권자에 밀림",
      "지급명령에 이의신청 가능성 놓치고 단순 가압류만 → 시간·비용 증가",
      "공단 지정변호사 무료 지원 자격 미확인 → 일반 변호사 비용 발생",
      "재산 다투는 사건을 지급명령으로 신청 → 자동 본안소송 전환되면서 시간 낭비",
      "내용증명 없이 바로 소송 → 시효 중단 효과 놓칠 수 있음"
    ],
    "contacts": {
      "phone": "1566-9009",
      "online": "https://onestop.khug.or.kr",
      "대표전화": "132 (국번없이)",
      "사이버상담": "klac.or.kr"
    }
  },
  "child-support": {
    "domain": "child-support",
    "primary_flow": {
      "id": "csa-overall-flow",
      "name": "양육비 이행확보 지원 전체 흐름",
      "applies_to": "이혼·비혼 한부모 (양육비 채권자)",
      "steps": [
        {
          "step": 1,
          "title": "지원신청",
          "description": "양육비이행관리원에 온라인·우편·방문 신청. 신청서 + 구비서류 제출."
        },
        {
          "step": 2,
          "title": "상담·합의지원",
          "description": "비양육친 연락처 확인 후 합의 시도. 합의 성립 시 협의서·공정증서 작성."
        },
        {
          "step": 3,
          "title": "법률지원 (집행권원 확보)",
          "description": "합의 불성립 시 자녀인지청구·양육비청구소송·친권자/양육자 지정 청구 등 소송 지원. 판결문·심판문·조정조서·공정증서 등 집행권원 확보."
        },
        {
          "step": 4,
          "title": "추심지원 (강제집행)",
          "description": "집행권원 확보 후 이행명령·직접지급명령·담보제공명령 신청, 재산조사 및 압류·경매 진행."
        },
        {
          "step": 5,
          "title": "제재조치",
          "description": "지속 불이행 시 운전면허정지·출국금지·명단공개·채무불이행자명부 등재 등 행정·민사 제재."
        }
      ]
    },
    "all_flows": [
      {
        "id": "csa-overall-flow",
        "name": "양육비 이행확보 지원 전체 흐름",
        "applies_to": "이혼·비혼 한부모 (양육비 채권자)",
        "steps": [
          {
            "step": 1,
            "title": "지원신청",
            "description": "양육비이행관리원에 온라인·우편·방문 신청. 신청서 + 구비서류 제출."
          },
          {
            "step": 2,
            "title": "상담·합의지원",
            "description": "비양육친 연락처 확인 후 합의 시도. 합의 성립 시 협의서·공정증서 작성."
          },
          {
            "step": 3,
            "title": "법률지원 (집행권원 확보)",
            "description": "합의 불성립 시 자녀인지청구·양육비청구소송·친권자/양육자 지정 청구 등 소송 지원. 판결문·심판문·조정조서·공정증서 등 집행권원 확보."
          },
          {
            "step": 4,
            "title": "추심지원 (강제집행)",
            "description": "집행권원 확보 후 이행명령·직접지급명령·담보제공명령 신청, 재산조사 및 압류·경매 진행."
          },
          {
            "step": 5,
            "title": "제재조치",
            "description": "지속 불이행 시 운전면허정지·출국금지·명단공개·채무불이행자명부 등재 등 행정·민사 제재."
          }
        ]
      },
      {
        "id": "csa-investigation",
        "name": "조사정보 지원 절차 (주소·근무지·소득·재산 조사)",
        "steps": [
          {
            "step": 1,
            "title": "기본조사",
            "description": "관련 기관에 주소·근무지 협조 요청, 채무자 면담으로 소득·재산 청취."
          },
          {
            "step": 2,
            "title": "기관협조 또는 법원 조회신청",
            "description": "채무자 동의 시 기관에 정보 직접 확인. 거부 시 가사소송법상 재산명시명령·재산조회 신청."
          },
          {
            "step": 3,
            "title": "추심 및 소송",
            "description": "확보된 정보로 양육비 지급청구·강제집행 진행."
          },
          {
            "step": 4,
            "title": "현장기동반 출장",
            "description": "고액·상습 미지급, 감치 미집행, 사회적 파장 사건은 직접 채무자 방문하여 이행 촉구."
          }
        ]
      },
      {
        "id": "csa-prepay-program",
        "name": "양육비 선지급 제도",
        "applies_to": "정기 양육비 지급권 있으나 미이행으로 받지 못하는 한부모 가족 (소득 중위 150% 이하)",
        "steps": [
          {
            "step": 1,
            "title": "선지급 신청",
            "description": "온라인 또는 우편 신청 (신청서 + 소득증빙)."
          },
          {
            "step": 2,
            "title": "심사",
            "description": "소득기준·양육비 채권 확정 여부 확인."
          },
          {
            "step": 3,
            "title": "선지급",
            "description": "국가가 정기 양육비 지급."
          },
          {
            "step": 4,
            "title": "구상권 행사",
            "description": "비양육친에게 국세체납처분으로 회수."
          }
        ]
      },
      {
        "id": "consensual-divorce",
        "name": "협의이혼 절차",
        "applies_to": "이혼 합의된 부부",
        "steps": [
          {
            "step": 1,
            "title": "협의이혼의사확인 신청",
            "description": "관할 가정법원·지원 또는 시·군 법원에 부부 공동 출석 신청. 신청서 + 증인 2명 서명·날인 + 가족·혼인관계증명서 + (자녀 있으면) 양육·친권자 협의서 1+사본2통."
          },
          {
            "step": 2,
            "title": "이혼 안내",
            "description": "법원이 이혼절차 안내."
          },
          {
            "step": 3,
            "title": "이혼숙려기간",
            "description": "안내일로부터 양육 자녀 있으면 3개월, 없으면 1개월. 폭력 등 급박 사정 시 단축·면제 가능.",
            "deadline": "양육자녀 있음 3개월 / 없음 1개월"
          },
          {
            "step": 4,
            "title": "이혼의사 확인",
            "description": "지정일에 부부 공동 출석. 판사가 이혼의사·양육·친권 확인 → 확인서 + 양육비부담조서 작성."
          },
          {
            "step": 5,
            "title": "행정관청 이혼신고",
            "description": "확인서 받은 날로부터 3개월 내 시·군·구청에 이혼신고. 미신고 시 협의이혼 무효.",
            "deadline": "확인서 발급 후 3개월"
          }
        ]
      },
      {
        "id": "litigation-divorce",
        "name": "재판상 이혼 절차 (민법 제840조 사유)",
        "applies_to": "협의 불성립 + 6가지 법정 이혼사유 충족",
        "steps": [
          {
            "step": 1,
            "title": "조정신청 (조정전치주의)",
            "description": "관할 가정법원에 조정 신청. 가사조사관 사실조사 + 조정위원 합의 시도.",
            "deadline": "조정 통상 2~4개월"
          },
          {
            "step": 2,
            "title": "조정 성립 또는 소송 이행",
            "description": "조정 성립 시 종결. 조정 불성립 시 자동 본안소송으로 이행."
          },
          {
            "step": 3,
            "title": "본안 변론·증거조사",
            "description": "변론기일 + 증인신문 + 가사조사. 통상 6개월~1년."
          },
          {
            "step": 4,
            "title": "판결 선고",
            "description": "이혼 + 위자료 + 재산분할 + 친권·양육권·양육비 일괄 판단."
          },
          {
            "step": 5,
            "title": "확정 후 행정신고",
            "description": "판결 확정일로부터 1개월 내 이혼신고."
          }
        ]
      }
    ],
    "agency_names": [
      "양육비이행관리원 (Korea Child Support Agency, CSA)",
      "법원 가정법원 (전자민원센터) + 찾기쉬운 생활법령정보"
    ],
    "required_documents": [
      {
        "category": "신청자(양육친) 본인",
        "items": [
          "양육비 이행확보 지원 신청서 (.hwp)",
          "신분증 사본",
          "주민등록등본",
          "혼인관계증명서·기본증명서",
          "가족관계증명서"
        ]
      },
      {
        "category": "양육비 채권 입증",
        "items": [
          "양육비 협의서·공정증서",
          "양육비 심판·판결문 (확정증명서 포함)",
          "조정조서·화해조서",
          "양육비 미지급 내역 (계좌이체 내역·문자·카톡 등)"
        ]
      },
      {
        "category": "비양육친 정보 (있는 경우)",
        "items": [
          "비양육친 인적사항·주소",
          "근무지·연락처",
          "재산 추정 자료"
        ]
      },
      {
        "category": "협의이혼",
        "items": [
          "협의이혼의사확인신청서 (증인 2명 서명·날인)",
          "부부 각자 가족관계증명서 1통",
          "부부 각자 혼인관계증명서 1통",
          "(자녀 있는 경우) 양육·친권자 협의서 1통 + 사본 2통",
          "또는 가정법원 심판정본 + 확정증명서 각 3통",
          "주민등록표등본 1통"
        ]
      },
      {
        "category": "재판상 이혼",
        "items": [
          "이혼청구 소장 (위자료·재산분할·친권·양육 청구 포함)",
          "혼인관계증명서·가족관계증명서·기본증명서",
          "주민등록등본",
          "이혼사유 입증자료 (외도 증거·진단서·녹취·문자 등)",
          "재산 입증자료 (부동산·예금·주식·차량 등기·잔고증명)"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "선지급 신청 소득기준",
        "value": "기준 중위소득 150% 이하"
      },
      {
        "label": "감치명령 요건",
        "value": "이행명령 후 정당한 사유 없이 3기 이상 미이행"
      },
      {
        "label": "출국금지 채무 기준",
        "value": "감치결정 당시 3,000만원 이상 OR 3기 이상 미이행"
      },
      {
        "label": "명단공개 기간",
        "value": "3년"
      },
      {
        "label": "운전면허정지 기간",
        "value": "100일"
      },
      {
        "label": "이혼숙려기간 (양육자녀 있음)",
        "value": "안내 후 3개월"
      },
      {
        "label": "이혼숙려기간 (자녀 없음)",
        "value": "안내 후 1개월"
      },
      {
        "label": "협의이혼 확인서 신고기한",
        "value": "발급 후 3개월"
      },
      {
        "label": "재판상 이혼 판결 후 신고",
        "value": "확정 후 1개월"
      },
      {
        "label": "위자료 청구 시효",
        "value": "이혼일로부터 3년"
      },
      {
        "label": "재산분할 청구 시효",
        "value": "이혼일로부터 2년 (제척기간)"
      }
    ],
    "source_urls": [
      "https://www.childsupport.or.kr/lay1/S1T8C9/contents.do",
      "https://www.childsupport.or.kr/lay1/S1T15C16/contents.do",
      "https://www.childsupport.or.kr/lay1/S1T15C17/contents.do",
      "https://www.childsupport.or.kr/lay1/S1T15C120/contents.do",
      "https://www.childsupport.or.kr/lay1/S1T15C121/contents.do",
      "https://www.childsupport.or.kr/lay1/S1T134C136/contents.do",
      "https://help.scourt.go.kr/nm/min_3/min_3_2/min_3_2_1/index.html",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=233&ccfNo=2&cciNo=2&cnpClsNo=1",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=233&ccfNo=3&cciNo=2&cnpClsNo=1"
    ],
    "common_mistakes": [
      "공정증서 없이 합의만 하고 미이행 시 강제집행 불가",
      "이행명령 신청 전에 감치 시도 → 단계 누락으로 기각",
      "비양육친 주소 모른다고 포기 → 양육비이행관리원 통해 주소조회 가능",
      "재산조회 없이 압류 시도 → 압류 대상 특정 안 됨",
      "확인서 받고 3개월 내 신고 안 하면 협의이혼 무효 — 다시 신청 필요",
      "양육·친권 협의서 없이 신청 → 이혼 자체 성립 불가",
      "재산분할 청구 시효(이혼 후 2년) 도과 → 청구 불가",
      "조정전치주의 모르고 본소부터 → 조정 회부로 시간 지연",
      "외도 증거를 위법 수집(불법녹음·해킹) → 증거능력 배척"
    ],
    "contacts": {}
  },
  "fraud": {
    "domain": "fraud",
    "primary_flow": {
      "id": "ecrm-report-flow",
      "name": "사이버범죄 신고 처리 4단계",
      "steps": [
        {
          "step": 1,
          "title": "온라인 접수",
          "description": "ecrm.police.go.kr 사이버범죄 신고시스템 접속, 신고서 작성. 직접 피해자만 가능 (대리인은 경찰서 방문 또는 국민신문고)."
        },
        {
          "step": 2,
          "title": "경찰서 방문",
          "description": "신고 후 관할 경찰서 또는 사이버수사팀 방문. 신분증·증빙서류 지참."
        },
        {
          "step": 3,
          "title": "조사 (경찰서)",
          "description": "진술조서 작성, 추가 증거 제출, 필요 시 보충조사."
        },
        {
          "step": 4,
          "title": "종결",
          "description": "수사 결과 통보 (송치 또는 불송치). 합의·기소 여부에 따라 후속 절차."
        }
      ]
    },
    "all_flows": [
      {
        "id": "ecrm-report-flow",
        "name": "사이버범죄 신고 처리 4단계",
        "steps": [
          {
            "step": 1,
            "title": "온라인 접수",
            "description": "ecrm.police.go.kr 사이버범죄 신고시스템 접속, 신고서 작성. 직접 피해자만 가능 (대리인은 경찰서 방문 또는 국민신문고)."
          },
          {
            "step": 2,
            "title": "경찰서 방문",
            "description": "신고 후 관할 경찰서 또는 사이버수사팀 방문. 신분증·증빙서류 지참."
          },
          {
            "step": 3,
            "title": "조사 (경찰서)",
            "description": "진술조서 작성, 추가 증거 제출, 필요 시 보충조사."
          },
          {
            "step": 4,
            "title": "종결",
            "description": "수사 결과 통보 (송치 또는 불송치). 합의·기소 여부에 따라 후속 절차."
          }
        ]
      },
      {
        "id": "voice-phishing-recovery",
        "name": "보이스피싱(피싱) 피해 환급 절차",
        "steps": [
          {
            "step": 1,
            "title": "지급정지 신청 (가장 시급)",
            "description": "사기 계좌 관리은행 또는 112 통합신고에 즉시 전화하여 지급정지 신청. 잔액이 남아있어야 환급 가능.",
            "deadline": "송금 직후 즉시 (분 단위)"
          },
          {
            "step": 2,
            "title": "경찰서 신고",
            "description": "관할 경찰서 또는 사이버수사팀 방문하여 피해 신고."
          },
          {
            "step": 3,
            "title": "사건사고사실확인원 발급",
            "description": "경찰로부터 확인원 발급받음 (지급정지 → 채권소멸 → 환급의 핵심 서류)."
          },
          {
            "step": 4,
            "title": "은행 피해구제신청",
            "description": "사기 계좌 관리은행 방문, 피해구제신청서 작성 + 확인원 제출."
          },
          {
            "step": 5,
            "title": "채권소멸공고 후 환급",
            "description": "금감원이 2개월 채권소멸공고 → 종결 후 잔액 한도 내에서 환급. 피해자 다수 시 안분.",
            "deadline": "신청 후 약 2~3개월"
          }
        ]
      },
      {
        "id": "smishing-recovery",
        "name": "스미싱(소액결제 부정청구) 피해 절차",
        "steps": [
          {
            "step": 1,
            "title": "경찰 사이버수사팀 신고",
            "description": "관할 사이버수사팀 방문, 피해 신고."
          },
          {
            "step": 2,
            "title": "사건사고사실확인원 발급",
            "description": "환불 절차의 필수서류."
          },
          {
            "step": 3,
            "title": "통신사 고객센터 방문",
            "description": "SKT/KT/LG U+ 고객센터, 통신과금 정정요구 신청 + 확인원 첨부."
          },
          {
            "step": 4,
            "title": "환불 처리",
            "description": "통상 14일 이내 결제 취소 또는 환불.",
            "deadline": "신청 후 14일 이내"
          }
        ]
      },
      {
        "id": "memory-hacking-recovery",
        "name": "메모리해킹 피해 절차",
        "steps": [
          {
            "step": 1,
            "title": "경찰 신고 + 확인원 발급",
            "description": "일반 피싱과 동일."
          },
          {
            "step": 2,
            "title": "금융회사 피해구제신청",
            "description": "해당 금융사에 피해구제신청서 제출."
          },
          {
            "step": 3,
            "title": "금융회사 보상 판단",
            "description": "범죄자 인출 여부와 무관하게 '지급대상' 인정 시 보상."
          }
        ]
      },
      {
        "id": "fss-financial-dispute",
        "name": "금융분쟁조정 신청 절차 (대출·보험·증권·카드 분쟁)",
        "applies_to": "금융회사와 분쟁(불완전판매·부당대출·보험금 미지급 등)",
        "steps": [
          {
            "step": 1,
            "title": "금융민원 신청",
            "description": "금융감독원 홈페이지(fss.or.kr) 민원·신고 → 민원신청. 인터넷·방문·우편."
          },
          {
            "step": 2,
            "title": "자율조정(합의권고)",
            "description": "금감원장이 양측 합의 권고. 합의 시 종결.",
            "deadline": "신청일로부터 30일 이내"
          },
          {
            "step": 3,
            "title": "분쟁조정위원회 회부",
            "description": "30일 내 합의 불성립 시 분쟁조정위원회에 자동 회부."
          },
          {
            "step": 4,
            "title": "조정안 작성",
            "description": "조정위원회 심의 → 조정안 작성 → 양측 통보.",
            "deadline": "회부일로부터 60일 이내"
          },
          {
            "step": 5,
            "title": "조정 성립 또는 소송 전환",
            "description": "양측 수락 시 재판상 화해와 동일 효력. 거부 시 민사 소송 가능."
          }
        ]
      },
      {
        "id": "fss-voice-phishing-recovery",
        "name": "보이스피싱 피해금 환급 절차 (전기통신금융사기)",
        "applies_to": "보이스피싱·메신저피싱 등으로 송금한 피해자",
        "steps": [
          {
            "step": 1,
            "title": "지급정지 신청 (즉시)",
            "description": "사기 계좌 관리은행 또는 112(통합신고) 또는 본인 거래은행에 즉시 전화. 잔액 보존이 환급의 핵심.",
            "deadline": "송금 직후 분 단위 즉시"
          },
          {
            "step": 2,
            "title": "경찰서 신고 + 사건사고사실확인원 발급",
            "description": "관할 경찰서·사이버수사팀 방문. 사건사고사실확인원 발급."
          },
          {
            "step": 3,
            "title": "은행 피해구제 신청",
            "description": "사기계좌 관리은행 방문 → 피해구제신청서 + 확인원 + 신분증 제출.",
            "deadline": "사고사실확인원 발급 후 가능한 빨리"
          },
          {
            "step": 4,
            "title": "채권소멸 공고",
            "description": "금감원이 명의인 채권소멸 공고 → 공고일로부터 2개월 경과 시 채권 소멸.",
            "deadline": "공고일 + 2개월"
          },
          {
            "step": 5,
            "title": "환급금 결정 + 지급",
            "description": "금감원이 채권소멸일로부터 14일 내 환급금 결정 → 결정 후 2주 내 지급.",
            "deadline": "채권소멸 후 약 1개월"
          }
        ]
      },
      {
        "id": "kca-damage-relief",
        "name": "한국소비자원 피해구제 신청 절차",
        "applies_to": "사업자와 분쟁(환불·교환·A/S·온라인쇼핑·중고거래·서비스)",
        "steps": [
          {
            "step": 1,
            "title": "사전 상담",
            "description": "1372 소비자상담센터 또는 consumer.go.kr 에 먼저 상담. 자율 해결 시도."
          },
          {
            "step": 2,
            "title": "피해구제 신청",
            "description": "방문·우편·팩스·인터넷(kca.go.kr)으로 신청서 + 증빙 제출."
          },
          {
            "step": 3,
            "title": "사실조사·합의권고",
            "description": "한국소비자원이 양측 의견 청취 + 사실조사 + 합의권고.",
            "deadline": "30일 이내 처리 (의료·보험·농어업·시험검사 사건은 90일까지 연장)"
          },
          {
            "step": 4,
            "title": "분쟁조정 회부",
            "description": "30일(또는 연장된 90일) 내 합의 불성립 시 소비자분쟁조정위원회 회부."
          },
          {
            "step": 5,
            "title": "조정안 작성 및 결정",
            "description": "분쟁조정위가 조정안 작성. 양측 수락 시 재판상 화해 효력.",
            "deadline": "조정 신청일로부터 30일 이내"
          }
        ]
      }
    ],
    "agency_names": [
      "경찰청 사이버범죄 신고시스템(ECRM) + KISA 보호나라",
      "금융감독원 (FSS) 분쟁조정 + 보이스피싱 피해구제",
      "한국소비자원(KCA) + 소비자24"
    ],
    "required_documents": [
      {
        "category": "금융분쟁조정",
        "items": [
          "민원신청서 (금감원 양식)",
          "신분증 사본",
          "분쟁 대상 계약서 (대출·보험·증권 등)",
          "거래내역·통지서·약관",
          "분쟁 경위 요약·증빙",
          "위임장 (대리 신청 시)"
        ]
      },
      {
        "category": "보이스피싱 피해구제",
        "items": [
          "피해구제신청서 (은행 비치 양식)",
          "사건사고사실확인원 (경찰서 발급)",
          "신분증",
          "통장 사본",
          "이체내역 출력"
        ]
      },
      {
        "category": "피해구제 신청",
        "items": [
          "피해구제신청서 (kca.go.kr 양식)",
          "신분증",
          "거래·계약·구매 영수증",
          "피해 입증자료 (사진·녹취·이메일·계좌이체내역)",
          "사업자 인적사항·연락처"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "금융분쟁 자율조정",
        "value": "신청 후 30일"
      },
      {
        "label": "분쟁조정위 조정안",
        "value": "회부 후 60일"
      },
      {
        "label": "보이스피싱 채권소멸",
        "value": "공고일로부터 2개월"
      },
      {
        "label": "환급금 결정",
        "value": "채권소멸 후 14일"
      },
      {
        "label": "환급금 지급",
        "value": "결정 후 2주"
      },
      {
        "label": "조정 강제효력",
        "value": "2,000만원 이하 (금소법 42조)"
      },
      {
        "label": "피해구제 처리",
        "value": "30일 (의료·보험 등 60~90일까지 연장)"
      },
      {
        "label": "분쟁조정 결정",
        "value": "신청일로부터 30일"
      },
      {
        "label": "조정안 수락 기한",
        "value": "통지 후 15일 내"
      }
    ],
    "source_urls": [
      "https://ecrm.police.go.kr/minwon/main",
      "https://ecrm.police.go.kr/minwon/crs/quick/cyber1",
      "https://ecrm.police.go.kr/minwon/crs/quick/process",
      "https://ecrm.police.go.kr/minwon/crs/quick/vichelp",
      "https://www.boho.or.kr/kr/bbs/list.do?menuNo=205020&bbsId=B0000133",
      "https://www.fss.or.kr/",
      "https://law.fss.or.kr/fss/main/contents.do?menuNo=201179",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?csmSeq=1771&ccfNo=4&cciNo=1&cnpClsNo=1",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=1592",
      "https://www.kca.go.kr/odr/",
      "https://www.kca.go.kr/odr/pg/ma/pgProcssInfo2.do",
      "https://www.kca.go.kr/odr/link/pg/pr/osPgStpSobiGuidW.do",
      "https://www.consumer.go.kr/"
    ],
    "common_mistakes": [
      "송금 직후 지급정지 안 하고 경찰서부터 가서 환급 기회 놓침",
      "스미싱 결제내역 확인 없이 통신사부터 방문 → 확인원 없으니 처리 거절",
      "민사 분쟁(환불·배송)을 사이버범죄로 신고 → 비접수 처리",
      "대리인이 ECRM 직접 신고 시도 → 본인만 가능",
      "송금 후 경찰서부터 가서 지급정지 시간 놓침 → 잔액 사라짐",
      "민사소송 vs 분쟁조정 동시 진행 → 분쟁조정 중에는 소제기 제한",
      "코인 송금·해외송금 후 분쟁조정 시도 → 적용 대상 아님",
      "2개월 채권소멸 공고 모르고 환급 즉시 기대 → 통상 1.5~2개월 소요",
      "위임장 없이 가족이 대리신청 → 반려",
      "사전 상담 없이 바로 피해구제 신청 → 반려 가능",
      "사업자 인적사항 모름 → 사실조사 지연",
      "온라인쇼핑은 청약철회권(전자상거래법 7일) 별도 활용 가능한데 모름",
      "조정안 수락 15일 시한 도과 → 거부로 간주"
    ],
    "contacts": {
      "사이버범죄 민원": "182 (유료)",
      "보이스피싱 통합신고": "112",
      "해킹/스팸/개인정보침해": "118 (KISA)",
      "법률상담": "132 (대한법률구조공단)",
      "금융감독원 콜센터": "1332 (국번없이)",
      "한국소비자원 상담": "1372 (국번없이)",
      "소비자24": "consumer.go.kr"
    }
  },
  "stalking": {
    "domain": "stalking",
    "primary_flow": {
      "id": "ecrm-report-flow",
      "name": "사이버범죄 신고 처리 4단계",
      "steps": [
        {
          "step": 1,
          "title": "온라인 접수",
          "description": "ecrm.police.go.kr 사이버범죄 신고시스템 접속, 신고서 작성. 직접 피해자만 가능 (대리인은 경찰서 방문 또는 국민신문고)."
        },
        {
          "step": 2,
          "title": "경찰서 방문",
          "description": "신고 후 관할 경찰서 또는 사이버수사팀 방문. 신분증·증빙서류 지참."
        },
        {
          "step": 3,
          "title": "조사 (경찰서)",
          "description": "진술조서 작성, 추가 증거 제출, 필요 시 보충조사."
        },
        {
          "step": 4,
          "title": "종결",
          "description": "수사 결과 통보 (송치 또는 불송치). 합의·기소 여부에 따라 후속 절차."
        }
      ]
    },
    "all_flows": [
      {
        "id": "ecrm-report-flow",
        "name": "사이버범죄 신고 처리 4단계",
        "steps": [
          {
            "step": 1,
            "title": "온라인 접수",
            "description": "ecrm.police.go.kr 사이버범죄 신고시스템 접속, 신고서 작성. 직접 피해자만 가능 (대리인은 경찰서 방문 또는 국민신문고)."
          },
          {
            "step": 2,
            "title": "경찰서 방문",
            "description": "신고 후 관할 경찰서 또는 사이버수사팀 방문. 신분증·증빙서류 지참."
          },
          {
            "step": 3,
            "title": "조사 (경찰서)",
            "description": "진술조서 작성, 추가 증거 제출, 필요 시 보충조사."
          },
          {
            "step": 4,
            "title": "종결",
            "description": "수사 결과 통보 (송치 또는 불송치). 합의·기소 여부에 따라 후속 절차."
          }
        ]
      },
      {
        "id": "voice-phishing-recovery",
        "name": "보이스피싱(피싱) 피해 환급 절차",
        "steps": [
          {
            "step": 1,
            "title": "지급정지 신청 (가장 시급)",
            "description": "사기 계좌 관리은행 또는 112 통합신고에 즉시 전화하여 지급정지 신청. 잔액이 남아있어야 환급 가능.",
            "deadline": "송금 직후 즉시 (분 단위)"
          },
          {
            "step": 2,
            "title": "경찰서 신고",
            "description": "관할 경찰서 또는 사이버수사팀 방문하여 피해 신고."
          },
          {
            "step": 3,
            "title": "사건사고사실확인원 발급",
            "description": "경찰로부터 확인원 발급받음 (지급정지 → 채권소멸 → 환급의 핵심 서류)."
          },
          {
            "step": 4,
            "title": "은행 피해구제신청",
            "description": "사기 계좌 관리은행 방문, 피해구제신청서 작성 + 확인원 제출."
          },
          {
            "step": 5,
            "title": "채권소멸공고 후 환급",
            "description": "금감원이 2개월 채권소멸공고 → 종결 후 잔액 한도 내에서 환급. 피해자 다수 시 안분.",
            "deadline": "신청 후 약 2~3개월"
          }
        ]
      },
      {
        "id": "smishing-recovery",
        "name": "스미싱(소액결제 부정청구) 피해 절차",
        "steps": [
          {
            "step": 1,
            "title": "경찰 사이버수사팀 신고",
            "description": "관할 사이버수사팀 방문, 피해 신고."
          },
          {
            "step": 2,
            "title": "사건사고사실확인원 발급",
            "description": "환불 절차의 필수서류."
          },
          {
            "step": 3,
            "title": "통신사 고객센터 방문",
            "description": "SKT/KT/LG U+ 고객센터, 통신과금 정정요구 신청 + 확인원 첨부."
          },
          {
            "step": 4,
            "title": "환불 처리",
            "description": "통상 14일 이내 결제 취소 또는 환불.",
            "deadline": "신청 후 14일 이내"
          }
        ]
      },
      {
        "id": "memory-hacking-recovery",
        "name": "메모리해킹 피해 절차",
        "steps": [
          {
            "step": 1,
            "title": "경찰 신고 + 확인원 발급",
            "description": "일반 피싱과 동일."
          },
          {
            "step": 2,
            "title": "금융회사 피해구제신청",
            "description": "해당 금융사에 피해구제신청서 제출."
          },
          {
            "step": 3,
            "title": "금융회사 보상 판단",
            "description": "범죄자 인출 여부와 무관하게 '지급대상' 인정 시 보상."
          }
        ]
      }
    ],
    "agency_names": [
      "경찰청 사이버범죄 신고시스템(ECRM) + KISA 보호나라"
    ],
    "required_documents": [],
    "key_deadlines": [],
    "source_urls": [
      "https://ecrm.police.go.kr/minwon/main",
      "https://ecrm.police.go.kr/minwon/crs/quick/cyber1",
      "https://ecrm.police.go.kr/minwon/crs/quick/process",
      "https://ecrm.police.go.kr/minwon/crs/quick/vichelp",
      "https://www.boho.or.kr/kr/bbs/list.do?menuNo=205020&bbsId=B0000133"
    ],
    "common_mistakes": [
      "송금 직후 지급정지 안 하고 경찰서부터 가서 환급 기회 놓침",
      "스미싱 결제내역 확인 없이 통신사부터 방문 → 확인원 없으니 처리 거절",
      "민사 분쟁(환불·배송)을 사이버범죄로 신고 → 비접수 처리",
      "대리인이 ECRM 직접 신고 시도 → 본인만 가능"
    ],
    "contacts": {
      "사이버범죄 민원": "182 (유료)",
      "보이스피싱 통합신고": "112",
      "해킹/스팸/개인정보침해": "118 (KISA)",
      "법률상담": "132 (대한법률구조공단)"
    }
  },
  "digital-sex-crime": {
    "domain": "digital-sex-crime",
    "primary_flow": {
      "id": "ecrm-report-flow",
      "name": "사이버범죄 신고 처리 4단계",
      "steps": [
        {
          "step": 1,
          "title": "온라인 접수",
          "description": "ecrm.police.go.kr 사이버범죄 신고시스템 접속, 신고서 작성. 직접 피해자만 가능 (대리인은 경찰서 방문 또는 국민신문고)."
        },
        {
          "step": 2,
          "title": "경찰서 방문",
          "description": "신고 후 관할 경찰서 또는 사이버수사팀 방문. 신분증·증빙서류 지참."
        },
        {
          "step": 3,
          "title": "조사 (경찰서)",
          "description": "진술조서 작성, 추가 증거 제출, 필요 시 보충조사."
        },
        {
          "step": 4,
          "title": "종결",
          "description": "수사 결과 통보 (송치 또는 불송치). 합의·기소 여부에 따라 후속 절차."
        }
      ]
    },
    "all_flows": [
      {
        "id": "ecrm-report-flow",
        "name": "사이버범죄 신고 처리 4단계",
        "steps": [
          {
            "step": 1,
            "title": "온라인 접수",
            "description": "ecrm.police.go.kr 사이버범죄 신고시스템 접속, 신고서 작성. 직접 피해자만 가능 (대리인은 경찰서 방문 또는 국민신문고)."
          },
          {
            "step": 2,
            "title": "경찰서 방문",
            "description": "신고 후 관할 경찰서 또는 사이버수사팀 방문. 신분증·증빙서류 지참."
          },
          {
            "step": 3,
            "title": "조사 (경찰서)",
            "description": "진술조서 작성, 추가 증거 제출, 필요 시 보충조사."
          },
          {
            "step": 4,
            "title": "종결",
            "description": "수사 결과 통보 (송치 또는 불송치). 합의·기소 여부에 따라 후속 절차."
          }
        ]
      },
      {
        "id": "voice-phishing-recovery",
        "name": "보이스피싱(피싱) 피해 환급 절차",
        "steps": [
          {
            "step": 1,
            "title": "지급정지 신청 (가장 시급)",
            "description": "사기 계좌 관리은행 또는 112 통합신고에 즉시 전화하여 지급정지 신청. 잔액이 남아있어야 환급 가능.",
            "deadline": "송금 직후 즉시 (분 단위)"
          },
          {
            "step": 2,
            "title": "경찰서 신고",
            "description": "관할 경찰서 또는 사이버수사팀 방문하여 피해 신고."
          },
          {
            "step": 3,
            "title": "사건사고사실확인원 발급",
            "description": "경찰로부터 확인원 발급받음 (지급정지 → 채권소멸 → 환급의 핵심 서류)."
          },
          {
            "step": 4,
            "title": "은행 피해구제신청",
            "description": "사기 계좌 관리은행 방문, 피해구제신청서 작성 + 확인원 제출."
          },
          {
            "step": 5,
            "title": "채권소멸공고 후 환급",
            "description": "금감원이 2개월 채권소멸공고 → 종결 후 잔액 한도 내에서 환급. 피해자 다수 시 안분.",
            "deadline": "신청 후 약 2~3개월"
          }
        ]
      },
      {
        "id": "smishing-recovery",
        "name": "스미싱(소액결제 부정청구) 피해 절차",
        "steps": [
          {
            "step": 1,
            "title": "경찰 사이버수사팀 신고",
            "description": "관할 사이버수사팀 방문, 피해 신고."
          },
          {
            "step": 2,
            "title": "사건사고사실확인원 발급",
            "description": "환불 절차의 필수서류."
          },
          {
            "step": 3,
            "title": "통신사 고객센터 방문",
            "description": "SKT/KT/LG U+ 고객센터, 통신과금 정정요구 신청 + 확인원 첨부."
          },
          {
            "step": 4,
            "title": "환불 처리",
            "description": "통상 14일 이내 결제 취소 또는 환불.",
            "deadline": "신청 후 14일 이내"
          }
        ]
      },
      {
        "id": "memory-hacking-recovery",
        "name": "메모리해킹 피해 절차",
        "steps": [
          {
            "step": 1,
            "title": "경찰 신고 + 확인원 발급",
            "description": "일반 피싱과 동일."
          },
          {
            "step": 2,
            "title": "금융회사 피해구제신청",
            "description": "해당 금융사에 피해구제신청서 제출."
          },
          {
            "step": 3,
            "title": "금융회사 보상 판단",
            "description": "범죄자 인출 여부와 무관하게 '지급대상' 인정 시 보상."
          }
        ]
      },
      {
        "id": "pidrc-individual-mediation",
        "name": "개인정보 분쟁조정 신청 절차 (개인)",
        "applies_to": "개인정보 유출·무단수집·동의 없는 제3자 제공·삭제 거부 등 침해 피해자",
        "steps": [
          {
            "step": 1,
            "title": "분쟁조정 신청",
            "description": "kopico.go.kr 온라인 신청 또는 우편 (별지 제1호 서식, 대리인은 제2호). 무료.",
            "deadline": "침해사실 인지 후 빠를수록 유리"
          },
          {
            "step": 2,
            "title": "사실조사·의견청취",
            "description": "분쟁조정위원회가 양측 의견청취 + 증거수집 + 전문가 자문."
          },
          {
            "step": 3,
            "title": "조정안 작성",
            "description": "위원회가 양측에 합당한 조정안 제시.",
            "deadline": "신청일로부터 60일 이내 (의결로 연장 가능)"
          },
          {
            "step": 4,
            "title": "수락 결정",
            "description": "양측 모두 수락 시 조정 성립, 재판상 화해 효력 (집행권원).",
            "deadline": "조정안 통지 후 15일 이내"
          },
          {
            "step": 5,
            "title": "불성립 시 소송 또는 집단분쟁조정",
            "description": "수락 거부 시 민사소송. 다수 피해자(50명 이상) 시 집단분쟁조정 신청 가능."
          }
        ]
      },
      {
        "id": "pidrc-collective-mediation",
        "name": "개인정보 집단분쟁조정 절차",
        "applies_to": "동일 사건으로 50명 이상 피해 (대량 유출·해킹 등)",
        "steps": [
          {
            "step": 1,
            "title": "신청 자격자",
            "description": "정보주체·국가기관·소비자단체·비영리민간단체."
          },
          {
            "step": 2,
            "title": "공고",
            "description": "개시 결정 후 14일 이상 공고하여 추가 참가자 모집."
          },
          {
            "step": 3,
            "title": "조정안 작성·수락",
            "description": "일반분쟁조정과 동일하나 처리기한 60일 + 30일 연장 가능."
          }
        ]
      }
    ],
    "agency_names": [
      "경찰청 사이버범죄 신고시스템(ECRM) + KISA 보호나라",
      "개인정보분쟁조정위원회(PIDRC, kopico.go.kr) + 개인정보보호위원회"
    ],
    "required_documents": [
      {
        "category": "분쟁조정 신청",
        "items": [
          "분쟁조정신청서 (별지 제1호)",
          "대리인 신청 시 위임장 + 별지 제2호",
          "신분증 사본",
          "침해사실 입증자료 (스크린샷·이메일·통보문)",
          "사업자(피신청인) 인적사항·연락처"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "조정안 작성",
        "value": "신청일로부터 60일 (연장 가능)"
      },
      {
        "label": "조정안 수락",
        "value": "통지 후 15일 이내"
      },
      {
        "label": "집단분쟁조정 공고",
        "value": "최소 14일"
      },
      {
        "label": "신고 대표 번호",
        "value": "118 (국번없이)"
      }
    ],
    "source_urls": [
      "https://ecrm.police.go.kr/minwon/main",
      "https://ecrm.police.go.kr/minwon/crs/quick/cyber1",
      "https://ecrm.police.go.kr/minwon/crs/quick/process",
      "https://ecrm.police.go.kr/minwon/crs/quick/vichelp",
      "https://www.boho.or.kr/kr/bbs/list.do?menuNo=205020&bbsId=B0000133",
      "https://www.kopico.go.kr/",
      "https://www.kopico.go.kr/intro/disputeMediatIntro.do",
      "https://www.privacy.go.kr/front/contents/cntntsView.do?contsNo=47",
      "https://www.privacy.go.kr/front/contents/cntntsView.do?contsNo=48"
    ],
    "common_mistakes": [
      "송금 직후 지급정지 안 하고 경찰서부터 가서 환급 기회 놓침",
      "스미싱 결제내역 확인 없이 통신사부터 방문 → 확인원 없으니 처리 거절",
      "민사 분쟁(환불·배송)을 사이버범죄로 신고 → 비접수 처리",
      "대리인이 ECRM 직접 신고 시도 → 본인만 가능",
      "유출·침해 인지 후 시간 끌면 증거 소실 → 캡처·녹취 즉시",
      "분쟁조정 결과를 일방적 강제 효력으로 오해 → 양측 수락 필요",
      "다수 피해자 사건에서 개별 신청만 → 집단분쟁조정으로 효율화 가능",
      "사업자 폐업·연락두절 시 분쟁조정 한계 → 형사고소·집단소송 병행"
    ],
    "contacts": {
      "사이버범죄 민원": "182 (유료)",
      "보이스피싱 통합신고": "112",
      "해킹/스팸/개인정보침해": "118 (KISA)",
      "법률상담": "132 (대한법률구조공단)",
      "개인정보보호위원회 콜센터": "1833-6972",
      "개인정보 침해신고": "118 (국번없이)"
    }
  },
  "wage": {
    "domain": "wage",
    "primary_flow": {
      "id": "molab-wage-complaint",
      "name": "임금체불 진정 신고 절차",
      "applies_to": "임금·연장수당·연차수당 등 미지급 근로자",
      "steps": [
        {
          "step": 1,
          "title": "진정 또는 고소 선택",
          "description": "진정 = 밀린 임금 지급 요구 / 고소 = 사업주 처벌 요구. 둘 다 동시 가능. 진정이 일반적이고 합의 시 고소로 전환 가능.",
          "deadline": "퇴직 후 3년 이내 (임금채권 소멸시효)"
        },
        {
          "step": 2,
          "title": "노동포털 온라인 접수 또는 관할 지방관서 방문",
          "description": "labor.moel.go.kr 에서 진정서 작성·제출. 또는 사업장 소재지 관할 고용노동지청 고객지원실 방문.",
          "deadline": "즉시"
        },
        {
          "step": 3,
          "title": "근로감독관 배정·조사",
          "description": "신고 후 약 1~2주 내 담당 근로감독관 배정. 신고인·피신고인 모두 출석 요구. 통상 3회 이내 출석.",
          "deadline": "처리기간 25일 (토·공휴일 제외, 2차에 걸쳐 연장 가능)"
        },
        {
          "step": 4,
          "title": "법위반 확인 시 시정지시",
          "description": "체불 사실 확인 시 사업주에게 14일 내 지급 명령. 지급 시 사건 종결.",
          "deadline": "시정지시 후 14일"
        },
        {
          "step": 5,
          "title": "미이행 시 형사입건·송치",
          "description": "사업주가 시정지시 미이행 시 형사입건 → 검찰 송치 (약 2개월, 연장 가능). 3년 이하 징역 또는 3,000만원 이하 벌금.",
          "deadline": "송치 후 검찰 처분"
        }
      ]
    },
    "all_flows": [
      {
        "id": "molab-wage-complaint",
        "name": "임금체불 진정 신고 절차",
        "applies_to": "임금·연장수당·연차수당 등 미지급 근로자",
        "steps": [
          {
            "step": 1,
            "title": "진정 또는 고소 선택",
            "description": "진정 = 밀린 임금 지급 요구 / 고소 = 사업주 처벌 요구. 둘 다 동시 가능. 진정이 일반적이고 합의 시 고소로 전환 가능.",
            "deadline": "퇴직 후 3년 이내 (임금채권 소멸시효)"
          },
          {
            "step": 2,
            "title": "노동포털 온라인 접수 또는 관할 지방관서 방문",
            "description": "labor.moel.go.kr 에서 진정서 작성·제출. 또는 사업장 소재지 관할 고용노동지청 고객지원실 방문.",
            "deadline": "즉시"
          },
          {
            "step": 3,
            "title": "근로감독관 배정·조사",
            "description": "신고 후 약 1~2주 내 담당 근로감독관 배정. 신고인·피신고인 모두 출석 요구. 통상 3회 이내 출석.",
            "deadline": "처리기간 25일 (토·공휴일 제외, 2차에 걸쳐 연장 가능)"
          },
          {
            "step": 4,
            "title": "법위반 확인 시 시정지시",
            "description": "체불 사실 확인 시 사업주에게 14일 내 지급 명령. 지급 시 사건 종결.",
            "deadline": "시정지시 후 14일"
          },
          {
            "step": 5,
            "title": "미이행 시 형사입건·송치",
            "description": "사업주가 시정지시 미이행 시 형사입건 → 검찰 송치 (약 2개월, 연장 가능). 3년 이하 징역 또는 3,000만원 이하 벌금.",
            "deadline": "송치 후 검찰 처분"
          }
        ]
      },
      {
        "id": "molab-severance-complaint",
        "name": "퇴직금 미지급 진정 절차",
        "applies_to": "퇴직 후 14일 내 퇴직금 미수령 근로자 (근로자퇴직급여보장법 제9조)",
        "steps": [
          {
            "step": 1,
            "title": "퇴직일로부터 14일 경과 확인",
            "description": "퇴직 다음 날부터 기산. 사업주와 합의로 연장한 경우 합의 종료일 기준.",
            "deadline": "퇴직일 + 14일"
          },
          {
            "step": 2,
            "title": "내용증명 발송 (선택)",
            "description": "사업주에 퇴직금 지급 청구 내용증명 발송. 진정 전 협상 시도 + 시효 중단 효과.",
            "deadline": "원하는 시점"
          },
          {
            "step": 3,
            "title": "고용노동부 진정 접수",
            "description": "노동포털 또는 관할 지방관서. 임금체불 진정과 동일 절차.",
            "deadline": "퇴직금 청구권 시효 3년 이내"
          },
          {
            "step": 4,
            "title": "조사·시정지시·형사절차",
            "description": "임금체불과 동일한 25일 처리 → 14일 지급명령 → 미이행 시 형사 송치."
          }
        ]
      },
      {
        "id": "molab-dismissal-notice-pay",
        "name": "해고예고수당 청구 절차",
        "applies_to": "30일 전 예고 없이 해고된 근로자 (근로기준법 제26조)",
        "steps": [
          {
            "step": 1,
            "title": "해고예고 미이행 확인",
            "description": "해고일 30일 전 예고 받지 못했는지 확인. 예고는 서면·구두 모두 가능하나 입증책임 사용자."
          },
          {
            "step": 2,
            "title": "내용증명으로 지급 요청",
            "description": "30일분 통상임금 청구. 통상임금 = 기본급 + 정기·일률·고정적 수당."
          },
          {
            "step": 3,
            "title": "고용노동부 진정",
            "description": "회사 미응답 시 사업장 관할 지방노동청 진정 접수. 임금체불과 동일 절차.",
            "deadline": "해고일로부터 3년 이내 (소멸시효)"
          }
        ]
      },
      {
        "id": "comwel-simple-payment",
        "name": "간이대지급금 신청 절차 (재직 또는 퇴직 후 임금체불)",
        "applies_to": "사업주가 임금 미지급 + 진정·소송으로 체불 확정된 근로자",
        "steps": [
          {
            "step": 1,
            "title": "체불임금등·사업주확인서 발급",
            "description": "고용노동부에 진정·고소 → 체불 확인 → 체불임금등·사업주확인서 발급."
          },
          {
            "step": 2,
            "title": "근로복지공단에 간이대지급금 청구",
            "description": "간이대지급금 지급청구서 + 확인서 + 신분증 + 통장 사본 제출 (방문·우편·온라인)."
          },
          {
            "step": 3,
            "title": "근로복지공단 결정·지급",
            "description": "신청서 접수일부터 14일 이내 결정·지급.",
            "deadline": "14일"
          }
        ]
      },
      {
        "id": "comwel-bankruptcy-payment",
        "name": "도산대지급금 신청 절차 (회사 도산·파산 시)",
        "applies_to": "사업주 회생개시·파산선고·도산등사실인정 시 미지급 임금 보유 근로자",
        "steps": [
          {
            "step": 1,
            "title": "도산 사실 확인",
            "description": "법원 회생개시결정·파산선고 또는 고용노동부장관의 도산등사실인정 받음."
          },
          {
            "step": 2,
            "title": "도산대지급금 지급청구서 제출",
            "description": "퇴직 당시 사업장 관할 지방고용노동(지)청장 경유 → 근로복지공단 제출.",
            "deadline": "도산 결정·인정일로부터 2년 이내"
          },
          {
            "step": 3,
            "title": "근로복지공단 지급",
            "description": "특별한 사유 없으면 청구일로부터 7일 이내 지급.",
            "deadline": "7일"
          }
        ]
      }
    ],
    "agency_names": [
      "고용노동부 (민원마당 + 노동포털) + 근로복지공단"
    ],
    "required_documents": [
      {
        "category": "임금체불·퇴직금 진정",
        "items": [
          "진정서 (노동포털 양식)",
          "근로계약서",
          "급여명세서 (체불 기간)",
          "통장 거래내역 (지급 누락 입증)",
          "근로 사실 입증자료 (출근부·인사명령·이메일)",
          "퇴직 사실 입증 (퇴직증명서·퇴직사유서)"
        ]
      },
      {
        "category": "해고예고수당 청구",
        "items": [
          "근로계약서",
          "해고통보서 또는 통보 입증자료",
          "급여명세서 (통상임금 산정용 최근 3개월)",
          "내용증명 발송 사본"
        ]
      },
      {
        "category": "간이대지급금",
        "items": [
          "간이대지급금 지급청구서",
          "체불임금등·사업주확인서 (고용노동부 발급)",
          "신분증 사본",
          "본인 명의 통장 사본"
        ]
      },
      {
        "category": "도산대지급금",
        "items": [
          "도산대지급금 지급청구서",
          "법원 회생개시·파산선고 결정문 또는 도산등사실인정서",
          "퇴직증명서·근로계약서·급여명세서",
          "신분증·통장 사본"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "임금채권 소멸시효",
        "value": "3년"
      },
      {
        "label": "퇴직금 지급 의무",
        "value": "퇴직일로부터 14일"
      },
      {
        "label": "퇴직금 지연이자",
        "value": "14일 경과 후 연 20%"
      },
      {
        "label": "해고예고",
        "value": "해고일 30일 전"
      },
      {
        "label": "해고예고수당",
        "value": "30일분 통상임금"
      },
      {
        "label": "임금체불 진정 처리",
        "value": "25일 (토·공휴일 제외, 2차 연장 가능)"
      },
      {
        "label": "시정지시 후 지급",
        "value": "14일"
      },
      {
        "label": "간이대지급금 결정",
        "value": "14일"
      },
      {
        "label": "도산대지급금 지급",
        "value": "7일 (청구 후), 청구기한 2년"
      }
    ],
    "source_urls": [
      "https://labor.moel.go.kr/minwonSysInfo/wagesolway.do",
      "https://minwon.moel.go.kr/minwonCms/minwonCmsMwmdView/1000.do",
      "https://labor.moel.go.kr/minwonApply/minwonFormat.do?searchVal=SN001",
      "https://labor.moel.go.kr/minwonApply/minwonFormat.do?searchVal=AD027",
      "https://www.moel.go.kr/faq/faqView.do?seqRepeat=58",
      "https://www.moel.go.kr/faq/faqView.do?seqRepeat=118"
    ],
    "common_mistakes": [
      "퇴직 후 3년 도과 시 임금채권 소멸 → 시효 임박 시 즉시 진정",
      "구두 합의로 분할납부 → 미지급 시 추가 진정 필요. 반드시 서면",
      "진정 후 협상으로 합의 시 고소 미취하 → 형사 절차 자동 진행",
      "해고예고수당과 부당해고 구제(노동위)를 혼동 → 별개 절차, 병행 가능",
      "간이/도산대지급금 신청 전 체불확인서 미발급 → 신청 자체 불가"
    ],
    "contacts": {
      "고용노동부 고객상담센터": "1350 (국번없이)",
      "근로복지공단": "1588-0075"
    }
  },
  "dismissal": {
    "domain": "dismissal",
    "primary_flow": {
      "id": "nlrc-unfair-dismissal-relief",
      "name": "부당해고 구제신청 절차 (노동위 초심)",
      "applies_to": "5인 이상 사업장에서 부당해고·전직·휴직·정직·감봉·기타 징벌 받은 근로자",
      "steps": [
        {
          "step": 1,
          "title": "구제신청서 제출",
          "description": "사업장 소재지 관할 지방노동위원회에 구제신청서 + 입증자료 각 2부 제출. 우편·방문·온라인.",
          "deadline": "부당해고일(계속행위는 종료일)로부터 3개월 이내"
        },
        {
          "step": 2,
          "title": "신청이유서·답변서 제출",
          "description": "근로자: 신청이유서 + 증거 2부. 사용자: 답변서 + 증거 2부. 통상 신청 후 2주 내."
        },
        {
          "step": 3,
          "title": "조사 단계",
          "description": "조사관이 양측 진술·자료 검토. 화해 권고 가능 (이 단계에서 합의 시 종결).",
          "deadline": "통상 1~2개월"
        },
        {
          "step": 4,
          "title": "심문회의",
          "description": "공익위원 3명 + 근로자위원 1 + 사용자위원 1 = 5명 합의. 양측 출석·진술·증인심문.",
          "deadline": "사건 접수일로부터 60일 이내"
        },
        {
          "step": 5,
          "title": "판정·명령",
          "description": "구제명령(원직복직·임금상당액·금전보상명령) 또는 기각. 판정서는 30일 내 발송.",
          "deadline": "심문회의 후 30일 내 송달"
        },
        {
          "step": 6,
          "title": "재심 (불복 시)",
          "description": "지노위 판정 불복 시 중앙노동위원회에 재심 신청.",
          "deadline": "판정서 송달일로부터 10일 이내"
        },
        {
          "step": 7,
          "title": "행정소송 (재심 불복 시)",
          "description": "중노위 재심판정 불복 시 행정법원에 취소소송 제기.",
          "deadline": "재심판정서 송달일로부터 15일 이내"
        },
        {
          "step": 8,
          "title": "확정·집행",
          "description": "확정 후 사용자가 명령 미이행 시 이행강제금 부과 (1회 최대 3,000만원, 2년간 4회 한도)."
        }
      ]
    },
    "all_flows": [
      {
        "id": "nlrc-unfair-dismissal-relief",
        "name": "부당해고 구제신청 절차 (노동위 초심)",
        "applies_to": "5인 이상 사업장에서 부당해고·전직·휴직·정직·감봉·기타 징벌 받은 근로자",
        "steps": [
          {
            "step": 1,
            "title": "구제신청서 제출",
            "description": "사업장 소재지 관할 지방노동위원회에 구제신청서 + 입증자료 각 2부 제출. 우편·방문·온라인.",
            "deadline": "부당해고일(계속행위는 종료일)로부터 3개월 이내"
          },
          {
            "step": 2,
            "title": "신청이유서·답변서 제출",
            "description": "근로자: 신청이유서 + 증거 2부. 사용자: 답변서 + 증거 2부. 통상 신청 후 2주 내."
          },
          {
            "step": 3,
            "title": "조사 단계",
            "description": "조사관이 양측 진술·자료 검토. 화해 권고 가능 (이 단계에서 합의 시 종결).",
            "deadline": "통상 1~2개월"
          },
          {
            "step": 4,
            "title": "심문회의",
            "description": "공익위원 3명 + 근로자위원 1 + 사용자위원 1 = 5명 합의. 양측 출석·진술·증인심문.",
            "deadline": "사건 접수일로부터 60일 이내"
          },
          {
            "step": 5,
            "title": "판정·명령",
            "description": "구제명령(원직복직·임금상당액·금전보상명령) 또는 기각. 판정서는 30일 내 발송.",
            "deadline": "심문회의 후 30일 내 송달"
          },
          {
            "step": 6,
            "title": "재심 (불복 시)",
            "description": "지노위 판정 불복 시 중앙노동위원회에 재심 신청.",
            "deadline": "판정서 송달일로부터 10일 이내"
          },
          {
            "step": 7,
            "title": "행정소송 (재심 불복 시)",
            "description": "중노위 재심판정 불복 시 행정법원에 취소소송 제기.",
            "deadline": "재심판정서 송달일로부터 15일 이내"
          },
          {
            "step": 8,
            "title": "확정·집행",
            "description": "확정 후 사용자가 명령 미이행 시 이행강제금 부과 (1회 최대 3,000만원, 2년간 4회 한도)."
          }
        ]
      },
      {
        "id": "molab-wage-complaint",
        "name": "임금체불 진정 신고 절차",
        "applies_to": "임금·연장수당·연차수당 등 미지급 근로자",
        "steps": [
          {
            "step": 1,
            "title": "진정 또는 고소 선택",
            "description": "진정 = 밀린 임금 지급 요구 / 고소 = 사업주 처벌 요구. 둘 다 동시 가능. 진정이 일반적이고 합의 시 고소로 전환 가능.",
            "deadline": "퇴직 후 3년 이내 (임금채권 소멸시효)"
          },
          {
            "step": 2,
            "title": "노동포털 온라인 접수 또는 관할 지방관서 방문",
            "description": "labor.moel.go.kr 에서 진정서 작성·제출. 또는 사업장 소재지 관할 고용노동지청 고객지원실 방문.",
            "deadline": "즉시"
          },
          {
            "step": 3,
            "title": "근로감독관 배정·조사",
            "description": "신고 후 약 1~2주 내 담당 근로감독관 배정. 신고인·피신고인 모두 출석 요구. 통상 3회 이내 출석.",
            "deadline": "처리기간 25일 (토·공휴일 제외, 2차에 걸쳐 연장 가능)"
          },
          {
            "step": 4,
            "title": "법위반 확인 시 시정지시",
            "description": "체불 사실 확인 시 사업주에게 14일 내 지급 명령. 지급 시 사건 종결.",
            "deadline": "시정지시 후 14일"
          },
          {
            "step": 5,
            "title": "미이행 시 형사입건·송치",
            "description": "사업주가 시정지시 미이행 시 형사입건 → 검찰 송치 (약 2개월, 연장 가능). 3년 이하 징역 또는 3,000만원 이하 벌금.",
            "deadline": "송치 후 검찰 처분"
          }
        ]
      },
      {
        "id": "molab-severance-complaint",
        "name": "퇴직금 미지급 진정 절차",
        "applies_to": "퇴직 후 14일 내 퇴직금 미수령 근로자 (근로자퇴직급여보장법 제9조)",
        "steps": [
          {
            "step": 1,
            "title": "퇴직일로부터 14일 경과 확인",
            "description": "퇴직 다음 날부터 기산. 사업주와 합의로 연장한 경우 합의 종료일 기준.",
            "deadline": "퇴직일 + 14일"
          },
          {
            "step": 2,
            "title": "내용증명 발송 (선택)",
            "description": "사업주에 퇴직금 지급 청구 내용증명 발송. 진정 전 협상 시도 + 시효 중단 효과.",
            "deadline": "원하는 시점"
          },
          {
            "step": 3,
            "title": "고용노동부 진정 접수",
            "description": "노동포털 또는 관할 지방관서. 임금체불 진정과 동일 절차.",
            "deadline": "퇴직금 청구권 시효 3년 이내"
          },
          {
            "step": 4,
            "title": "조사·시정지시·형사절차",
            "description": "임금체불과 동일한 25일 처리 → 14일 지급명령 → 미이행 시 형사 송치."
          }
        ]
      },
      {
        "id": "molab-dismissal-notice-pay",
        "name": "해고예고수당 청구 절차",
        "applies_to": "30일 전 예고 없이 해고된 근로자 (근로기준법 제26조)",
        "steps": [
          {
            "step": 1,
            "title": "해고예고 미이행 확인",
            "description": "해고일 30일 전 예고 받지 못했는지 확인. 예고는 서면·구두 모두 가능하나 입증책임 사용자."
          },
          {
            "step": 2,
            "title": "내용증명으로 지급 요청",
            "description": "30일분 통상임금 청구. 통상임금 = 기본급 + 정기·일률·고정적 수당."
          },
          {
            "step": 3,
            "title": "고용노동부 진정",
            "description": "회사 미응답 시 사업장 관할 지방노동청 진정 접수. 임금체불과 동일 절차.",
            "deadline": "해고일로부터 3년 이내 (소멸시효)"
          }
        ]
      },
      {
        "id": "comwel-simple-payment",
        "name": "간이대지급금 신청 절차 (재직 또는 퇴직 후 임금체불)",
        "applies_to": "사업주가 임금 미지급 + 진정·소송으로 체불 확정된 근로자",
        "steps": [
          {
            "step": 1,
            "title": "체불임금등·사업주확인서 발급",
            "description": "고용노동부에 진정·고소 → 체불 확인 → 체불임금등·사업주확인서 발급."
          },
          {
            "step": 2,
            "title": "근로복지공단에 간이대지급금 청구",
            "description": "간이대지급금 지급청구서 + 확인서 + 신분증 + 통장 사본 제출 (방문·우편·온라인)."
          },
          {
            "step": 3,
            "title": "근로복지공단 결정·지급",
            "description": "신청서 접수일부터 14일 이내 결정·지급.",
            "deadline": "14일"
          }
        ]
      },
      {
        "id": "comwel-bankruptcy-payment",
        "name": "도산대지급금 신청 절차 (회사 도산·파산 시)",
        "applies_to": "사업주 회생개시·파산선고·도산등사실인정 시 미지급 임금 보유 근로자",
        "steps": [
          {
            "step": 1,
            "title": "도산 사실 확인",
            "description": "법원 회생개시결정·파산선고 또는 고용노동부장관의 도산등사실인정 받음."
          },
          {
            "step": 2,
            "title": "도산대지급금 지급청구서 제출",
            "description": "퇴직 당시 사업장 관할 지방고용노동(지)청장 경유 → 근로복지공단 제출.",
            "deadline": "도산 결정·인정일로부터 2년 이내"
          },
          {
            "step": 3,
            "title": "근로복지공단 지급",
            "description": "특별한 사유 없으면 청구일로부터 7일 이내 지급.",
            "deadline": "7일"
          }
        ]
      }
    ],
    "agency_names": [
      "노동위원회 (지방·중앙)",
      "고용노동부 (민원마당 + 노동포털) + 근로복지공단"
    ],
    "required_documents": [
      {
        "category": "구제신청 기본",
        "items": [
          "구제신청서 (nlrc.go.kr 양식)",
          "근로계약서 사본",
          "해고통보서 또는 통보 입증자료 (이메일·문자·녹취록)",
          "급여명세서 (최근 3개월)",
          "사업장등록증 등 사용자 확인 자료"
        ]
      },
      {
        "category": "부당성 입증",
        "items": [
          "징계처분서·해고사유서",
          "취업규칙·단체협약 사본",
          "본인 인사평가·근태기록",
          "부당해고 정황 입증자료 (회의록·이메일·동료 진술)"
        ]
      },
      {
        "category": "재심 (중노위)",
        "items": [
          "재심신청서",
          "지노위 판정서 사본",
          "추가 증거 자료"
        ]
      },
      {
        "category": "임금체불·퇴직금 진정",
        "items": [
          "진정서 (노동포털 양식)",
          "근로계약서",
          "급여명세서 (체불 기간)",
          "통장 거래내역 (지급 누락 입증)",
          "근로 사실 입증자료 (출근부·인사명령·이메일)",
          "퇴직 사실 입증 (퇴직증명서·퇴직사유서)"
        ]
      },
      {
        "category": "해고예고수당 청구",
        "items": [
          "근로계약서",
          "해고통보서 또는 통보 입증자료",
          "급여명세서 (통상임금 산정용 최근 3개월)",
          "내용증명 발송 사본"
        ]
      },
      {
        "category": "간이대지급금",
        "items": [
          "간이대지급금 지급청구서",
          "체불임금등·사업주확인서 (고용노동부 발급)",
          "신분증 사본",
          "본인 명의 통장 사본"
        ]
      },
      {
        "category": "도산대지급금",
        "items": [
          "도산대지급금 지급청구서",
          "법원 회생개시·파산선고 결정문 또는 도산등사실인정서",
          "퇴직증명서·근로계약서·급여명세서",
          "신분증·통장 사본"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "구제신청 기한",
        "value": "부당해고일로부터 3개월 이내"
      },
      {
        "label": "심문회의 개최",
        "value": "접수일로부터 60일 이내"
      },
      {
        "label": "판정서 송달",
        "value": "심문 후 30일 내"
      },
      {
        "label": "재심 신청",
        "value": "판정서 송달 10일 이내"
      },
      {
        "label": "행정소송 제기",
        "value": "재심판정서 송달 15일 이내"
      },
      {
        "label": "이행강제금",
        "value": "1회 최대 3,000만원, 2년간 4회"
      },
      {
        "label": "임금채권 소멸시효",
        "value": "3년"
      },
      {
        "label": "퇴직금 지급 의무",
        "value": "퇴직일로부터 14일"
      },
      {
        "label": "퇴직금 지연이자",
        "value": "14일 경과 후 연 20%"
      },
      {
        "label": "해고예고",
        "value": "해고일 30일 전"
      },
      {
        "label": "해고예고수당",
        "value": "30일분 통상임금"
      },
      {
        "label": "임금체불 진정 처리",
        "value": "25일 (토·공휴일 제외, 2차 연장 가능)"
      },
      {
        "label": "시정지시 후 지급",
        "value": "14일"
      },
      {
        "label": "간이대지급금 결정",
        "value": "14일"
      },
      {
        "label": "도산대지급금 지급",
        "value": "7일 (청구 후), 청구기한 2년"
      }
    ],
    "source_urls": [
      "https://www.nlrc.go.kr/",
      "https://nlrc.go.kr/nlrc/commIntro/workGuide03.do",
      "https://nlrc.go.kr/nlrc/minwon/CmmnEventRequest/gudgment.do",
      "https://easylaw.go.kr/CSP/CnpClsMainBtr.laf?popMenu=ov&csmSeq=514&ccfNo=5&cciNo=1&cnpClsNo=1",
      "https://labor.moel.go.kr/minwonSysInfo/wagesolway.do",
      "https://minwon.moel.go.kr/minwonCms/minwonCmsMwmdView/1000.do",
      "https://labor.moel.go.kr/minwonApply/minwonFormat.do?searchVal=SN001",
      "https://labor.moel.go.kr/minwonApply/minwonFormat.do?searchVal=AD027",
      "https://www.moel.go.kr/faq/faqView.do?seqRepeat=58",
      "https://www.moel.go.kr/faq/faqView.do?seqRepeat=118"
    ],
    "common_mistakes": [
      "3개월 시한 도과 → 구제신청 자체 각하",
      "5인 미만 사업장 구제신청 → 노동위 관할 아님 (민사 소송으로)",
      "사직서 자필 작성 후 부당해고 다툼 → '권고사직' 입증 책임 본인",
      "재심 신청 10일·행정소송 15일 시한 혼동",
      "원직복직 명령 후 출근 거부 → 이행 의무 면제 사유 없으면 임금 청구 위험",
      "퇴직 후 3년 도과 시 임금채권 소멸 → 시효 임박 시 즉시 진정",
      "구두 합의로 분할납부 → 미지급 시 추가 진정 필요. 반드시 서면",
      "진정 후 협상으로 합의 시 고소 미취하 → 형사 절차 자동 진행",
      "해고예고수당과 부당해고 구제(노동위)를 혼동 → 별개 절차, 병행 가능",
      "간이/도산대지급금 신청 전 체불확인서 미발급 → 신청 자체 불가"
    ],
    "contacts": {
      "중앙노동위원회": "044-202-8222",
      "지방노동위 종합민원": "1644-2010",
      "고용노동부 고객상담센터": "1350 (국번없이)",
      "근로복지공단": "1588-0075"
    }
  },
  "retirement": {
    "domain": "retirement",
    "primary_flow": {
      "id": "molab-wage-complaint",
      "name": "임금체불 진정 신고 절차",
      "applies_to": "임금·연장수당·연차수당 등 미지급 근로자",
      "steps": [
        {
          "step": 1,
          "title": "진정 또는 고소 선택",
          "description": "진정 = 밀린 임금 지급 요구 / 고소 = 사업주 처벌 요구. 둘 다 동시 가능. 진정이 일반적이고 합의 시 고소로 전환 가능.",
          "deadline": "퇴직 후 3년 이내 (임금채권 소멸시효)"
        },
        {
          "step": 2,
          "title": "노동포털 온라인 접수 또는 관할 지방관서 방문",
          "description": "labor.moel.go.kr 에서 진정서 작성·제출. 또는 사업장 소재지 관할 고용노동지청 고객지원실 방문.",
          "deadline": "즉시"
        },
        {
          "step": 3,
          "title": "근로감독관 배정·조사",
          "description": "신고 후 약 1~2주 내 담당 근로감독관 배정. 신고인·피신고인 모두 출석 요구. 통상 3회 이내 출석.",
          "deadline": "처리기간 25일 (토·공휴일 제외, 2차에 걸쳐 연장 가능)"
        },
        {
          "step": 4,
          "title": "법위반 확인 시 시정지시",
          "description": "체불 사실 확인 시 사업주에게 14일 내 지급 명령. 지급 시 사건 종결.",
          "deadline": "시정지시 후 14일"
        },
        {
          "step": 5,
          "title": "미이행 시 형사입건·송치",
          "description": "사업주가 시정지시 미이행 시 형사입건 → 검찰 송치 (약 2개월, 연장 가능). 3년 이하 징역 또는 3,000만원 이하 벌금.",
          "deadline": "송치 후 검찰 처분"
        }
      ]
    },
    "all_flows": [
      {
        "id": "molab-wage-complaint",
        "name": "임금체불 진정 신고 절차",
        "applies_to": "임금·연장수당·연차수당 등 미지급 근로자",
        "steps": [
          {
            "step": 1,
            "title": "진정 또는 고소 선택",
            "description": "진정 = 밀린 임금 지급 요구 / 고소 = 사업주 처벌 요구. 둘 다 동시 가능. 진정이 일반적이고 합의 시 고소로 전환 가능.",
            "deadline": "퇴직 후 3년 이내 (임금채권 소멸시효)"
          },
          {
            "step": 2,
            "title": "노동포털 온라인 접수 또는 관할 지방관서 방문",
            "description": "labor.moel.go.kr 에서 진정서 작성·제출. 또는 사업장 소재지 관할 고용노동지청 고객지원실 방문.",
            "deadline": "즉시"
          },
          {
            "step": 3,
            "title": "근로감독관 배정·조사",
            "description": "신고 후 약 1~2주 내 담당 근로감독관 배정. 신고인·피신고인 모두 출석 요구. 통상 3회 이내 출석.",
            "deadline": "처리기간 25일 (토·공휴일 제외, 2차에 걸쳐 연장 가능)"
          },
          {
            "step": 4,
            "title": "법위반 확인 시 시정지시",
            "description": "체불 사실 확인 시 사업주에게 14일 내 지급 명령. 지급 시 사건 종결.",
            "deadline": "시정지시 후 14일"
          },
          {
            "step": 5,
            "title": "미이행 시 형사입건·송치",
            "description": "사업주가 시정지시 미이행 시 형사입건 → 검찰 송치 (약 2개월, 연장 가능). 3년 이하 징역 또는 3,000만원 이하 벌금.",
            "deadline": "송치 후 검찰 처분"
          }
        ]
      },
      {
        "id": "molab-severance-complaint",
        "name": "퇴직금 미지급 진정 절차",
        "applies_to": "퇴직 후 14일 내 퇴직금 미수령 근로자 (근로자퇴직급여보장법 제9조)",
        "steps": [
          {
            "step": 1,
            "title": "퇴직일로부터 14일 경과 확인",
            "description": "퇴직 다음 날부터 기산. 사업주와 합의로 연장한 경우 합의 종료일 기준.",
            "deadline": "퇴직일 + 14일"
          },
          {
            "step": 2,
            "title": "내용증명 발송 (선택)",
            "description": "사업주에 퇴직금 지급 청구 내용증명 발송. 진정 전 협상 시도 + 시효 중단 효과.",
            "deadline": "원하는 시점"
          },
          {
            "step": 3,
            "title": "고용노동부 진정 접수",
            "description": "노동포털 또는 관할 지방관서. 임금체불 진정과 동일 절차.",
            "deadline": "퇴직금 청구권 시효 3년 이내"
          },
          {
            "step": 4,
            "title": "조사·시정지시·형사절차",
            "description": "임금체불과 동일한 25일 처리 → 14일 지급명령 → 미이행 시 형사 송치."
          }
        ]
      },
      {
        "id": "molab-dismissal-notice-pay",
        "name": "해고예고수당 청구 절차",
        "applies_to": "30일 전 예고 없이 해고된 근로자 (근로기준법 제26조)",
        "steps": [
          {
            "step": 1,
            "title": "해고예고 미이행 확인",
            "description": "해고일 30일 전 예고 받지 못했는지 확인. 예고는 서면·구두 모두 가능하나 입증책임 사용자."
          },
          {
            "step": 2,
            "title": "내용증명으로 지급 요청",
            "description": "30일분 통상임금 청구. 통상임금 = 기본급 + 정기·일률·고정적 수당."
          },
          {
            "step": 3,
            "title": "고용노동부 진정",
            "description": "회사 미응답 시 사업장 관할 지방노동청 진정 접수. 임금체불과 동일 절차.",
            "deadline": "해고일로부터 3년 이내 (소멸시효)"
          }
        ]
      },
      {
        "id": "comwel-simple-payment",
        "name": "간이대지급금 신청 절차 (재직 또는 퇴직 후 임금체불)",
        "applies_to": "사업주가 임금 미지급 + 진정·소송으로 체불 확정된 근로자",
        "steps": [
          {
            "step": 1,
            "title": "체불임금등·사업주확인서 발급",
            "description": "고용노동부에 진정·고소 → 체불 확인 → 체불임금등·사업주확인서 발급."
          },
          {
            "step": 2,
            "title": "근로복지공단에 간이대지급금 청구",
            "description": "간이대지급금 지급청구서 + 확인서 + 신분증 + 통장 사본 제출 (방문·우편·온라인)."
          },
          {
            "step": 3,
            "title": "근로복지공단 결정·지급",
            "description": "신청서 접수일부터 14일 이내 결정·지급.",
            "deadline": "14일"
          }
        ]
      },
      {
        "id": "comwel-bankruptcy-payment",
        "name": "도산대지급금 신청 절차 (회사 도산·파산 시)",
        "applies_to": "사업주 회생개시·파산선고·도산등사실인정 시 미지급 임금 보유 근로자",
        "steps": [
          {
            "step": 1,
            "title": "도산 사실 확인",
            "description": "법원 회생개시결정·파산선고 또는 고용노동부장관의 도산등사실인정 받음."
          },
          {
            "step": 2,
            "title": "도산대지급금 지급청구서 제출",
            "description": "퇴직 당시 사업장 관할 지방고용노동(지)청장 경유 → 근로복지공단 제출.",
            "deadline": "도산 결정·인정일로부터 2년 이내"
          },
          {
            "step": 3,
            "title": "근로복지공단 지급",
            "description": "특별한 사유 없으면 청구일로부터 7일 이내 지급.",
            "deadline": "7일"
          }
        ]
      }
    ],
    "agency_names": [
      "고용노동부 (민원마당 + 노동포털) + 근로복지공단"
    ],
    "required_documents": [
      {
        "category": "임금체불·퇴직금 진정",
        "items": [
          "진정서 (노동포털 양식)",
          "근로계약서",
          "급여명세서 (체불 기간)",
          "통장 거래내역 (지급 누락 입증)",
          "근로 사실 입증자료 (출근부·인사명령·이메일)",
          "퇴직 사실 입증 (퇴직증명서·퇴직사유서)"
        ]
      },
      {
        "category": "해고예고수당 청구",
        "items": [
          "근로계약서",
          "해고통보서 또는 통보 입증자료",
          "급여명세서 (통상임금 산정용 최근 3개월)",
          "내용증명 발송 사본"
        ]
      },
      {
        "category": "간이대지급금",
        "items": [
          "간이대지급금 지급청구서",
          "체불임금등·사업주확인서 (고용노동부 발급)",
          "신분증 사본",
          "본인 명의 통장 사본"
        ]
      },
      {
        "category": "도산대지급금",
        "items": [
          "도산대지급금 지급청구서",
          "법원 회생개시·파산선고 결정문 또는 도산등사실인정서",
          "퇴직증명서·근로계약서·급여명세서",
          "신분증·통장 사본"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "임금채권 소멸시효",
        "value": "3년"
      },
      {
        "label": "퇴직금 지급 의무",
        "value": "퇴직일로부터 14일"
      },
      {
        "label": "퇴직금 지연이자",
        "value": "14일 경과 후 연 20%"
      },
      {
        "label": "해고예고",
        "value": "해고일 30일 전"
      },
      {
        "label": "해고예고수당",
        "value": "30일분 통상임금"
      },
      {
        "label": "임금체불 진정 처리",
        "value": "25일 (토·공휴일 제외, 2차 연장 가능)"
      },
      {
        "label": "시정지시 후 지급",
        "value": "14일"
      },
      {
        "label": "간이대지급금 결정",
        "value": "14일"
      },
      {
        "label": "도산대지급금 지급",
        "value": "7일 (청구 후), 청구기한 2년"
      }
    ],
    "source_urls": [
      "https://labor.moel.go.kr/minwonSysInfo/wagesolway.do",
      "https://minwon.moel.go.kr/minwonCms/minwonCmsMwmdView/1000.do",
      "https://labor.moel.go.kr/minwonApply/minwonFormat.do?searchVal=SN001",
      "https://labor.moel.go.kr/minwonApply/minwonFormat.do?searchVal=AD027",
      "https://www.moel.go.kr/faq/faqView.do?seqRepeat=58",
      "https://www.moel.go.kr/faq/faqView.do?seqRepeat=118"
    ],
    "common_mistakes": [
      "퇴직 후 3년 도과 시 임금채권 소멸 → 시효 임박 시 즉시 진정",
      "구두 합의로 분할납부 → 미지급 시 추가 진정 필요. 반드시 서면",
      "진정 후 협상으로 합의 시 고소 미취하 → 형사 절차 자동 진행",
      "해고예고수당과 부당해고 구제(노동위)를 혼동 → 별개 절차, 병행 가능",
      "간이/도산대지급금 신청 전 체불확인서 미발급 → 신청 자체 불가"
    ],
    "contacts": {
      "고용노동부 고객상담센터": "1350 (국번없이)",
      "근로복지공단": "1588-0075"
    }
  },
  "industrial-accident": {
    "domain": "industrial-accident",
    "primary_flow": {
      "id": "comwel-medical-care",
      "name": "산재 요양급여 신청 절차",
      "applies_to": "업무상 부상·질병 입은 근로자",
      "steps": [
        {
          "step": 1,
          "title": "산재보험 의료기관 진료",
          "description": "산재 지정 의료기관에서 진료 + 요양급여신청소견서 작성."
        },
        {
          "step": 2,
          "title": "요양급여신청서 제출",
          "description": "신청서 + 소견서 + 사업주 확인란 → 근로복지공단 (방문·우편·온라인 토탈서비스)."
        },
        {
          "step": 3,
          "title": "공단 심사",
          "description": "업무상 재해 여부·인과관계 검토. 업무상 질병은 업무상질병판정위원회 심의 거침.",
          "deadline": "신청 후 7일 내 결정 (질병 심의·조사 기간은 산입 제외)"
        },
        {
          "step": 4,
          "title": "승인 시 의료기관 직접 지급",
          "description": "공단이 의료기관에 진료비 지급. 본인부담금 없음 (단 비급여·간병료는 별도)."
        },
        {
          "step": 5,
          "title": "불승인 시 불복 절차",
          "description": "심사청구(공단 산재심사위) → 재심사청구(산재재심사위) → 행정소송 순.",
          "deadline": "처분 통보 후 90일 이내 (심사·재심사·행정소송 각각)"
        }
      ]
    },
    "all_flows": [
      {
        "id": "comwel-medical-care",
        "name": "산재 요양급여 신청 절차",
        "applies_to": "업무상 부상·질병 입은 근로자",
        "steps": [
          {
            "step": 1,
            "title": "산재보험 의료기관 진료",
            "description": "산재 지정 의료기관에서 진료 + 요양급여신청소견서 작성."
          },
          {
            "step": 2,
            "title": "요양급여신청서 제출",
            "description": "신청서 + 소견서 + 사업주 확인란 → 근로복지공단 (방문·우편·온라인 토탈서비스)."
          },
          {
            "step": 3,
            "title": "공단 심사",
            "description": "업무상 재해 여부·인과관계 검토. 업무상 질병은 업무상질병판정위원회 심의 거침.",
            "deadline": "신청 후 7일 내 결정 (질병 심의·조사 기간은 산입 제외)"
          },
          {
            "step": 4,
            "title": "승인 시 의료기관 직접 지급",
            "description": "공단이 의료기관에 진료비 지급. 본인부담금 없음 (단 비급여·간병료는 별도)."
          },
          {
            "step": 5,
            "title": "불승인 시 불복 절차",
            "description": "심사청구(공단 산재심사위) → 재심사청구(산재재심사위) → 행정소송 순.",
            "deadline": "처분 통보 후 90일 이내 (심사·재심사·행정소송 각각)"
          }
        ]
      },
      {
        "id": "comwel-temp-disability",
        "name": "휴업급여 청구 절차",
        "applies_to": "산재 요양으로 4일 이상 취업 못한 근로자",
        "steps": [
          {
            "step": 1,
            "title": "휴업급여청구서 제출",
            "description": "근로복지공단에 청구서 + 진료확인 자료 제출. 매월 단위로 청구."
          },
          {
            "step": 2,
            "title": "지급 결정·송금",
            "description": "평균임금의 70%를 휴업기간 일수만큼. 본인 계좌 입금.",
            "deadline": "청구 후 통상 7~14일"
          }
        ]
      },
      {
        "id": "comwel-disability-grade",
        "name": "장해급여 청구 절차",
        "steps": [
          {
            "step": 1,
            "title": "치유 후 장해진단",
            "description": "치료 종결 후 산재 의료기관에서 장해진단."
          },
          {
            "step": 2,
            "title": "장해급여청구서 + 진단서 제출",
            "description": "근로복지공단에 청구."
          },
          {
            "step": 3,
            "title": "장해등급 판정",
            "description": "1~14급 장해등급 판정 → 일시금 또는 연금."
          }
        ]
      },
      {
        "id": "comwel-survivor",
        "name": "유족급여·장의비 청구 절차",
        "applies_to": "업무상 재해로 사망한 근로자의 유족",
        "steps": [
          {
            "step": 1,
            "title": "유족급여청구서 + 사망진단서 제출",
            "description": "유족 1순위(배우자·자녀·부모) 우선 청구. 청구권은 사망일로부터 5년 시효."
          },
          {
            "step": 2,
            "title": "공단 심사·결정",
            "description": "업무상 재해 여부 + 유족 자격 확인."
          },
          {
            "step": 3,
            "title": "지급",
            "description": "유족연금 (평균임금 × 일정율) 또는 일시금. 장의비 별도 지급."
          }
        ]
      }
    ],
    "agency_names": [
      "근로복지공단 (Korea Workers' Compensation & Welfare Service)"
    ],
    "required_documents": [
      {
        "category": "요양급여",
        "items": [
          "요양급여신청서",
          "요양급여신청소견서 (산재 지정 의료기관 작성)",
          "사업주 확인 (재해 발생 사실)",
          "근로계약서·급여명세서 (평균임금 산정용)",
          "재해경위서 + 사고 입증자료 (현장사진·CCTV·진술서)"
        ]
      },
      {
        "category": "휴업급여",
        "items": [
          "휴업급여청구서",
          "요양·취업 불가 진료확인서",
          "본인 계좌 통장 사본"
        ]
      },
      {
        "category": "장해급여",
        "items": [
          "장해급여청구서",
          "장해진단서",
          "치유종결 확인서"
        ]
      },
      {
        "category": "유족급여",
        "items": [
          "유족급여청구서",
          "사망진단서",
          "가족관계증명서·기본증명서",
          "유족 자격 입증서류"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "요양급여 결정",
        "value": "신청 후 7일 (질병 심의·조사 제외)"
      },
      {
        "label": "휴업급여 지급 시작",
        "value": "재해 4일째부터"
      },
      {
        "label": "휴업급여 일액",
        "value": "평균임금의 70%"
      },
      {
        "label": "심사청구·재심사청구·행정소송",
        "value": "각 처분일로부터 90일 이내"
      },
      {
        "label": "유족급여 시효",
        "value": "사망일로부터 5년"
      },
      {
        "label": "요양급여 시효",
        "value": "재해일로부터 3년"
      }
    ],
    "source_urls": [
      "https://www.comwel.or.kr/comwel/comp/recu/appl01.jsp",
      "https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A05007&CappBizCD=14900000261",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=575"
    ],
    "common_mistakes": [
      "사업주 동의 없으면 산재 신청 불가하다고 오해 → 근로자 단독 신청 가능",
      "공상처리(회사 자체 처리) 합의 후 산재 신청 권리 포기 → 별도 권리, 포기 안 됨",
      "출퇴근 사고는 산재 아니라고 오해 → 통근재해 인정 (2018.1.1 이후)",
      "심사청구 90일 시한 도과 → 불복 길 막힘",
      "업무상 질병 입증 어려움 포기 → 인정기준·역학조사 활용 가능"
    ],
    "contacts": {
      "근로복지공단 대표": "1588-0075",
      "산재보험 콜센터": "052-704-7900"
    }
  },
  "rehabilitation": {
    "domain": "rehabilitation",
    "primary_flow": {
      "id": "klac-payment-order",
      "name": "지급명령 신청 절차 (소액·금전 청구 우선 수단)",
      "applies_to": "금전·대체물·유가증권 일정 수량 지급 청구",
      "steps": [
        {
          "step": 1,
          "title": "신청서 작성",
          "description": "당사자(채권자·채무자) + 법정대리인 + 청구취지(청구금액·법정이자·소송비용) + 청구원인 기재."
        },
        {
          "step": 2,
          "title": "관할법원 제출",
          "description": "채무자 주소지 관할 지방법원 또는 근무지·거소지·의무이행지·어음수표 지급지·사무소 영업소 소재지·불법행위지 관할법원."
        },
        {
          "step": 3,
          "title": "법원 심사·결정",
          "description": "변론 없이 신속 심사. 특별 사정 없으면 지급명령 결정.",
          "deadline": "통상 신청 후 1~2개월"
        },
        {
          "step": 4,
          "title": "채무자 송달",
          "description": "채무자에게 결정문 송달. 송달일로부터 2주 이내 이의신청 가능."
        },
        {
          "step": 5,
          "title": "확정 또는 소송 전환",
          "description": "이의 없으면 확정 (확정판결 동일 효력). 이의 시 통상 소송으로 자동 이행."
        }
      ]
    },
    "all_flows": [
      {
        "id": "klac-payment-order",
        "name": "지급명령 신청 절차 (소액·금전 청구 우선 수단)",
        "applies_to": "금전·대체물·유가증권 일정 수량 지급 청구",
        "steps": [
          {
            "step": 1,
            "title": "신청서 작성",
            "description": "당사자(채권자·채무자) + 법정대리인 + 청구취지(청구금액·법정이자·소송비용) + 청구원인 기재."
          },
          {
            "step": 2,
            "title": "관할법원 제출",
            "description": "채무자 주소지 관할 지방법원 또는 근무지·거소지·의무이행지·어음수표 지급지·사무소 영업소 소재지·불법행위지 관할법원."
          },
          {
            "step": 3,
            "title": "법원 심사·결정",
            "description": "변론 없이 신속 심사. 특별 사정 없으면 지급명령 결정.",
            "deadline": "통상 신청 후 1~2개월"
          },
          {
            "step": 4,
            "title": "채무자 송달",
            "description": "채무자에게 결정문 송달. 송달일로부터 2주 이내 이의신청 가능."
          },
          {
            "step": 5,
            "title": "확정 또는 소송 전환",
            "description": "이의 없으면 확정 (확정판결 동일 효력). 이의 시 통상 소송으로 자동 이행."
          }
        ]
      },
      {
        "id": "klac-deposit-return-suit",
        "name": "전세보증금 반환 소송 절차",
        "applies_to": "임대차 종료 후 보증금 미반환 임차인",
        "steps": [
          {
            "step": 1,
            "title": "내용증명 발송",
            "description": "임대인에게 보증금 반환 청구 내용증명. 시효 중단 + 협상 시도."
          },
          {
            "step": 2,
            "title": "임차권등기명령 신청 (이사 가야 할 때)",
            "description": "관할 지방법원에 신청 → 등기 완료 후에야 이사해도 대항력·우선변제권 유지.",
            "deadline": "이사 전 필수, 등기 완료 통상 1~2개월"
          },
          {
            "step": 3,
            "title": "지급명령 또는 보증금반환소송 제기",
            "description": "다툼 적으면 지급명령, 계약·금액 다툼 있으면 본안소송. 인지·송달료 납부."
          },
          {
            "step": 4,
            "title": "강제집행",
            "description": "확정 후 임대인 부동산·예금·급여 등에 강제집행. 부동산 경매 → 보증금 회수."
          }
        ]
      },
      {
        "id": "klac-imgwondoungi",
        "name": "임차권등기명령 신청 절차",
        "applies_to": "임대차 만료 후 보증금 미반환 임차인 (이사 가야 하는 경우)",
        "steps": [
          {
            "step": 1,
            "title": "신청서 작성·날인",
            "description": "임차권등기명령신청서 작성 + 기명날인 또는 서명. 첨부서류 준비."
          },
          {
            "step": 2,
            "title": "관할법원 제출",
            "description": "임차주택 소재지 관할 지방법원·지원 또는 시·군 법원."
          },
          {
            "step": 3,
            "title": "법원 결정",
            "description": "신청 요건 충족 시 결정. 결정문 등기 촉탁.",
            "deadline": "통상 신청 후 2~6주"
          },
          {
            "step": 4,
            "title": "등기 완료 후 이사",
            "description": "등기부 확인 후 이사 → 대항력·우선변제권 유지."
          }
        ]
      },
      {
        "id": "klac-rehab-bankruptcy-support",
        "name": "개인회생·파산 신청 무료 지원 절차",
        "applies_to": "기준 중위소득 125% 이하·기초생활수급자·국가유공자 등 (구조 대상)",
        "steps": [
          {
            "step": 1,
            "title": "법률상담 (사이버·화상·방문)",
            "description": "klac.or.kr 사이버상담 또는 132 전화 또는 사무소 방문(예약 필수). 자격·요건 검토."
          },
          {
            "step": 2,
            "title": "구조대상 심사",
            "description": "소득·재산·부양가족 기준 충족 시 무료 법률구조 결정."
          },
          {
            "step": 3,
            "title": "신청서 자동작성",
            "description": "resu.klac.or.kr 종합지원센터에서 개인회생·파산 신청서 자동작성 프로그램 사용."
          },
          {
            "step": 4,
            "title": "지정변호사 대리 신청",
            "description": "공단 지정변호사가 법원 신청 + 절차 진행 (변호사 비용 면제)."
          },
          {
            "step": 5,
            "title": "변제계획인가/면책 결정까지 동행",
            "description": "회생: 변제계획안 → 인가 → 변제 진행. 파산: 면책 결정."
          }
        ]
      }
    ],
    "agency_names": [
      "대한법률구조공단 (KLAC) — 혼자하는소송 법률지원센터 + 개인회생·파산 종합지원센터"
    ],
    "required_documents": [],
    "key_deadlines": [
      {
        "label": "지급명령 결정",
        "value": "신청 후 1~2개월"
      },
      {
        "label": "지급명령 이의신청",
        "value": "송달일로부터 2주"
      },
      {
        "label": "임차권등기명령 결정",
        "value": "신청 후 2~6주"
      },
      {
        "label": "보증금반환 소멸시효",
        "value": "10년 (민법 제162조)"
      },
      {
        "label": "법률구조 신청 자격",
        "value": "기준 중위소득 125% 이하 등"
      }
    ],
    "source_urls": [
      "https://www.klac.or.kr/",
      "https://support.klac.or.kr/",
      "https://support.klac.or.kr/front/contents/02/003.do",
      "https://www.klac.or.kr/legalinfo/legalFrm.do",
      "https://resu.klac.or.kr/",
      "https://resu.klac.or.kr/main.jsp"
    ],
    "common_mistakes": [
      "임차권등기 안 하고 이사 → 대항력 상실, 후순위 채권자에 밀림",
      "지급명령에 이의신청 가능성 놓치고 단순 가압류만 → 시간·비용 증가",
      "공단 지정변호사 무료 지원 자격 미확인 → 일반 변호사 비용 발생",
      "재산 다투는 사건을 지급명령으로 신청 → 자동 본안소송 전환되면서 시간 낭비",
      "내용증명 없이 바로 소송 → 시효 중단 효과 놓칠 수 있음"
    ],
    "contacts": {
      "대표전화": "132 (국번없이)",
      "사이버상담": "klac.or.kr"
    }
  },
  "bankruptcy": {
    "domain": "bankruptcy",
    "primary_flow": {
      "id": "klac-payment-order",
      "name": "지급명령 신청 절차 (소액·금전 청구 우선 수단)",
      "applies_to": "금전·대체물·유가증권 일정 수량 지급 청구",
      "steps": [
        {
          "step": 1,
          "title": "신청서 작성",
          "description": "당사자(채권자·채무자) + 법정대리인 + 청구취지(청구금액·법정이자·소송비용) + 청구원인 기재."
        },
        {
          "step": 2,
          "title": "관할법원 제출",
          "description": "채무자 주소지 관할 지방법원 또는 근무지·거소지·의무이행지·어음수표 지급지·사무소 영업소 소재지·불법행위지 관할법원."
        },
        {
          "step": 3,
          "title": "법원 심사·결정",
          "description": "변론 없이 신속 심사. 특별 사정 없으면 지급명령 결정.",
          "deadline": "통상 신청 후 1~2개월"
        },
        {
          "step": 4,
          "title": "채무자 송달",
          "description": "채무자에게 결정문 송달. 송달일로부터 2주 이내 이의신청 가능."
        },
        {
          "step": 5,
          "title": "확정 또는 소송 전환",
          "description": "이의 없으면 확정 (확정판결 동일 효력). 이의 시 통상 소송으로 자동 이행."
        }
      ]
    },
    "all_flows": [
      {
        "id": "klac-payment-order",
        "name": "지급명령 신청 절차 (소액·금전 청구 우선 수단)",
        "applies_to": "금전·대체물·유가증권 일정 수량 지급 청구",
        "steps": [
          {
            "step": 1,
            "title": "신청서 작성",
            "description": "당사자(채권자·채무자) + 법정대리인 + 청구취지(청구금액·법정이자·소송비용) + 청구원인 기재."
          },
          {
            "step": 2,
            "title": "관할법원 제출",
            "description": "채무자 주소지 관할 지방법원 또는 근무지·거소지·의무이행지·어음수표 지급지·사무소 영업소 소재지·불법행위지 관할법원."
          },
          {
            "step": 3,
            "title": "법원 심사·결정",
            "description": "변론 없이 신속 심사. 특별 사정 없으면 지급명령 결정.",
            "deadline": "통상 신청 후 1~2개월"
          },
          {
            "step": 4,
            "title": "채무자 송달",
            "description": "채무자에게 결정문 송달. 송달일로부터 2주 이내 이의신청 가능."
          },
          {
            "step": 5,
            "title": "확정 또는 소송 전환",
            "description": "이의 없으면 확정 (확정판결 동일 효력). 이의 시 통상 소송으로 자동 이행."
          }
        ]
      },
      {
        "id": "klac-deposit-return-suit",
        "name": "전세보증금 반환 소송 절차",
        "applies_to": "임대차 종료 후 보증금 미반환 임차인",
        "steps": [
          {
            "step": 1,
            "title": "내용증명 발송",
            "description": "임대인에게 보증금 반환 청구 내용증명. 시효 중단 + 협상 시도."
          },
          {
            "step": 2,
            "title": "임차권등기명령 신청 (이사 가야 할 때)",
            "description": "관할 지방법원에 신청 → 등기 완료 후에야 이사해도 대항력·우선변제권 유지.",
            "deadline": "이사 전 필수, 등기 완료 통상 1~2개월"
          },
          {
            "step": 3,
            "title": "지급명령 또는 보증금반환소송 제기",
            "description": "다툼 적으면 지급명령, 계약·금액 다툼 있으면 본안소송. 인지·송달료 납부."
          },
          {
            "step": 4,
            "title": "강제집행",
            "description": "확정 후 임대인 부동산·예금·급여 등에 강제집행. 부동산 경매 → 보증금 회수."
          }
        ]
      },
      {
        "id": "klac-imgwondoungi",
        "name": "임차권등기명령 신청 절차",
        "applies_to": "임대차 만료 후 보증금 미반환 임차인 (이사 가야 하는 경우)",
        "steps": [
          {
            "step": 1,
            "title": "신청서 작성·날인",
            "description": "임차권등기명령신청서 작성 + 기명날인 또는 서명. 첨부서류 준비."
          },
          {
            "step": 2,
            "title": "관할법원 제출",
            "description": "임차주택 소재지 관할 지방법원·지원 또는 시·군 법원."
          },
          {
            "step": 3,
            "title": "법원 결정",
            "description": "신청 요건 충족 시 결정. 결정문 등기 촉탁.",
            "deadline": "통상 신청 후 2~6주"
          },
          {
            "step": 4,
            "title": "등기 완료 후 이사",
            "description": "등기부 확인 후 이사 → 대항력·우선변제권 유지."
          }
        ]
      },
      {
        "id": "klac-rehab-bankruptcy-support",
        "name": "개인회생·파산 신청 무료 지원 절차",
        "applies_to": "기준 중위소득 125% 이하·기초생활수급자·국가유공자 등 (구조 대상)",
        "steps": [
          {
            "step": 1,
            "title": "법률상담 (사이버·화상·방문)",
            "description": "klac.or.kr 사이버상담 또는 132 전화 또는 사무소 방문(예약 필수). 자격·요건 검토."
          },
          {
            "step": 2,
            "title": "구조대상 심사",
            "description": "소득·재산·부양가족 기준 충족 시 무료 법률구조 결정."
          },
          {
            "step": 3,
            "title": "신청서 자동작성",
            "description": "resu.klac.or.kr 종합지원센터에서 개인회생·파산 신청서 자동작성 프로그램 사용."
          },
          {
            "step": 4,
            "title": "지정변호사 대리 신청",
            "description": "공단 지정변호사가 법원 신청 + 절차 진행 (변호사 비용 면제)."
          },
          {
            "step": 5,
            "title": "변제계획인가/면책 결정까지 동행",
            "description": "회생: 변제계획안 → 인가 → 변제 진행. 파산: 면책 결정."
          }
        ]
      }
    ],
    "agency_names": [
      "대한법률구조공단 (KLAC) — 혼자하는소송 법률지원센터 + 개인회생·파산 종합지원센터"
    ],
    "required_documents": [],
    "key_deadlines": [
      {
        "label": "지급명령 결정",
        "value": "신청 후 1~2개월"
      },
      {
        "label": "지급명령 이의신청",
        "value": "송달일로부터 2주"
      },
      {
        "label": "임차권등기명령 결정",
        "value": "신청 후 2~6주"
      },
      {
        "label": "보증금반환 소멸시효",
        "value": "10년 (민법 제162조)"
      },
      {
        "label": "법률구조 신청 자격",
        "value": "기준 중위소득 125% 이하 등"
      }
    ],
    "source_urls": [
      "https://www.klac.or.kr/",
      "https://support.klac.or.kr/",
      "https://support.klac.or.kr/front/contents/02/003.do",
      "https://www.klac.or.kr/legalinfo/legalFrm.do",
      "https://resu.klac.or.kr/",
      "https://resu.klac.or.kr/main.jsp"
    ],
    "common_mistakes": [
      "임차권등기 안 하고 이사 → 대항력 상실, 후순위 채권자에 밀림",
      "지급명령에 이의신청 가능성 놓치고 단순 가압류만 → 시간·비용 증가",
      "공단 지정변호사 무료 지원 자격 미확인 → 일반 변호사 비용 발생",
      "재산 다투는 사건을 지급명령으로 신청 → 자동 본안소송 전환되면서 시간 낭비",
      "내용증명 없이 바로 소송 → 시효 중단 효과 놓칠 수 있음"
    ],
    "contacts": {
      "대표전화": "132 (국번없이)",
      "사이버상담": "klac.or.kr"
    }
  },
  "small-claims": {
    "domain": "small-claims",
    "primary_flow": {
      "id": "klac-payment-order",
      "name": "지급명령 신청 절차 (소액·금전 청구 우선 수단)",
      "applies_to": "금전·대체물·유가증권 일정 수량 지급 청구",
      "steps": [
        {
          "step": 1,
          "title": "신청서 작성",
          "description": "당사자(채권자·채무자) + 법정대리인 + 청구취지(청구금액·법정이자·소송비용) + 청구원인 기재."
        },
        {
          "step": 2,
          "title": "관할법원 제출",
          "description": "채무자 주소지 관할 지방법원 또는 근무지·거소지·의무이행지·어음수표 지급지·사무소 영업소 소재지·불법행위지 관할법원."
        },
        {
          "step": 3,
          "title": "법원 심사·결정",
          "description": "변론 없이 신속 심사. 특별 사정 없으면 지급명령 결정.",
          "deadline": "통상 신청 후 1~2개월"
        },
        {
          "step": 4,
          "title": "채무자 송달",
          "description": "채무자에게 결정문 송달. 송달일로부터 2주 이내 이의신청 가능."
        },
        {
          "step": 5,
          "title": "확정 또는 소송 전환",
          "description": "이의 없으면 확정 (확정판결 동일 효력). 이의 시 통상 소송으로 자동 이행."
        }
      ]
    },
    "all_flows": [
      {
        "id": "klac-payment-order",
        "name": "지급명령 신청 절차 (소액·금전 청구 우선 수단)",
        "applies_to": "금전·대체물·유가증권 일정 수량 지급 청구",
        "steps": [
          {
            "step": 1,
            "title": "신청서 작성",
            "description": "당사자(채권자·채무자) + 법정대리인 + 청구취지(청구금액·법정이자·소송비용) + 청구원인 기재."
          },
          {
            "step": 2,
            "title": "관할법원 제출",
            "description": "채무자 주소지 관할 지방법원 또는 근무지·거소지·의무이행지·어음수표 지급지·사무소 영업소 소재지·불법행위지 관할법원."
          },
          {
            "step": 3,
            "title": "법원 심사·결정",
            "description": "변론 없이 신속 심사. 특별 사정 없으면 지급명령 결정.",
            "deadline": "통상 신청 후 1~2개월"
          },
          {
            "step": 4,
            "title": "채무자 송달",
            "description": "채무자에게 결정문 송달. 송달일로부터 2주 이내 이의신청 가능."
          },
          {
            "step": 5,
            "title": "확정 또는 소송 전환",
            "description": "이의 없으면 확정 (확정판결 동일 효력). 이의 시 통상 소송으로 자동 이행."
          }
        ]
      },
      {
        "id": "klac-deposit-return-suit",
        "name": "전세보증금 반환 소송 절차",
        "applies_to": "임대차 종료 후 보증금 미반환 임차인",
        "steps": [
          {
            "step": 1,
            "title": "내용증명 발송",
            "description": "임대인에게 보증금 반환 청구 내용증명. 시효 중단 + 협상 시도."
          },
          {
            "step": 2,
            "title": "임차권등기명령 신청 (이사 가야 할 때)",
            "description": "관할 지방법원에 신청 → 등기 완료 후에야 이사해도 대항력·우선변제권 유지.",
            "deadline": "이사 전 필수, 등기 완료 통상 1~2개월"
          },
          {
            "step": 3,
            "title": "지급명령 또는 보증금반환소송 제기",
            "description": "다툼 적으면 지급명령, 계약·금액 다툼 있으면 본안소송. 인지·송달료 납부."
          },
          {
            "step": 4,
            "title": "강제집행",
            "description": "확정 후 임대인 부동산·예금·급여 등에 강제집행. 부동산 경매 → 보증금 회수."
          }
        ]
      },
      {
        "id": "klac-imgwondoungi",
        "name": "임차권등기명령 신청 절차",
        "applies_to": "임대차 만료 후 보증금 미반환 임차인 (이사 가야 하는 경우)",
        "steps": [
          {
            "step": 1,
            "title": "신청서 작성·날인",
            "description": "임차권등기명령신청서 작성 + 기명날인 또는 서명. 첨부서류 준비."
          },
          {
            "step": 2,
            "title": "관할법원 제출",
            "description": "임차주택 소재지 관할 지방법원·지원 또는 시·군 법원."
          },
          {
            "step": 3,
            "title": "법원 결정",
            "description": "신청 요건 충족 시 결정. 결정문 등기 촉탁.",
            "deadline": "통상 신청 후 2~6주"
          },
          {
            "step": 4,
            "title": "등기 완료 후 이사",
            "description": "등기부 확인 후 이사 → 대항력·우선변제권 유지."
          }
        ]
      },
      {
        "id": "klac-rehab-bankruptcy-support",
        "name": "개인회생·파산 신청 무료 지원 절차",
        "applies_to": "기준 중위소득 125% 이하·기초생활수급자·국가유공자 등 (구조 대상)",
        "steps": [
          {
            "step": 1,
            "title": "법률상담 (사이버·화상·방문)",
            "description": "klac.or.kr 사이버상담 또는 132 전화 또는 사무소 방문(예약 필수). 자격·요건 검토."
          },
          {
            "step": 2,
            "title": "구조대상 심사",
            "description": "소득·재산·부양가족 기준 충족 시 무료 법률구조 결정."
          },
          {
            "step": 3,
            "title": "신청서 자동작성",
            "description": "resu.klac.or.kr 종합지원센터에서 개인회생·파산 신청서 자동작성 프로그램 사용."
          },
          {
            "step": 4,
            "title": "지정변호사 대리 신청",
            "description": "공단 지정변호사가 법원 신청 + 절차 진행 (변호사 비용 면제)."
          },
          {
            "step": 5,
            "title": "변제계획인가/면책 결정까지 동행",
            "description": "회생: 변제계획안 → 인가 → 변제 진행. 파산: 면책 결정."
          }
        ]
      },
      {
        "id": "kca-damage-relief",
        "name": "한국소비자원 피해구제 신청 절차",
        "applies_to": "사업자와 분쟁(환불·교환·A/S·온라인쇼핑·중고거래·서비스)",
        "steps": [
          {
            "step": 1,
            "title": "사전 상담",
            "description": "1372 소비자상담센터 또는 consumer.go.kr 에 먼저 상담. 자율 해결 시도."
          },
          {
            "step": 2,
            "title": "피해구제 신청",
            "description": "방문·우편·팩스·인터넷(kca.go.kr)으로 신청서 + 증빙 제출."
          },
          {
            "step": 3,
            "title": "사실조사·합의권고",
            "description": "한국소비자원이 양측 의견 청취 + 사실조사 + 합의권고.",
            "deadline": "30일 이내 처리 (의료·보험·농어업·시험검사 사건은 90일까지 연장)"
          },
          {
            "step": 4,
            "title": "분쟁조정 회부",
            "description": "30일(또는 연장된 90일) 내 합의 불성립 시 소비자분쟁조정위원회 회부."
          },
          {
            "step": 5,
            "title": "조정안 작성 및 결정",
            "description": "분쟁조정위가 조정안 작성. 양측 수락 시 재판상 화해 효력.",
            "deadline": "조정 신청일로부터 30일 이내"
          }
        ]
      },
      {
        "id": "tdrc-procedure",
        "name": "통신분쟁조정 신청 절차 (휴대폰·인터넷·소액결제)",
        "applies_to": "이동통신·인터넷·결합상품·소액결제·명의도용 등 통신서비스 분쟁",
        "steps": [
          {
            "step": 1,
            "title": "통신사 자체 민원 선행",
            "description": "통신사 고객센터에 1차 민원 제기 (보통 14일 내 답변)."
          },
          {
            "step": 2,
            "title": "분쟁조정 신청",
            "description": "tdrc.kr 또는 kcc.go.kr 통신분쟁안내 통해 신청. 계약서·통화내역·결제내역 첨부."
          },
          {
            "step": 3,
            "title": "심사·조정안 작성",
            "description": "위원회 심사 → 조정안 작성.",
            "deadline": "신청일로부터 60일 (1회 30일 연장 가능)"
          },
          {
            "step": 4,
            "title": "조정안 수락·결정",
            "description": "통지 후 15일 내 양측 수락 시 재판상 화해 효력.",
            "deadline": "통지 후 15일"
          }
        ]
      },
      {
        "id": "kcdrc-procedure",
        "name": "콘텐츠분쟁조정 신청 절차 (게임·디지털콘텐츠)",
        "applies_to": "게임·디지털콘텐츠 결제·이용제한·서비스하자·미성년자 결제 분쟁",
        "steps": [
          {
            "step": 1,
            "title": "사업자 환불 요청 선행",
            "description": "콘텐츠 사업자에 환불·해지 요청. 거부 시 분쟁조정 신청."
          },
          {
            "step": 2,
            "title": "콘텐츠분쟁조정 신청",
            "description": "kcdrc.kr 온라인 신청. 결제내역·서비스이용내역 등 첨부."
          },
          {
            "step": 3,
            "title": "사실조사·합의 시도",
            "description": "위원회가 사업자 의견 청취 + 합의 권고."
          },
          {
            "step": 4,
            "title": "조정안 작성·수락",
            "description": "조정안 통지 → 양측 수락 시 효력 발생.",
            "deadline": "신청일로부터 60일"
          }
        ]
      }
    ],
    "agency_names": [
      "대한법률구조공단 (KLAC) — 혼자하는소송 법률지원센터 + 개인회생·파산 종합지원센터",
      "한국소비자원(KCA) + 소비자24",
      "통신분쟁조정위원회 + 콘텐츠분쟁조정위원회"
    ],
    "required_documents": [
      {
        "category": "피해구제 신청",
        "items": [
          "피해구제신청서 (kca.go.kr 양식)",
          "신분증",
          "거래·계약·구매 영수증",
          "피해 입증자료 (사진·녹취·이메일·계좌이체내역)",
          "사업자 인적사항·연락처"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "지급명령 결정",
        "value": "신청 후 1~2개월"
      },
      {
        "label": "지급명령 이의신청",
        "value": "송달일로부터 2주"
      },
      {
        "label": "임차권등기명령 결정",
        "value": "신청 후 2~6주"
      },
      {
        "label": "보증금반환 소멸시효",
        "value": "10년 (민법 제162조)"
      },
      {
        "label": "법률구조 신청 자격",
        "value": "기준 중위소득 125% 이하 등"
      },
      {
        "label": "피해구제 처리",
        "value": "30일 (의료·보험 등 60~90일까지 연장)"
      },
      {
        "label": "분쟁조정 결정",
        "value": "신청일로부터 30일"
      },
      {
        "label": "조정안 수락 기한",
        "value": "통지 후 15일 내"
      },
      {
        "label": "통신분쟁 처리",
        "value": "60일 (30일 연장 가능)"
      },
      {
        "label": "콘텐츠분쟁 처리",
        "value": "60일"
      },
      {
        "label": "조정안 수락 기한",
        "value": "통지 후 15일"
      }
    ],
    "source_urls": [
      "https://www.klac.or.kr/",
      "https://support.klac.or.kr/",
      "https://support.klac.or.kr/front/contents/02/003.do",
      "https://www.klac.or.kr/legalinfo/legalFrm.do",
      "https://resu.klac.or.kr/",
      "https://resu.klac.or.kr/main.jsp",
      "https://www.kca.go.kr/odr/",
      "https://www.kca.go.kr/odr/pg/ma/pgProcssInfo2.do",
      "https://www.kca.go.kr/odr/link/pg/pr/osPgStpSobiGuidW.do",
      "https://www.consumer.go.kr/",
      "https://www.tdrc.kr/",
      "https://kcc.go.kr/user.do?page=A09031100&dc=K09031100",
      "https://www.kcdrc.kr/",
      "https://wiseuser.go.kr/application.do?boardtypecode=5396"
    ],
    "common_mistakes": [
      "임차권등기 안 하고 이사 → 대항력 상실, 후순위 채권자에 밀림",
      "지급명령에 이의신청 가능성 놓치고 단순 가압류만 → 시간·비용 증가",
      "공단 지정변호사 무료 지원 자격 미확인 → 일반 변호사 비용 발생",
      "재산 다투는 사건을 지급명령으로 신청 → 자동 본안소송 전환되면서 시간 낭비",
      "내용증명 없이 바로 소송 → 시효 중단 효과 놓칠 수 있음",
      "사전 상담 없이 바로 피해구제 신청 → 반려 가능",
      "사업자 인적사항 모름 → 사실조사 지연",
      "온라인쇼핑은 청약철회권(전자상거래법 7일) 별도 활용 가능한데 모름",
      "조정안 수락 15일 시한 도과 → 거부로 간주",
      "통신사 자체민원 없이 바로 분쟁조정 신청 → 반려 가능",
      "미성년자 결제 환불 시 부모 동의 입증 자료 미흡 → 거부 사유",
      "게임 환불 시 캐시·아이템 일부 사용 → 부분 환불로 한정",
      "조정안 15일 시한 도과 → 거부 간주",
      "본 분쟁조정과 한국소비자원 피해구제는 동시 진행 불가"
    ],
    "contacts": {
      "대표전화": "132 (국번없이)",
      "사이버상담": "klac.or.kr",
      "한국소비자원 상담": "1372 (국번없이)",
      "소비자24": "consumer.go.kr",
      "통신분쟁조정위원회": "방통위 국번없이 1335",
      "콘텐츠분쟁조정위원회": "1588-2102"
    }
  },
  "divorce": {
    "domain": "divorce",
    "primary_flow": {
      "id": "consensual-divorce",
      "name": "협의이혼 절차",
      "applies_to": "이혼 합의된 부부",
      "steps": [
        {
          "step": 1,
          "title": "협의이혼의사확인 신청",
          "description": "관할 가정법원·지원 또는 시·군 법원에 부부 공동 출석 신청. 신청서 + 증인 2명 서명·날인 + 가족·혼인관계증명서 + (자녀 있으면) 양육·친권자 협의서 1+사본2통."
        },
        {
          "step": 2,
          "title": "이혼 안내",
          "description": "법원이 이혼절차 안내."
        },
        {
          "step": 3,
          "title": "이혼숙려기간",
          "description": "안내일로부터 양육 자녀 있으면 3개월, 없으면 1개월. 폭력 등 급박 사정 시 단축·면제 가능.",
          "deadline": "양육자녀 있음 3개월 / 없음 1개월"
        },
        {
          "step": 4,
          "title": "이혼의사 확인",
          "description": "지정일에 부부 공동 출석. 판사가 이혼의사·양육·친권 확인 → 확인서 + 양육비부담조서 작성."
        },
        {
          "step": 5,
          "title": "행정관청 이혼신고",
          "description": "확인서 받은 날로부터 3개월 내 시·군·구청에 이혼신고. 미신고 시 협의이혼 무효.",
          "deadline": "확인서 발급 후 3개월"
        }
      ]
    },
    "all_flows": [
      {
        "id": "consensual-divorce",
        "name": "협의이혼 절차",
        "applies_to": "이혼 합의된 부부",
        "steps": [
          {
            "step": 1,
            "title": "협의이혼의사확인 신청",
            "description": "관할 가정법원·지원 또는 시·군 법원에 부부 공동 출석 신청. 신청서 + 증인 2명 서명·날인 + 가족·혼인관계증명서 + (자녀 있으면) 양육·친권자 협의서 1+사본2통."
          },
          {
            "step": 2,
            "title": "이혼 안내",
            "description": "법원이 이혼절차 안내."
          },
          {
            "step": 3,
            "title": "이혼숙려기간",
            "description": "안내일로부터 양육 자녀 있으면 3개월, 없으면 1개월. 폭력 등 급박 사정 시 단축·면제 가능.",
            "deadline": "양육자녀 있음 3개월 / 없음 1개월"
          },
          {
            "step": 4,
            "title": "이혼의사 확인",
            "description": "지정일에 부부 공동 출석. 판사가 이혼의사·양육·친권 확인 → 확인서 + 양육비부담조서 작성."
          },
          {
            "step": 5,
            "title": "행정관청 이혼신고",
            "description": "확인서 받은 날로부터 3개월 내 시·군·구청에 이혼신고. 미신고 시 협의이혼 무효.",
            "deadline": "확인서 발급 후 3개월"
          }
        ]
      },
      {
        "id": "litigation-divorce",
        "name": "재판상 이혼 절차 (민법 제840조 사유)",
        "applies_to": "협의 불성립 + 6가지 법정 이혼사유 충족",
        "steps": [
          {
            "step": 1,
            "title": "조정신청 (조정전치주의)",
            "description": "관할 가정법원에 조정 신청. 가사조사관 사실조사 + 조정위원 합의 시도.",
            "deadline": "조정 통상 2~4개월"
          },
          {
            "step": 2,
            "title": "조정 성립 또는 소송 이행",
            "description": "조정 성립 시 종결. 조정 불성립 시 자동 본안소송으로 이행."
          },
          {
            "step": 3,
            "title": "본안 변론·증거조사",
            "description": "변론기일 + 증인신문 + 가사조사. 통상 6개월~1년."
          },
          {
            "step": 4,
            "title": "판결 선고",
            "description": "이혼 + 위자료 + 재산분할 + 친권·양육권·양육비 일괄 판단."
          },
          {
            "step": 5,
            "title": "확정 후 행정신고",
            "description": "판결 확정일로부터 1개월 내 이혼신고."
          }
        ]
      }
    ],
    "agency_names": [
      "법원 가정법원 (전자민원센터) + 찾기쉬운 생활법령정보"
    ],
    "required_documents": [
      {
        "category": "협의이혼",
        "items": [
          "협의이혼의사확인신청서 (증인 2명 서명·날인)",
          "부부 각자 가족관계증명서 1통",
          "부부 각자 혼인관계증명서 1통",
          "(자녀 있는 경우) 양육·친권자 협의서 1통 + 사본 2통",
          "또는 가정법원 심판정본 + 확정증명서 각 3통",
          "주민등록표등본 1통"
        ]
      },
      {
        "category": "재판상 이혼",
        "items": [
          "이혼청구 소장 (위자료·재산분할·친권·양육 청구 포함)",
          "혼인관계증명서·가족관계증명서·기본증명서",
          "주민등록등본",
          "이혼사유 입증자료 (외도 증거·진단서·녹취·문자 등)",
          "재산 입증자료 (부동산·예금·주식·차량 등기·잔고증명)"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "이혼숙려기간 (양육자녀 있음)",
        "value": "안내 후 3개월"
      },
      {
        "label": "이혼숙려기간 (자녀 없음)",
        "value": "안내 후 1개월"
      },
      {
        "label": "협의이혼 확인서 신고기한",
        "value": "발급 후 3개월"
      },
      {
        "label": "재판상 이혼 판결 후 신고",
        "value": "확정 후 1개월"
      },
      {
        "label": "위자료 청구 시효",
        "value": "이혼일로부터 3년"
      },
      {
        "label": "재산분할 청구 시효",
        "value": "이혼일로부터 2년 (제척기간)"
      }
    ],
    "source_urls": [
      "https://help.scourt.go.kr/nm/min_3/min_3_2/min_3_2_1/index.html",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=233&ccfNo=2&cciNo=2&cnpClsNo=1",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=233&ccfNo=3&cciNo=2&cnpClsNo=1"
    ],
    "common_mistakes": [
      "확인서 받고 3개월 내 신고 안 하면 협의이혼 무효 — 다시 신청 필요",
      "양육·친권 협의서 없이 신청 → 이혼 자체 성립 불가",
      "재산분할 청구 시효(이혼 후 2년) 도과 → 청구 불가",
      "조정전치주의 모르고 본소부터 → 조정 회부로 시간 지연",
      "외도 증거를 위법 수집(불법녹음·해킹) → 증거능력 배척"
    ],
    "contacts": {}
  },
  "defamation": {
    "domain": "defamation",
    "primary_flow": {
      "id": "pidrc-individual-mediation",
      "name": "개인정보 분쟁조정 신청 절차 (개인)",
      "applies_to": "개인정보 유출·무단수집·동의 없는 제3자 제공·삭제 거부 등 침해 피해자",
      "steps": [
        {
          "step": 1,
          "title": "분쟁조정 신청",
          "description": "kopico.go.kr 온라인 신청 또는 우편 (별지 제1호 서식, 대리인은 제2호). 무료.",
          "deadline": "침해사실 인지 후 빠를수록 유리"
        },
        {
          "step": 2,
          "title": "사실조사·의견청취",
          "description": "분쟁조정위원회가 양측 의견청취 + 증거수집 + 전문가 자문."
        },
        {
          "step": 3,
          "title": "조정안 작성",
          "description": "위원회가 양측에 합당한 조정안 제시.",
          "deadline": "신청일로부터 60일 이내 (의결로 연장 가능)"
        },
        {
          "step": 4,
          "title": "수락 결정",
          "description": "양측 모두 수락 시 조정 성립, 재판상 화해 효력 (집행권원).",
          "deadline": "조정안 통지 후 15일 이내"
        },
        {
          "step": 5,
          "title": "불성립 시 소송 또는 집단분쟁조정",
          "description": "수락 거부 시 민사소송. 다수 피해자(50명 이상) 시 집단분쟁조정 신청 가능."
        }
      ]
    },
    "all_flows": [
      {
        "id": "pidrc-individual-mediation",
        "name": "개인정보 분쟁조정 신청 절차 (개인)",
        "applies_to": "개인정보 유출·무단수집·동의 없는 제3자 제공·삭제 거부 등 침해 피해자",
        "steps": [
          {
            "step": 1,
            "title": "분쟁조정 신청",
            "description": "kopico.go.kr 온라인 신청 또는 우편 (별지 제1호 서식, 대리인은 제2호). 무료.",
            "deadline": "침해사실 인지 후 빠를수록 유리"
          },
          {
            "step": 2,
            "title": "사실조사·의견청취",
            "description": "분쟁조정위원회가 양측 의견청취 + 증거수집 + 전문가 자문."
          },
          {
            "step": 3,
            "title": "조정안 작성",
            "description": "위원회가 양측에 합당한 조정안 제시.",
            "deadline": "신청일로부터 60일 이내 (의결로 연장 가능)"
          },
          {
            "step": 4,
            "title": "수락 결정",
            "description": "양측 모두 수락 시 조정 성립, 재판상 화해 효력 (집행권원).",
            "deadline": "조정안 통지 후 15일 이내"
          },
          {
            "step": 5,
            "title": "불성립 시 소송 또는 집단분쟁조정",
            "description": "수락 거부 시 민사소송. 다수 피해자(50명 이상) 시 집단분쟁조정 신청 가능."
          }
        ]
      },
      {
        "id": "pidrc-collective-mediation",
        "name": "개인정보 집단분쟁조정 절차",
        "applies_to": "동일 사건으로 50명 이상 피해 (대량 유출·해킹 등)",
        "steps": [
          {
            "step": 1,
            "title": "신청 자격자",
            "description": "정보주체·국가기관·소비자단체·비영리민간단체."
          },
          {
            "step": 2,
            "title": "공고",
            "description": "개시 결정 후 14일 이상 공고하여 추가 참가자 모집."
          },
          {
            "step": 3,
            "title": "조정안 작성·수락",
            "description": "일반분쟁조정과 동일하나 처리기한 60일 + 30일 연장 가능."
          }
        ]
      }
    ],
    "agency_names": [
      "개인정보분쟁조정위원회(PIDRC, kopico.go.kr) + 개인정보보호위원회"
    ],
    "required_documents": [
      {
        "category": "분쟁조정 신청",
        "items": [
          "분쟁조정신청서 (별지 제1호)",
          "대리인 신청 시 위임장 + 별지 제2호",
          "신분증 사본",
          "침해사실 입증자료 (스크린샷·이메일·통보문)",
          "사업자(피신청인) 인적사항·연락처"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "조정안 작성",
        "value": "신청일로부터 60일 (연장 가능)"
      },
      {
        "label": "조정안 수락",
        "value": "통지 후 15일 이내"
      },
      {
        "label": "집단분쟁조정 공고",
        "value": "최소 14일"
      },
      {
        "label": "신고 대표 번호",
        "value": "118 (국번없이)"
      }
    ],
    "source_urls": [
      "https://www.kopico.go.kr/",
      "https://www.kopico.go.kr/intro/disputeMediatIntro.do",
      "https://www.privacy.go.kr/front/contents/cntntsView.do?contsNo=47",
      "https://www.privacy.go.kr/front/contents/cntntsView.do?contsNo=48"
    ],
    "common_mistakes": [
      "유출·침해 인지 후 시간 끌면 증거 소실 → 캡처·녹취 즉시",
      "분쟁조정 결과를 일방적 강제 효력으로 오해 → 양측 수락 필요",
      "다수 피해자 사건에서 개별 신청만 → 집단분쟁조정으로 효율화 가능",
      "사업자 폐업·연락두절 시 분쟁조정 한계 → 형사고소·집단소송 병행"
    ],
    "contacts": {
      "개인정보보호위원회 콜센터": "1833-6972",
      "개인정보 침해신고": "118 (국번없이)"
    }
  },
  "school-violence": {
    "domain": "school-violence",
    "primary_flow": {
      "id": "sv-incident-handling",
      "name": "학교폭력 사안처리 흐름 (피해학생 측 시점)",
      "applies_to": "학교폭력예방법상 학교폭력 (신체·언어·사이버·따돌림 등)",
      "steps": [
        {
          "step": 1,
          "title": "신고·접수",
          "description": "117 학교폭력 신고센터, 학교전담경찰관(SPO), 담임·생활교사, 학교장 누구에게나 가능. 누구든 알게 되면 신고 의무.",
          "deadline": "사실 인지 즉시"
        },
        {
          "step": 2,
          "title": "초기 사실확인",
          "description": "학교 전담기구가 가·피해 사실 여부 확인. 피해학생 보호조치 (보호실·결석 인정·심리상담)."
        },
        {
          "step": 3,
          "title": "학교장 자체해결 여부 심의",
          "description": "전담기구가 자체해결 요건 4가지 충족·서면확인 받으면 자체해결 가능. 그렇지 않으면 학폭위 회부."
        },
        {
          "step": 4,
          "title": "학폭심의위원회 회부 (자체해결 불가 시)",
          "description": "교육지원청 산하 학교폭력대책심의위원회. 양측 진술·증거 검토 → 처분 결정.",
          "deadline": "신고 접수일로부터 21일 이내 (7일 연장 가능)"
        },
        {
          "step": 5,
          "title": "처분·이행·재심",
          "description": "가해학생 처분(서면사과~퇴학) + 피해학생 보호조치. 재심 청구는 처분 통보 후 17일 내 행정심판."
        }
      ]
    },
    "all_flows": [
      {
        "id": "sv-incident-handling",
        "name": "학교폭력 사안처리 흐름 (피해학생 측 시점)",
        "applies_to": "학교폭력예방법상 학교폭력 (신체·언어·사이버·따돌림 등)",
        "steps": [
          {
            "step": 1,
            "title": "신고·접수",
            "description": "117 학교폭력 신고센터, 학교전담경찰관(SPO), 담임·생활교사, 학교장 누구에게나 가능. 누구든 알게 되면 신고 의무.",
            "deadline": "사실 인지 즉시"
          },
          {
            "step": 2,
            "title": "초기 사실확인",
            "description": "학교 전담기구가 가·피해 사실 여부 확인. 피해학생 보호조치 (보호실·결석 인정·심리상담)."
          },
          {
            "step": 3,
            "title": "학교장 자체해결 여부 심의",
            "description": "전담기구가 자체해결 요건 4가지 충족·서면확인 받으면 자체해결 가능. 그렇지 않으면 학폭위 회부."
          },
          {
            "step": 4,
            "title": "학폭심의위원회 회부 (자체해결 불가 시)",
            "description": "교육지원청 산하 학교폭력대책심의위원회. 양측 진술·증거 검토 → 처분 결정.",
            "deadline": "신고 접수일로부터 21일 이내 (7일 연장 가능)"
          },
          {
            "step": 5,
            "title": "처분·이행·재심",
            "description": "가해학생 처분(서면사과~퇴학) + 피해학생 보호조치. 재심 청구는 처분 통보 후 17일 내 행정심판."
          }
        ]
      },
      {
        "id": "sv-appeal",
        "name": "처분 불복 시 재심·행정소송",
        "steps": [
          {
            "step": 1,
            "title": "행정심판 청구",
            "description": "처분 통보일로부터 90일 이내 (단, 알게 된 날부터 90일·있던 날부터 180일 중 빠른 쪽). 가해학생·피해학생 모두 가능.",
            "deadline": "처분 통보 후 90일"
          },
          {
            "step": 2,
            "title": "행정심판 결정",
            "description": "통상 60일 내. 인용 시 처분 취소·변경."
          },
          {
            "step": 3,
            "title": "행정소송",
            "description": "행정심판 결과 불복 시 행정법원에 취소소송."
          }
        ]
      }
    ],
    "agency_names": [
      "교육부 학교폭력 사안처리 가이드북 (2025년 기준, 학교폭력예방법)"
    ],
    "required_documents": [
      {
        "category": "신고 단계",
        "items": [
          "학교폭력 신고서 (학교 비치 양식)",
          "피해 진술서 (육하원칙)",
          "사진·녹음·문자·SNS 캡처 등 증거",
          "진단서 (신체적 피해)",
          "심리상담·정신과 진료 기록"
        ]
      },
      {
        "category": "행정심판 청구",
        "items": [
          "행정심판청구서",
          "처분 통보서 사본",
          "이의 사유서·근거자료"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "학폭심의위 처리",
        "value": "신고 후 21일 (7일 연장 가능)"
      },
      {
        "label": "행정심판 청구",
        "value": "처분 통보 후 90일"
      },
      {
        "label": "자체해결 진단서 기준",
        "value": "2주 이상 치료 발급 안 됨"
      }
    ],
    "source_urls": [
      "https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=316&boardSeq=102619",
      "https://www.goe.go.kr/resource/old/BBSMSTR_000000030138/BBS_202502140257008950.pdf",
      "https://clik.nanet.go.kr/clikr-collection/policyinfo/202/1010/2023/CLIKC8765283570692271_attach_1.pdf"
    ],
    "common_mistakes": [
      "학교 자체해결 동의 후 진단서 발급 → 자체해결 효력 분쟁",
      "117·학교 신고만 하고 증거 미보존 → 심의 단계에서 입증 어려움",
      "재심 90일 시한 도과 → 처분 확정",
      "사이버 학폭 캡처 휘발성 인식 부족 → 즉시 갈무리 + 메타데이터 보존",
      "보복금지 조치(2호) 위반 시 가중처벌 가능한데 가해 측 인지 부족"
    ],
    "contacts": {
      "117 학교폭력 신고센터": "117 (국번없이)",
      "학교전담경찰관(SPO)": "학교 또는 관할 경찰서"
    }
  },
  "neighbor-dispute": {
    "domain": "neighbor-dispute",
    "primary_flow": {
      "id": "noise-pre-mediation",
      "name": "층간소음 단계별 대응 (분쟁조정 전)",
      "steps": [
        {
          "step": 1,
          "title": "관리사무소 등 단지 내 자체 조정",
          "description": "공동주택관리법상 관리주체에게 분쟁 조정 요청. 통보·중재 시도."
        },
        {
          "step": 2,
          "title": "층간소음이웃사이센터 상담",
          "description": "1661-2642 또는 floor.noiseinfo.or.kr 신청. 전화상담·방문 측정 가능. 무료.",
          "deadline": "통상 신청 후 1~2개월 내 측정"
        },
        {
          "step": 3,
          "title": "공동주택관리분쟁조정위원회",
          "description": "관리사무소 상대 분쟁이거나 단지 내 조정으로도 해결 안 될 때 namc.molit.go.kr 에 신청."
        }
      ]
    },
    "all_flows": [
      {
        "id": "noise-pre-mediation",
        "name": "층간소음 단계별 대응 (분쟁조정 전)",
        "steps": [
          {
            "step": 1,
            "title": "관리사무소 등 단지 내 자체 조정",
            "description": "공동주택관리법상 관리주체에게 분쟁 조정 요청. 통보·중재 시도."
          },
          {
            "step": 2,
            "title": "층간소음이웃사이센터 상담",
            "description": "1661-2642 또는 floor.noiseinfo.or.kr 신청. 전화상담·방문 측정 가능. 무료.",
            "deadline": "통상 신청 후 1~2개월 내 측정"
          },
          {
            "step": 3,
            "title": "공동주택관리분쟁조정위원회",
            "description": "관리사무소 상대 분쟁이거나 단지 내 조정으로도 해결 안 될 때 namc.molit.go.kr 에 신청."
          }
        ]
      },
      {
        "id": "ecc-environmental-mediation",
        "name": "환경분쟁조정 신청 절차",
        "applies_to": "층간소음·일조권·진동·악취·매연 등 환경피해 분쟁",
        "steps": [
          {
            "step": 1,
            "title": "분쟁조정 신청",
            "description": "ecc.me.go.kr (중앙) 또는 시·도 환경분쟁조정위원회 신청. 무료(재정만 일부 수수료)."
          },
          {
            "step": 2,
            "title": "담당자 지정·현지조사",
            "description": "현지 측정·전문가 검토 + 인과관계 규명. 층간소음은 측정값과 환경부 기준 대조 (주간 39dB·야간 34dB 등)."
          },
          {
            "step": 3,
            "title": "조정안 작성·결정",
            "description": "유형별로 알선·조정·재정·중재 결정.",
            "deadline": "알선·조정 3개월, 재정 9개월(연장 가능)"
          },
          {
            "step": 4,
            "title": "이행 또는 소송 전환",
            "description": "조정 거부 시 민사소송. 재정은 60일 내 이의 없으면 확정판결 효력."
          }
        ]
      }
    ],
    "agency_names": [
      "중앙환경분쟁조정피해구제위원회(ECC) + 층간소음이웃사이센터"
    ],
    "required_documents": [
      {
        "category": "환경분쟁조정 신청",
        "items": [
          "분쟁조정신청서 (ecc.me.go.kr 양식)",
          "신분증",
          "피해 입증자료 (소음 녹음·측정값·진단서·사진)",
          "관리사무소·자체조정 시도 기록",
          "민원 제기 이력"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "층간소음 측정 신청",
        "value": "통상 1~2개월 내 측정"
      },
      {
        "label": "알선·조정 처리",
        "value": "신청 후 3개월"
      },
      {
        "label": "재정 처리",
        "value": "신청 후 9개월 (연장 가능)"
      },
      {
        "label": "재정 이의신청",
        "value": "재정 통지 후 60일 (없으면 확정)"
      }
    ],
    "source_urls": [
      "https://ecc.me.go.kr/",
      "https://floor.noiseinfo.or.kr/",
      "https://edc.seoul.go.kr/",
      "https://www.easylaw.go.kr/CSP/CnpClsMain.laf?csmSeq=1409"
    ],
    "common_mistakes": [
      "단지 내 자체조정 시도 없이 바로 환경분쟁조정 → 절차 무효 가능",
      "환경부 기준치 미충족 측정값 → 인과관계 입증 어려움",
      "재정 60일 이의 시한 도과 → 확정판결 효력",
      "이웃 직접 항의로 갈등 격화 → 관리사무소·1661-2642 거쳐 단계적 대응 권장",
      "위법 측정·녹음 → 증거능력 배척"
    ],
    "contacts": {
      "층간소음이웃사이센터": "1661-2642",
      "중앙환경분쟁조정위원회": "044-201-7969"
    }
  },
  "assault": {
    "domain": "assault",
    "primary_flow": {
      "id": "assault-victim-flow",
      "name": "폭행·상해 피해 형사 신고 5단계",
      "applies_to": "폭행·상해 피해를 본 피해자",
      "steps": [
        {
          "step": 1,
          "title": "응급조치 + 진단서 발급 (즉시)",
          "description": "112 신고 → 의료기관에서 상해진단서 발급 (전치 주수 명시). 응급실 기록은 형사 입증의 핵심.",
          "deadline": "사건 발생 직후 (시간 단위)"
        },
        {
          "step": 2,
          "title": "경찰서 신고·고소장 제출 (즉시 ~ 6개월 내)",
          "description": "관할 경찰서 또는 사이버 신고시스템(ECRM) 에 신고. 폭행죄(반의사불벌)는 합의 가능, 상해죄는 합의와 무관 처벌 검토. 진단서·CCTV·증인 진술서 제출.",
          "deadline": "공소시효 폭행 5년·상해 7~10년 (정도에 따라)"
        },
        {
          "step": 3,
          "title": "경찰 수사 (1~2개월)",
          "description": "담당 수사관 배정 → 진술 조서 → 추가 증거 수집 → 송치 또는 불송치 결정.",
          "deadline": "통상 1~2개월"
        },
        {
          "step": 4,
          "title": "검찰 송치·기소 결정 (2~3개월)",
          "description": "검찰이 보완수사 후 기소·불기소 결정. 고소·고발은 수리일로부터 3개월 내 처분 원칙.",
          "deadline": "수리일로부터 3개월 (원칙)"
        },
        {
          "step": 5,
          "title": "공판·선고 또는 합의·민사",
          "description": "기소 시 1심 공판(통상 4~8개월). 합의 성립 시 폭행은 처벌 면제, 상해는 양형 감경 가능. 별도 민사 손해배상 소송 병행."
        }
      ]
    },
    "all_flows": [
      {
        "id": "assault-victim-flow",
        "name": "폭행·상해 피해 형사 신고 5단계",
        "applies_to": "폭행·상해 피해를 본 피해자",
        "steps": [
          {
            "step": 1,
            "title": "응급조치 + 진단서 발급 (즉시)",
            "description": "112 신고 → 의료기관에서 상해진단서 발급 (전치 주수 명시). 응급실 기록은 형사 입증의 핵심.",
            "deadline": "사건 발생 직후 (시간 단위)"
          },
          {
            "step": 2,
            "title": "경찰서 신고·고소장 제출 (즉시 ~ 6개월 내)",
            "description": "관할 경찰서 또는 사이버 신고시스템(ECRM) 에 신고. 폭행죄(반의사불벌)는 합의 가능, 상해죄는 합의와 무관 처벌 검토. 진단서·CCTV·증인 진술서 제출.",
            "deadline": "공소시효 폭행 5년·상해 7~10년 (정도에 따라)"
          },
          {
            "step": 3,
            "title": "경찰 수사 (1~2개월)",
            "description": "담당 수사관 배정 → 진술 조서 → 추가 증거 수집 → 송치 또는 불송치 결정.",
            "deadline": "통상 1~2개월"
          },
          {
            "step": 4,
            "title": "검찰 송치·기소 결정 (2~3개월)",
            "description": "검찰이 보완수사 후 기소·불기소 결정. 고소·고발은 수리일로부터 3개월 내 처분 원칙.",
            "deadline": "수리일로부터 3개월 (원칙)"
          },
          {
            "step": 5,
            "title": "공판·선고 또는 합의·민사",
            "description": "기소 시 1심 공판(통상 4~8개월). 합의 성립 시 폭행은 처벌 면제, 상해는 양형 감경 가능. 별도 민사 손해배상 소송 병행."
          }
        ]
      },
      {
        "id": "assault-suspect-flow",
        "name": "폭행·상해 피의자 대응 5단계 (혐의를 받고 있다면)",
        "applies_to": "폭행·상해 혐의를 받는 피의자",
        "steps": [
          {
            "step": 1,
            "title": "초기 진술 신중 (즉시)",
            "description": "수사기관 출석 전 자료 정리·법률 상담 검토 권장. 진술 전 변호사 상담을 검토해보세요."
          },
          {
            "step": 2,
            "title": "변호인 선임 또는 국선변호인 신청 검토",
            "description": "구속영장 청구·영장실질심문 시 국선변호인 자동 선정 (직권). 빈곤 사유 시 법원에 국선변호인 선정 청구서 제출.",
            "deadline": "공소장부본 받은 날부터 7일 내 (피고인)"
          },
          {
            "step": 3,
            "title": "합의 시도 (수사 단계)",
            "description": "피해자와 합의·합의서 작성 → 검찰 처분 시 양형 감경 사유. 폭행은 반의사불벌 → 합의 시 공소제기 안 함.",
            "deadline": "검찰 처분 전이 가장 효과적"
          },
          {
            "step": 4,
            "title": "검찰 처분 대응",
            "description": "기소유예·약식기소·정식기소 등 처분. 약식기소 시 정식재판 청구 검토 (7일 내).",
            "deadline": "정식재판 청구 7일 (약식명령 송달 후)"
          },
          {
            "step": 5,
            "title": "공판·항소",
            "description": "유죄 선고 시 항소 7일 내 (제1심 판결 후). 양형 부당 시 항소심에서 재검토 가능."
          }
        ]
      },
      {
        "id": "assault-victim-support",
        "name": "범죄피해자 경제적 지원 신청 절차",
        "applies_to": "강력범죄 피해자 (사망·중상해·성폭력 등)",
        "steps": [
          {
            "step": 1,
            "title": "지역 범죄피해자지원센터 상담 (1577-1295)",
            "description": "유선·방문 상담 → 지원 자격 안내."
          },
          {
            "step": 2,
            "title": "지원 신청서 + 소명자료 제출",
            "description": "치료비·심리치료비·긴급생계비·장례비·학자금·간병비 등 지원 항목별 신청."
          },
          {
            "step": 3,
            "title": "센터 심의위 → 검찰청 요건 확인",
            "description": "1단계 지역센터 신청 → 2단계 센터 심의위 → 3단계 관할 검찰청 요건 확인."
          },
          {
            "step": 4,
            "title": "지원금 지급",
            "description": "긴급한 경우 절차 개시 3근무일 내 결정. 일반 사건은 통상 2~4주 내 지급."
          },
          {
            "step": 5,
            "title": "지속 관리",
            "description": "심리상담·자조모임·후속 지원 연계."
          }
        ]
      },
      {
        "id": "assault-civil-damages",
        "name": "민사 손해배상 청구 4단계 (형사와 별개)",
        "steps": [
          {
            "step": 1,
            "title": "손해 입증 자료 정리",
            "description": "치료비 영수증·진단서·소득 입증·후유증 진단서·정신적 충격 입증."
          },
          {
            "step": 2,
            "title": "내용증명 발송",
            "description": "가해자에게 손해배상 청구 의사 통보. 협상·시효 중단 효과."
          },
          {
            "step": 3,
            "title": "민사 소송 또는 지급명령",
            "description": "다툼 적으면 지급명령(인지·송달료 1/10), 다툼 크면 본안 소송. 위자료 + 치료비 + 일실수입.",
            "deadline": "불법행위 손해 시효 3년 / 안 날부터 10년"
          },
          {
            "step": 4,
            "title": "강제집행",
            "description": "확정 판결 후 가해자 재산에 압류·경매."
          }
        ]
      }
    ],
    "agency_names": [
      "경찰청 + 검찰청 + 법원 + 범죄피해자지원센터 + 대한법률구조공단"
    ],
    "required_documents": [
      {
        "category": "피해자 신고·고소",
        "items": [
          "고소장 (육하원칙 사실관계)",
          "상해진단서 (치료기간 + 후유 여부 명시)",
          "사건 현장 사진·CCTV",
          "증인 진술서·연락처",
          "신고자 신분증",
          "치료비 영수증 (민사용)"
        ]
      },
      {
        "category": "피의자 방어",
        "items": [
          "정상 거래·관계 입증 자료",
          "사건 시간·장소 알리바이",
          "관련 메시지·녹음·CCTV",
          "합의서 (피해자와 합의 시)",
          "탄원서·반성문 (양형용)"
        ]
      },
      {
        "category": "범죄피해자 경제적 지원 신청",
        "items": [
          "범죄피해자 지원 신청서",
          "주민등록등본",
          "사건 입증서류 (사건사고사실확인원·진단서)",
          "치료비·생계비 입증자료",
          "통장 사본"
        ]
      },
      {
        "category": "국선변호인 신청",
        "items": [
          "국선변호인선정청구서 (공소장부본 뒷면 양식)",
          "소명자료 (월수입·재산)",
          "구속영장청구서 사본 (해당 시)"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "고소·고발 처분",
        "value": "수리일로부터 3개월 (원칙)"
      },
      {
        "label": "공소시효 폭행",
        "value": "5년"
      },
      {
        "label": "공소시효 상해",
        "value": "7~10년 (정도에 따라)"
      },
      {
        "label": "약식 정식재판 청구",
        "value": "약식명령 송달 후 7일"
      },
      {
        "label": "1심 항소",
        "value": "선고 후 7일"
      },
      {
        "label": "민사 손해배상 시효",
        "value": "안 날부터 3년 / 발생일부터 10년"
      },
      {
        "label": "국선변호인 청구",
        "value": "공소장부본 송달 후 7일"
      },
      {
        "label": "긴급 피해자 지원 결정",
        "value": "절차 개시 3근무일 내"
      }
    ],
    "source_urls": [
      "https://www.spo.go.kr/site/spo/01/10101050200002018112210.jsp",
      "https://www.police.go.kr/www/security/support/support01/support05.jsp",
      "https://kcvc.kcva.or.kr",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=538",
      "https://help.scourt.go.kr/nm/min_16/min_16_2/index.html"
    ],
    "common_mistakes": [
      "진단서 미발급 후 시간 경과 → 상해 입증 어려움",
      "합의는 처분 결정 후 협상력 약화 — 가능한 한 검찰 처분 전",
      "고소장만 제출하고 후속 자료 보충 없음 → 불송치 가능성 ↑",
      "민사·형사 별개 절차인데 형사 합의로 민사도 끝났다고 오해",
      "약식명령 7일 내 정식재판 청구 시한 도과"
    ],
    "contacts": {
      "범죄피해자지원센터": "1577-1295",
      "경찰청 신고": "112",
      "대한법률구조공단": "132",
      "여성긴급전화": "1366"
    }
  },
  "sex-crime": {
    "domain": "sex-crime",
    "primary_flow": {
      "id": "sex-crime-victim-flow",
      "name": "성폭력 피해 신고·증거보존 5단계",
      "applies_to": "성폭력 피해를 입은 피해자",
      "steps": [
        {
          "step": 1,
          "title": "안전 확보 + 112·1366 신고 (즉시)",
          "description": "안전한 장소로 이동 후 112(경찰) 또는 1366(여성긴급전화) 신고. 1366은 24시간 운영, 보호시설 연계도 가능.",
          "deadline": "사건 발생 직후"
        },
        {
          "step": 2,
          "title": "해바라기센터 의료지원·증거 채취 (72시간 내 권장)",
          "description": "전국 해바라기센터에서 의료·심리·법률 통합 지원을 받아보실 수 있습니다. 샤워·옷 세탁 전 응급키트로 DNA 등 증거 채취가 중요. 진단서·상해사진은 형사 입증 핵심.",
          "deadline": "사건 후 72시간 이내 (DNA 보존 권장)"
        },
        {
          "step": 3,
          "title": "고소장 제출 (공소시효 내)",
          "description": "관할 경찰서 여성청소년과에 고소장 제출. 친고죄는 2013년 폐지되어 피해자 신고 없이도 수사 진행이 가능합니다. 진술녹화실에서 영상녹화 진술 1회 원칙.",
          "deadline": "공소시효 강간 10년·강제추행 7년·DNA 증거 있을 시 10년 연장"
        },
        {
          "step": 4,
          "title": "수사·검찰 송치 (1~3개월)",
          "description": "신뢰관계인 동석 / 진술조력인 신청 가능. 피해자 변호사(국선) 무료 선임 신청을 검토해보실 수 있습니다.",
          "deadline": "통상 수리일로부터 3개월 (원칙)"
        },
        {
          "step": 5,
          "title": "공판·합의·민사",
          "description": "공판 단계에서 피해자 의견진술·증인 신문 출석 가능. 별도 민사 손해배상 청구도 가능. 합의 여부는 피해자 자유."
        }
      ]
    },
    "all_flows": [
      {
        "id": "sex-crime-victim-flow",
        "name": "성폭력 피해 신고·증거보존 5단계",
        "applies_to": "성폭력 피해를 입은 피해자",
        "steps": [
          {
            "step": 1,
            "title": "안전 확보 + 112·1366 신고 (즉시)",
            "description": "안전한 장소로 이동 후 112(경찰) 또는 1366(여성긴급전화) 신고. 1366은 24시간 운영, 보호시설 연계도 가능.",
            "deadline": "사건 발생 직후"
          },
          {
            "step": 2,
            "title": "해바라기센터 의료지원·증거 채취 (72시간 내 권장)",
            "description": "전국 해바라기센터에서 의료·심리·법률 통합 지원을 받아보실 수 있습니다. 샤워·옷 세탁 전 응급키트로 DNA 등 증거 채취가 중요. 진단서·상해사진은 형사 입증 핵심.",
            "deadline": "사건 후 72시간 이내 (DNA 보존 권장)"
          },
          {
            "step": 3,
            "title": "고소장 제출 (공소시효 내)",
            "description": "관할 경찰서 여성청소년과에 고소장 제출. 친고죄는 2013년 폐지되어 피해자 신고 없이도 수사 진행이 가능합니다. 진술녹화실에서 영상녹화 진술 1회 원칙.",
            "deadline": "공소시효 강간 10년·강제추행 7년·DNA 증거 있을 시 10년 연장"
          },
          {
            "step": 4,
            "title": "수사·검찰 송치 (1~3개월)",
            "description": "신뢰관계인 동석 / 진술조력인 신청 가능. 피해자 변호사(국선) 무료 선임 신청을 검토해보실 수 있습니다.",
            "deadline": "통상 수리일로부터 3개월 (원칙)"
          },
          {
            "step": 5,
            "title": "공판·합의·민사",
            "description": "공판 단계에서 피해자 의견진술·증인 신문 출석 가능. 별도 민사 손해배상 청구도 가능. 합의 여부는 피해자 자유."
          }
        ]
      },
      {
        "id": "sex-crime-digital-flow",
        "name": "디지털 성범죄(불법촬영·유포) 신고·삭제 4단계",
        "applies_to": "불법촬영·유포·딥페이크 피해자",
        "steps": [
          {
            "step": 1,
            "title": "디지털성범죄피해자지원센터 신고 (02-735-8994)",
            "description": "유포 영상·이미지 URL·캡처 보관 후 센터에 삭제 지원 요청. 24시간 모니터링·삭제 지원이 무료 제공됩니다."
          },
          {
            "step": 2,
            "title": "경찰 사이버수사대 신고 (112 또는 ECRM)",
            "description": "사이버범죄 신고시스템(ECRM) 또는 관할 경찰서. 가해자 IP·계정 추적 의뢰.",
            "deadline": "유포 인지 즉시 (확산 방지)"
          },
          {
            "step": 3,
            "title": "방심위 시정요구·플랫폼 삭제 요청",
            "description": "방송통신심의위원회(국번없이 1377) 시정요구 + SNS·플랫폼 직접 삭제 요청 병행."
          },
          {
            "step": 4,
            "title": "민사·공판",
            "description": "가해자 특정 시 손해배상 청구 + 공판 진행. 위자료·재발방지 청구 가능."
          }
        ]
      },
      {
        "id": "sex-crime-suspect-flow",
        "name": "성폭력 혐의 대응 4단계 (혐의를 받고 있다면)",
        "applies_to": "성폭력 혐의를 받고 있는 피의자",
        "steps": [
          {
            "step": 1,
            "title": "초기 진술 신중 (즉시)",
            "description": "성범죄는 피의자 진술이 향후 양형에 큰 영향을 줍니다. 출석 전 변호사 상담을 검토해보세요. 사실과 다르게 신고되었다면 알리바이·메시지 기록 정리가 우선."
          },
          {
            "step": 2,
            "title": "변호인 선임 / 국선변호인 신청",
            "description": "성폭력은 필요적 변호 사건은 아니지만, 구속영장 청구 시 국선이 자동 선정됩니다. 빈곤 사유 시 법원에 국선변호인 선정청구서 제출 가능.",
            "deadline": "공소장부본 송달 후 7일 (피고인)"
          },
          {
            "step": 3,
            "title": "사실관계 정리 (방어 자료)",
            "description": "메시지·통화·CCTV·동행자 진술 등 사실관계 입증 자료 정리. 합의는 피해자 의사 존중이 우선이며 강요는 금지."
          },
          {
            "step": 4,
            "title": "공판 대응·항소",
            "description": "성폭력은 신상정보 공개·취업제한 부수처분이 따릅니다. 1심 후 항소 7일 내. 양형 부당·법령 위반 사유 검토.",
            "deadline": "1심 선고 후 항소 7일"
          }
        ]
      },
      {
        "id": "sex-crime-victim-support",
        "name": "성폭력 피해자 통합지원 신청 절차",
        "applies_to": "성폭력 피해자 (가족 포함)",
        "steps": [
          {
            "step": 1,
            "title": "해바라기센터 또는 1366 상담",
            "description": "심리·의료·법률·동행 지원을 무료로 받으실 수 있습니다."
          },
          {
            "step": 2,
            "title": "치료비·간병비·심리치료비 지원 신청",
            "description": "범죄피해자지원센터(1577-1295) 또는 해바라기센터 통해 신청. 소명자료 + 진단서 제출."
          },
          {
            "step": 3,
            "title": "보호시설 입소 / 주거지원",
            "description": "가해자 분리가 필요한 경우 단기·중장기 보호시설 입소 가능."
          },
          {
            "step": 4,
            "title": "후속 심리상담·자조모임",
            "description": "트라우마 회복 위한 장기 상담·집단치료 연계."
          }
        ]
      }
    ],
    "agency_names": [
      "경찰청 + 검찰청 + 한국성폭력상담소 + 해바라기센터 + 대한법률구조공단 + 디지털성범죄피해자지원센터"
    ],
    "required_documents": [
      {
        "category": "피해자 신고·고소",
        "items": [
          "고소장 (육하원칙·증거 목록)",
          "상해진단서 (성폭력 응급키트 결과 포함)",
          "사건 현장 CCTV·문자·SNS 캡처",
          "옷·소지품 (DNA 보존, 세탁 금지)",
          "신고자 신분증",
          "신뢰관계인 동석 신청서 (해당 시)"
        ]
      },
      {
        "category": "디지털 성범죄 신고",
        "items": [
          "유포 URL·캡처·다운로드 영상",
          "가해자 추정 계정·연락처",
          "삭제지원 신청서 (디성센터)",
          "방심위 시정요구 신청서"
        ]
      },
      {
        "category": "피의자 방어 (혐의를 받는 경우)",
        "items": [
          "사건 시간 알리바이 자료",
          "메시지·통화·CCTV 기록",
          "동행자·증인 진술서",
          "탄원서·반성문 (양형용)"
        ]
      },
      {
        "category": "피해자 통합지원 신청",
        "items": [
          "사건사고사실확인원",
          "진단서·치료비 영수증",
          "주민등록등본",
          "통장 사본"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "응급키트 증거채취 권장",
        "value": "사건 후 72시간 이내"
      },
      {
        "label": "공소시효 강간",
        "value": "10년 (DNA 증거 있을 시 10년 연장)"
      },
      {
        "label": "공소시효 강제추행",
        "value": "7년"
      },
      {
        "label": "13세 미만 미성년 성폭력 공소시효",
        "value": "폐지 (수시 수사 가능)"
      },
      {
        "label": "친고죄",
        "value": "2013년 폐지 (피해자 의사와 무관 수사)"
      },
      {
        "label": "고소·고발 처분",
        "value": "수리일로부터 3개월 (원칙)"
      },
      {
        "label": "1심 항소",
        "value": "선고 후 7일"
      },
      {
        "label": "민사 손해배상 시효",
        "value": "안 날부터 3년 / 발생일부터 10년"
      }
    ],
    "source_urls": [
      "https://www.spo.go.kr/site/spo/01/10101050200002018112210.jsp",
      "https://www.police.go.kr/www/security/support/support01/support05.jsp",
      "https://www.women1366.kr",
      "https://d4u.stop.or.kr",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=623",
      "https://kcvc.kcva.or.kr"
    ],
    "common_mistakes": [
      "사건 직후 샤워·옷 세탁 → DNA 증거 손실",
      "혼자 견디다 시간 경과 → 진단서·증거 확보 어려움",
      "디지털 성범죄 캡처·URL 미보존 → 가해자 특정 곤란",
      "합의 강요·접촉 시도 → 추가 처벌(보복협박 등) 위험",
      "피해자 국선변호사 무료 제도 모르고 사선만 알아봄",
      "공소시효 도과 — 강간 10년·DNA 있을 시 10년 추가 연장 미숙지"
    ],
    "contacts": {
      "여성긴급전화": "1366",
      "성폭력 신고": "112",
      "범죄피해자지원센터": "1577-1295",
      "디지털성범죄피해자지원센터": "02-735-8994",
      "해바라기센터": "지역별 상담",
      "대한법률구조공단": "132"
    }
  },
  "child-sex-crime": {
    "domain": "child-sex-crime",
    "primary_flow": {
      "id": "child-sex-crime-victim-flow",
      "name": "아동·청소년 대상 성범죄 신고 5단계",
      "applies_to": "19세 미만 성범죄 피해 아동·청소년 및 보호자",
      "steps": [
        {
          "step": 1,
          "title": "즉시 분리 + 112 또는 117 신고",
          "description": "가해자가 보호자·교사 등 가까이 있는 경우 즉시 분리. 112(경찰)·117(학교폭력·아동성폭력) 둘 다 24시간 신고 가능. 신고의무자(교사·의료인·아동복지시설 종사자 등)는 인지 즉시 신고 의무.",
          "deadline": "인지 즉시 (신고의무자 미신고 시 과태료)"
        },
        {
          "step": 2,
          "title": "해바라기센터 의료·심리·법률 통합지원",
          "description": "전국 해바라기센터에서 아동 전담 의료·심리상담·진술녹화·법률지원을 한 곳에서 받으실 수 있습니다. 응급키트 채취는 가능한 빨리 권장.",
          "deadline": "사건 후 72시간 이내 (증거 보존)"
        },
        {
          "step": 3,
          "title": "전문 진술녹화·진술조력인 동석",
          "description": "13세 미만 또는 의사소통 어려움 있는 아동은 진술조력인이 동석합니다. 영상녹화 진술 1회 원칙으로 반복 진술 부담을 줄이는 제도가 운영됩니다."
        },
        {
          "step": 4,
          "title": "수사·검찰 송치 (피해자 변호사 국선 자동 선임)",
          "description": "아동·청소년 성범죄 피해자는 국선변호사가 자동 선임됩니다. 부모·보호자도 신뢰관계인으로 동석 가능.",
          "deadline": "수리일로부터 3개월 (원칙)"
        },
        {
          "step": 5,
          "title": "공판·취업제한·신상공개 부수처분",
          "description": "유죄 판결 시 신상정보 등록·공개·고지, 아동관련기관 취업제한 등 부수처분이 부과됩니다. 피해자 측은 의견진술·증인 출석 절차 보호 가능."
        }
      ]
    },
    "all_flows": [
      {
        "id": "child-sex-crime-victim-flow",
        "name": "아동·청소년 대상 성범죄 신고 5단계",
        "applies_to": "19세 미만 성범죄 피해 아동·청소년 및 보호자",
        "steps": [
          {
            "step": 1,
            "title": "즉시 분리 + 112 또는 117 신고",
            "description": "가해자가 보호자·교사 등 가까이 있는 경우 즉시 분리. 112(경찰)·117(학교폭력·아동성폭력) 둘 다 24시간 신고 가능. 신고의무자(교사·의료인·아동복지시설 종사자 등)는 인지 즉시 신고 의무.",
            "deadline": "인지 즉시 (신고의무자 미신고 시 과태료)"
          },
          {
            "step": 2,
            "title": "해바라기센터 의료·심리·법률 통합지원",
            "description": "전국 해바라기센터에서 아동 전담 의료·심리상담·진술녹화·법률지원을 한 곳에서 받으실 수 있습니다. 응급키트 채취는 가능한 빨리 권장.",
            "deadline": "사건 후 72시간 이내 (증거 보존)"
          },
          {
            "step": 3,
            "title": "전문 진술녹화·진술조력인 동석",
            "description": "13세 미만 또는 의사소통 어려움 있는 아동은 진술조력인이 동석합니다. 영상녹화 진술 1회 원칙으로 반복 진술 부담을 줄이는 제도가 운영됩니다."
          },
          {
            "step": 4,
            "title": "수사·검찰 송치 (피해자 변호사 국선 자동 선임)",
            "description": "아동·청소년 성범죄 피해자는 국선변호사가 자동 선임됩니다. 부모·보호자도 신뢰관계인으로 동석 가능.",
            "deadline": "수리일로부터 3개월 (원칙)"
          },
          {
            "step": 5,
            "title": "공판·취업제한·신상공개 부수처분",
            "description": "유죄 판결 시 신상정보 등록·공개·고지, 아동관련기관 취업제한 등 부수처분이 부과됩니다. 피해자 측은 의견진술·증인 출석 절차 보호 가능."
          }
        ]
      },
      {
        "id": "child-sex-crime-digital-flow",
        "name": "아동·청소년 디지털 성착취 신고 4단계",
        "applies_to": "아동·청소년 대상 그루밍·디지털 성착취 피해자",
        "steps": [
          {
            "step": 1,
            "title": "대화·이미지 캡처 보존 후 112 신고",
            "description": "그루밍·온라인 성착취는 채팅 기록·계정 정보가 결정적 증거입니다. 삭제·차단 전 캡처 + URL 보관."
          },
          {
            "step": 2,
            "title": "디지털성범죄피해자지원센터 삭제 지원",
            "description": "유포된 영상·이미지 24시간 모니터링·삭제 지원이 무료 제공됩니다 (02-735-8994). 미성년자는 보호자 동의 없이도 신청 가능."
          },
          {
            "step": 3,
            "title": "경찰 디지털성범죄수사팀 의뢰",
            "description": "경찰청 디성팀이 가해자 IP·계좌·계정 추적. 위장수사(아동·청소년의 성보호에 관한 법률 제25조의2) 활용 가능."
          },
          {
            "step": 4,
            "title": "공판·신상공개·민사",
            "description": "아동·청소년 성착취물 제작·소지·유포는 공소시효 정지(피해자 19세 도달까지) 대상. 별도 민사 손해배상도 가능합니다."
          }
        ]
      },
      {
        "id": "child-sex-crime-suspect-flow",
        "name": "아동·청소년 성범죄 혐의 대응 4단계 (혐의를 받고 있다면)",
        "applies_to": "아동·청소년 성범죄 혐의를 받고 있는 피의자",
        "steps": [
          {
            "step": 1,
            "title": "출석 요구 시 즉시 변호사 상담 검토",
            "description": "아동 대상 성범죄는 가중처벌 대상으로 양형이 무겁습니다. 사실과 다르게 신고되었다면 메시지·통화·동선 자료 보존이 시급합니다."
          },
          {
            "step": 2,
            "title": "변호인 선임 / 국선 신청",
            "description": "구속영장 단계에서 국선변호인 자동 선정. 빈곤 사유 시 국선변호인 선정청구서 제출.",
            "deadline": "공소장부본 송달 후 7일"
          },
          {
            "step": 3,
            "title": "사실관계 정리 (방어 자료)",
            "description": "디지털 기록·동선·증인 등 사실관계 입증 자료 정리. 피해자 측 접근·합의 강요는 추가 처벌(보복협박 등) 위험."
          },
          {
            "step": 4,
            "title": "공판·부수처분 대응",
            "description": "유죄 시 신상등록·공개·고지·취업제한 부과. 1심 후 항소 7일 내. 신상공개·취업제한 가처분 다툼은 별도 절차.",
            "deadline": "1심 선고 후 항소 7일"
          }
        ]
      },
      {
        "id": "child-sex-crime-protection",
        "name": "아동 피해자 보호·후속지원 절차",
        "applies_to": "아동·청소년 피해자 및 보호자",
        "steps": [
          {
            "step": 1,
            "title": "보호시설 입소·임시조치",
            "description": "가해자가 가족·보호자인 경우 즉시 분리·임시조치 신청. 피해아동 보호명령(아동학대처벌법 제47조) 검토."
          },
          {
            "step": 2,
            "title": "치료비·심리치료·학습지원",
            "description": "범죄피해자지원센터·해바라기센터 통해 의료비·심리상담·학업 보조 신청."
          },
          {
            "step": 3,
            "title": "신상정보 보호·전학 지원",
            "description": "피해 사실 노출 방지 위한 전학·주소이전 지원. 학교 측에는 비밀 유지 의무."
          },
          {
            "step": 4,
            "title": "장기 트라우마 회복 프로그램",
            "description": "성장 단계별 심리치료·가족 상담·자조모임 연계. 19세 이후에도 지속 지원."
          }
        ]
      }
    ],
    "agency_names": [
      "경찰청 + 검찰청 + 해바라기센터 + 아동권리보장원 + 대한법률구조공단 + 여성가족부"
    ],
    "required_documents": [
      {
        "category": "피해 신고·고소",
        "items": [
          "고소장 (보호자 작성 가능)",
          "상해진단서·해바라기센터 의료기록",
          "메시지·SNS 캡처·통화기록",
          "사건 현장 CCTV·증인 진술",
          "신뢰관계인 동석 신청서",
          "보호자 신분증·가족관계증명서"
        ]
      },
      {
        "category": "디지털 성착취 신고",
        "items": [
          "그루밍 채팅·이미지 캡처",
          "가해자 계정·SNS·게임 ID",
          "디성센터 삭제지원 신청서",
          "방심위 시정요구서"
        ]
      },
      {
        "category": "피의자 방어 (혐의를 받는 경우)",
        "items": [
          "메시지·통화·동선 입증 자료",
          "관계 부재 입증 자료",
          "탄원서·반성문 (양형용)",
          "치료·교육 이수 증명"
        ]
      },
      {
        "category": "보호·지원 신청",
        "items": [
          "사건사고사실확인원",
          "진단서·치료비 영수증",
          "가족관계증명서",
          "통장 사본 (보호자 명의)"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "신고의무자 신고",
        "value": "인지 즉시 (미신고 과태료)"
      },
      {
        "label": "공소시효 정지",
        "value": "피해자 19세 도달까지 (아동·청소년의 성보호에 관한 법률 제20조)"
      },
      {
        "label": "13세 미만 강간 공소시효",
        "value": "폐지 (언제든 수사 가능)"
      },
      {
        "label": "DNA 증거 있을 시",
        "value": "공소시효 10년 연장"
      },
      {
        "label": "응급키트 증거채취 권장",
        "value": "사건 후 72시간 이내"
      },
      {
        "label": "1심 항소",
        "value": "선고 후 7일"
      },
      {
        "label": "취업제한 기간",
        "value": "최장 10년 (법원 판결로 정함)"
      },
      {
        "label": "민사 손해배상 시효",
        "value": "안 날부터 3년 / 발생일부터 10년"
      }
    ],
    "source_urls": [
      "https://www.spo.go.kr/site/spo/01/10101050200002018112210.jsp",
      "https://www.police.go.kr/www/security/support/support01/support05.jsp",
      "https://www.ncrc.or.kr",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=624",
      "https://kcvc.kcva.or.kr",
      "https://d4u.stop.or.kr"
    ],
    "common_mistakes": [
      "보호자가 직접 캐묻기 → 아동 진술 신빙성 영향",
      "가해자가 친족·교사라고 신고 망설임 → 분리 늦어짐",
      "그루밍 채팅 삭제·차단 후 신고 → 증거 손실",
      "신고의무자(교사·의료인) 미신고 → 과태료 + 윤리 책임",
      "공소시효 정지 제도(19세 도달까지) 모르고 포기",
      "피해자 국선변호사 자동 선임 제도 모르고 사선만 알아봄"
    ],
    "contacts": {
      "아동학대 신고": "112 또는 117",
      "여성긴급전화": "1366",
      "해바라기센터": "지역별 상담",
      "아동권리보장원": "1577-1391",
      "디지털성범죄피해자지원센터": "02-735-8994",
      "범죄피해자지원센터": "1577-1295"
    }
  },
  "prostitution": {
    "domain": "prostitution",
    "primary_flow": {
      "id": "prostitution-victim-flow",
      "name": "성매매 피해자(강요·인신매매) 보호 5단계",
      "applies_to": "성매매 강요·인신매매·청소년 성매매 피해자",
      "steps": [
        {
          "step": 1,
          "title": "1366 또는 112 신고 + 안전 확보",
          "description": "가해자가 감금·통제 중인 경우 1366 또는 112 즉시 신고. 24시간 운영. 비밀상담·긴급보호 가능합니다.",
          "deadline": "사건 인지 즉시"
        },
        {
          "step": 2,
          "title": "성매매피해자 지정 + 보호시설 입소",
          "description": "성매매방지법 제2조 피해자(강요·인신매매·청소년 등)로 인정되면 처벌이 면제되고 보호 대상이 됩니다. 단기·중장기 보호시설·자립지원시설 연계."
        },
        {
          "step": 3,
          "title": "고소장 제출·증거 보존",
          "description": "성매매 알선·강요·감금 등은 친고죄 아님. 메시지·계좌이체·CCTV·동료 진술 등 증거 보존이 핵심."
        },
        {
          "step": 4,
          "title": "수사·검찰 송치",
          "description": "피해자 신변보호·신원노출방지 조치 신청 가능. 성매매피해자는 수사·재판 과정에서 신뢰관계인 동석이 허용됩니다.",
          "deadline": "수리일로부터 3개월 (원칙)"
        },
        {
          "step": 5,
          "title": "자립지원·민사",
          "description": "직업훈련·주거지원·법률지원이 한국여성인권진흥원·한부모가족지원센터 등에서 제공됩니다. 별도 민사 손해배상 청구도 가능."
        }
      ]
    },
    "all_flows": [
      {
        "id": "prostitution-victim-flow",
        "name": "성매매 피해자(강요·인신매매) 보호 5단계",
        "applies_to": "성매매 강요·인신매매·청소년 성매매 피해자",
        "steps": [
          {
            "step": 1,
            "title": "1366 또는 112 신고 + 안전 확보",
            "description": "가해자가 감금·통제 중인 경우 1366 또는 112 즉시 신고. 24시간 운영. 비밀상담·긴급보호 가능합니다.",
            "deadline": "사건 인지 즉시"
          },
          {
            "step": 2,
            "title": "성매매피해자 지정 + 보호시설 입소",
            "description": "성매매방지법 제2조 피해자(강요·인신매매·청소년 등)로 인정되면 처벌이 면제되고 보호 대상이 됩니다. 단기·중장기 보호시설·자립지원시설 연계."
          },
          {
            "step": 3,
            "title": "고소장 제출·증거 보존",
            "description": "성매매 알선·강요·감금 등은 친고죄 아님. 메시지·계좌이체·CCTV·동료 진술 등 증거 보존이 핵심."
          },
          {
            "step": 4,
            "title": "수사·검찰 송치",
            "description": "피해자 신변보호·신원노출방지 조치 신청 가능. 성매매피해자는 수사·재판 과정에서 신뢰관계인 동석이 허용됩니다.",
            "deadline": "수리일로부터 3개월 (원칙)"
          },
          {
            "step": 5,
            "title": "자립지원·민사",
            "description": "직업훈련·주거지원·법률지원이 한국여성인권진흥원·한부모가족지원센터 등에서 제공됩니다. 별도 민사 손해배상 청구도 가능."
          }
        ]
      },
      {
        "id": "prostitution-suspect-flow",
        "name": "성매매 알선·강요 혐의 대응 4단계 (혐의를 받고 있다면)",
        "applies_to": "성매매 알선·강요·장소제공 혐의를 받고 있는 피의자",
        "steps": [
          {
            "step": 1,
            "title": "출석요구 시 변호사 상담 검토",
            "description": "성매매 알선·강요는 가중처벌 대상이며 추징·범죄수익 환수까지 따라갑니다. 출석 전 변호사 상담을 검토해보시는 것이 좋습니다."
          },
          {
            "step": 2,
            "title": "변호인 선임 / 국선 신청",
            "description": "구속영장 단계 국선변호인 자동 선정. 빈곤 사유 시 국선변호인 선정청구서 제출.",
            "deadline": "공소장부본 송달 후 7일"
          },
          {
            "step": 3,
            "title": "사실관계 정리·범죄수익 추징 대응",
            "description": "계좌·임대차계약·고용관계 등 자료 정리. 성매매 알선은 범죄수익 추징·몰수 대상이므로 자금 흐름 정리가 중요."
          },
          {
            "step": 4,
            "title": "공판·항소 + 행정처분 대응",
            "description": "형사 외에 영업장 폐쇄·과징금 등 행정처분이 별도 부과됩니다. 1심 후 항소 7일 내.",
            "deadline": "1심 선고 후 항소 7일"
          }
        ]
      },
      {
        "id": "prostitution-self-suspect-flow",
        "name": "자발적 성매매 적발 시 보호처분 절차 (혐의를 받고 있다면)",
        "applies_to": "자발적 성매매로 적발된 사람",
        "steps": [
          {
            "step": 1,
            "title": "수사·송치 단계",
            "description": "자발적 성매매는 형사처벌 대상이지만, 검찰이 보호처분(상담·교육·사회봉사) 으로 송치할지 결정합니다. 초범·생활고 등 사정 소명이 가능합니다."
          },
          {
            "step": 2,
            "title": "보호사건 송치 → 가정법원 심리",
            "description": "보호처분 대상이 되면 가정법원이 심리하여 보호관찰·교육이수·사회봉사 등을 명할 수 있습니다."
          },
          {
            "step": 3,
            "title": "보호처분 이수",
            "description": "성매매 예방교육·상담·사회봉사 등 이행. 미이행 시 형사사건으로 다시 송치될 수 있습니다."
          },
          {
            "step": 4,
            "title": "탈성매매 자립지원 연계",
            "description": "여성가족부·한국여성인권진흥원의 직업훈련·주거지원·심리상담 자립 프로그램 신청 가능."
          }
        ]
      },
      {
        "id": "prostitution-victim-support",
        "name": "성매매 피해자 자립지원 신청 절차",
        "applies_to": "성매매 피해자 (탈성매매 희망자 포함)",
        "steps": [
          {
            "step": 1,
            "title": "1366 또는 지역 상담소 상담",
            "description": "비밀 유지 + 24시간 상담. 보호시설·자립지원시설 연계."
          },
          {
            "step": 2,
            "title": "긴급생계비·치료비·법률지원 신청",
            "description": "성매매방지법 제17조 따라 의료·법률·심리지원 무료 제공."
          },
          {
            "step": 3,
            "title": "직업훈련·자립자금 지원",
            "description": "여성새로일하기센터 직업훈련 + 자활자립금 지원. 자립지원시설 거주 가능."
          },
          {
            "step": 4,
            "title": "주거이전·전적 지원",
            "description": "신변 위협 시 주소 이전·임대주택 우선 입주 지원."
          }
        ]
      }
    ],
    "agency_names": [
      "경찰청 + 검찰청 + 여성가족부 + 한국여성인권진흥원 + 대한법률구조공단"
    ],
    "required_documents": [
      {
        "category": "피해자 신고·보호 신청",
        "items": [
          "고소장 (강요·감금·인신매매 사실관계)",
          "메시지·계좌이체·CCTV 캡처",
          "여권·신분증 (압류 입증 시)",
          "동료·증인 진술서",
          "보호시설 입소 신청서",
          "신뢰관계인 동석 신청서"
        ]
      },
      {
        "category": "피의자 방어 (혐의를 받는 경우)",
        "items": [
          "임대차계약·고용계약·사업자등록",
          "계좌·자금흐름 정리 자료",
          "관련자 진술서",
          "탄원서·반성문",
          "교육·상담 이수증 (양형용)"
        ]
      },
      {
        "category": "자립지원 신청",
        "items": [
          "주민등록등본",
          "성매매피해자 확인서 (검찰·법원·상담소 발급)",
          "통장 사본",
          "직업훈련 신청서"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "고소·고발 처분",
        "value": "수리일로부터 3개월 (원칙)"
      },
      {
        "label": "공소시효 알선영업",
        "value": "5~10년 (벌금형 5년·징역 10년)"
      },
      {
        "label": "공소시효 인신매매",
        "value": "10년"
      },
      {
        "label": "1심 항소",
        "value": "선고 후 7일"
      },
      {
        "label": "약식 정식재판 청구",
        "value": "송달 후 7일"
      },
      {
        "label": "행정처분 이의신청",
        "value": "처분 통보 후 90일 내"
      },
      {
        "label": "민사 손해배상 시효",
        "value": "안 날부터 3년 / 발생일부터 10년"
      }
    ],
    "source_urls": [
      "https://www.spo.go.kr/site/spo/01/10101050200002018112210.jsp",
      "https://www.police.go.kr/www/security/support/support01/support05.jsp",
      "https://www.women1366.kr",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=649",
      "https://kcvc.kcva.or.kr"
    ],
    "common_mistakes": [
      "성매매피해자 인정 요건 모르고 본인을 가해자로 자처",
      "감금·여권압류 자료 미보존 → 피해자 인정 어려움",
      "청소년 성매매도 처벌 대상으로 오해 (피해자임)",
      "성매매 알선은 범죄수익 추징 대상인데 자금 흐름 미정리",
      "행정처분(영업정지·과징금)을 형사처벌과 같다고 오해 → 별도 절차",
      "보호처분 미이행 시 형사사건 재송치 위험 인지 부족"
    ],
    "contacts": {
      "여성긴급전화": "1366",
      "성매매피해상담소": "1366 또는 지역 상담소",
      "한국여성인권진흥원": "02-735-1366",
      "범죄피해자지원센터": "1577-1295",
      "대한법률구조공단": "132"
    }
  },
  "drug-crime": {
    "domain": "drug-crime",
    "primary_flow": {
      "id": "drug-suspect-flow",
      "name": "마약류 단순투약 혐의 대응 5단계 (혐의를 받고 있다면)",
      "applies_to": "마약류 투약·소지 혐의를 받고 있는 피의자",
      "steps": [
        {
          "step": 1,
          "title": "체포·소변검사 단계 진술 신중",
          "description": "마약류는 체포 직후 소변·모발 감정이 진행됩니다. 출석 전 변호사 상담을 검토해보세요. 진술은 향후 양형·기소유예 여부에 큰 영향을 줍니다.",
          "deadline": "체포 후 48시간 내 영장 청구 여부 결정"
        },
        {
          "step": 2,
          "title": "변호인 선임 / 국선 신청",
          "description": "마약류는 필요적 변호 사건이 아니지만, 구속영장 청구 시 국선이 자동 선정됩니다. 빈곤 사유 시 국선변호인 선정청구서 제출 가능.",
          "deadline": "공소장부본 송달 후 7일"
        },
        {
          "step": 3,
          "title": "치료보호·교육이수 검토",
          "description": "마약류관리법 제40조 치료보호 신청을 검토해볼 수 있습니다. 검찰의 치료보호 조건부 기소유예가 가능하며 단순투약 초범에게 활용됩니다."
        },
        {
          "step": 4,
          "title": "검찰 처분 대응 (기소유예·약식·정식기소)",
          "description": "초범·자수·치료의지 인정 시 기소유예 가능. 약식기소 시 정식재판 청구 검토.",
          "deadline": "약식명령 송달 후 정식재판 청구 7일"
        },
        {
          "step": 5,
          "title": "공판·항소 + 보호관찰",
          "description": "유죄 시 보호관찰·수강명령 부수처분 가능. 1심 후 항소 7일 내.",
          "deadline": "1심 선고 후 항소 7일"
        }
      ]
    },
    "all_flows": [
      {
        "id": "drug-suspect-flow",
        "name": "마약류 단순투약 혐의 대응 5단계 (혐의를 받고 있다면)",
        "applies_to": "마약류 투약·소지 혐의를 받고 있는 피의자",
        "steps": [
          {
            "step": 1,
            "title": "체포·소변검사 단계 진술 신중",
            "description": "마약류는 체포 직후 소변·모발 감정이 진행됩니다. 출석 전 변호사 상담을 검토해보세요. 진술은 향후 양형·기소유예 여부에 큰 영향을 줍니다.",
            "deadline": "체포 후 48시간 내 영장 청구 여부 결정"
          },
          {
            "step": 2,
            "title": "변호인 선임 / 국선 신청",
            "description": "마약류는 필요적 변호 사건이 아니지만, 구속영장 청구 시 국선이 자동 선정됩니다. 빈곤 사유 시 국선변호인 선정청구서 제출 가능.",
            "deadline": "공소장부본 송달 후 7일"
          },
          {
            "step": 3,
            "title": "치료보호·교육이수 검토",
            "description": "마약류관리법 제40조 치료보호 신청을 검토해볼 수 있습니다. 검찰의 치료보호 조건부 기소유예가 가능하며 단순투약 초범에게 활용됩니다."
          },
          {
            "step": 4,
            "title": "검찰 처분 대응 (기소유예·약식·정식기소)",
            "description": "초범·자수·치료의지 인정 시 기소유예 가능. 약식기소 시 정식재판 청구 검토.",
            "deadline": "약식명령 송달 후 정식재판 청구 7일"
          },
          {
            "step": 5,
            "title": "공판·항소 + 보호관찰",
            "description": "유죄 시 보호관찰·수강명령 부수처분 가능. 1심 후 항소 7일 내.",
            "deadline": "1심 선고 후 항소 7일"
          }
        ]
      },
      {
        "id": "drug-trafficking-flow",
        "name": "마약류 매매·운반·제조 혐의 대응 4단계 (혐의를 받고 있다면)",
        "applies_to": "마약류 매매·운반·제조 혐의를 받고 있는 피의자",
        "steps": [
          {
            "step": 1,
            "title": "수사 초기 변호사 상담 (필수)",
            "description": "매매·운반·제조는 단순투약보다 형량이 무겁고 추징이 따라붙습니다. 출석 전 변호사 상담이 사실상 필수입니다."
          },
          {
            "step": 2,
            "title": "공범 관계·자금 흐름 정리",
            "description": "공범 진술이 향후 처분에 결정적입니다. 사실과 다른 부분이 있다면 메시지·계좌·동선 자료를 정리해두는 것이 좋습니다."
          },
          {
            "step": 3,
            "title": "검찰 송치 → 영장 검토",
            "description": "구속영장 청구 시 영장실질심문 출석. 사회적 유대·도주우려 부재 자료 제출.",
            "deadline": "체포 후 48시간 내"
          },
          {
            "step": 4,
            "title": "공판·범죄수익 추징 대응",
            "description": "마약류 매매는 범죄수익 추징·몰수 대상. 1심 후 항소 7일 내. 추징 다툼은 별도 가능.",
            "deadline": "1심 선고 후 항소 7일"
          }
        ]
      },
      {
        "id": "drug-self-report-flow",
        "name": "자수·자진신고 절차 (감경 활용)",
        "applies_to": "마약류 사용 후 자수·자진신고 검토자",
        "steps": [
          {
            "step": 1,
            "title": "변호사 상담 후 자수 시점·범위 결정",
            "description": "자수는 마약류관리법 제40조의2 임의적 감경 사유. 수사 인지 전 자수가 가장 효과적입니다."
          },
          {
            "step": 2,
            "title": "관할 검찰청·경찰서 자수서 제출",
            "description": "사실관계·반성·치료의지 명시. 가족·동행자 동행이 도움됩니다."
          },
          {
            "step": 3,
            "title": "치료보호 동시 신청",
            "description": "자수와 치료보호 신청을 함께 하면 기소유예 가능성이 높아집니다."
          },
          {
            "step": 4,
            "title": "후속 검찰 처분",
            "description": "기소유예·약식·정식기소 결정. 자수 + 치료의지 + 초범인 경우 기소유예 가능성 검토."
          }
        ]
      },
      {
        "id": "drug-treatment-protection",
        "name": "치료보호 신청 절차 (마약류관리법 제40조)",
        "applies_to": "마약류 중독 치료 희망자 또는 검찰 의뢰자",
        "steps": [
          {
            "step": 1,
            "title": "치료보호기관 상담 (마약퇴치운동본부 1899-0893)",
            "description": "전국 치료보호기관(국립부곡병원 등 24개) 상담. 본인·가족·검찰 의뢰 모두 가능."
          },
          {
            "step": 2,
            "title": "치료보호 심사 신청",
            "description": "관할 시·도지사에게 치료보호 신청서 제출. 검찰·법원 의뢰 시 직접 심의."
          },
          {
            "step": 3,
            "title": "치료보호 심사위원회 결정",
            "description": "본인 의뢰는 12개월 이내, 검찰·법원 의뢰는 12개월 이내 치료보호 명령 가능."
          },
          {
            "step": 4,
            "title": "치료·재활·자조모임",
            "description": "병원 치료 + 다르크 등 재활공동체 + AA·NA 자조모임 연계. 치료 이수는 양형 감경 사유."
          }
        ]
      }
    ],
    "agency_names": [
      "경찰청 + 검찰청 + 식품의약품안전처 + 한국마약퇴치운동본부 + 대한법률구조공단"
    ],
    "required_documents": [
      {
        "category": "피의자 방어 (혐의를 받는 경우)",
        "items": [
          "변호인 선임계 / 국선변호인 선정청구서",
          "사회적 유대 입증 (재직증명·가족관계)",
          "치료보호 신청서·치료의지 소명서",
          "탄원서·반성문",
          "메시지·계좌·동선 자료 (사실관계 다툼 시)"
        ]
      },
      {
        "category": "자수·자진신고",
        "items": [
          "자수서 (사실관계·반성·치료의지)",
          "신분증",
          "가족 동행 시 동의서",
          "치료보호 신청서 (병행 시)"
        ]
      },
      {
        "category": "치료보호 신청",
        "items": [
          "치료보호신청서",
          "주민등록등본",
          "건강검진 기록",
          "보호자 동의서 (가족 신청 시)"
        ]
      },
      {
        "category": "양형·집행유예 자료",
        "items": [
          "치료·재활 이수증 (병원·다르크·자조모임)",
          "직장·가족 탄원서",
          "약물검사 음성 기록",
          "직업훈련·취업 증명"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "체포 후 영장 청구 검토",
        "value": "48시간 내"
      },
      {
        "label": "공소시효 단순투약",
        "value": "7년 (마약류관리법 위반 정도에 따라)"
      },
      {
        "label": "공소시효 매매·제조",
        "value": "10~15년 (정도에 따라)"
      },
      {
        "label": "약식 정식재판 청구",
        "value": "송달 후 7일"
      },
      {
        "label": "1심 항소",
        "value": "선고 후 7일"
      },
      {
        "label": "치료보호 기간",
        "value": "12개월 이내 (연장 가능)"
      },
      {
        "label": "자수 감경 시점",
        "value": "수사 인지 전이 가장 효과적"
      },
      {
        "label": "보호관찰·수강명령",
        "value": "선고 시 부수처분"
      }
    ],
    "source_urls": [
      "https://www.spo.go.kr/site/spo/01/10101050200002018112210.jsp",
      "https://www.drugfree.or.kr",
      "https://www.mfds.go.kr",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=608",
      "https://help.scourt.go.kr/nm/min_16/min_16_2/index.html"
    ],
    "common_mistakes": [
      "체포 직후 자포자기성 진술 → 양형에 결정적 악영향",
      "자수 시점을 수사 인지 후로 미룸 → 감경 효과 ↓",
      "치료보호 제도 모르고 단순 처벌만 받음",
      "공범 진술 협조 없이 묵비 → 양형 가중 가능",
      "범죄수익 추징 대상인데 자금 정리 안 함",
      "재활·자조모임 이수증 미제출 → 양형 자료 부족"
    ],
    "contacts": {
      "마약 신고": "112 또는 1301 (검찰)",
      "마약퇴치운동본부 상담": "1899-0893",
      "다르크 회복센터": "지역별",
      "대한법률구조공단": "132",
      "식약처 위해사범중앙조사단": "043-719-1900"
    }
  },
  "dui": {
    "domain": "dui",
    "primary_flow": {
      "id": "dui-criminal-flow",
      "name": "음주운전 형사 절차 5단계 (혐의를 받고 있다면)",
      "applies_to": "음주운전·음주측정거부 혐의를 받고 있는 운전자",
      "steps": [
        {
          "step": 1,
          "title": "단속 현장 호흡측정 → 채혈 요구권",
          "description": "호흡측정 결과에 이의가 있다면 채혈측정 요구가 가능합니다 (도로교통법 제44조 제3항). 측정거부는 별도 처벌 대상이므로 신중히 판단해야 합니다.",
          "deadline": "단속 현장 즉시"
        },
        {
          "step": 2,
          "title": "경찰 조사·송치",
          "description": "조서 작성 시 진술이 향후 양형에 영향을 줍니다. 변호사 조력을 검토해보세요. 0.03% 이상은 형사처벌 + 행정처분 동시 진행됩니다.",
          "deadline": "통상 수리일로부터 1~2개월 내 송치"
        },
        {
          "step": 3,
          "title": "검찰 처분 (약식기소·기소유예·정식기소)",
          "description": "초범·낮은 수치는 약식기소(벌금) 가능. 0.08% 이상·재범·사고 동반은 정식기소 가능성 ↑.",
          "deadline": "약식명령 송달 후 정식재판 청구 7일"
        },
        {
          "step": 4,
          "title": "공판·양형 자료 제출",
          "description": "도로교통공단 안전교육 이수증·자원봉사·반성문·가족 탄원서 등 양형자료 제출. 1심 후 항소 7일 내.",
          "deadline": "1심 선고 후 항소 7일"
        },
        {
          "step": 5,
          "title": "선고·확정",
          "description": "확정 시 벌금·집행유예·실형 선택. 재범 가중·이른바 윤창호법(0.2% 이상 또는 재범) 적용 시 형량 무거움."
        }
      ]
    },
    "all_flows": [
      {
        "id": "dui-criminal-flow",
        "name": "음주운전 형사 절차 5단계 (혐의를 받고 있다면)",
        "applies_to": "음주운전·음주측정거부 혐의를 받고 있는 운전자",
        "steps": [
          {
            "step": 1,
            "title": "단속 현장 호흡측정 → 채혈 요구권",
            "description": "호흡측정 결과에 이의가 있다면 채혈측정 요구가 가능합니다 (도로교통법 제44조 제3항). 측정거부는 별도 처벌 대상이므로 신중히 판단해야 합니다.",
            "deadline": "단속 현장 즉시"
          },
          {
            "step": 2,
            "title": "경찰 조사·송치",
            "description": "조서 작성 시 진술이 향후 양형에 영향을 줍니다. 변호사 조력을 검토해보세요. 0.03% 이상은 형사처벌 + 행정처분 동시 진행됩니다.",
            "deadline": "통상 수리일로부터 1~2개월 내 송치"
          },
          {
            "step": 3,
            "title": "검찰 처분 (약식기소·기소유예·정식기소)",
            "description": "초범·낮은 수치는 약식기소(벌금) 가능. 0.08% 이상·재범·사고 동반은 정식기소 가능성 ↑.",
            "deadline": "약식명령 송달 후 정식재판 청구 7일"
          },
          {
            "step": 4,
            "title": "공판·양형 자료 제출",
            "description": "도로교통공단 안전교육 이수증·자원봉사·반성문·가족 탄원서 등 양형자료 제출. 1심 후 항소 7일 내.",
            "deadline": "1심 선고 후 항소 7일"
          },
          {
            "step": 5,
            "title": "선고·확정",
            "description": "확정 시 벌금·집행유예·실형 선택. 재범 가중·이른바 윤창호법(0.2% 이상 또는 재범) 적용 시 형량 무거움."
          }
        ]
      },
      {
        "id": "dui-administrative-flow",
        "name": "운전면허 행정처분(취소·정지) 불복 5단계",
        "applies_to": "음주운전으로 면허 취소·정지 처분을 받은 운전자",
        "steps": [
          {
            "step": 1,
            "title": "처분 통지서 수령 + 이의신청 검토",
            "description": "지방경찰청장 처분 통지를 받은 날로부터 60일 내 이의신청 가능. 이의신청은 행정심판·행정소송과 별개 절차.",
            "deadline": "처분 통지일부터 60일 내"
          },
          {
            "step": 2,
            "title": "행정심판 청구 (중앙행정심판위원회)",
            "description": "처분이 있음을 안 날부터 90일·있은 날부터 180일 내 청구. 음주운전 0.08% 미만 + 사고 없음 + 생계형 운전자는 감경 사례 다수.",
            "deadline": "처분 안 날 90일 / 있은 날 180일"
          },
          {
            "step": 3,
            "title": "양형·감경 자료 제출",
            "description": "운전 생계 의존도·가족 부양·교육이수 증명·재발방지 다짐 등 자료 제출. 단순한 반성보다 구체적 사정이 효과적."
          },
          {
            "step": 4,
            "title": "재결 통지·인용 시 면허 회복",
            "description": "감경(취소→정지·정지기간 단축) 또는 기각 결정. 인용 시 면허 회복."
          },
          {
            "step": 5,
            "title": "행정소송 (재결 후 90일 내)",
            "description": "행정심판 결과에 불복 시 관할 행정법원에 행정소송 제기 가능.",
            "deadline": "재결서 송달 후 90일 / 처분 안 날 90일·있은 날 1년 내"
          }
        ]
      },
      {
        "id": "dui-education-flow",
        "name": "도로교통공단 안전교육 이수 절차 (감경 활용)",
        "applies_to": "음주운전으로 면허 취소·정지 또는 형사처벌 받은 운전자",
        "steps": [
          {
            "step": 1,
            "title": "교육 신청 (1577-1120 또는 온라인)",
            "description": "음주운전 처분자 의무교육은 처분기간에 따라 6시간·8시간·16시간으로 구분. 처분 전 자발적 이수도 양형 자료로 활용 가능."
          },
          {
            "step": 2,
            "title": "교육 이수",
            "description": "지정된 교육장에서 강의·시청각 교육·토론. 이수증 발급."
          },
          {
            "step": 3,
            "title": "이수증 제출",
            "description": "검찰·법원·행정심판위원회에 이수증 제출. 양형 감경·행정처분 감경 자료."
          },
          {
            "step": 4,
            "title": "음주운전 방지장치 부착 (재범자)",
            "description": "재범자는 음주운전방지장치 부착이 의무화될 수 있습니다 (도로교통법 개정). 부착·관리 비용은 본인 부담."
          }
        ]
      },
      {
        "id": "dui-accident-victim-flow",
        "name": "음주운전 피해 대응 4단계",
        "applies_to": "음주운전 사고 피해자",
        "steps": [
          {
            "step": 1,
            "title": "사고 직후 112·119 + 진단서",
            "description": "음주운전 사고는 형사 가중처벌 대상(특정범죄가중법 제5조의11). 진단서·CCTV·블랙박스 보존."
          },
          {
            "step": 2,
            "title": "보험사 신고 + 형사 고소 검토",
            "description": "음주운전은 종합보험 가입자라도 형사 면책 안 됨 → 가해자 형사처벌 가능. 12대 중과실에 해당."
          },
          {
            "step": 3,
            "title": "민사 손해배상 청구",
            "description": "치료비·위자료·일실수입·후유증 청구. 음주운전은 위자료 가중 사유.",
            "deadline": "불법행위 시효 안 날 3년 / 발생일 10년"
          },
          {
            "step": 4,
            "title": "범죄피해자 지원 신청",
            "description": "중상해·사망 시 범죄피해자지원센터(1577-1295) 통해 치료비·생계비 지원 신청 가능."
          }
        ]
      }
    ],
    "agency_names": [
      "경찰청 + 검찰청 + 도로교통공단 + 중앙행정심판위원회 + 대한법률구조공단"
    ],
    "required_documents": [
      {
        "category": "피의자 방어 (혐의를 받는 경우)",
        "items": [
          "변호인 선임계 / 국선변호인 선정청구서",
          "안전교육 이수증",
          "탄원서·반성문",
          "재직증명서·생계 입증 자료",
          "재발방지 다짐서·치료의지 소명",
          "채혈측정 요청서 (현장 단계)"
        ]
      },
      {
        "category": "행정심판 청구",
        "items": [
          "행정심판청구서",
          "처분통지서 사본",
          "운전면허 발급·갱신 기록",
          "운행일지·생계 입증 (영업·배달)",
          "교육이수증",
          "가족 탄원서"
        ]
      },
      {
        "category": "양형·감경 자료",
        "items": [
          "안전교육 이수증",
          "자원봉사 확인서",
          "치료·상담 기록 (알코올 의존 검사)",
          "직장·가족 탄원서",
          "기부·사회환원 증빙"
        ]
      },
      {
        "category": "피해자 손해배상",
        "items": [
          "교통사고사실확인원",
          "진단서·치료비 영수증",
          "블랙박스·CCTV·현장사진",
          "소득 입증 (일실수입용)"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "행정처분 이의신청",
        "value": "처분 통지일부터 60일 내"
      },
      {
        "label": "행정심판 청구",
        "value": "처분 안 날 90일 / 있은 날 180일"
      },
      {
        "label": "행정소송 제기",
        "value": "재결서 송달 후 90일 / 처분 안 날 90일"
      },
      {
        "label": "약식 정식재판 청구",
        "value": "송달 후 7일"
      },
      {
        "label": "1심 항소",
        "value": "선고 후 7일"
      },
      {
        "label": "공소시효 음주운전",
        "value": "5년 (단순) ~ 10년 (사고 동반·치사상)"
      },
      {
        "label": "민사 손해배상 시효",
        "value": "안 날 3년 / 발생일 10년"
      },
      {
        "label": "윤창호법 적용",
        "value": "0.2% 이상 또는 재범 가중"
      }
    ],
    "source_urls": [
      "https://www.koroad.or.kr",
      "https://www.simpan.go.kr",
      "https://www.spo.go.kr/site/spo/01/10101050200002018112210.jsp",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=585",
      "https://help.scourt.go.kr/nm/min_16/min_16_2/index.html"
    ],
    "common_mistakes": [
      "현장 호흡측정 결과만 수용하고 채혈측정 요청 안 함",
      "형사·행정처분이 별개 절차임을 모르고 한쪽만 대응",
      "행정심판 90일 시한 도과",
      "안전교육 이수 안 하고 양형 자료 부족",
      "음주운전 종합보험 면책 오해 — 12대 중과실로 형사 가능",
      "재범자 음주방지장치 부착 의무 인지 부족"
    ],
    "contacts": {
      "교통사고·음주운전 신고": "112",
      "도로교통공단 안전교육": "1577-1120",
      "중앙행정심판위원회": "110 (정부민원안내콜센터)",
      "대한법률구조공단": "132",
      "운전면허 민원": "1577-1120"
    }
  },
  "inheritance": {
    "domain": "inheritance",
    "primary_flow": {
      "id": "inheritance-acceptance-renounce",
      "name": "상속 단순승인·한정승인·포기 결정 5단계",
      "applies_to": "피상속인 사망 후 상속인이 된 사람",
      "steps": [
        {
          "step": 1,
          "title": "사망 + 상속인 확정 (즉시)",
          "description": "사망신고는 1개월 내. 가족관계증명서·기본증명서·제적등본으로 상속인 확정. 직계비속·배우자 1순위, 직계존속·형제자매 후순위.",
          "deadline": "사망신고 1개월 내"
        },
        {
          "step": 2,
          "title": "재산·채무 조사 (1~2개월)",
          "description": "안심상속 원스톱서비스(정부24)로 부동산·금융재산·자동차·세금·연금 한 번에 조회 가능. 채무가 더 많으면 한정승인·포기 검토."
        },
        {
          "step": 3,
          "title": "한정승인·상속포기 결정 (3개월 내)",
          "description": "상속인이 상속 개시 사실을 안 날로부터 3개월 내 가정법원에 한정승인·포기 신고가 가능합니다. 기간 내 결정 안 하면 단순승인 간주.",
          "deadline": "상속 개시 안 날부터 3개월"
        },
        {
          "step": 4,
          "title": "한정승인 채권자 공고·청산",
          "description": "한정승인 시 상속인은 5일 내 신문 공고로 채권자에게 2개월 이상 신고기간을 주고, 신고된 채권 비율대로 변제합니다.",
          "deadline": "공고 후 채권신고기간 2개월 이상"
        },
        {
          "step": 5,
          "title": "특별한정승인 (예외)",
          "description": "상속채무가 상속재산을 초과하는 사실을 중대한 과실 없이 3개월 내 알지 못한 경우, 그 사실을 안 날부터 3개월 내 특별한정승인 신청이 가능합니다 (민법 제1019조 제3항).",
          "deadline": "초과 사실 안 날부터 3개월"
        }
      ]
    },
    "all_flows": [
      {
        "id": "inheritance-acceptance-renounce",
        "name": "상속 단순승인·한정승인·포기 결정 5단계",
        "applies_to": "피상속인 사망 후 상속인이 된 사람",
        "steps": [
          {
            "step": 1,
            "title": "사망 + 상속인 확정 (즉시)",
            "description": "사망신고는 1개월 내. 가족관계증명서·기본증명서·제적등본으로 상속인 확정. 직계비속·배우자 1순위, 직계존속·형제자매 후순위.",
            "deadline": "사망신고 1개월 내"
          },
          {
            "step": 2,
            "title": "재산·채무 조사 (1~2개월)",
            "description": "안심상속 원스톱서비스(정부24)로 부동산·금융재산·자동차·세금·연금 한 번에 조회 가능. 채무가 더 많으면 한정승인·포기 검토."
          },
          {
            "step": 3,
            "title": "한정승인·상속포기 결정 (3개월 내)",
            "description": "상속인이 상속 개시 사실을 안 날로부터 3개월 내 가정법원에 한정승인·포기 신고가 가능합니다. 기간 내 결정 안 하면 단순승인 간주.",
            "deadline": "상속 개시 안 날부터 3개월"
          },
          {
            "step": 4,
            "title": "한정승인 채권자 공고·청산",
            "description": "한정승인 시 상속인은 5일 내 신문 공고로 채권자에게 2개월 이상 신고기간을 주고, 신고된 채권 비율대로 변제합니다.",
            "deadline": "공고 후 채권신고기간 2개월 이상"
          },
          {
            "step": 5,
            "title": "특별한정승인 (예외)",
            "description": "상속채무가 상속재산을 초과하는 사실을 중대한 과실 없이 3개월 내 알지 못한 경우, 그 사실을 안 날부터 3개월 내 특별한정승인 신청이 가능합니다 (민법 제1019조 제3항).",
            "deadline": "초과 사실 안 날부터 3개월"
          }
        ]
      },
      {
        "id": "inheritance-tax-filing",
        "name": "상속세 신고·납부 절차 (6개월 내)",
        "applies_to": "상속재산이 있는 모든 상속인",
        "steps": [
          {
            "step": 1,
            "title": "상속재산 평가",
            "description": "상속개시일 현재 시가 평가. 부동산은 공시가격·기준시가, 금융재산은 잔고. 평가 기준 다툼 시 감정평가 검토."
          },
          {
            "step": 2,
            "title": "공제 적용 후 과세표준 산정",
            "description": "기본공제 2억 + 배우자공제(최소 5억·최대 30억) + 일괄공제 5억 등 적용. 5억(일괄) 또는 10억(배우자 있음) 미만이면 사실상 비과세."
          },
          {
            "step": 3,
            "title": "상속세 신고서 제출 (6개월 내)",
            "description": "피상속인 주소지 관할 세무서에 신고. 자진신고 세액공제(3%) 적용 가능.",
            "deadline": "상속개시일이 속한 달의 말일부터 6개월"
          },
          {
            "step": 4,
            "title": "분할납부·연부연납 검토",
            "description": "1천만원 초과 시 2개월 내 분할납부, 2천만원 초과 시 최장 10년 연부연납 신청 가능."
          },
          {
            "step": 5,
            "title": "세무조사·경정청구",
            "description": "신고 후 세무조사 가능. 과다신고했다면 5년 내 경정청구로 환급 신청 가능.",
            "deadline": "법정신고기한 후 5년 내 경정청구"
          }
        ]
      },
      {
        "id": "inheritance-division",
        "name": "상속재산분할 절차 (협의·심판)",
        "applies_to": "공동상속인 간 재산분할 필요한 경우",
        "steps": [
          {
            "step": 1,
            "title": "협의분할 시도 (전원 합의)",
            "description": "공동상속인 전원 합의로 분할협의서 작성·공증·등기. 1명이라도 반대 시 협의분할 불가."
          },
          {
            "step": 2,
            "title": "조정 신청 (가정법원)",
            "description": "협의 결렬 시 가정법원에 상속재산분할 조정 신청 가능. 가사조정 전치주의."
          },
          {
            "step": 3,
            "title": "심판 청구",
            "description": "조정 불성립 시 심판 청구. 법원이 기여분·특별수익 등을 고려해 분할 결정."
          },
          {
            "step": 4,
            "title": "유류분 반환청구 (별도)",
            "description": "유언·증여로 법정 상속분의 절반(직계비속·배우자) 또는 1/3(직계존속·형제자매) 침해 시 유류분 반환청구 가능.",
            "deadline": "반환청구 안 날 1년 / 상속개시 후 10년"
          },
          {
            "step": 5,
            "title": "등기·세무 처리",
            "description": "확정 분할에 따라 부동산 등기 이전·세무 신고."
          }
        ]
      },
      {
        "id": "inheritance-debt-handling",
        "name": "상속채무 대응 절차 (빚 상속 방지)",
        "applies_to": "피상속인의 채무가 의심·확인되는 상속인",
        "steps": [
          {
            "step": 1,
            "title": "채무 조회 (안심상속 + 신용조회)",
            "description": "정부24 안심상속 + 한국신용정보원 채무조회 + 카드사·통신사 미납 확인. 보증채무 조회는 별도 어려움 — 가족·지인 확인 권장."
          },
          {
            "step": 2,
            "title": "채무 > 재산 시 한정승인 또는 포기",
            "description": "한정승인은 상속재산 한도에서만 변제, 포기는 처음부터 상속 안 받은 것으로 간주. 가족 전체 영향 고려.",
            "deadline": "상속 개시 안 날부터 3개월"
          },
          {
            "step": 3,
            "title": "한정승인 신문공고·채권자 확정",
            "description": "공고 후 신고된 채권을 비율대로 변제. 신고 안 된 채권은 후순위로 처리."
          },
          {
            "step": 4,
            "title": "특별한정승인 활용 (사후 발견)",
            "description": "단순승인 후 채무가 더 많음을 안 경우, 그 사실을 안 날부터 3개월 내 특별한정승인 신청.",
            "deadline": "초과 사실 안 날부터 3개월"
          }
        ]
      },
      {
        "id": "inheritance-will-execution",
        "name": "유언·유증 집행 절차",
        "applies_to": "유언장이 있는 상속·유증",
        "steps": [
          {
            "step": 1,
            "title": "유언 검인 (가정법원)",
            "description": "자필·녹음·비밀증서 유언은 가정법원 검인 절차 필수. 공정증서 유언은 검인 불요."
          },
          {
            "step": 2,
            "title": "유언집행자 지정·등록",
            "description": "유언서에 지정 또는 가정법원에 선임 청구. 유언집행자가 재산 관리·이전 담당."
          },
          {
            "step": 3,
            "title": "유증·이전 등기",
            "description": "유증받은 재산은 유언집행자가 등기 이전·금융재산 이체."
          },
          {
            "step": 4,
            "title": "유류분 반환청구 대응",
            "description": "유증으로 다른 상속인 유류분이 침해된 경우 반환청구 소송 가능.",
            "deadline": "반환청구 안 날 1년"
          }
        ]
      }
    ],
    "agency_names": [
      "법원 가정법원 (전자민원센터) + 국세청 + 찾기쉬운 생활법령정보 + 대한법률구조공단"
    ],
    "required_documents": [
      {
        "category": "상속 결정 (한정승인·포기)",
        "items": [
          "한정승인심판청구서 또는 상속포기심판청구서",
          "사망진단서·기본증명서",
          "가족관계증명서·제적등본",
          "재산목록 (한정승인 시 필수)",
          "채무목록·신용조회서",
          "안심상속 원스톱서비스 결과지"
        ]
      },
      {
        "category": "상속세 신고",
        "items": [
          "상속세 과세표준 신고서",
          "재산평가서 (감정평가서·공시지가)",
          "공제증빙 (배우자·기본·일괄공제)",
          "분할협의서·유언서",
          "피상속인 금융거래내역"
        ]
      },
      {
        "category": "상속재산분할 심판",
        "items": [
          "심판청구서·소장",
          "분할협의 결렬 사실 소명",
          "기여분·특별수익 입증",
          "재산목록·평가서"
        ]
      },
      {
        "category": "유언 검인·집행",
        "items": [
          "유언서 원본 (자필·녹음·비밀증서)",
          "유언검인심판청구서",
          "유언집행자 지정·선임청구서",
          "유증 이전 등기신청서"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "사망신고",
        "value": "사망 후 1개월 내"
      },
      {
        "label": "한정승인·포기 신고",
        "value": "상속 개시 안 날부터 3개월"
      },
      {
        "label": "특별한정승인",
        "value": "채무 초과 사실 안 날부터 3개월"
      },
      {
        "label": "한정승인 신문공고 채권신고기간",
        "value": "공고 후 2개월 이상"
      },
      {
        "label": "상속세 신고·납부",
        "value": "상속개시일이 속한 달 말일부터 6개월"
      },
      {
        "label": "상속세 자진신고 세액공제",
        "value": "법정신고기한 내 신고 시 3%"
      },
      {
        "label": "유류분 반환청구",
        "value": "안 날 1년 / 상속개시 후 10년"
      },
      {
        "label": "상속세 경정청구",
        "value": "법정신고기한 후 5년"
      },
      {
        "label": "상속재산분할 청구권 시효",
        "value": "원칙 시효 없음 (단 등기·점유 다툼 별도)"
      }
    ],
    "source_urls": [
      "https://help.scourt.go.kr/nm/min_3/min_3_2/min_3_2_1/index.html",
      "https://www.nts.go.kr",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=237",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=240",
      "https://www.klac.or.kr"
    ],
    "common_mistakes": [
      "사망 후 3개월 그냥 흘려보내 단순승인 간주 → 빚까지 상속",
      "한정승인 후 신문공고 누락 → 변제 순위 분쟁",
      "안심상속 원스톱서비스 미이용 → 숨은 채무 사후 발견",
      "상속세 6개월 시한 도과 → 가산세 부과",
      "유류분 반환 시한(1년) 도과 → 권리 소멸",
      "공동상속인 1명 협의 거부에도 협의분할 강행 시도 → 무효 위험"
    ],
    "contacts": {
      "가정법원 민원": "지역별 (전자민원센터)",
      "대한법률구조공단": "132",
      "국세청 상속세 상담": "126",
      "대법원 전자가족관계등록": "1899-9151",
      "한국가정법률상담소": "1644-7077"
    }
  },
  "sangga": {
    "domain": "sangga",
    "primary_flow": {
      "id": "sangga-dispute-mediation",
      "name": "상가임대차 분쟁조정 신청 5단계",
      "applies_to": "상가건물 임대인·임차인 간 분쟁 당사자",
      "steps": [
        {
          "step": 1,
          "title": "조정 신청서 제출",
          "description": "상가건물임대차분쟁조정위원회(1670-3001)에 온라인 또는 방문 신청. 임대료·계약갱신·권리금·관리비·원상회복 등 분쟁 조정 가능. 신청 비용 1만~10만원 수준."
        },
        {
          "step": 2,
          "title": "상대방 응낙 통지 (수령 후 14일 내)",
          "description": "조정신청서 송달 받은 상대방은 14일 내 응낙 여부 통지. 응낙 시 조정절차 개시, 거부 시 종결.",
          "deadline": "송달 후 14일 내 응낙"
        },
        {
          "step": 3,
          "title": "조정기일·당사자 의견 청취",
          "description": "조정위원이 양 당사자 의견 청취 후 조정안 제시. 사실조사·전문가 자문 가능."
        },
        {
          "step": 4,
          "title": "조정 성립·조정조서 작성",
          "description": "양 당사자 수락 시 조정조서 작성 → 재판상 화해와 동일 효력. 미수락 시 조정 불성립으로 종결.",
          "deadline": "신청일부터 60일 내 처리 (1회 30일 연장 가능)"
        },
        {
          "step": 5,
          "title": "민사소송·강제집행",
          "description": "조정 불성립 시 민사소송으로 진행. 조정 성립한 사항 미이행 시 조정조서로 강제집행 가능."
        }
      ]
    },
    "all_flows": [
      {
        "id": "sangga-dispute-mediation",
        "name": "상가임대차 분쟁조정 신청 5단계",
        "applies_to": "상가건물 임대인·임차인 간 분쟁 당사자",
        "steps": [
          {
            "step": 1,
            "title": "조정 신청서 제출",
            "description": "상가건물임대차분쟁조정위원회(1670-3001)에 온라인 또는 방문 신청. 임대료·계약갱신·권리금·관리비·원상회복 등 분쟁 조정 가능. 신청 비용 1만~10만원 수준."
          },
          {
            "step": 2,
            "title": "상대방 응낙 통지 (수령 후 14일 내)",
            "description": "조정신청서 송달 받은 상대방은 14일 내 응낙 여부 통지. 응낙 시 조정절차 개시, 거부 시 종결.",
            "deadline": "송달 후 14일 내 응낙"
          },
          {
            "step": 3,
            "title": "조정기일·당사자 의견 청취",
            "description": "조정위원이 양 당사자 의견 청취 후 조정안 제시. 사실조사·전문가 자문 가능."
          },
          {
            "step": 4,
            "title": "조정 성립·조정조서 작성",
            "description": "양 당사자 수락 시 조정조서 작성 → 재판상 화해와 동일 효력. 미수락 시 조정 불성립으로 종결.",
            "deadline": "신청일부터 60일 내 처리 (1회 30일 연장 가능)"
          },
          {
            "step": 5,
            "title": "민사소송·강제집행",
            "description": "조정 불성립 시 민사소송으로 진행. 조정 성립한 사항 미이행 시 조정조서로 강제집행 가능."
          }
        ]
      },
      {
        "id": "sangga-renewal-rejection",
        "name": "계약갱신요구·거절 분쟁 절차 4단계",
        "applies_to": "임대차 갱신을 요구하는 임차인 또는 거절을 검토하는 임대인",
        "steps": [
          {
            "step": 1,
            "title": "갱신요구 통지 (계약 종료 6~1개월 전)",
            "description": "임차인은 임대차 종료 6개월 전부터 1개월 전까지 서면 갱신요구가 가능합니다 (상가임대차법 제10조). 내용증명 권장.",
            "deadline": "계약 종료 6~1개월 전"
          },
          {
            "step": 2,
            "title": "거절 사유 검토",
            "description": "임대인은 정당한 사유(차임 3기 연체·고의 파손·재건축 등 8가지) 있을 때만 갱신 거절 가능. 사유 없는 거절은 갱신 의제 가능."
          },
          {
            "step": 3,
            "title": "분쟁조정 또는 임차권 등기",
            "description": "거절 다툼 시 상가분쟁조정위원회 신청 가능. 임대차 종료 후에도 보증금 미반환 시 임차권등기명령 신청.",
            "deadline": "임대차 종료 후 임차권등기"
          },
          {
            "step": 4,
            "title": "민사소송 (갱신 확인·명도)",
            "description": "갱신 효력 확인의 소 또는 명도소송. 환산보증금 한도 초과 임대차도 갱신요구권은 보장(2018 개정).",
            "deadline": "갱신요구권 행사 가능 기간 10년 (총 임대차기간 기준)"
          }
        ]
      },
      {
        "id": "sangga-premium-recovery",
        "name": "권리금 회수 방해 손해배상 절차 5단계",
        "applies_to": "신규임차인 주선이 방해된 기존 임차인",
        "steps": [
          {
            "step": 1,
            "title": "신규임차인 주선·임대인 통지",
            "description": "임대차 종료 6개월 전부터 종료까지 신규임차인 주선이 가능합니다. 임대인에게 신규임차인을 통지·주선해야 권리금 회수기회 보호 대상.",
            "deadline": "임대차 종료 6개월 전부터 종료까지"
          },
          {
            "step": 2,
            "title": "임대인 방해행위 입증",
            "description": "임대인이 ①신규임차인 거절 ②현저히 고액 차임 요구 ③기타 방해 시 손해배상 청구 사유. 메시지·녹음·내용증명 보존."
          },
          {
            "step": 3,
            "title": "분쟁조정 신청 또는 내용증명",
            "description": "상가분쟁조정위원회 조정 신청 또는 내용증명으로 손해배상 청구."
          },
          {
            "step": 4,
            "title": "권리금 손해배상 청구 소송",
            "description": "임대차 종료 후 3년 내 청구 가능. 손해액은 권리금 평가액·신규임차인 합의 권리금 등 입증.",
            "deadline": "임대차 종료 후 3년 내"
          },
          {
            "step": 5,
            "title": "강제집행",
            "description": "확정 판결 후 임대인 재산에 압류·경매."
          }
        ]
      },
      {
        "id": "sangga-rent-increase",
        "name": "차임증감청구 절차 4단계",
        "applies_to": "차임 증액·감액을 요구하는 임대인 또는 임차인",
        "steps": [
          {
            "step": 1,
            "title": "사정변경 사유 정리",
            "description": "차임증감청구는 조세·공과·경제사정 변동 등 사정변경이 있을 때만 가능. 단순 시세 변동만으로는 어려움."
          },
          {
            "step": 2,
            "title": "내용증명 청구",
            "description": "상대방에게 증감 청구 내용증명. 증액은 5% 한도 (상가임대차법 시행령). 1년 내 재증액 불가."
          },
          {
            "step": 3,
            "title": "분쟁조정 신청",
            "description": "협의 결렬 시 상가분쟁조정위원회 신청. 부동산원 평가 등 객관적 자료 활용."
          },
          {
            "step": 4,
            "title": "민사소송 (차임증감 확인의 소)",
            "description": "조정 불성립 시 법원이 정한 차임으로 확정. 증액분 소급은 청구일부터.",
            "deadline": "원칙적 증액 1년에 1회 + 5% 한도"
          }
        ]
      },
      {
        "id": "sangga-deposit-recovery",
        "name": "보증금 반환 절차 4단계",
        "applies_to": "임대차 종료 후 보증금을 돌려받지 못한 임차인",
        "steps": [
          {
            "step": 1,
            "title": "임차권등기명령 신청",
            "description": "임대차 종료 후 보증금 미반환 시 관할 법원에 임차권등기명령 신청. 등기 후 이사·전출해도 대항력·우선변제권 유지.",
            "deadline": "임대차 종료 후 즉시"
          },
          {
            "step": 2,
            "title": "내용증명 + 분쟁조정",
            "description": "보증금 반환 청구 내용증명. 협의 결렬 시 상가분쟁조정위원회 신청 가능."
          },
          {
            "step": 3,
            "title": "보증금반환청구 소송 또는 지급명령",
            "description": "다툼 적으면 지급명령(인지 1/10), 다툼 크면 본안 소송. 소액(3천만 이하)은 소액심판 활용.",
            "deadline": "보증금반환청구 시효 10년"
          },
          {
            "step": 4,
            "title": "강제집행 (배당)",
            "description": "확정 후 임차권등기·확정일자 효력으로 우선변제 배당 신청."
          }
        ]
      }
    ],
    "agency_names": [
      "법무부 + 상가건물임대차분쟁조정위원회 + 대한법률구조공단 + 찾기쉬운 생활법령정보"
    ],
    "required_documents": [
      {
        "category": "분쟁조정 신청",
        "items": [
          "분쟁조정신청서",
          "임대차계약서",
          "사업자등록증",
          "분쟁사실 입증자료 (내용증명·메시지)",
          "차임·보증금 입금내역",
          "신청수수료 영수증"
        ]
      },
      {
        "category": "갱신요구·권리금",
        "items": [
          "갱신요구 내용증명",
          "신규임차인 주선 자료 (계약서·인적사항)",
          "권리금 평가서 또는 신규임차인 합의서",
          "임대인 방해행위 입증 (메시지·녹음)",
          "사업장 매출·시설 입증"
        ]
      },
      {
        "category": "보증금 반환·임차권등기",
        "items": [
          "임차권등기명령신청서",
          "임대차계약서 + 확정일자",
          "사업자등록·전입신고 증빙",
          "보증금 입금내역",
          "임대차 종료 통지·내용증명"
        ]
      },
      {
        "category": "차임증감",
        "items": [
          "차임증감청구 내용증명",
          "사정변경 입증 (조세·공과·경제사정)",
          "주변 시세 자료 (부동산원·KB시세)",
          "기존 차임·관리비 내역"
        ]
      }
    ],
    "key_deadlines": [
      {
        "label": "분쟁조정 처리기간",
        "value": "신청일부터 60일 (1회 30일 연장)"
      },
      {
        "label": "갱신요구 통지",
        "value": "계약 종료 6~1개월 전 서면"
      },
      {
        "label": "갱신요구권 총 보장기간",
        "value": "10년 (2018년 개정)"
      },
      {
        "label": "권리금 손해배상 시효",
        "value": "임대차 종료 후 3년"
      },
      {
        "label": "권리금 회수기회 보호기간",
        "value": "임대차 종료 6개월 전부터 종료까지"
      },
      {
        "label": "차임증액 한도",
        "value": "5% / 1년에 1회"
      },
      {
        "label": "임차권등기명령",
        "value": "임대차 종료 후 즉시"
      },
      {
        "label": "보증금반환 시효",
        "value": "10년"
      },
      {
        "label": "응낙 통지",
        "value": "조정신청 송달 후 14일 내"
      }
    ],
    "source_urls": [
      "https://www.cbldcc.or.kr",
      "https://www.klac.or.kr",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=523",
      "https://help.scourt.go.kr/nm/min_3/min_3_2/index.html",
      "https://www.moj.go.kr"
    ],
    "common_mistakes": [
      "갱신요구 구두로만 → 입증 어려움 (반드시 서면·내용증명)",
      "갱신요구권 10년 모르고 5년에 포기",
      "권리금 회수기회 보호기간(종료 6개월 전~종료) 도과",
      "보증금 못 받았는데 그냥 이사 → 대항력 상실 (임차권등기 필수)",
      "차임증액 5% 한도·1년 1회 제한 모르고 응함",
      "분쟁조정 응낙거부 시 소송 외 방법 없음을 모름"
    ],
    "contacts": {
      "상가건물임대차분쟁조정위원회": "1670-3001",
      "대한법률구조공단": "132",
      "한국부동산원": "053-663-8500",
      "소상공인시장진흥공단": "1357",
      "법원 민사신청": "지역별 (전자민원센터)"
    }
  }
};
