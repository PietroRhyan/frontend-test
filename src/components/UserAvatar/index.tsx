import Image from 'next/image'
import { ComponentProps } from 'react'

import { FaPenAlt } from 'react-icons/fa'

interface UserAvatarProps extends ComponentProps<'button'> {
  imageUrl?: string
}

export function UserAvatar({ imageUrl, onClick }: UserAvatarProps) {
  return (
    <div className="group relative flex h-[50px] w-[50px] items-center justify-center rounded-full border border-gray-200">
      {imageUrl ? (
        <>
          <div className="absolute -right-1 -top-1 z-20 rounded-full border border-gray-200 bg-white p-1 text-light-text">
            <FaPenAlt size={10} />
          </div>
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src={imageUrl}
              alt="User Avatar"
              fill
              objectFit="cover"
              sizes="(min-width: 480px) 100vw, 50vw"
              quality={80}
            />
          </div>
          <button
            onClick={onClick}
            className="absolute left-0 top-0 z-10 h-full w-full rounded-full group-hover:bg-[#00000020]"
          ></button>
        </>
      ) : (
        <>
          <p className="text-xs font-medium text-light-text">Avatar</p>
          <div className="absolute -right-1 -top-1 z-20 rounded-full border border-gray-200 bg-white p-1 text-light-text">
            <FaPenAlt size={10} />
          </div>
          <button
            onClick={onClick}
            className="absolute left-0 top-0 z-10 h-full w-full rounded-full group-hover:bg-[#00000020]"
          ></button>
        </>
      )}
    </div>
  )
}
