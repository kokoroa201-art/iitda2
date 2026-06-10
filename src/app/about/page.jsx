'use client'

import Link from 'next/link'

const VALUES = [
  {
    num: '01',
    title: '?④퍡?쒕떎??寃?,
    body: '?뺣낫瑜??꾨떖?섎뒗 寃껋뿉??洹몄튂吏 ?딆뒿?덈떎. 留됰쭑???쒓컙???놁뿉 ?덈뒗 ?щ엺泥섎읆, 臾댁뾿???대뼸寃??댁빞 ?좎? ?④퍡 ?앷컖?⑸땲??',
  },
  {
    num: '02',
    title: '?щ챸?섍쾶, ?뺥솗?섍쾶',
    body: '異쒖쿂媛 遺덈텇紐낇븳 ?뺣낫???ｌ? ?딆뒿?덈떎. 怨듦났湲곌?怨?怨듭떇 ?덉감留뚯쓣 湲곕컲?쇰줈, 誘우쓣 ???덈뒗 ?덈궡瑜??쒓났?⑸땲??',
  },
  {
    num: '03',
    title: '?ы뵒 ?욎뿉??議댁쨷??,
    body: '?댁슜?먮뒗 吏湲??몄깮?먯꽌 媛???섎뱺 ?쒓컙??蹂대궡怨??덉뒿?덈떎. 紐⑤뱺 ?ㅺ퀎??湲곗?? 洹??щ엺??媛먯젙怨??곹솴?????議댁쨷?낅땲??',
  },
]

