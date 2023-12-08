import { DashboardButton } from '@/components/DashboardButton'
import { DashboardNotoriousIcon } from '@/components/DashboardNotoriousIcon'
import Image from 'next/image'
import Link from 'next/link'

import { FaArrowRight } from 'react-icons/fa'

import grid from 'public/bg-images/right-grid.svg'
import circGradient1 from 'public/bg-images/circular-gradient-1.svg'
import circGradient2 from 'public/bg-images/circular-gradient-2.svg'
import elipse from 'public/bg-images/ellipse.svg'

export default function Home() {
  return (
    <main className="relative border border-transparent">
      <section className="mx-auto max-w-7xl px-8 pt-[112px] md:pt-[150px]">
        <div className="mb-8">
          <DashboardNotoriousIcon />
        </div>

        <div className="mb-5 flex flex-col justify-center gap-4 md:mb-[25px]">
          <h1 className="text-grotesk max-w-3xl text-4xl font-bold tracking-tight text-dark-text md:text-5xl">
            O website de administração de usuários mais{' '}
            <span className="bg-gradient-to-r from-purple to-dark-purple bg-clip-text text-transparent">
              rápido
            </span>{' '}
            e{' '}
            <span className="bg-gradient-to-r from-dark-purple to-purple bg-clip-text text-transparent">
              seguro
            </span>{' '}
            que você já viu.
          </h1>
          <p className="max-w-3xl text-sm font-semibold text-light-text">
            Com nossa infraestrutura poderosa, você não precisa de um super
            banco de dados e milhares de linhas de código para construir seu
            próprio backend, deixe isso com a gente!
          </p>
        </div>

        <div className="flex items-center gap-4">
          <DashboardButton
            title="Ir para a Dashboard"
            hasIcon
            buttonStyle="big"
          />

          <Link
            href="#"
            className="group flex items-center justify-center gap-1 text-sm font-semibold text-dark-text"
          >
            <p className="underline underline-offset-2">sobre</p>
            <span className="transition-all duration-100 group-hover:pl-[2px]">
              <FaArrowRight size={12} />
            </span>
          </Link>
        </div>
      </section>

      <Image
        src={elipse}
        alt="Giant Ellipse"
        draggable="false"
        className="absolute left-0 top-24 -z-10"
      />

      <div className="absolute left-0 top-[270px] -z-10">
        <Image src={circGradient1} alt="Circular Gradient" draggable="false" />
      </div>

      <div className="absolute right-0 top-0 -z-30">
        <Image src={grid} alt="Grid" draggable="false" />

        <div className="absolute right-0 top-1/2 z-10 hidden h-[350px] w-[420px] -translate-y-32 rounded-l-md bg-bg-gray py-2 pl-2 custom-lgp:block">
          <div className="flex h-full w-full items-center justify-center bg-white text-2xl font-semibold text-dark-text">
            Uma foto maneira
          </div>
        </div>

        <div className="absolute -bottom-24 right-0 -z-20">
          <Image
            src={circGradient2}
            alt="Circular Gradient"
            draggable="false"
          />
        </div>
      </div>
    </main>
  )
}
