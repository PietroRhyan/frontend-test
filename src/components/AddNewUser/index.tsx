import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center gap-1 rounded-md bg-green text-center text-sm font-bold text-dark-green transition-all duration-200 group-hover:bg-opacity-80 group-hover:text-dark-text',
  variants: {
    buttonStyle: {
      small: 'px-2 py-1',
      big: 'p-2',
    },
  },
})

interface AddNewUserProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {
  title: string
}

export function AddNewUser({ title, onClick, buttonStyle }: AddNewUserProps) {
  return (
    <div className="group flex w-fit items-center justify-center rounded-md bg-gradient-to-b from-light-green to-green p-[2px] transition-all duration-200 hover:bg-opacity-80">
      <button onClick={onClick} className={button({ buttonStyle })}>
        <span>{title}</span>
      </button>
    </div>
  )
}
