import { useEffect, useState } from 'react';

type Param = {
  setVerdadeiro:(a: boolean) => void;
};

export default function Form({ setVerdadeiro }:Param) {
  const [button, setButton] = useState(true);
  const [servico, setServico] = useState('');
  const [password, setPassword] = useState('');
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
  });
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
      </label>
      <label>
        URL:
        <input type="text" />
      </label>
      <button name="Cadastrar" disabled={ button } type="submit">Cadastrar</button>
      <button
        name="Cancelar"
        onClick={ () => setVerdadeiro(false) }
      >
        Cancelar

      </button>
    </form>
  );
}
