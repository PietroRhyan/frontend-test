import Image from 'next/image'
import usersIcon from 'public/images/users.svg'

export function DashboardNotoriousIcon() {
  return (
    <div className="flex w-fit items-center justify-center rounded-xl bg-gradient-to-b from-light-purple to-dark-purple p-[1px]">
      <div className="flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-gradient-to-br from-purple to-dark-purple">
        <Image src={usersIcon} alt="Users Icon" />
      </div>
    </div>
  )
}
