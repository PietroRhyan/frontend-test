'use client'

import { ReactNode } from 'react'
import { HandleMobileMenuProvider } from '@/context/HandleOpenMobileMenu'

type ProviderProps = {
  children: ReactNode
}

export default function Providers({ children }: ProviderProps) {
  return <HandleMobileMenuProvider>{children}</HandleMobileMenuProvider>
}
