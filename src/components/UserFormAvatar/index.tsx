import { FiX } from 'react-icons/fi'
import { Dropzone } from '../Dropzone'

type UserFormAvatarProps = {
  userKey?: string
  handleOpenUserAvatarForm: () => void
}

export function UserFormAvatar({
  userKey,
  handleOpenUserAvatarForm,
}: UserFormAvatarProps) {
  return (
    <>
      <div
        role="dialog"
        aria-modal
        className="fixed -top-8 left-0 z-50 h-screen w-screen overflow-hidden bg-[#00000030]"
        onClick={() => handleOpenUserAvatarForm()}
      ></div>
      <div className="fixed left-1/2 top-[250px] z-[60] min-w-[300px] max-w-md -translate-x-1/2 -translate-y-1/2 space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-thin">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-dark-text">
            Atualizar Avatar de Usuário
          </h3>
          <button onClick={() => handleOpenUserAvatarForm()}>
            <FiX size={20} />
          </button>
        </div>
        <Dropzone
          userKey={userKey}
          handleOpenUserAvatarForm={handleOpenUserAvatarForm}
          className="cursor-pointer rounded-md border-2 border-dashed border-gray-200 px-10 py-6 text-xs font-medium text-light-text"
        />
      </div>
    </>
  )
}
