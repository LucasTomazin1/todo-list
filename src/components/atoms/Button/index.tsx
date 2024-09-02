interface ButtonProps {
  tag: JSX.Element | string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ tag, onClick }) => {
  return (
    <button
      className="h-[50px] text-xl border py-2 px-4 border-zinc-500 rounded-md cursor-pointer hover:bg-zinc-900 text-zinc-300 hover:text-white"
      onClick={onClick}
    >
      {tag}
    </button>
  )
}
