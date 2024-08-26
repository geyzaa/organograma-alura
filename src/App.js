/*exemplos de como pode ser feito o importe, no primeiro a pasta 
e arquivo se chamam banner, no segundo só o nome da pasta aparece pq o arquivo 
é nomeado como index.js, se tornando o principal e por tanto o importado pelo programa*/
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
/*import CampoTexto from './componentes/CampoTexto';*/

function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario/>
      
    </div>
  );
}

export default App;
