'use client'

import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { FiUpload } from 'react-icons/fi'

import '@pqina/pintura/pintura.css'
import { openDefaultEditor } from '@pqina/pintura'
import Image from 'next/image'
import { useAppDispatch } from '@/lib/hooks'
import { updateAvatar } from '@/lib/features/user/userSlice'

import { getSignedURL } from '@/app/actions'
import { FormButton } from '../FormButton'

type DropzoneProps = {
  userKey?: string
  className: string
  handleOpenUserAvatarForm: () => void
}

const editImage = (image: any, done: any) => {
  const imageFile = image.pintura ? image.pintura.file : image
  const imageState = image.pintura ? image.pintura.data : {}

  const editor = openDefaultEditor({
    src: imageFile,
    imageState,
  })

  editor.on('close', () => {
    // the user cancelled editing the image
  })

  editor.on('process', ({ dest, imageState }) => {
    Object.assign(dest, {
      pintura: { file: imageFile, data: imageState },
    })
    done(dest)
  })
}

const decreaseImageName = (fileName: string) => {
  let decreasedImageName = fileName

  if (fileName.length >= 18) {
    decreasedImageName = fileName.slice(0, 15) + '...'
  }

  return decreasedImageName
}

export function Dropzone({
  className,
  userKey,
  handleOpenUserAvatarForm,
}: DropzoneProps) {
  const [files, setFiles] = useState<(File & { preview: string })[]>([])
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()

  const onDrop = useCallback((acceptedFiles: any) => {
    if (acceptedFiles.length) {
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, { preview: URL.createObjectURL(file) }),
        ),
      )
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': [],
    },
    maxFiles: 1,
  })

  const thumbs = files.map((file, index) => (
    <div
      className="relative mx-auto w-[130px] rounded-lg border border-gray-200"
      key={file.name}
    >
      <div className="relative h-[130px] w-full">
        <Image src={file.preview} alt={file.name} fill objectFit="cover" />
      </div>
      <div className="p-1 text-xs font-medium text-light-text">
        {decreaseImageName(file.name)}
      </div>
      <button
        className="absolute -right-2 -top-2 rounded-md bg-purple px-2 py-1 text-sm font-semibold text-dark-purple transition-all duration-200 hover:bg-opacity-90 hover:text-dark-text"
        onClick={() =>
          editImage(file, (output: any) => {
            const updatedFiles = [...files]

            updatedFiles[index] = output

            if (file.preview) URL.revokeObjectURL(file.preview)

            Object.assign(output, {
              preview: URL.createObjectURL(output),
            })

            setFiles(updatedFiles)
          })
        }
      >
        Editar
      </button>
    </div>
  ))

  useEffect(
    () => () => {
      // Make sure to revoke the Object URL to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview))
    },
    [files],
  )

  const handleSubmitAvatar = async () => {
    try {
      if (files.length && userKey) {
        const signedUrlResult = await getSignedURL(files[0].type, userKey)

        if (signedUrlResult.failure !== undefined) {
          throw new Error(signedUrlResult.failure)
        }

        const url = signedUrlResult.success?.url

        setLoading(true)
        await fetch(url, {
          method: 'PUT',
          body: files[0],
          headers: {
            'Content-Type': files[0].type,
          },
        })

        const imageUrl = url.split('?')[0]
        dispatch(updateAvatar({ avatar: imageUrl, key: userKey }))
        handleOpenUserAvatarForm()
      }
    } catch (e) {
      console.log(e)
      window.alert(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section>
      <div
        {...getRootProps({
          className,
        })}
      >
        <input
          {...getInputProps({
            multiple: false,
            name: 'avatar',
          })}
        />
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <FiUpload size={20} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>
              Mova uma imagem aqui, ou clique na área para selecionar algum
              arquivo
            </p>
          )}
        </div>
      </div>
      {files.length ? (
        <>
          <div className="mt-4">
            <p className="text-sm font-semibold text-text">Preview</p>
            {thumbs}
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <FormButton
              title="Limpar"
              onClick={() => setFiles([])}
              buttonStyle="cancel"
            />
            <FormButton
              title="Atualizar"
              isLoading={loading}
              onClick={() => handleSubmitAvatar()}
              buttonStyle="submit"
            />
          </div>
        </>
      ) : null}
    </section>
  )
}
