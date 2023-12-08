'use client'

import { AddUserButton } from '@/components/AddUserButton'
import { UserForm } from '@/components/UserForm'

import { useState } from 'react'

import { Table } from 'antd'
import type { ColumnType } from 'antd/es/table'

type DataType = {
  key: string
  avatar: string
  name: string
  email: string
  birth: string
}

const columns: ColumnType<DataType>[] = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
  },
  {
    title: 'D. Nascimento',
    dataIndex: 'birth',
    key: 'birth',
  },
]

const dataSource: DataType[] = [
  {
    key: '1',
    avatar: 'Avatar',
    name: 'Mike',
    email: 'mike@gmail.com',
    birth: '10/10/2015',
  },
  {
    key: '2',
    avatar: 'Avatar',
    name: 'John',
    email: 'john@gmail.com',
    birth: '02/03/2015',
  },
]

export default function Dashboard() {
  const [openUserForm, setOpenUserForm] = useState(false)

  function handleOpenUserForm() {
    setOpenUserForm(!openUserForm)
  }

  return (
    <main>
      <section className="mx-auto max-w-7xl space-y-8 px-4 pt-[112px] sm:px-8 md:pt-[150px]">
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
            <AddUserButton
              title="Adicionar Usuário"
              handleOpenUserForm={handleOpenUserForm}
            />
          </div>
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </section>
    </main>
  )
}
