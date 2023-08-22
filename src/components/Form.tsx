type Param = {
  setVerdadeiro:(a: boolean) => void;
};

export default function Form({ setVerdadeiro }:Param) {
  return (
    <form>
      <label>
        Nome do serviço:
        <input type="text" />
      </label>
      <label>
        Login:
        <input type="text" />
      </label>
      <label>
        Senha:
        <input type="password" />
      </label>
      <label>
        URL:
        <input type="text" />
      </label>
      <button name="Cadastrar" type="submit">Cadastrar</button>
      <button
        name="Cancelar"
        onClick={ () => setVerdadeiro(false) }
      >
        Cancelar

      </button>
    </form>
  );
}
