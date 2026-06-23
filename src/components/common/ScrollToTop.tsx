'use client'

import { useEffect, useLayoutEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

function scrollWindowToTop() {
  try {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    })
  } catch {
    window.scrollTo(0, 0)
  }
  document.documentElement.scrollTop = 0
  document.documentElement.scrollLeft = 0
  document.body.scrollTop = 0
  document.body.scrollLeft = 0
}

/**
 * Ensures the viewport starts at the top (hero) on each navigation and avoids
 * the browser restoring a previous scroll offset (including after bfcache).
 */
function ScrollToTopInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.history.scrollRestoration = 'manual'
  }, [])

  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) scrollWindowToTop()
    }
    window.addEventListener('pageshow', onPageShow)
    return () => window.removeEventListener('pageshow', onPageShow)
  }, [])

  useLayoutEffect(() => {
    scrollWindowToTop()
  }, [pathname, searchParams])

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      scrollWindowToTop()
      window.requestAnimationFrame(scrollWindowToTop)
    })
    return () => window.cancelAnimationFrame(id)
  }, [pathname, searchParams])

  return null
}

export function ScrollToTop() {
  return (
    <Suspense fallback={null}>
      <ScrollToTopInner />
    </Suspense>
  )
}
