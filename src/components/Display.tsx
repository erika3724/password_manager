import { useEffect, useState } from 'react';

type Parametros = {
  password:string;
};

export default function Display({ password }:Parametros) {
  const invalido = 'invalid-password-check';
  const valido = 'valid-password-check';
  const [param1, setParam1] = useState(invalido);
  const [param2, setParam2] = useState(valido);
  const [param3, setParam3] = useState(invalido);
  const [param4, setParam4] = useState(invalido);

  useEffect(() => {
    const p = /^(?=.*?[A-z])(?=.*?[0-9]).{0,}$/;
    const a = /^.{0,16}$/;
    const b = /^.{1,7}$/;
    const c = /^(?=.*?[#?!@$%^&*-]).{0,}$/;

    if (b.test(password)) setParam1(invalido);
    else {
      setParam1(valido);
    }
    if (a.test(password) === false) setParam2(invalido);
    else {
      setParam2(valido);
    }
    if (p.test(password)) setParam3(valido);
    else {
      setParam3(invalido);
    }
    if (c.test(password)) setParam4(valido);
    else {
      setParam4(invalido);
    }
  }, [password]);
  return (
    <>
      <p className={ param1 }>Possuir 8 ou mais caracteres</p>
      <p className={ param2 }>Possuir até 16 caracteres</p>
      <p className={ param3 }>Possuir letras e números</p>
      <p className={ param4 }>Possuir algum caractere especial</p>
    </>
  );
}
