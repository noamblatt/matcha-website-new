import React from 'react';
import { Link } from 'react-router-dom';

const TRANSPARENT_LOGO = '/matchale-logo.png';
const ORIGINAL_LOGO = 'https://media.base44.com/images/public/69c68ea8ad04082f2770efa3/44f938149_Screenshot2026-03-27at172836.png';

export default function Logo({ variant = 'full', size = 'md', className = '', linkTo = '/', useTransparent = false }) {
  const sizeMap = {
    sm: { img: 28, text: 'text-lg' },
    md: { img: 36, text: 'text-xl' },
    lg: { img: 56, text: 'text-3xl' },
    xl: { img: 80, text: 'text-5xl' },
  };

  const s = sizeMap[size] || sizeMap.md;
  const logoSrc = useTransparent ? TRANSPARENT_LOGO : ORIGINAL_LOGO;
  const imgClass = useTransparent ? 'object-contain' : 'object-cover rounded-full';

  const content = (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {variant !== 'wordmark' && (
        <img
          src={logoSrc}
          alt="matchale logo"
          style={useTransparent ? { height: s.img, width: 'auto' } : { height: s.img, width: s.img }}
          className={imgClass}
        />
      )}
      {variant !== 'icon' && (
        <span className={`font-handwritten font-bold text-veridian leading-none ${s.text}`}>
          matchale
        </span>
      )}
    </span>
  );

  if (linkTo) {
    return <Link to={linkTo} aria-label="matchale — home">{content}</Link>;
  }
  return content;
}
