type Parametro = {
  renderizacao: [{
    URL:string,
    Login:string,
    Password:string,
    Servico: string;
  }]
};

export default function Cadastro({ renderizacao }:Parametro | any) {
  return (
    <div>
      {renderizacao?.map((a:any, index:number) => (
        <div key={ index }>
          <a href={ a.URL } target="_Blank" rel="noreferrer">{a.Servico}</a>
          <p>{a.Login}</p>
          <p>{a.Password}</p>
        </div>
      ))}
    </div>
  );
}
