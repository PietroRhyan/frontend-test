'use client'

import { useAppSelector } from '@/lib/hooks'
import { UserAvatar } from '../UserAvatar'
import { useState } from 'react'
import { UserFormAvatar } from '../UserFormAvatar'

export function UserTable() {
  const [openUserAvatarForm, setOpenUserAvatarForm] = useState(false)
  const [userKeyToUpdateAvatar, setUserKeyToUpdateAvatar] = useState<
    string | undefined
  >('')

  const users = useAppSelector((state) => state.users.users)

  function handleOpenUserAvatarForm() {
    setOpenUserAvatarForm(!openUserAvatarForm)
  }

  return (
    <>
      {openUserAvatarForm ? (
        <UserFormAvatar
          userKey={userKeyToUpdateAvatar}
          handleOpenUserAvatarForm={handleOpenUserAvatarForm}
        />
      ) : null}

      <table className="mx-auto w-full overflow-hidden rounded-lg border shadow-thin">
        <thead className="border bg-gray-200 text-left">
          <tr>
            <th className="p-4">Nome</th>
            <th className="p-4">Email</th>
            <th className="p-4">Avatar</th>
            <th className="hidden p-4 md:block">D. Nascimento</th>
          </tr>
        </thead>
        <tbody>
          {users.length ? (
            users.map((user) => (
              <tr
                key={user.key}
                className="border transition-colors duration-100 hover:bg-gray-100"
              >
                <td className="px-4 py-3 text-sm md:text-base">{user.name}</td>
                <td className="px-4 py-3 text-sm md:text-base">{user.email}</td>
                <td className="px-4 py-3 text-sm md:text-base">
                  <UserAvatar
                    imageUrl={user.avatar}
                    onClick={() => {
                      setUserKeyToUpdateAvatar(user.key)
                      handleOpenUserAvatarForm()
                    }}
                  />
                </td>
                <td className="hidden items-center px-4 py-3 text-sm md:table-cell md:text-base">
                  07/04/2002
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
    </>
  )
}
