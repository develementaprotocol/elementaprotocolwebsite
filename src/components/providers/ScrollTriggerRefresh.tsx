'use client'

import { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ScrollTriggerRefresh() {
  const pathname = usePathname()

  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
    return () => cancelAnimationFrame(id)
  }, [pathname])

  return null
}
