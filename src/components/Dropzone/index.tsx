'use client'

import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { FiUpload } from 'react-icons/fi'

type DropzoneProps = {
  className: string
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
        <div className="flex flex-col items-center justify-center gap-3">
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
    </section>
  )
}
