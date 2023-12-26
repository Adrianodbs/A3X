export default function InfoSection() {
  return (
    <section className="md:grid md:grid-cols-2 flex flex-col p-4 gap-3 items-center">
      <h1 className="text-center md:text-[40px] text-[32px] font-[900]">
        Desenvolvimento de{' '}
        <span className="text-green-600">páginas web e mobile</span>, com foco
        na melhor experiência para o cliente.
      </h1>
      <div className="bg-green-600 text-white text-center p-2">
        <h1 className="text-[36px] font-[900]">
          <span className="text-black">O que é</span> uma Landing Page?
        </h1>
        <h4 className="font-bold mt-3 p-6">
          Uma Landing Page é uma página criada com o objetivo de converter
          visitantes em clientes ou leads qualificados. Com um design e conteúdo
          eficazes, a Landing Page pode influenciar os usuários a realizar a
          ação desejada, seja preenchendo um formulário, efetuando uma compra ou
          entrando em contato. <br />
          Adicionalmente, uma Landing Page proporciona uma oportunidade única
          para medir e analisar o desempenho de uma campanha, permitindo ajustes
          para otimizar o retorno sobre o investimento. Em síntese, uma Landing
          Page bem elaborada é um componente crucial para o êxito de qualquer
          campanha online.
        </h4>
      </div>
    </section>
  )
}
