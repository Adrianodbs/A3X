import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-6 px-14 ">
      <h1 className="text-green-500 text-[28px] ">A3X</h1>

      <ul className="md:static relative md:w-fit top-[20%] w-full flex justify-center md:flex-row flex-col items-center gap-6 cursor-pointer">
        <Link
          to="/"
          className="text-gray-400 hover:text-gray-900 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-400 hover:text-gray-900 transition duration-300"
        >
          Quem somos
        </Link>
        <Link
          to="/budget"
          className="bg-green-300 rounded-md p-2 font-semibold text-white-50 hover:bg-green-200 hover:text-green-900 transition duration-300"
        >
          Solicitar orçamento
        </Link>
      </ul>
    </div>
  )
}
