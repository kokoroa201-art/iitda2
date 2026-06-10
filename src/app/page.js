'use client'

import { useState } from 'react'
import ApplyModal from '../components/ApplyModal'

const PAIN_POINTS = [
  {
    tag: '여러 기관',
    title: '은행·통신·보험·행정에 각각 따로',
    desc: '사망 신고, 계좌 정지, 통신 해지, 보험 청구, 연금 신고 — 각 기관에 개별적으로 연락하고 방문해야 합니다.',
  },
  {
    tag: '서류 준비',
    title: '기관마다 요구하는 서류가 다릅니다',
    desc: '사망진단서·가족관계증명서는 공통이지만, 기관에 따라 추가 서류를 별도로 요구해 매번 확인이 필요합니다.',
  },
  {
    tag: '기한 주의',
    title: '놓치면 불이익이 생기는 절차가 있습니다',
    desc: '상속 포기·한정승인은 사망 후 3개월 이내, 사망신고는 1개월 이내. 기한이 있는 절차는 미리 파악해야 합니다.',
  },
]

const STEPS = [
  {
    num: '01',
    title: '상황에 맞는 절차 찾기',
    desc: '사망신고, 금융계좌, 통신 해지, 상속 서류 — 지금 처리해야 할 것이 무엇인지 선택하면 관련 절차가 한눈에 정리됩니다.',
  },
  {
    num: '02',
    title: '단계별 안내 따라가기',
    desc: '어떤 서류가 필요한지, 어디에 신청해야 하는지 순서대로 안내해드립니다. 처음이라도 괜찮아요.',
  },
  {
    num: '03',
    title: '필요하면 전문가 연결',
    desc: '혼자 처리하기 어려운 절차는 서류 작성 도움 또는 법무사·세무사 연결 서비스를 이용할 수 있어요.',
  },
]

const CATEGORIES = [
  { abbr: '금융', title: '금융·계좌', desc: '계좌 정지, 연금, 보험 해지', href: '/services?cat=financial' },
  { abbr: '행정', title: '사망신고·행정', desc: '사망신고, 상속, 정부24', href: '/services?cat=government' },
  { abbr: '통신', title: '통신 해지', desc: '이동통신, 인터넷, 요금 정지', href: '/services?cat=telecom' },
  { abbr: '서류', title: '상속 서류', desc: '필요 서류 한눈에 정리', href: '/services?cat=insurance' },
  { abbr: 'SNS', title: 'SNS·디지털', desc: '카카오, 네이버, 구글 계정', href: '/services?cat=sns' },
  { abbr: '구독', title: '구독 해지', desc: '스트리밍, 쇼핑몰, 앱 구독', href: '/services?cat=subscription' },
]

