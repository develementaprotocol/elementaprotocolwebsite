'use client'

import { useMemo, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, PointMaterial, Points } from '@react-three/drei'
import * as THREE from 'three'

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

function useReducedStars() {
  const [starCount, setStarCount] = useState(2000)
  const [dustCount, setDustCount] = useState(800)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Detect low-power devices or reduced motion preference
    const isLowPower = typeof navigator !== 'undefined' && (navigator.hardwareConcurrency || 4) < 4
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (isLowPower || prefersReduced) {
      setShouldRender(false)
      return
    }

    const mq = window.matchMedia('(max-width: 768px)')
    const apply = () => {
      if (mq.matches) {
        setStarCount(800)
        setDustCount(300)
      } else if (window.matchMedia('(max-width: 1280px)').matches) {
        setStarCount(1200)
        setDustCount(500)
      } else {
        setStarCount(2000)
        setDustCount(800)
      }
    }
    apply()
    mq.addEventListener('change', apply)
    const mqLg = window.matchMedia('(max-width: 1280px)')
    mqLg.addEventListener('change', apply)
    return () => {
      mq.removeEventListener('change', apply)
      mqLg.removeEventListener('change', apply)
    }
  }, [])

  return { starCount, dustCount, shouldRender }
}

export function SpaceBackground() {
  const { starCount, dustCount, shouldRender } = useReducedStars()
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    if (typeof document === 'undefined') return
    const handleVisibility = () => setIsActive(document.visibilityState === 'visible')
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [])

  if (!shouldRender) {
    return <div className="pointer-events-none fixed inset-0 z-[-1]" />
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] bg-[#15202f]">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 60 }}
        gl={{ alpha: false, antialias: false, powerPreference: 'high-performance' }}
        dpr={[1, 1.2]}
        frameloop={isActive ? "always" : "never"}
      >
        <color attach="background" args={['#15202f']} />
        <ambientLight intensity={1} />
        <StarField starCount={starCount} />
        <SpaceDust count={dustCount} />
      </Canvas>
    </div>
  )
}
