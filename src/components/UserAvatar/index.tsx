import Image from 'next/image'

import { FaPenAlt } from 'react-icons/fa'

type UserAvatarProps = {
  userKey?: string
  imageUrl?: string
  handleOpenUserAvatarForm: () => void
}

export function UserAvatar({
  userKey,
  imageUrl,
  handleOpenUserAvatarForm,
}: UserAvatarProps) {
  return (
    <div className="group relative flex h-[50px] w-[50px] items-center justify-center rounded-full border border-gray-200">
      {imageUrl ? (
        <>
          <Image src={imageUrl} alt="User Avatar" fill />
          <button
            onClick={() => handleOpenUserAvatarForm()}
            className="absolute left-0 top-0 z-10 h-full w-full group-hover:bg-[#00000020]"
          ></button>
        </>
      ) : (
        <>
          <p className="text-xs font-medium text-light-text">Avatar</p>
          <div className="absolute -right-1 -top-1 z-20 rounded-full border border-gray-200 bg-white p-1 text-light-text">
            <FaPenAlt size={10} />
          </div>
          <button
            onClick={() => handleOpenUserAvatarForm()}
            className="absolute left-0 top-0 z-10 h-full w-full rounded-full group-hover:bg-[#00000020]"
          ></button>
        </>
      )}
    </div>
  )
}
