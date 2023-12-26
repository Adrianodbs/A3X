import { ReactNode } from 'react'

interface CardProps {
  img: string | ReactNode
  title: string
  desc: string
}

export default function Card({ img, title, desc }: CardProps) {
  return (
    <div className="min-h-[260px] flex flex-col items-center justify-start text-green-600 max-w-[420px] w-[90%] text-center bg-white p-2">
      <div className="py-4">{img}</div>

      <h3 className="font-black text-2xl mb-2">{title}</h3>
      <p className="font-semibold text-black">{desc}</p>
    </div>
  )
}
