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

function GuidanceDrawer({ services, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col" style={{ background: '#F8F7F4' }}>
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-black text-[#1A2035]" style={{ letterSpacing: '-0.035em' }}>
              선택 서비스 안내
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">{services.length}개 서비스 선택됨</p>
          </div>
          <button onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 font-bold text-xl">
            ×
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="max-w-2xl mx-auto px-4 py-5 space-y-4">
          {services.map((s, idx) => (
            <div key={s.id} className="bg-white rounded-2xl overflow-hidden"
              style={{ border: '1px solid #EBEBEB' }}>
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
                {s.documents?.length > 0 && (
                  <div>
                    <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">필요 서류</p>
                    <div className="space-y-1.5">
                      {s.documents.map((doc, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <span className="mt-0.5 flex-shrink-0 text-xs font-bold"
                            style={{ color: doc.required ? '#00A896' : '#9CA3AF' }}>
                            {doc.required ? '필수' : '선택'}
                          </span>
                          <span className="text-gray-700">{doc.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {s.tasks?.length > 0 && (
                  <div>
                    <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">처리 방법</p>
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

                {s.note && (
                  <div className="text-xs text-gray-500 leading-relaxed p-3 rounded-xl"
                    style={{ background: '#F8F7F4' }}>
                    {s.note}
                  </div>
                )}

                {s.link && (
                  <a href={s.link} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #00C8A5, #0057B8)', color: '#fff' }}>
                    {s.linkLabel || `${s.name} 공식 페이지 바로가기`}
                  </a>
                )}
              </div>
            </div>
          ))}
          <div className="h-8" />
        </div>
      </div>
    </div>
  )
}

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
    requestAnimationFrame(() => window.scrollTo({ top: 0 }))
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
      <div className="min-h-screen pt-20" style={{ backgroundColor: '#F8F7F4' }}>

        <div className="bg-white border-b border-gray-100 sticky top-20 z-10">
          <div className="max-w-2xl mx-auto px-4 pt-4 pb-0">
            <div className="flex items-baseline gap-3 mb-1">
              <h1 className="text-xl font-black text-[#1A2035]" style={{ letterSpacing: '-0.035em' }}>
                서비스 찾기
              </h1>
              <p className="text-xs text-gray-400">서비스를 선택해 절차를 한번에 확인하세요</p>
            </div>
            <p className="text-xs mb-3" style={{ color: '#00A896', letterSpacing: '-0.01em' }}>
              모르셔도 괜찮습니다. 잇다가 하나씩 함께 확인해 드리겠습니다.
            </p>

            <div className="relative mb-2">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" viewBox="0 0 16 16" fill="none">
                <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                placeholder="서비스 검색"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-gray-200 bg-gray-50
                  focus:outline-none focus:ring-2 focus:ring-[#00C8A5]/40 focus:border-[#00C8A5] focus:bg-white transition-colors"
              />
            </div>

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

            <div className="flex items-center justify-between py-2.5 border-t border-gray-50 mt-2">
              <div className="flex items-center gap-2 flex-wrap group cursor-pointer" onClick={toggleAll}>
                <button
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all pointer-events-none ${
                    allFilteredSelected
                      ? 'bg-[#00C8A5] text-white'
                      : someFilteredSelected
                        ? 'bg-[#00C8A5]/15 text-[#007A68] border border-[#00C8A5]/40'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                  }`}>
                  <span>{allFilteredSelected ? '전체해제' : '전체선택'}</span>
                </button>
                <span className="text-xs text-gray-400 transition-all group-hover:text-gray-700 group-hover:font-semibold" style={{ letterSpacing: '-0.01em' }}>
                  이용 기관이 불확실하다면 전체 선택을 권장합니다
                </span>
              </div>
              {selectedCount > 0 && (
                <span className="text-xs text-gray-400 font-medium flex-shrink-0">
                  {selectedCount}개 선택됨
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 pt-3 pb-28">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400 text-sm">검색 결과가 없습니다.</div>
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
                            <span className="text-gray-300">·</span>
                            <span>{service.duration}</span>
                          </>
                        )}
                        {service.docCount > 0 ? (
                          <>
                            <span className="text-gray-200">·</span>
                            <span>{'서류 ' + service.docCount + '종'}</span>
                          </>
                        ) : (
                          <>
                            <span className="text-gray-200">·</span>
                            <span>서류 없음</span>
                          </>
                        )}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <DiffBadge difficulty={service.difficulty} />
                      <a href={`/services/${service.id}`}
                        onClick={e => e.stopPropagation()}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
                        title="상세보기">
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
              <p className="text-sm font-medium" style={{ color: '#E65100' }}>
                복잡한 서비스는 전문가 도움을 권장합니다.
              </p>
            </div>
          )}

          <p className="text-center text-xs text-gray-400 mt-6 mb-4">
            {'현재 ' + SERVICES.length + '개 서비스 · 계속 추가됩니다'}
          </p>
        </div>
      </div>

      {selectedCount > 0 && (
        <div className="fixed bottom-0 inset-x-0 z-40 px-4 pb-safe"
          style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)', borderTop: '1px solid #EBEBEB' }}>
          <div className="max-w-2xl mx-auto py-3 flex items-center gap-3">
            <button
              onClick={() => setSelected(new Set())}
              className="px-4 py-2.5 rounded-full text-sm font-semibold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors flex-shrink-0">
              선택해제
            </button>
            <button
              onClick={() => setShowDrawer(true)}
              className="flex-1 py-3 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 flex items-center justify-center gap-2"
              style={{ background: 'linear-gradient(135deg, #00C8A5, #0057B8)' }}>
              <span>{selectedCount + '개 서비스 안내 한번에 보기'}</span>
            </button>
          </div>
          <div className="h-16 md:h-0" />
        </div>
      )}

      {showDrawer && (
        <GuidanceDrawer
          services={selectedServices}
          onClose={() => setShowDrawer(false)}
        />
      )}
    </>
  )
}
