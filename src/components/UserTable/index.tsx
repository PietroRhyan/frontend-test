'use client'

import { useAppSelector } from '@/lib/hooks'
import { UserAvatar } from '../UserAvatar'
import { useState } from 'react'
import { UserFormAvatar } from '../UserFormAvatar'
import { format } from 'date-fns'

import type { PaginationProps } from 'antd'
import { Pagination } from 'antd'

export function UserTable() {
  const [openUserAvatarForm, setOpenUserAvatarForm] = useState(false)
  const [userKeyToUpdateAvatar, setUserKeyToUpdateAvatar] = useState<
    string | undefined
  >('')
  const users = useAppSelector((state) => state.users.users)

  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 3
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = users.slice(firstIndex, lastIndex)

  function handleOpenUserAvatarForm() {
    setOpenUserAvatarForm(!openUserAvatarForm)
  }

  function formatData(userBirth: string) {
    const date = new Date(userBirth)
    const formattedDate = format(date, 'dd/MM/yyyy')

    return formattedDate
  }

  const onChangePage: PaginationProps['onChange'] = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
      {openUserAvatarForm ? (
        <UserFormAvatar
          userKey={userKeyToUpdateAvatar}
          handleOpenUserAvatarForm={handleOpenUserAvatarForm}
        />
      ) : null}

      <section className="flex flex-col items-end gap-4">
        <table className="mx-auto w-full overflow-hidden rounded-lg border shadow-thin">
          <thead className="border bg-gray-200 text-left">
            <tr>
              <th className="p-2 sm:p-4">Nome</th>
              <th className="p-2 sm:p-4">Email</th>
              <th className="p-2 sm:p-4">Avatar</th>
              <th className="hidden p-2 sm:p-4 md:block">D. Nascimento</th>
            </tr>
          </thead>
          <tbody>
            {users.length ? (
              records.map((user) => (
                <tr
                  key={user.key}
                  className="border transition-colors duration-100 hover:bg-gray-100"
                >
                  <td className="p-2 text-sm sm:px-4 sm:py-3 md:text-base">
                    {user.name}
                  </td>
                  <td className="p-2 text-sm sm:px-4 sm:py-3 md:text-base">
                    {user.email}
                  </td>
                  <td className="p-2 text-sm sm:px-4 sm:py-3 md:text-base">
                    <UserAvatar
                      imageUrl={user.avatar}
                      onClick={() => {
                        setUserKeyToUpdateAvatar(user.key)
                        handleOpenUserAvatarForm()
                      }}
                    />
                  </td>
                  <td className="hidden items-center p-2 text-sm sm:px-4 sm:py-3 md:table-cell md:text-base">
                    {formatData(user.birth)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-3 text-center text-sm font-medium text-light-text">
                  Nenhum usuário cadastrado
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <Pagination
          current={currentPage}
          onChange={onChangePage}
          total={users.length}
          pageSize={recordsPerPage}
        />
      </section>
    </>
  )
}
