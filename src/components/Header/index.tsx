export default function Header() {
  return (
    <div className="flex justify-between items-center py-6 px-14 ">
      <h1 className="text-green-300 text-[28px]">A3X</h1>

      <ul className="flex justify-center items-center gap-6 cursor-pointer">
        <li className="text-gray-400 hover:text-gray-900 transition duration-300">
          Home
        </li>

        <li className="text-gray-400 hover:text-gray-900 transition duration-300">
          Quem somos
        </li>

        <button className="bg-green-300 rounded-md p-2 font-semibold text-white-50 hover:bg-white-50 hover:text-green-300 transition duration-300">
          Solicitar orçamento
        </button>
      </ul>
    </div>
  )
}
