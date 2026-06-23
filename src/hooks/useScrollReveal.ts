import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal() {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || reduced) return undefined

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
            onEnter: () => {
              // Ensure we reach full opacity if it gets stuck
              gsap.to(el, { opacity: 1, duration: 0.2 })
            }
          },
        }
      )
    }, el)

    // Ensure GSAP knows the correct positions after mount
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    return () => ctx.revert()
  }, [reduced])

  return ref
}
