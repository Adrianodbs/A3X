import { source } from '../../utils/Source'
import Contact from '../Contact'

export default function CommonQuestions() {
  return (
    <div className="w-full flex flex-col items-center justify-center p-4 my-6   gap-2">
      <h1 className="text-[42px] font-black mb-6 text-center text-green-600">
        Dúvidas <span className="text-black">comuns</span>
      </h1>
      {source.map(item => (
        <details className="w-full p-2 border-2 border-solid border-green-600 rounded-lg cursor-pointer">
          <summary className="font-bold text-lg text-green-600">
            {item.summary}
          </summary>
          <p className="text-black ml-8">{item.detail}</p>
        </details>
      ))}
      <Contact />
    </div>
  )
}
