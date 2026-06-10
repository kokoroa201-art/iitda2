'use client'

import { useState } from 'react'
import ApplyModal from '../../components/ApplyModal'

function Check({ color = '#1A2035' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="8" fill={color} fillOpacity="0.12" />
      <path d="M5 8.5L7 10.5L11 6" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Dash() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="8" fill="#E5E7EB" />
      <path d="M5 8H11" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

const ROWS = [
  {
    label: '서비스 정보 찾기',
    desc: '83개 서비스의 신청 방법 및 필요 서류',
    free: true,
    pro: true,
  },
  {
    label: '절차 타임라인 안내',
    desc: '사망 당일부터 3개월까지 순서 안내',
    free: true,
    pro: true,
  },
  {
    label: '공식 신청 페이지 직접 연결',
    desc: '각 기관별 공식 사이트로 직접 이동',
    free: true,
    pro: true,
  },
  {
    label: '서류 작성 대행',
    desc: '사망진단서부터 상속세 신고까지 서류 일체 대행',
    free: false,
    pro: true,
  },
  {
    label: '기관별 직접 방문 및 신청 대행',
    desc: '법무사·세무사·법무법인 직접 방문 대행',
    free: false,
    pro: true,
  },
  {
    label: '부동산 명의 이전',
    desc: '부동산 등기·차량·보험 명의 이전',
    free: false,
    pro: true,
  },
  {
    label: '세무사 세금 계산',
    desc: '부동산 취득세 및 세금 계산',
    free: false,
    pro: true,
  },
  {
    label: '담당 전문가 1:1 배정',
    desc: '전담 법무사 배정, 언제든지 질문 가능',
    free: false,
    pro: true,
  },
]

export default function PricingPage() {
  const [applyOpen, setApplyOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">

      {/* 헤더 */}
      <div className="px-4 pt-28 pb-14 text-center border-b border-gray-100">
        <p className="text-xs font-bold text-gray-400 mb-3" style={{ letterSpacing: '0.08em' }}>PRICING</p>
        <h1 className="text-3xl font-black text-[#0A0E1A] mb-3" style={{ letterSpacing: '-0.02em' }}>
          직접 처리하거나, 전문가에게 맡기세요.
        </h1>
        <p className="text-gray-400 text-sm">
          직접 하려면 무료입니다. 전문가에게 맡기면 편하고 빠릅니다.
        </p>
      </div>

      {/* 두 가지 방법 비교 */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 gap-6 mb-14">

          {/* 직접 처리 */}
          <div className="border border-gray-200 rounded-2xl p-8 flex flex-col">
            <div>
              <p className="text-xs font-bold text-gray-400 mb-5" style={{ letterSpacing: '0.08em' }}>직접 처리하기</p>
              <div className="mb-6">
                <div className="text-4xl font-black text-[#0A0E1A] mb-1" style={{ letterSpacing: '-0.02em' }}>
                  무료
                </div>
                <p className="text-xs text-gray-400">가입 없이 · 이용요금 없음</p>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                정보를 직접 찾아 각 기관에 직접 신청하는 방법입니다.
                단계별 가이드로 스스로 해결해드립니다.
              </p>
            </div>
            <div className="space-y-3 mb-8 flex-1">
              {ROWS.filter(r => r.free).map((r, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check />
                  <div>
                    <p className="text-sm font-semibold text-[#0A0E1A]">{r.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2.5">
              <a href="/services"
                className="block w-full py-3.5 rounded-xl text-center font-bold text-sm transition-all hover:bg-gray-800"
                style={{ background: '#0A0E1A', color: '#fff' }}>
                서비스 알아보러 가기
              </a>
              <a href="/guide"
                className="block w-full py-3 rounded-xl text-center font-semibold text-sm text-gray-500 border border-gray-200 hover:border-gray-300 transition-colors">
                단계별 가이드 먼저 보기
              </a>
            </div>
          </div>

          {/* 전문가 맡기기 */}
          <div className="border-2 rounded-2xl p-8 flex flex-col relative"
            style={{ borderColor: '#0A0E1A' }}>
            <div className="absolute -top-3.5 left-6">
              <span className="text-xs font-bold px-3 py-1 rounded-full text-white"
                style={{ background: '#0A0E1A' }}>
                복잡한 절차에 추천
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 mb-5" style={{ letterSpacing: '0.08em' }}>전문가에게 맡기기</p>
              <div className="mb-6">
                <div className="text-4xl font-black text-[#0A0E1A] mb-1" style={{ letterSpacing: '-0.02em' }}>
                  별도 견적
                </div>
                <p className="text-xs text-gray-400">초기 상담 무료 · 1:1 전담 배정</p>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                서류 작성과 기관 신청을 처음부터 끝까지 전문가가
                직접 처리해드립니다.
              </p>
            </div>
            <div className="space-y-3 mb-8 flex-1">
              {ROWS.map((r, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  {r.pro ? <Check color="#0057B8" /> : <Dash />}
                  <div>
                    <p className={`text-sm font-semibold ${r.pro ? 'text-[#0A0E1A]' : 'text-gray-300'}`}>
                      {r.label}
                    </p>
                    <p className={`text-xs mt-0.5 ${r.pro ? 'text-gray-400' : 'text-gray-200'}`}>
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setApplyOpen(true)}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #00C8A5, #0057B8)' }}>
              전문가 도움 신청하기
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">
              상담 후 방법에 대해 직접 결정하실 수 있습니다
            </p>
          </div>
        </div>

        {/* 하단 문구 */}
        <div className="text-center border-t border-gray-100 pt-10">
          <p className="text-sm font-semibold text-[#0A0E1A] mb-2">
            어떤 방법을 선택하시든, 잇다는 언제나 곁에 있습니다.
          </p>
          <p className="text-xs text-gray-400">
            혼자서도 할 수 있는 정보를 최대한 무료로 드리는 것을 최우선으로, 여러분이 원하는 방법으로 이용할 수 있도록 돕겠습니다.
          </p>
        </div>
      </div>

      <ApplyModal
        open={applyOpen}
        onClose={() => setApplyOpen(false)}
        defaultType="consult"
      />
    </div>
  )
}
