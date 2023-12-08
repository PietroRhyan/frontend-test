'use client'

import Link from 'next/link'
import { DashboardButton } from '../DashboardButton'
import { MobileMenu } from '@/context/HandleOpenMobileMenu'

import { FiX } from 'react-icons/fi'

export function MobileSideMen() {
  const { switchVisibility } = MobileMenu()

  return (
    <>
      <div
        role="presentation"
        className="fixed left-0 top-0 z-20 h-screen w-screen"
        onClick={() => switchVisibility(false)}
      ></div>
      <aside
        role="menu"
        className="absolute right-3 top-full z-50 flex translate-y-2 flex-col gap-2 rounded-lg border border-gray-200 bg-[#FFF] p-2 shadow-thin"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-dark-text">Menu</h3>
          <button onClick={() => switchVisibility(false)}>
            <FiX size={20} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Link
            href="#"
            className="w-full py-2 text-center text-sm font-semibold text-text"
            onClick={() => switchVisibility(false)}
          >
            Sobre
          </Link>
          <DashboardButton
            title="Dashboard"
            hasIcon
            buttonStyle="small"
            onClick={() => switchVisibility(false)}
          />
        </div>
      </aside>
    </>
  )
}
