'use client'

import { AddNewUser } from '@/components/AddNewUser'
import { UserForm } from '@/components/UserForm'

import { useState } from 'react'
import { UserTable } from '@/components/UserTable'

export default function Dashboard() {
  const [openUserForm, setOpenUserForm] = useState(false)

  function handleOpenUserForm() {
    setOpenUserForm(!openUserForm)
  }

  return (
    <main>
      <section className="mx-auto mb-10 max-w-7xl space-y-8 px-4 pt-[112px] sm:px-8 md:pt-[150px]">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-dark-text md:text-5xl">
            Dashboard
          </h1>
          <p className="text-sm font-medium text-text md:text-base">
            Aqui você pode ver os detalhes de usuários cadastrados no seu banco
            de dados, além de ter a possibilidade de criar novos a partir do
            nosso sistema.
          </p>
        </div>

        {openUserForm ? (
          <UserForm handleOpenUserForm={handleOpenUserForm} />
        ) : null}

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-dark-text">Usuários</h3>
            <AddNewUser
              title="Adicionar Usuário"
              onClick={() => handleOpenUserForm()}
              buttonStyle="big"
            />
          </div>
        </div>

        <UserTable />
      </section>
    </main>
  )
}
