import { useState } from 'react';

type Parametro = {
  renderizacao: [{
    URL:string,
    Login:string,
    Password:string,
    Servico: string;
  }],
  setRenderizacao: any;
};

export default function Cadastro({ renderizacao, setRenderizacao }:Parametro | any) {
  const [segredo, setSegredo] = useState('password');
  const filtro = (a: any) => {
    setRenderizacao(renderizacao.filter((c:any) => c.id !== a));
  };
  return (
    <div>
      <label>
        Esconder senhas
        <input
          type="checkbox"
          onChange={ (a) => {
            if (a.target.checked) setSegredo('text');
            else {
              setSegredo('password');
            }
          } }
        />
      </label>
      <ol>
        {renderizacao?.map((a:any) => (
          <li key={ a.id }>
            <a href={ a.URL } target="_Blank" rel="noreferrer">{a.Servico}</a>
            <p>{a.Login}</p>
            <p>{segredo === 'password' ? a.Password : '******' }</p>
            <button data-testid="remove-btn" onClick={ () => filtro(a.id) }>x</button>
          </li>
        ))}

      </ol>
    </div>
  );
}
