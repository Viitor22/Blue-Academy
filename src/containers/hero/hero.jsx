import { Titulo, Texto, Botao, Logo, Highlight } from "../../Style"
import { SecaoHero } from "./style"
import logo from '../../Assets/images/logo.png'

const Hero = () => {
    return (
        <SecaoHero>
          <div>
          <header><Logo src={logo}></Logo></header>
          <Titulo>
            A sua aprovação em medicina
            é importante demais para você <Highlight>gastar o seu tempo</Highlight> estudando
            com métodos que <Highlight> não vão te
            ajudar a passar.</Highlight>
          </Titulo>
          <Texto>
            Ao contrário das escolas e cursinhos tradicionais - que te ensinam
            sobre as matérias, <Highlight> mas não te mostram como estudar de maneira
            estratégica </Highlight> para passar no Enem - nós montamos a sua estratégia
            de estudos para que você consiga ser <Highlight>aprovado em medicina
            em apenas um ano.</Highlight>
          </Texto>
          <Botao>Quero passar em Medicina no ENEM</Botao>
          </div>
          <div className="imagem"></div>
        </SecaoHero>
    )
}

export default Hero