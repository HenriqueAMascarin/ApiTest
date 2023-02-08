import ListaCarros from "./components/ListaCarros";
import { DivCenter } from "./components/components.styled";

function App() {

  return (
    <>
    <DivCenter>
      <h1>Itens voltados da API</h1>
      <ListaCarros></ListaCarros>
    </DivCenter>
    </>
  );
}

export default App
