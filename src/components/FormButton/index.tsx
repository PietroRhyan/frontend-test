import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { AiOutlineLoading } from 'react-icons/ai'

const wrapper = tv({
  base: 'group flex w-fit items-center justify-center rounded-md bg-gradient-to-b p-[2px] transition-all duration-200 hover:bg-opacity-80',
  variants: {
    buttonStyle: {
      submit: 'from-light-green to-green',
      cancel: 'from-light-red to-red',
    },
  },
  defaultVariants: {
    buttonStyle: 'submit',
  },
})

const button = tv({
  base: 'flex items-center justify-center gap-1 rounded-md px-2 py-1 text-sm font-bold transition-all duration-200 group-hover:bg-opacity-80 group-hover:text-dark-text',
  variants: {
    buttonStyle: {
      submit: 'bg-green text-dark-green',
      cancel: 'bg-red text-dark-text',
    },
  },
  defaultVariants: {
    buttonStyle: 'submit',
  },
})

interface SubmitOrOpenModalButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {
  title: string
  isLoading?: boolean
}

export function FormButton({
  title,
  isLoading,
  onClick,
  buttonStyle,
}: SubmitOrOpenModalButtonProps) {
  return (
    <div className={wrapper({ buttonStyle })}>
      <button onClick={onClick} className={button({ buttonStyle })}>
        {isLoading ? (
          <>
            <AiOutlineLoading size={14} className="animate-spin" />
            <span>Atualizando</span>
          </>
        ) : (
          <span>{title}</span>
        )}
      </button>
    </div>
  )
}
