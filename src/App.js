import EstiloGlobal, {Container, Titulo, Texto, Secao, Botao} from "./Style";

function App() {
  return (
    <>
      <Container>
        <Secao>
          <Titulo>
            A sua aprovação em medicina
            é importante demais para você gastar o seu tempo estudando
            com métodos que não vão te
            ajudar a passar.
          </Titulo>
          <Botao>Quero passar em Medicina no ENEM</Botao>
        </Secao>
        <Titulo></Titulo>
        <Texto>
          Ao contrário das escolas e cursinhos tradicionais - que te ensinam
          sobre as matérias, mas não te mostram como estudar de maneira
          estratégica para passar no Enem - nós montamos a sua estratégia
          de estudos para que você consiga ser aprovado em medicina
          em apenas um ano.
        </Texto>
      </Container>
    </>
  );
}

export default App;
