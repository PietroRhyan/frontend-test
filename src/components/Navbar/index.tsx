import Image from 'next/image'
import Link from 'next/link'

import logo from 'public/images/logo.svg'
import { DashboardButton } from '../DashboardButton'

export function Navbar() {
  return (
    <header className="fixed left-1/2 top-4 z-50 flex w-full max-w-7xl -translate-x-1/2 items-center justify-between rounded-xl border border-light-purple bg-[#F2EBF450] p-3 backdrop-blur-md">
      <div className="flex items-center justify-center gap-[6px]">
        <div>
          <Image src={logo} alt="Logo Icon" width={30} height={42} />
        </div>

        <span className="text-krona text-xl text-[#8F30BC]">Logo</span>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Link
          href="#"
          className="text-sm font-semibold text-text transition-all duration-200 hover:text-dark-text hover:underline"
        >
          Sobre
        </Link>
        <DashboardButton title="Dashboard" buttonStyle="small" hasIcon />
      </div>
    </header>
  )
}
