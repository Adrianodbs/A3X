import Button from '../Button'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="w-full p-4 items-center justify-center flex flex-col my-6 text-center">
      <h1 className="text-[32px] font-black">
        Você tem <span className="text-green-600">perguntas?</span>
      </h1>
      <h2 className="text-[32px] font-black">
        Nós temos <span className="text-green-600">respostas.</span>
      </h2>
      <Button color="bg-green-600 text-white">
        Preciso de uma Landing Page <FaWhatsapp size={24} />
      </Button>
    </div>
  )
}
