'use client'

import { useState, useEffect, useCallback } from 'react'
import { CATEGORIES, SERVICES, DIFFICULTY } from '../../data/services'
import LogoIcon from '../../components/LogoIcon'

function DiffBadge({ difficulty }) {
  const d = DIFFICULTY[difficulty]
  if (!d) return null
  return (
    <span className="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full"
      style={{ backgroundColor: d.bg, color: d.color }}>
      {d.label}
    </span>
  )
}

/* ?? ?좏깮 ??ぉ ?댁??덈궡 ?쒕줈???? */
function GuidanceDrawer({ services, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col" style={{ background: '#F8F7F4' }}>
      {/* ?ㅻ뜑 */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-black text-[#1A2035]" style={{ letterSpacing: '-0.035em' }}>
              ?댁? ?덈궡 紐⑥븘蹂닿린
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">{services.length}媛??쒕퉬???좏깮??/p>
          </div>
          <button onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 font-bold text-lg">
            ??          </button>
        </div>
      </div>

      {/* ?쒕퉬?ㅻ퀎 ?덈궡 */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-2xl mx-auto px-4 py-5 space-y-4">
          {services.map((s, idx) => (
            <div key={s.id} className="bg-white rounded-2xl overflow-hidden"
              style={{ border: '1px solid #EBEBEB' }}>
              {/* ?쒕퉬???ㅻ뜑 */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-50">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #00C8A5, #0057B8)' }}>
                  {idx + 1}
                </div>
                <LogoIcon service={s} />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#1A1A1A] text-sm leading-tight">{s.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.tagline}</p>
                </div>
                <DiffBadge difficulty={s.difficulty} />
              </div>

              <div className="px-4 py-4 space-y-4">
                {/* 以鍮??쒕쪟 */}
                {s.documents?.length > 0 && (
                  <div>
                    <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">以鍮??쒕쪟</p>
                    <div className="space-y-1.5">
                      {s.documents.map((doc, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <span className="mt-0.5 flex-shrink-0 text-xs font-bold"
                            style={{ color: doc.required ? '#00A896' : '#9CA3AF' }}>
                            {doc.required ? '?꾩닔' : '?좏깮'}
                          </span>
                          <span className="text-gray-700">{doc.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 泥섎━ ?④퀎 */}
                {s.tasks?.length > 0 && (
                  <div>
                    <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">泥섎━ ?④퀎</p>
                    <div className="space-y-2">
                      {s.tasks.map((task, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <span className="text-base flex-shrink-0">{task.emoji}</span>
                          <div>
                            <p className="text-sm font-semibold text-[#1A1A1A]">{task.title}</p>
                            <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{task.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 硫붾え */}
                {s.note && (
                  <div className="text-xs text-gray-500 leading-relaxed p-3 rounded-xl"
                    style={{ background: '#F8F7F4' }}>
                    {s.note}
                  </div>
                )}

                {/* 諛붾줈媛湲?*/}
                {s.link && (
                  <a href={s.link} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #00C8A5, #0057B8)', color: '#fff' }}>
                    {s.linkLabel || `${s.name} ?좎껌 諛붾줈媛湲?} ??                  </a>
                )}
              </div>
            </div>
          ))}

          {/* ?섎떒 ?щ갚 */}
          <div className="h-8" />
        </div>
      </div>
    </div>
  )
}

/* ?? 硫붿씤 ?섏씠吏 ?? */
export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(new Set())
  const [showDrawer, setShowDrawer] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const cat = params.get('cat')
    if (cat) setActiveCategory(cat)
  }, [])

  const filtered = SERVICES.filter(s => {
    const matchCat = activeCategory === 'all' || s.category === activeCategory
    const q = search.toLowerCase()
    const matchSearch = !q || s.name.toLowerCase().includes(q) || s.tagline.includes(q)
    return matchCat && matchSearch
  })

  const allFilteredSelected = filtered.length > 0 && filtered.every(s => selected.has(s.id))
  const someFilteredSelected = filtered.some(s => selected.has(s.id))

  const handleCategoryChange = useCallback((catId) => {
    setActiveCategory(catId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const toggleAll = useCallback(() => {
    setSelected(prev => {
      const next = new Set(prev)
      if (allFilteredSelected) {
        filtered.forEach(s => next.delete(s.id))
      } else {
        filtered.forEach(s => next.add(s.id))
      }
      return next
    })
  }, [allFilteredSelected, filtered])

  const toggleService = useCallback((id) => {
    setSelected(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const selectedServices = SERVICES.filter(s => selected.has(s.id))
  const selectedCount = selected.size

  return (
    <>
      <div className="min-h-screen" style={{ backgroundColor: '#F8F7F4' }}>

        {/* ?? ?곷떒 ?ㅻ뜑 (sticky) ?? */}
        <div className="bg-white border-b border-gray-100 sticky top-20 z-10">
          <div className="max-w-2xl mx-auto px-4 pt-4 pb-0">
            <div className="flex items-baseline gap-3 mb-3">
              <h1 className="text-xl font-black text-[#1A2035]" style={{ letterSpacing: '-0.035em' }}>
                ?댁? ?덈궡
              </h1>
              <p className="text-xs text-gray-400">?쒕퉬???좏깮 ???덉감 ?쒕쾲??紐⑥븘蹂닿린 ??臾대즺</p>
            </div>

            {/* 寃??*/}
            <div className="relative mb-2">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" viewBox="0 0 16 16" fill="none">
                <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                placeholder="?쒕퉬?ㅻ챸 寃??
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-gray-200 bg-gray-50
                  focus:outline-none focus:ring-2 focus:ring-[#00C8A5]/40 focus:border-[#00C8A5] focus:bg-white transition-colors"
              />
            </div>

            {/* 移댄뀒怨좊━ ??*/}
            <div className="flex flex-wrap gap-1.5 pb-1">
              {CATEGORIES.map(cat => {
                const count = cat.id === 'all'
                  ? SERVICES.length
                  : SERVICES.filter(s => s.category === cat.id).length
                const isActive = activeCategory === cat.id
                return (
                  <button key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    style={isActive
                      ? { background: '#1A2035', color: '#fff', boxShadow: '0 2px 8px rgba(26,32,53,0.25)' }
                      : {}}
                    className={`px-3.5 py-2 rounded-full text-sm font-bold transition-all duration-150 ${
                      isActive
                        ? ''
                        : 'bg-gray-100 text-gray-600 hover:bg-[#00C8A5] hover:text-white hover:shadow-md hover:scale-105 active:scale-95'
                    }`}>
                    {cat.label}
                    <span className={`ml-1.5 text-xs font-semibold ${isActive ? 'text-white/60' : 'opacity-60'}`}>
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* ?꾩껜?좏깮 ??*/}
            <div className="flex items-center justify-between py-2.5 border-t border-gray-50 mt-2">
              <button
                onClick={toggleAll}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  allFilteredSelected
                    ? 'bg-[#00C8A5] text-white'
                    : someFilteredSelected
                      ? 'bg-[#00C8A5]/15 text-[#007A68] border border-[#00C8A5]/40'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                <span>{allFilteredSelected ? '?? : '??}</span>
                <span>{allFilteredSelected ? '?꾩껜?댁젣' : '?꾩껜?좏깮'}</span>
              </button>
              {selectedCount > 0 && (
                <span className="text-xs text-gray-400 font-medium">
                  {selectedCount}媛??좏깮??                </span>
              )}
            </div>
          </div>
        </div>

        {/* ?? 由ъ뒪???? */}
        <div className="max-w-2xl mx-auto px-4 pt-3 pb-28">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400 text-sm">寃??寃곌낵媛 ?놁뒿?덈떎.</div>
          ) : (
            <div className="space-y-2">
              {filtered.map(service => {
                const isSelected = selected.has(service.id)
                return (
                  <div key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`flex items-center gap-3 bg-white rounded-2xl px-4 py-4 cursor-pointer transition-all
                      ${isSelected
                        ? 'border-2 border-[#00C8A5] shadow-sm'
                        : 'border border-[#EBEBEB] hover:border-[#00C8A5]/30 hover:shadow-sm'
                      }`}>

                    {/* 泥댄겕諛뺤뒪 */}
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-[#00C8A5] border-[#00C8A5]'
                        : 'border-gray-200'
                    }`}>
                      {isSelected && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>

                    <LogoIcon service={service} />

                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-[#1A1A1A] text-sm leading-tight" style={{ letterSpacing: '-0.02em' }}>
                        {service.name}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1.5">
                        {service.duration && (
                          <>
                            <span>??/span>
                            <span>{service.duration}</span>
                          </>
                        )}
                        {service.docCount > 0 ? (
                          <>
                            <span className="text-gray-200">쨌</span>
                            <span>?쒕쪟 {service.docCount}醫?/span>
                          </>
                        ) : (
                          <>
                            <span className="text-gray-200">쨌</span>
                            <span>?쒕쪟 遺덊븘??/span>
                          </>
                        )}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <DiffBadge difficulty={service.difficulty} />
                      {/* ?곸꽭蹂닿린 留곹겕 ??泥댄겕諛뺤뒪 ?대┃ ?꾪뙆 留됱쓬 */}
                      <a href={`/services/${service.id}`}
                        onClick={e => e.stopPropagation()}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
                        title="?곸꽭蹂닿린">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M4 2.5L8 6L4 9.5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {filtered.some(s => s.difficulty === 'hard') && (
            <div className="mt-5 px-4 py-3 rounded-xl flex items-center gap-2"
              style={{ backgroundColor: '#FFF3E0', border: '1px solid #FFE0B2' }}>
              <span>?좑툘</span>
              <p className="text-sm font-medium" style={{ color: '#E65100' }}>
                ?대젮? ?쒕퉬?ㅻ뒗 ?꾨Ц媛 ?곌퀎瑜?沅뚯옣?⑸땲??              </p>
            </div>
          )}

          <p className="text-center text-xs text-gray-400 mt-6 mb-4">
            ?꾩옱 {SERVICES.length}媛??쒕퉬??쨌 怨꾩냽 異붽??⑸땲??          </p>
        </div>
      </div>

      {/* ?? ?좏깮 ??ぉ ?섎떒 諛??? */}
      {selectedCount > 0 && (
        <div className="fixed bottom-0 inset-x-0 z-40 px-4 pb-safe"
          style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)', borderTop: '1px solid #EBEBEB' }}>
          <div className="max-w-2xl mx-auto py-3 flex items-center gap-3">
            <button
              onClick={() => setSelected(new Set())}
              className="px-4 py-2.5 rounded-full text-sm font-semibold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors flex-shrink-0">
              ?좏깮?댁젣
            </button>
            <button
              onClick={() => setShowDrawer(true)}
              className="flex-1 py-3 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 flex items-center justify-center gap-2"
              style={{ background: 'linear-gradient(135deg, #00C8A5, #0057B8)' }}>
              <span>{selectedCount}媛??쒕퉬???댁??덈궡 紐⑥븘蹂닿린</span>
              <span>??/span>
            </button>
          </div>
          {/* 紐⑤컮???섎떒諛붿? 寃뱀튂吏 ?딅룄濡?*/}
          <div className="h-16 md:h-0" />
        </div>
      )}

      {/* ?? ?댁??덈궡 ?쒕줈???? */}
      {showDrawer && (
        <GuidanceDrawer
          services={selectedServices}
          onClose={() => setShowDrawer(false)}
        />
      )}
    </>
  )
}

