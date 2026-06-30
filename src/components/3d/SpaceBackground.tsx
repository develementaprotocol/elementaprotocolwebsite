'use client'

import { useMemo, useRef, useState, useEffect, type CSSProperties } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, PointMaterial, Points } from '@react-three/drei'
import * as THREE from 'three'

const STATIC_BG_STYLE: CSSProperties = {
  background:
    'linear-gradient(135deg, rgba(8, 20, 33, 0.98) 0%, rgba(15, 34, 49, 0.94) 50%, rgba(8, 20, 33, 0.98) 100%)',
}

function SpaceDust({ count = 2000 }: { count: number }) {
  const ref = useRef<THREE.Group>(null)

  const dustGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 80
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geometry
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta * 0.05
      ref.current.rotation.x += delta * 0.02
    }
  })
  return (
    <group ref={ref}>
      <Points geometry={dustGeometry}>
        <PointMaterial
          transparent
          color="#24bace"
          size={0.05}
          sizeAttenuation
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  )
}

function StarField({ starCount }: { starCount: number }) {
  const ref = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta * 0.01
    }
  })

  return (
    <group ref={ref}>
      <Stars radius={50} depth={50} count={starCount} factor={4} saturation={0} fade speed={1} />
    </group>
  )
}

function useSpaceBackground() {
  const [canAnimate, setCanAnimate] = useState(true)
  const [starCount, setStarCount] = useState(2000)
  const [dustCount, setDustCount] = useState(800)
  const [dpr, setDpr] = useState(1.2)

  useEffect(() => {
    const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mqSm = window.matchMedia('(max-width: 768px)')
    const mqMd = window.matchMedia('(max-width: 1280px)')

    const apply = () => {
      const isLowPower = (navigator.hardwareConcurrency || 4) < 4
      const prefersReduced = mqReduced.matches
      const animate = !isLowPower && !prefersReduced
      setCanAnimate(animate)

      if (!animate) return

      if (mqSm.matches) {
        setStarCount(800)
        setDustCount(300)
        setDpr(Math.min(window.devicePixelRatio || 1, 1.5))
      } else if (mqMd.matches) {
        setStarCount(1200)
        setDustCount(500)
        setDpr(Math.min(window.devicePixelRatio || 1, 1.75))
      } else {
        setStarCount(2000)
        setDustCount(800)
        setDpr(Math.min(window.devicePixelRatio || 1, 2))
      }
    }

    apply()
    mqReduced.addEventListener('change', apply)
    mqSm.addEventListener('change', apply)
    mqMd.addEventListener('change', apply)
    window.addEventListener('resize', apply)
    return () => {
      mqReduced.removeEventListener('change', apply)
      mqSm.removeEventListener('change', apply)
      mqMd.removeEventListener('change', apply)
      window.removeEventListener('resize', apply)
    }
  }, [])

  return { canAnimate, starCount, dustCount, dpr }
}

export function SpaceBackground() {
  const { canAnimate, starCount, dustCount, dpr } = useSpaceBackground()
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    if (typeof document === 'undefined') return
    const handleVisibility = () => setIsActive(document.visibilityState === 'visible')
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [])

  if (!canAnimate) {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-[-1]"
        style={STATIC_BG_STYLE}
        aria-hidden
      />
    )
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] bg-[#15202f]">
      <Canvas
        className="h-full w-full touch-none"
        camera={{ position: [0, 0, 1], fov: 60 }}
        gl={{ alpha: false, antialias: false, powerPreference: 'high-performance' }}
        dpr={dpr}
        frameloop={isActive ? 'always' : 'never'}
      >
        <color attach="background" args={['#15202f']} />
        <ambientLight intensity={1} />
        <StarField starCount={starCount} />
        <SpaceDust count={dustCount} />
      </Canvas>
    </div>
  )
}
