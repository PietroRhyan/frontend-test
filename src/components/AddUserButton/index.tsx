type AddUserButtonProps = {
  title: string
  handleOpenUserForm: () => void
}

export function AddUserButton({
  title,
  handleOpenUserForm,
}: AddUserButtonProps) {
  return (
    <div className="group flex w-fit items-center justify-center rounded-md bg-gradient-to-b from-light-green to-green p-[2px] transition-all duration-200 hover:bg-opacity-80">
      <button
        onClick={() => handleOpenUserForm()}
        className="rounded-md bg-green p-2 text-center text-sm font-bold text-dark-green transition-all duration-200 group-hover:bg-opacity-80 group-hover:text-dark-text"
      >
        {title}
      </button>
    </div>
  )
}
