interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  color: string
  onClick?: () => void
}

export default function Button({
  children,
  color,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`min-w-[180px] py-2 px-4 flex justify-center items-center gap-3 text-lg font-semibold hover:opacity-75 transition duration-300 rounded-lg ${color}`}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
