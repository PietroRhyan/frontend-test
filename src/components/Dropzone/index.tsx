'use client'

import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { FiUpload } from 'react-icons/fi'

import '@pqina/pintura/pintura.css'
import { openDefaultEditor } from '@pqina/pintura'
import Image from 'next/image'

type DropzoneProps = {
  className: string
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

export function Dropzone({ className }: DropzoneProps) {
  const [files, setFiles] = useState<(File & { preview: string })[]>([])

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
      className="relative w-[130px] rounded-lg border border-gray-200"
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

  return (
    <section>
      <div
        {...getRootProps({
          className,
        })}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <FiUpload size={20} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>
              Drag &apos;n&apos; drop some files here, or click to select files
            </p>
          )}
        </div>
      </div>
      {files.length ? (
        <div className="mt-4">
          <p className="text-sm font-semibold text-text">Preview</p>
          {thumbs}
        </div>
      ) : null}
    </section>
  )
}
