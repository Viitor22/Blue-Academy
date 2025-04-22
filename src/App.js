import EstiloGlobal, {Container, Secao} from "./Style";
import Hero from './containers/hero/hero'
import Subheadline from "./containers/subheadline/subheadline";
import Card from "./components/card/card";

function App() {
  return (
    <>
    <EstiloGlobal></EstiloGlobal>
      <Container>
        <Hero></Hero>
        <Secao>
          <Subheadline></Subheadline>          
        </Secao>
        <Secao>
          <Card></Card>
        </Secao>
      </Container>
    </>
  );
}

export default App;
