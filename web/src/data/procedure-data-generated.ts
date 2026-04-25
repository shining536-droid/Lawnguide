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
  }
};