const STATS = [
  { num: '35+', label: '?덈궡 媛??湲곌?쨌?쒕퉬?? },
  { num: '5',   label: '泥섎━ ?④퀎 ??꾨씪?? },
  { num: '0??, label: '?뺣낫 李얘린 鍮꾩슜' },
  { num: '3媛쒖썡', label: '?덉감 ?꾨즺 紐⑺몴 湲곌컙' },
]

const HELPS = [
  { title: '臾댁뾿??癒쇱? ?댁빞 ?섎뒗吏', body: '?щ쭩 ?뱀씪遺??3媛쒖썡源뚯?, ?댁빞 ???쇱쓽 ?쒖꽌瑜???꾨씪?몄쑝濡??덈궡?⑸땲??' },
  { title: '?대뵒???곕씫?댁빞 ?섎뒗吏', body: '??? ?듭떊?? 蹂댄뿕, SNS ??83媛?湲곌????ㅼ젣 ?좎껌 ?섏씠吏濡?吏곸젒 ?곌껐?⑸땲??' },
  { title: '?대뼡 ?쒕쪟瑜?以鍮꾪빐???섎뒗吏', body: '泥섎━???쒕퉬?ㅻ? ?좏깮?섎㈃, ?꾩슂???쒕쪟 紐⑸줉????踰덉뿉 ?뺣━?대뱶由쎈땲??' },
  { title: '?쇱옄 泥섎━?섍린 ?대젮????, body: '踰뺣Т??룹꽭臾댁궗 ?곌껐, ?쒕쪟 ?묒꽦 ?꾩? ???꾨Ц媛 吏???쒕퉬?ㅻ룄 ?④퍡 ?쒓났?⑸땲??' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ?? 1. 誘몄뀡 ?덉뼱濡??? */}
      <section className="pt-20 py-24 px-4 text-center"
        style={{ background: 'linear-gradient(150deg,#0A1628 0%,#1A3A5C 100%)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-bold mb-6" style={{ color: '#00C8A5', letterSpacing: '0.12em' }}>
            OUR MISSION
          </p>
          <h1 className="font-black text-white mb-8"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.2, letterSpacing: '-0.03em' }}>
            媛議깆쓣 ?껋? ?ы뵒 ?욎뿉??<br />
            ?됱젙 ?덉감媛 ???ㅻⅨ 吏먯씠<br />
            ?섏뼱?쒕뒗 ???⑸땲??
          </h1>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
            ?뉖떎????쒕?援?뿉??媛議깆쓣 ?껋? 遺꾨뱾??br />
            ?④꺼吏??쇰뱾??議곌툑 ???쎄쾶, ???몃∼寃?泥섎━?????덈룄濡?br />
            留뚮뱾?댁쭊 ?뚮옯?쇱엯?덈떎.
          </p>
        </div>
      </section>

      {/* ?? 2. 李쎌뾽 ?ㅽ넗由??? */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* ?몄슜 ?ъ씤??*/}
            <div className="flex-shrink-0 lg:w-64">
              <div className="rounded-2xl p-6 text-center sticky top-24"
                style={{ background: 'linear-gradient(135deg,#EDFFF9,#EEF4FF)', border: '1px solid #D0F0E8' }}>
                <div className="text-2xl font-black mb-3" style={{ color: '#D0F0E8' }}>"</div>
                <p className="text-sm font-bold text-[#007A68] leading-relaxed">
                  ?⑹뼱吏??뺣낫瑜?李얠븘 ?ㅻℓ???숈븞,<br />
                  ?ы뵒??異붿뒪瑜??쒓컙議곗감 ?놁뿀?듬땲??
                </p>
              </div>
            </div>

            {/* ?ㅽ넗由?蹂몃Ц */}
            <div className="flex-1">
              <p className="text-xs font-bold text-gray-400 mb-3" style={{ letterSpacing: '0.1em' }}>
                WHY WE BUILT THIS
              </p>
              <h2 className="text-2xl font-black text-[#1A2035] mb-6" style={{ letterSpacing: '-0.03em' }}>
                吏곸젒 寃れ뿀湲??뚮Ц??留뚮뱾?덉뒿?덈떎
              </h2>

              <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontSize: '1rem' }}>
                <p>
                  媛議깆쓣 ?껉퀬 ?섏꽌 泥섏쓬 遺?ろ엳??寃껋? ?ы뵒留뚯씠 ?꾨떃?덈떎.<br />
                  ?щ쭩?좉퀬, ???怨꾩쥖 ?댁?, ?듭떊 ?붽툑 泥섎━, 媛곸쥌 援щ룆 ?쒕퉬???댁?, 蹂댄뿕湲?泥?뎄,<br />
                  ?곸냽 ?덉감??泥섎━?댁빞 ???쇰뱾???앸룄 ?놁씠 ?잛븘吏묐땲??
                </p>
                <p>
                  ?섎굹瑜?泥섎━?섎㈃ ???ㅻⅨ ?ъ씠?몃? 李얠븘???섍퀬,<br />
                  嫄곌린?????ㅻⅨ 湲곌??쇰줈 ?꾪솕瑜??뚮┰?덈떎.<br />
                  ?꾪솕瑜?諛쏆? ?딆쑝硫??ㅼ쓬 ???ㅼ떆 李얠븘媛???⑸땲??<br />
                  ?대뼡 ?쒕쪟媛 ?꾩슂?쒖?, ?대뵒??諛쒓툒諛쏅뒗吏, 臾댁뾿??癒쇱? ?댁빞 ?섎뒗吏<br />
                  ?뚮젮二쇰뒗 怨녹? ?꾨Т ?곕룄 ?놁뿀?듬땲??
                </p>
                <p className="font-semibold text-[#1A2035]">
                  ?ы뵒??異붿뒪瑜??쒓컙議곗감 ?놁씠,<br />
                  ?ш린?湲??ㅻℓ??洹??쒓컙???덈Т ?듭슱?덉뒿?덈떎.
                </p>
                <p>
                  洹?寃쏀뿕???뉖떎瑜?留뚮뱺 ?댁쑀?낅땲??<br />
                  ??쒕?援?뿉??媛議깆쓣 ?껋? 遺꾨뱾??br />
                  ?곸뼱??'臾댁뾿?? ?대뼸寃? ?대뵒????????듬쭔?쇱?<br />
                  ??怨녹뿉??李얠쓣 ???덈룄濡?
                </p>
              </div>

              {/* 李쎌뾽???쒕챸 ?ㅽ???*/}
              <div className="mt-8 pt-6 border-t border-gray-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black"
                  style={{ background: 'linear-gradient(135deg,#00C8A5,#0057B8)', fontSize: '1.2rem' }}>
                  ??                </div>
                <div>
                  <p className="font-bold text-[#1A2035] text-sm">?뉖떎 李쎌뾽?</p>
                  <p className="text-gray-400 text-xs mt-0.5">吏곸젒 ??湲몄쓣 嫄몄뿀???щ엺?ㅼ씠 留뚮뱺 ?쒕퉬??/p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ?? 3. ?곕━媛 誘용뒗 寃??? */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-gray-400 mb-3" style={{ letterSpacing: '0.1em' }}>WHAT WE BELIEVE</p>
            <h2 className="text-2xl font-black text-[#1A2035]" style={{ letterSpacing: '-0.03em' }}>
              ?뉖떎媛 吏?ㅻ뒗 ?먯튃
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl"
                style={{ backgroundColor: '#F8F7F4', border: '1px solid #EBEBEB' }}>
                <span className="text-xs font-black text-gray-300" style={{ letterSpacing: '0.08em' }}>{v.num}</span>
                <div>
                  <p className="font-bold text-[#1A2035] text-base mb-2" style={{ letterSpacing: '-0.02em' }}>
                    {v.title}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ?? 4. 援ъ껜?곸쑝濡?臾댁뾿???? */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(150deg,#0A1628 0%,#0D2744 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold mb-3" style={{ color: '#00C8A5', letterSpacing: '0.1em' }}>WHAT WE DO</p>
            <h2 className="text-2xl font-black text-white" style={{ letterSpacing: '-0.03em' }}>
              ?뉖떎媛 ?꾩??쒕━??寃껊뱾
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {HELPS.map((h, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                  style={{ backgroundColor: 'rgba(0,200,165,0.2)', color: '#00C8A5' }}>
                  {i + 1}
                </div>
                <div>
                  <p className="font-bold text-white text-sm mb-1.5" style={{ letterSpacing: '-0.02em' }}>
                    {h.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {h.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ?듦퀎 */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <div key={i} className="text-center py-5 rounded-2xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="font-black text-2xl mb-1" style={{ color: '#00C8A5', letterSpacing: '-0.03em' }}>
                  {s.num}
                </p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ?? 5. 鍮꾩쟾 (B2B 媛?μ꽦 ?붿떆) ?? */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-gray-400 mb-3" style={{ letterSpacing: '0.1em' }}>OUR VISION</p>
            <h2 className="text-2xl font-black text-[#1A2035] mb-4" style={{ letterSpacing: '-0.03em' }}>
              ?욎쑝濡??뉖떎媛 留뚮뱾?닿컝 寃?            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
              吏湲덉? ?뺣낫瑜???怨녹뿉??李얠쓣 ???덇쾶 ?섎뒗 寃껋뿉???쒖옉?⑸땲??<br />
              洹몃윭???뉖떎媛 沅곴레?곸쑝濡?轅덇씀??寃껋? ???쎈땲??
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                phase: '吏湲?,
                color: '#00C8A5',
                bg: '#E6F7F2',
                title: '??怨녹뿉??李얘린',
                body: '?⑹뼱吏??덉감 ?뺣낫瑜??섎굹???뚮옯?쇱뿉???뺤씤?섍퀬, 怨듭떇 ?좎껌 ?섏씠吏濡?吏곸젒 ?대룞?⑸땲??',
              },
              {
                phase: '?ㅼ쓬',
                color: '#0057B8',
                bg: '#EBF3FF',
                title: '湲곌?怨??곌껐?섍린',
                body: '蹂댄뿕?? ??? ?λ??앹옣 ??湲곌?怨??묐젰???щ쭩 ?댄썑 ?덉감瑜???鍮좊Ⅴ怨??먮룞?붾맂 諛⑹떇?쇰줈 泥섎━?⑸땲??',
              },
              {
                phase: '誘몃옒',
                color: '#4A148C',
                bg: '#F3E5F5',
                title: '?ы쉶??湲곕컲 留뚮뱾湲?,
                body: '?щ쭩 ?댄썑 ?됱젙?????댁긽 媛쒖씤???濡?媛먮떦?댁빞 ?섎뒗 吏먯씠 ?꾨땶, ?ы쉶媛 ?④퍡 ?섎늻??援ъ“瑜?留뚮뱾?닿컩?덈떎.',
              },
            ].map((v, i) => (
              <div key={i} className="flex items-start gap-5 p-5 rounded-2xl"
                style={{ backgroundColor: '#F8F7F4', border: '1px solid #EBEBEB' }}>
                <div className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-black mt-0.5"
                  style={{ backgroundColor: v.bg, color: v.color }}>
                  {v.phase}
                </div>
                <div>
                  <p className="font-bold text-[#1A2035] text-sm mb-1" style={{ letterSpacing: '-0.02em' }}>
                    {v.title}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ?? 6. 怨듦컧 媛뺤“ (Empathy ?ㅽ???留덈Т由? ?? */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F8F7F4' }}>
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl font-black text-[#1A2035] mb-5 leading-snug"
            style={{ letterSpacing: '-0.03em' }}>
            "?꾨Т????湲몄쓣<br />?쇱옄 嫄몄뼱?쒕뒗 ???⑸땲??"
          </blockquote>
          <p className="text-gray-500 text-base leading-relaxed max-w-lg mx-auto mb-10">
            ?뉖떎??媛議깆쓣 ?껋? 紐⑤뱺 遺꾨뱾 怨곸뿉 ?덇쿋?듬땲??<br />
            援?쟻, ?섏씠, ?먯궛 洹쒕え??愿怨꾩뾾?? ?꾩슂???щ엺?대씪硫??꾧뎄?먭쾶??
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/guide"
              className="px-8 py-3.5 rounded-full text-white font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all"
              style={{ background: 'linear-gradient(135deg,#00C8A5,#0057B8)' }}>
              吏湲??쒖옉?섍린 ??            </Link>
            <Link href="/faq"
              className="px-8 py-3.5 rounded-full font-semibold text-sm border-2 border-gray-200 hover:border-[#00C8A5]/50 text-[#1A2035] transition-all">
              ?먯＜ 臾삳뒗 吏덈Ц
            </Link>
          </div>
        </div>
      </section>

      {/* ?명꽣 */}
      <footer className="bg-[#010C26] py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <img src="/img/itda_logo_black.png" alt="?뉖떎" className="h-7 w-auto object-contain mb-2"
              onError={e => { e.currentTarget.style.display = 'none' }} />
            <p className="text-sm text-gray-500">?⑹뼱吏??덉감瑜? ??怨녹쑝濡?쨌 짤 2026 ?뉖떎</p>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/guide" className="hover:text-gray-300 transition-colors">?덉감 媛?대뱶</Link>
            <Link href="/services" className="hover:text-gray-300 transition-colors">?쒕퉬??/Link>
            <Link href="/faq" className="hover:text-gray-300 transition-colors">FAQ</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
