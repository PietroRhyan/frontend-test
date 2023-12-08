import { Button } from 'antd'

export default function Dashboard() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-[112px] sm:px-8 md:pt-[150px]">
        <h1 className="mb-2 text-4xl font-bold text-dark-text md:text-5xl">
          Dashboard
        </h1>
        <p className="text-sm font-medium text-text md:text-base">
          Aqui você pode ver os detalhes de usuários cadastrados no seu banco de
          dados, além de ter a possibilidade de criar novos a partir do nosso
          sistema.
        </p>

        <Button type="primary"> Testando </Button>
      </section>
    </main>
  )
}
