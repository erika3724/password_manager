import './App.css';
import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [verdadeiro, setVerdadeiro] = useState(false);
  return (
    <main>
      <h1>Gerenciador de senhas</h1>
      {
        verdadeiro
          ? <Form setVerdadeiro={ () => setVerdadeiro(false) } />
          : <button onClick={ () => setVerdadeiro(true) }>Cadastrar nova senha</button>
      }

    </main>
  );
}

export default App;
