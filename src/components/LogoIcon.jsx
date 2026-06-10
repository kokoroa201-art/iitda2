'use client'

import { useState } from 'react'

export default function LogoIcon({ service, size = 56 }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)

  const logoUrl = service.domain
    ? `https://logo.clearbit.com/${service.domain}`
    : null

  const radius = Math.round(size * 0.28)
  const abbr = service.name?.slice(0, 2) ?? '?'
  const showLogo = !!logoUrl && !imgFailed

  return (
    <div
      className="relative flex items-center justify-center flex-shrink-0 overflow-hidden"
      style={{
        width: size,
        height: size,
        minWidth: size,
        borderRadius: radius,
        backgroundColor: imgLoaded ? '#FFFFFF' : (service.color || '#64748B'),
        border: imgLoaded ? '1.5px solid #E8E8E8' : 'none',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      {/* 항상 뒤에 텍스트 배지 표시 (로고 없거나 실패 시 보임) */}
      <span
        aria-hidden="true"
        style={{
          fontSize: size * 0.3,
          fontWeight: 900,
          color: '#ffffff',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          userSelect: 'none',
          opacity: imgLoaded ? 0 : 1,
          transition: 'opacity 0.15s',
        }}
      >
        {abbr}
      </span>

      {/* 로고 이미지: 로드 성공 시에만 표시, 실패 시 숨김 */}
      {showLogo && (
        <img
          src={logoUrl}
          alt=""
          className="absolute"
          style={{
            width: '72%',
            height: '72%',
            objectFit: 'contain',
            opacity: imgLoaded ? 1 : 0,
            transition: 'opacity 0.15s',
          }}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgFailed(true)}
        />
      )}
    </div>
  )
}
