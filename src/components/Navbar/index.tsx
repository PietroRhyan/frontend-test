'use client'

import Image from 'next/image'
import Link from 'next/link'

import logo from 'public/images/logo.svg'
import { DashboardButton } from '../DashboardButton'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { MobileMenu } from '@/context/HandleOpenMobileMenu'
import { MobileSideMen } from '../MobileSideMenu/indes'

export function Navbar() {
  const { isOpen, switchVisibility } = MobileMenu()

  return (
    <header className="fixed left-1/2 top-4 z-50 w-full max-w-7xl -translate-x-1/2 px-4 sm:px-8">
      <div className="flex w-full items-center justify-between rounded-xl border border-light-purple bg-[#F5F5F550] p-3 backdrop-blur-md">
        <Link href="/" className="flex items-center justify-center gap-[6px]">
          <div>
            <Image
              src={logo}
              alt="Logo Icon"
              width={30}
              height={42}
              className="h-[42px] w-[30px]"
            />
          </div>

          <span className="text-krona text-xl text-[#8F30BC]">Logo</span>
        </Link>

        {/* Only appears before 480px screen width */}
        <button
          onClick={() => switchVisibility(!isOpen)}
          className="block rounded-md p-2 transition-colors duration-200 sm:hidden"
        >
          <HiBars3BottomRight size={26} />
        </button>

        {isOpen ? <MobileSideMen /> : null}

        {/* Only appears after 480px screem width */}
        <div className="hidden items-center justify-center gap-4 sm:flex">
          <Link
            href="#"
            className="text-sm font-semibold text-text transition-all duration-200 hover:text-dark-text hover:underline"
          >
            Sobre
          </Link>
          <DashboardButton title="Dashboard" buttonStyle="small" hasIcon />
        </div>
      </div>
    </header>
  )
}
