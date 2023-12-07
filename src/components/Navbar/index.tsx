import Image from 'next/image'
import Link from 'next/link'

import logo from 'public/images/logo.svg'
import { DashboardButton } from '../DashboardButton'

export function Navbar() {
  return (
    <header className="fixed left-1/2 top-4 flex w-full max-w-7xl -translate-x-1/2 items-center justify-between rounded-xl border border-light-purple bg-[#F2EBF450] p-3 backdrop-blur-[6px]">
      <div className="flex items-center justify-center gap-[6px]">
        <div>
          <Image src={logo} alt="Logo Icon" width={30} height={42} />
        </div>

        <span className="text-krona text-xl text-[#8F30BC]">Logo</span>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Link href="#">Sobre</Link>
        <DashboardButton title="Dashboard" buttonStyle="small" hasIcon />
      </div>
    </header>
  )
}
