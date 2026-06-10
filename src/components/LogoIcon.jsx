'use client'

import { useState } from 'react'

export default function LogoIcon({ service, size = 56 }) {
  const [failed, setFailed] = useState(false)

  const logoUrl = !failed && service.domain
    ? `https://logo.clearbit.com/${service.domain}`
    : null

  const radius = Math.round(size * 0.28)

  // 이름 앞 2글자를 배지에 사용 (로고 실패 시)
  const abbr = service.name?.slice(0, 2) ?? '?'

  return (
    <div
      className="flex items-center justify-center flex-shrink-0 overflow-hidden"
      style={{
        width: size,
        height: size,
        minWidth: size,
        borderRadius: radius,
        backgroundColor: logoUrl ? '#FFFFFF' : (service.color || '#64748B'),
        border: logoUrl ? '1.5px solid #E8E8E8' : 'none',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      {logoUrl ? (
        <img
          src={logoUrl}
          alt=""
          style={{ width: '72%', height: '72%', objectFit: 'contain' }}
          onError={() => setFailed(true)}
        />
      ) : (
        <span style={{
          fontSize: size * 0.3,
          fontWeight: 900,
          color: '#ffffff',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          userSelect: 'none',
        }}>
          {abbr}
        </span>
      )}
    </div>
  )
}
