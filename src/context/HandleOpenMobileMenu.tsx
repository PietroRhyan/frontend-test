'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

type ChangeMenuVisibilityType = {
  isOpen: boolean
  switchVisibility: (isOpen: boolean) => void
}

type Props = {
  children: ReactNode
}

const ChangeMenuVisibilityDefaultValues: ChangeMenuVisibilityType = {
  isOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  switchVisibility: () => {},
}

export const HandleMobileMenu = createContext<ChangeMenuVisibilityType>(
  ChangeMenuVisibilityDefaultValues,
)

export function MobileMenu() {
  return useContext(HandleMobileMenu)
}

export function HandleMobileMenuProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  function switchVisibility(isOpen: boolean) {
    setIsOpen(isOpen)
  }

  return (
    <HandleMobileMenu.Provider value={{ isOpen, switchVisibility }}>
      {children}
    </HandleMobileMenu.Provider>
  )
}
