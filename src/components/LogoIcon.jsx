'use client'

import { useState } from 'react'

// phase 0: Clearbit       — 국제·주요 브랜드 고화질 로고
// phase 1: Google Favicon — Clearbit 없는 기업 (KT, LG U+ 등 국내 기업)
//          단, government 카테고리는 회색지구 반환하므로 건너뜀
// phase 2: 이모지 폴백
export default function LogoIcon({ service, size = 56 }) {
  const [phase, setPhase] = useState(0)

  const isGov = service.category === 'government'

  const logoUrl = service.logoUrl || (
    phase === 0 && service.domain
      ? `https://logo.clearbit.com/${service.domain}`
      : phase === 1 && service.domain && !isGov
        ? `https://www.google.com/s2/favicons?domain=${service.domain}&sz=128`
        : null
  )

  const radius = Math.round(size * 0.28)
  const showImg = !!logoUrl

  return (
    <div
      className="flex items-center justify-center flex-shrink-0 overflow-hidden"
      style={{
        width: size,
        height: size,
        minWidth: size,
        borderRadius: radius,
        backgroundColor: showImg ? '#FFFFFF' : service.color,
        border: showImg ? '1.5px solid #E8E8E8' : 'none',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      {showImg ? (
        <img
          src={logoUrl}
          alt=""
          style={{ width: '72%', height: '72%', objectFit: 'contain' }}
          onError={() => setPhase(p => p + 1)}
        />
      ) : (
        <span style={{ fontSize: size * 0.44, lineHeight: 1 }}>{service.emoji}</span>
      )}
    </div>
  )
}
