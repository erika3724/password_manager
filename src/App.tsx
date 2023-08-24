import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Cadastro from './components/Cadastro';

function App() {
  const [verdadeiro, setVerdadeiro] = useState(false);
  const [renderizacao, setRenderizacao] = useState([]);
  return (
    <main>
      <h1>Gerenciador de senhas</h1>
      {
        verdadeiro
          ? <Form
              setVerdadeiro={ () => setVerdadeiro(false) }
              setRenderizacao={ (a:any) => setRenderizacao(a) }
              renderizacao={ renderizacao }
          />
          : <button onClick={ () => setVerdadeiro(true) }>Cadastrar nova senha</button>
      }
      {
        renderizacao.length > 0
          ? <Cadastro
              renderizacao={ renderizacao }
              setRenderizacao={ (a:any) => setRenderizacao(a) }
          />
          : <p>Nenhuma senha cadastrada</p>
      }

    </main>
  );
}

export default App;
