'use client'

import { useState } from 'react'
import ApplyModal from '../../components/ApplyModal'

function Check({ color = '#1A2035' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="8" fill={color} fillOpacity="0.1" />
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
    label: '?덉감 ?뺣낫 ?덈궡',
    desc: '83媛??쒕퉬???댁? ?덉감 諛??꾩슂 ?쒕쪟',
    free: true,
    pro: true,
  },
  {
    label: '?④퀎蹂???꾨씪??,
    desc: '?щ쭩 ?뱀씪遺??3媛쒖썡源뚯? ?쒖꽌 ?덈궡',
    free: true,
    pro: true,
  },
  {
    label: '湲곌? ?좎껌 ?섏씠吏 ?곌껐',
    desc: '媛?湲곌? 怨듭떇 ?ъ씠?몃줈 吏곸젒 ?대룞',
    free: true,
    pro: true,
  },
  {
    label: '?쒕쪟 ?묒꽦 ???,
    desc: '?щ쭩吏꾨떒?쑣룰?議깃?怨꾩쬆紐낆꽌 ???쒕쪟 以鍮?,
    free: false,
    pro: true,
  },
  {
    label: '湲곌? 吏곸젒 ?곕씫 諛??쒖텧',
    desc: '??됀룻넻?좎궗쨌蹂댄뿕??????곕씫',
    free: false,
    pro: true,
  },
  {
    label: '踰뺣Т???곌껐',
    desc: '?곸냽 ?깃린쨌遺?숈궛쨌李⑤웾 紐낆쓽?댁쟾',
    free: false,
    pro: true,
  },
  {
    label: '?몃Т???곌껐',
    desc: '?곸냽???좉퀬 諛??덉꽭 ?곷떞',
    free: false,
    pro: true,
  },
  {
    label: '?꾨떞 ?대떦??諛곗젙',
    desc: '1?곸뾽?????곕씫, ?앷퉴吏 ?④퍡',
    free: false,
    pro: true,
  },
]

export default function PricingPage() {
  const [applyOpen, setApplyOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">

      {/* ?ㅻ뜑 */}
      <div className="px-4 pt-28 pb-14 text-center border-b border-gray-100">
        <h1 className="text-3xl font-black text-[#0A0E1A] mb-3" style={{ letterSpacing: '-0.02em' }}>
          ?대뼸寃??쒖옉?섏떎 嫄닿???
        </h1>
        <p className="text-gray-400 text-sm">
          吏곸젒 泥섎━?섍굅?? ?꾨Ц媛?먭쾶 留↔린嫄곕굹. ??媛吏 諛⑸쾿???덉뼱??
        </p>
      </div>

      {/* ???뚮옖 移대뱶 */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 gap-6 mb-14">

          {/* 吏곸젒 泥섎━ */}
          <div className="border border-gray-200 rounded-2xl p-8 flex flex-col">
            <div>
              <p className="text-xs font-bold text-gray-400 mb-5 tracking-widest">吏곸젒 泥섎━?섍린</p>
              <div className="mb-6">
                <div className="text-4xl font-black text-[#0A0E1A] mb-1" style={{ letterSpacing: '-0.02em' }}>
                  臾대즺
                </div>
                <p className="text-xs text-gray-400">媛???놁씠 쨌 ?좎슜移대뱶 遺덊븘??/p>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                ?덈궡瑜??곕씪 媛?湲곌???吏곸젒 ?좎껌?섎뒗 諛⑸쾿?댁뿉??
                泥섏쓬?댁뼱???④퀎蹂꾨줈 ?덈궡?대뱶由쎈땲??
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
                ?덉감 李얠븘蹂닿린
              </a>
              <a href="/guide"
                className="block w-full py-3 rounded-xl text-center font-semibold text-sm text-gray-500 border border-gray-200 hover:border-gray-300 transition-colors">
                ?④퀎蹂?媛?대뱶 癒쇱? 蹂닿린
              </a>
            </div>
          </div>

          {/* ?꾨Ц媛 ???*/}
          <div className="border-2 rounded-2xl p-8 flex flex-col relative"
            style={{ borderColor: '#0A0E1A' }}>
            <div className="absolute -top-3.5 left-6">
              <span className="text-xs font-bold px-3 py-1 rounded-full text-white"
                style={{ background: '#0A0E1A' }}>
                蹂듭옟???덉감 異붿쿇
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 mb-5 tracking-widest">?꾨Ц媛?먭쾶 留↔린湲?/p>
              <div className="mb-6">
                <div className="text-4xl font-black text-[#0A0E1A] mb-1" style={{ letterSpacing: '-0.02em' }}>
                  ?곷떞 ??寃곗젙
                </div>
                <p className="text-xs text-gray-400">泥??곷떞 臾대즺 쨌 1?곸뾽?????곕씫</p>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                ?쒕쪟 ?묒꽦遺??湲곌? ?쒖텧源뚯? ?꾨떞 ?꾨Ц媛媛
                泥섏쓬遺???앷퉴吏 ?④퍡?⑸땲??
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
              ?꾨Ц媛 ?꾩? ?붿껌?섍린
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">
              ?묒닔 ???대떦?먭? 吏곸젒 ?곕씫?쒕┰?덈떎
            </p>
          </div>
        </div>

        {/* ?섎떒 臾멸뎄 */}
        <div className="text-center border-t border-gray-100 pt-10">
          <p className="text-sm font-semibold text-[#0A0E1A] mb-2">
            ?대뼡 諛⑸쾿???좏깮?대룄, ?뉖떎???놁뿉 ?덉뒿?덈떎.
          </p>
          <p className="text-xs text-gray-400">
            媛議깆쓣 ?껋? 遺꾨뱾???곸뼱??'臾댁뾿?? ?대뼸寃? ?대뵒????????듬쭔?쇱? ??怨녹뿉??李얠쓣 ???덈룄濡?
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

