'use client'

import { Form } from '@rjsf/antd'
import validator from '@rjsf/validator-ajv8'

import { schema, uiSchema } from '@/lib/form-schema'
import { FiX } from 'react-icons/fi'

import { create } from '@/lib/features/user/userSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'

type UserFormProps = {
  handleOpenUserForm: () => void
}

export function UserForm({ handleOpenUserForm }: UserFormProps) {
  const users = useAppSelector((state) => state.users.users)
  const dispatch = useAppDispatch()

  const emailExists = (email: string) => {
    const userExists = users.filter((user) => user.email === email)

    if (!userExists.length) {
      return false
    }

    return true
  }

  return (
    <>
      <div
        role="dialog"
        aria-modal
        className="fixed -top-8 left-0 z-50 h-screen w-screen overflow-hidden bg-[#00000030]"
        onClick={() => handleOpenUserForm()}
      ></div>
      <div className="fixed left-1/2 top-[250px] z-[60] min-w-[300px] max-w-md -translate-x-1/2 -translate-y-1/2 space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-thin">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-dark-text">Adicionar Usuário</h3>
          <button onClick={() => handleOpenUserForm()}>
            <FiX size={20} />
          </button>
        </div>
        <Form
          schema={schema}
          uiSchema={uiSchema}
          validator={validator}
          onSubmit={({ formData }) => {
            if (emailExists(formData.email)) {
              window.alert('Email já cadastrado!')
              return
            }

            dispatch(create(formData))
            handleOpenUserForm()
          }}
        />
      </div>
    </>
  )
}
