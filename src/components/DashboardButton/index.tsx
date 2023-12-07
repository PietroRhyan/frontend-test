import { GoGraph } from 'react-icons/go'
import { VariantProps, tv } from 'tailwind-variants'

const buttonWrapper = tv({
  base: 'group flex w-fit items-center justify-center rounded-md bg-purple transition-all duration-200 hover:bg-opacity-80',
  variants: {
    wrapperStyle: {
      small: '',
      big: 'rounded-lg bg-gradient-to-b from-light-purple to-purple p-[2px]',
    },
  },
})

const button = tv({
  base: 'flex items-center justify-center bg-purple font-semibold text-dark-purple transition-all duration-200 group-hover:bg-opacity-80 group-hover:text-white',
  variants: {
    buttonStyle: {
      small: 'gap-1 rounded-md px-4 py-3 text-sm',
      big: 'gap-[6px] rounded-lg px-[26px] py-[15px] text-base',
    },
  },
  defaultVariants: {
    buttonStyle: 'small',
  },
})

interface DashboardButtonProps extends VariantProps<typeof button> {
  title: string
  hasIcon?: boolean
}

export function DashboardButton({
  title,
  hasIcon,
  buttonStyle,
}: DashboardButtonProps) {
  return (
    <div className={buttonWrapper({ wrapperStyle: buttonStyle })}>
      <button className={button({ buttonStyle })}>
        {hasIcon ? <GoGraph size={18} /> : null}
        {title}
      </button>
    </div>
  )
}
