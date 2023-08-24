import { useEffect, useState } from 'react';
import Display from './Display';

type Param = {
  setVerdadeiro:(a: boolean) => void,
  setRenderizacao: any,
  renderizacao: [{ URL: string, Password:string, Login: string }] | any
};

export default function Form({ setVerdadeiro, setRenderizacao, renderizacao }:Param) {
  const [button, setButton] = useState(true);
  const [servico, setServico] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [login, setLogin] = useState('');
  useEffect(() => {
    const p = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;
    const regex = p.test(password);
    if (servico.length > 0
      && login.length > 0
    && regex) {
      return setButton(false);
    }
    return setButton(true);
  }, [servico, password, login]);

  const funcao = (event: any) => {
    event.preventDefault();
    const a = { URL: url, Password: password, Login: login, Servico: servico };
    setRenderizacao([...renderizacao, a]);
    setVerdadeiro(false);
  };

  return (
    <form>
      <label>
        Nome do serviço:
        <input
          type="text"
          name="servico"
          onChange={ (a) => setServico(a.target.value) }
        />
      </label>
      <label>
        Login:
        <input
          type="text"
          name="login"
          onChange={ (a) => setLogin(a.target.value) }
        />
      </label>
      <label>
        Senha:
        <input
          name="password"
          type="password"
          onChange={ (a) => setPassword(a.target.value) }
        />
        <Display password={ password } />
      </label>
      <label>
        URL:
        <input type="text" onChange={ (a) => setUrl(a.target.value) } />
      </label>
      <button
        name="Cadastrar"
        disabled={ button }
        onClick={ (a) => funcao(a) }
        type="submit"
      >
        Cadastrar

      </button>
      <button
        name="Cancelar"
        onClick={ () => setVerdadeiro(false) }
      >
        Cancelar

      </button>
    </form>
  );
}
