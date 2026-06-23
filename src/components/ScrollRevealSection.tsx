'use client'

import React from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface ScrollRevealSectionProps {
  children: React.ReactNode
  className?: string
}

export function ScrollRevealSection({ children, className = '' }: ScrollRevealSectionProps) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
