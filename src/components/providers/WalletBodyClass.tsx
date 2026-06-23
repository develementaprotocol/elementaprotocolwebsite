'use client'

import { useEffect } from 'react'

/** Wallet route: remove body gradient so 3D / hero layers read cleanly (Figma wallet hero). */
export function WalletBodyClass() {
  useEffect(() => {
    document.body.classList.add('wallet-landing')
    return () => document.body.classList.remove('wallet-landing')
  }, [])
  return null
}
