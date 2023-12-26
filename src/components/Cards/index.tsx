import Card from '../Card'
import { SiConvertio, SiStylelint } from 'react-icons/si'
import { FiTarget } from 'react-icons/fi'
import { FaShippingFast, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineImageSearch } from 'react-icons/md'
import { GiVibratingSmartphone } from 'react-icons/gi'
import Button from '../Button'

export default function Cards() {
  return (
    <div className="bg-green-600 p-5 flex flex-col items-center justify-center">
      <div className="flex-wrap flex gap-3 items-center justify-center mb-6">
        <Card
          img={<SiConvertio size={32} />}
          title="Foco em Conversão"
          desc="Uma landing page é projetada para direcionar visitantes para uma ação específica, como preencher um formulário, fazer uma compra ou baixar um recurso. Ela elimina distrações e mantém o foco na conversão."
        />
        <Card
          img={<FiTarget size={32} />}
          title="Segmentação de Audiência"
          desc="Você pode criar landing pages específicas para diferentes segmentos de público-alvo, personalizando a mensagem e o design para atender às necessidades e interesses de grupos específicos."
        />
        <Card
          img={<SiStylelint size={32} />}
          title="Personalização"
          desc="Landing pages podem ser personalizadas com base em dados demográficos, comportamentais ou outras informações sobre os visitantes. Isso cria uma experiência mais relevante e persuasiva."
        />
        <Card
          img={<FaShippingFast size={32} />}
          title="Rápido Tempo de Carregamento"
          desc="Geralmente, as landing pages são mais leves e têm um tempo de carregamento mais rápido em comparação com sites completos. Isso é crucial para reter a atenção do visitante e melhorar a experiência do usuário."
        />
        <Card
          img={<MdOutlineImageSearch size={32} />}
          title="SEO Otimizado"
          desc="Uma landing page bem otimizada para palavras-chave relevantes pode melhorar sua classificação nos motores de busca para consultas específicas, aumentando a visibilidade online."
        />
        <Card
          img={<GiVibratingSmartphone size={32} />}
          title="Otimização para dispositivos móveis"
          desc="Landing pages são projetadas para garantir uma boa experiência para usuários que acessam a partir de smartphones ou tablets."
        />
      </div>

      <Button color="bg-white text-green-600">
        Saiba Mais <FaWhatsapp size={24} />
      </Button>
    </div>
  )
}