export default function HomePage() {
  const [applyOpen, setApplyOpen] = useState(false)
  const [applyType, setApplyType] = useState('consult')

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* 전체 배경 이미지 */}
        <div className="absolute inset-0">
          <img
            src="/img/main_background.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          {/* 텍스트 가독성을 위한 왼쪽 그라데이션 오버레이 */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(100deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 30%, rgba(255,255,255,0.6) 55%, rgba(255,255,255,0.1) 80%, transparent 100%)' }} />
        </div>

        {/* 텍스트 영역 */}
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-36 pb-24 w-full">
          <div className="max-w-xl">

            {/* 상단 레이블 */}
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full"
              style={{ background: '#F0FDF9', border: '1px solid #A7F3D0' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A896]" />
              <span className="text-xs font-bold text-[#065F46]" style={{ letterSpacing: '0.04em' }}>
                사망 이후 절차 안내 · 완전 무료
              </span>
            </div>

            {/* 메인 헤드라인 */}
            <h1 className="font-black text-[#0A0E1A] mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              슬픔을 추스르기도<br />
              전에, 행정이<br />
              <span style={{ color: '#0057B8' }}>기다립니다.</span>
            </h1>

            {/* 서브카피 */}
            <p className="mb-8 text-gray-500"
              style={{ fontSize: '1.05rem', lineHeight: 1.85 }}>
              사망신고부터 금융계좌 정리, 통신 해지, 상속 서류까지<br />
              처음이라 막막한 절차들을 단계별로 안내해드립니다.
            </p>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base transition-all hover:opacity-90"
                style={{ background: '#0A0E1A', color: '#fff' }}>
                무료로 절차 찾기
              </a>
              <a href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base border border-gray-200 text-gray-600 transition-all hover:border-gray-400">
                전문가 도움 받기
              </a>
            </div>

            {/* 상황 빠른 선택 */}
            <div>
              <p className="text-xs font-semibold text-gray-400 mb-3">
                지금 상황을 선택하세요
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: '사망신고 해야 해요',    href: '/guide' },
                  { label: '금융계좌 정리해야 해요', href: '/services?cat=financial' },
                  { label: '통신 요금 끊어야 해요',  href: '/services?cat=telecom' },
                  { label: '뭐부터 할지 모르겠어요', href: '/checklist' },
                ].map((s, i) => (
                  <a key={i} href={s.href}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 border border-gray-200 hover:border-gray-400 hover:text-gray-900 transition-all bg-white/80">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section id="why" className="py-24" style={{ background: '#F8FAFB' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: '#00C8A5', letterSpacing: '0.12em' }}>
              왜 잇다가 필요한가요
            </p>
            <h2 className="font-black text-[#0A0E1A] mb-4"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.15 }}>
              가족을 잃은 후,<br />
              <span style={{ color: '#0057B8' }}>행정이 얼마나 많은지</span><br />
              아시나요?
            </h2>
            <p className="text-gray-500" style={{ lineHeight: 1.8 }}>
              아무도 미리 알려주지 않아요. 장례가 끝나자마자
              은행, 통신사, 보험사, 정부24에 각각 찾아가야 합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PAIN_POINTS.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm flex flex-col gap-4"
                style={{ border: '1px solid #EAEFF4' }}>
                <span className="self-start text-xs font-black px-2.5 py-1 rounded-full"
                  style={{ background: '#EFF6FF', color: '#0057B8', letterSpacing: '0.04em' }}>
                  {p.tag}
                </span>
                <div>
                  <p className="font-bold text-[#0A0E1A] mb-2 leading-snug"
                    style={{ fontSize: '0.95rem', letterSpacing: '-0.02em' }}>
                    {p.title}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl"
            style={{ background: 'linear-gradient(135deg, rgba(0,200,165,0.08) 0%, rgba(0,87,184,0.08) 100%)', border: '1px solid rgba(0,200,165,0.2)' }}>
            <p className="text-center font-semibold text-gray-700" style={{ lineHeight: 1.7 }}>
              이 모든 절차를 슬픔 속에서, 혼자, 처음으로 해내야 합니다.<br />
              <strong className="text-[#0A0E1A]">잇다는 그 짐을 조금이라도 함께 지고 싶어요.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: '#00C8A5', letterSpacing: '0.12em' }}>
              어떻게 도와드리나요
            </p>
            <h2 className="font-black text-[#0A0E1A]"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.15 }}>
              세 단계면<br />충분해요.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {STEPS.map((s, i) => (
              <div key={i} className="relative">
                <div className="font-black mb-5"
                  style={{ fontSize: '4rem', color: '#E8F8F5', lineHeight: 1, letterSpacing: '-0.02em' }}>
                  {s.num}
                </div>
                <h3 className="font-bold text-[#0A0E1A] mb-3"
                  style={{ fontSize: '1.05rem', letterSpacing: '-0.02em' }}>
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                {i < STEPS.length - 1 && (
                  <div className="hidden sm:block absolute top-8 right-0 translate-x-5 text-gray-200 text-2xl select-none">→</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a href="/guide"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #00C8A5, #0057B8)', color: '#fff', letterSpacing: '-0.01em' }}>
              절차 가이드 전체 보기 →
            </a>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section id="categories" className="py-24" style={{ background: '#F8FAFB' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: '#00C8A5', letterSpacing: '0.12em' }}>
                절차 찾기
              </p>
              <h2 className="font-black text-[#0A0E1A]"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.15 }}>
                무엇을 처리해야<br />하시나요?
              </h2>
            </div>
            <a href="/services" className="text-sm font-semibold text-[#0057B8] hover:text-[#00C8A5] transition-colors flex-shrink-0">
              전체 서비스 보기 →
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CATEGORIES.map((cat, i) => (
              <a key={i} href={cat.href}
                className="group flex flex-col gap-3 p-5 rounded-xl bg-white transition-all hover:border-gray-300 hover:shadow-sm"
                style={{ border: '1px solid #E5E7EB' }}>
                <span className="text-xs font-black text-white px-2 py-1 rounded self-start"
                  style={{ background: '#0A0E1A', letterSpacing: '0.02em' }}>
                  {cat.abbr}
                </span>
                <div>
                  <div className="font-bold text-[#0A0E1A] mb-1 text-sm" style={{ letterSpacing: '-0.02em' }}>
                    {cat.title}
                  </div>
                  <div className="text-gray-400 text-xs leading-relaxed">{cat.desc}</div>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold mt-auto text-gray-400 group-hover:text-[#0057B8] transition-colors">
                  안내 보기 →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERT CTA ── */}
      <section className="py-24"
        style={{ background: 'linear-gradient(150deg, #0057B8 0%, #003E85 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-lg">
              <p className="text-xs font-bold tracking-widest uppercase mb-5"
                style={{ color: '#00C8A5', letterSpacing: '0.12em' }}>
                혼자 하기 어려울 때
              </p>
              <h2 className="font-black text-white mb-5"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.15 }}>
                아무도 이 길을<br />
                혼자 걸어서는<br />
                안 됩니다.
              </h2>
              <p className="leading-relaxed text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                직접 처리하기 복잡한 절차는 전문가가 함께합니다.<br />
                서류 작성 도움부터 법무사·세무사 연결까지.<br />
                접수 후 1영업일 내 연락드립니다.
              </p>
            </div>

            <div className="flex flex-col gap-4 flex-shrink-0">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: '서류 작성' },
                  { label: '법무사 연결' },
                  { label: '세무사 연결' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center justify-center px-3 py-3 rounded-xl text-center"
                    style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)' }}>
                    <span className="text-xs font-semibold"
                      style={{ color: 'rgba(255,255,255,0.85)' }}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => { setApplyType('consult'); setApplyOpen(true) }}
                className="w-full py-4 rounded-full font-bold text-sm transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: '#ffffff', color: '#003E85', letterSpacing: '-0.01em' }}>
                전문가 도움 요청하기 →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12" style={{ background: '#07090F' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-8 mb-8">
            <div>
              <a href="/">
                <img src="/img/itda_logo_white.png" alt="잇다"
                  className="h-8 w-auto object-contain mb-2"
                  onError={e => { e.currentTarget.style.display = 'none' }} />
              </a>
              <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
                가족을 잃은 분들 곁에 있겠습니다.
              </p>
            </div>
            <div className="flex gap-12 text-sm">
              <div className="space-y-2">
                <p className="font-semibold text-xs mb-3"
                  style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em' }}>서비스</p>
                <a href="/services" className="block hover:text-gray-300 transition-colors"
                  style={{ color: 'rgba(255,255,255,0.45)' }}>절차 찾기</a>
                <a href="/checklist" className="block hover:text-gray-300 transition-colors"
                  style={{ color: 'rgba(255,255,255,0.45)' }}>체크리스트</a>
                <a href="/guide" className="block hover:text-gray-300 transition-colors"
                  style={{ color: 'rgba(255,255,255,0.45)' }}>절차 가이드</a>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-xs mb-3"
                  style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em' }}>회사</p>
                <a href="/about" className="block hover:text-gray-300 transition-colors"
                  style={{ color: 'rgba(255,255,255,0.45)' }}>서비스 소개</a>
                <a href="/faq" className="block hover:text-gray-300 transition-colors"
                  style={{ color: 'rgba(255,255,255,0.45)' }}>자주 묻는 질문</a>
              </div>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>© 2026 잇다. All rights reserved.</p>
            <div className="flex gap-5 text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
              <a href="#" className="hover:text-gray-400 transition-colors">이용약관</a>
              <a href="#" className="hover:text-gray-400 transition-colors">개인정보처리방침</a>
            </div>
          </div>
        </div>
      </footer>

      <ApplyModal
        open={applyOpen}
        onClose={() => setApplyOpen(false)}
        defaultType={applyType}
      />
    </div>
  )
}
