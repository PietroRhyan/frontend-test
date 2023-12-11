import Image from 'next/image'

type LogoType = {
  logo: string
  name: string
}

const logos: LogoType[] = [
  {
    logo: '/images/companies/spotify.svg',
    name: 'Spotify',
  },
  {
    logo: '/images/companies/banco-next.svg',
    name: 'Banco Next',
  },
  {
    logo: '/images/companies/rockstar-games.svg',
    name: 'Rockstar Games',
  },
  {
    logo: '/images/companies/mercado-livre.svg',
    name: 'Mercado Livre',
  },
]

export function WorkedWithCompanies() {
  return (
    <div className="flex items-center gap-3">
      {logos.map(({ logo, name }) => (
        <Image
          key={name}
          src={logo}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-auto"
        />
      ))}
    </div>
  )
}
