import { ComponentProps } from 'react'
import { FaChartBar } from 'react-icons/fa'
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
  base: 'flex items-center justify-center bg-purple font-semibold text-dark-purple transition-all duration-200 group-hover:bg-opacity-80 group-hover:text-dark-text',
  variants: {
    buttonStyle: {
      small: 'gap-1 rounded-md px-4 py-3 text-sm',
      big: 'gap-[6px] rounded-lg px-[18px] py-[12px] text-sm md:px-[24px] md:py-[14px] md:text-base',
    },
  },
  defaultVariants: {
    buttonStyle: 'small',
  },
})

interface DashboardButtonProps
  extends VariantProps<typeof button>,
    ComponentProps<'button'> {
  title: string
  hasIcon?: boolean
}

export function DashboardButton({
  title,
  hasIcon,
  buttonStyle,
  onClick,
}: DashboardButtonProps) {
  return (
    <div className={buttonWrapper({ wrapperStyle: buttonStyle })}>
      <button onClick={onClick} className={button({ buttonStyle })}>
        {hasIcon ? <FaChartBar size={18} /> : null}
        {title}
      </button>
    </div>
  )
}
