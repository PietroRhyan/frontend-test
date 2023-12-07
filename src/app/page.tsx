import { DashboardButton } from '@/components/DashboardButton'

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl">
      <section className="mt-10">
        <h1 className="pt-10">Hello world</h1>
        <DashboardButton
          title="Ir para a Dashboard"
          buttonStyle="big"
          hasIcon
        />
        <div className="w-fit rounded-lg bg-slate-500 px-1 py-2 text-white hover:bg-opacity-80 ">
          Ola
        </div>
      </section>
    </main>
  )
}
