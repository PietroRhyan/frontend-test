export default function About() {
  return (
    <main className="mx-auto flex h-screen max-w-7xl flex-col justify-between px-4 pt-[112px] sm:px-8 md:pt-[120px]">
      <section className="mb-20">
        <h1 className="mb-5 text-4xl font-bold text-dark-text md:text-5xl">
          Sobre
        </h1>

        <div className="flex flex-col gap-3 text-base font-medium text-text">
          <p>
            Primeiramente agradeço pela oportunidade de ter sido selecionado
            para esta etapa do processo, estou muito empenhado e realmente quero
            fazer parte da equipe/ time e crescer, em todos os aspectos, na
            minha carreira como desenvolvedor.
          </p>
          <p>
            Independente do resultado, este projeto foi um aprendizado, tanto em
            novas tecnologias quanto nas diversas maneiras de solucionar os
            problemas.
          </p>
          <p>
            Neste projeto utilizei algumas práticas não muito comuns em
            ambientes de desenvolvimento por fins de praticidade, como a
            utilização de estados globais como armazenamento temporário dos
            usuários cadastrados e a organização das variáveis de ambiente.
          </p>

          <p>
            <strong>Agradeço e isso é só o começo!</strong>
          </p>
        </div>
      </section>
      <footer className="pb-2 text-center text-xs font-medium text-light-text">
        Feito com 💜 por Pietro Rhyan
      </footer>
    </main>
  )
}
