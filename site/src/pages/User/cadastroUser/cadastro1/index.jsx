import './index.scss'
import { Link } from 'react-router-dom';


export default function Index() {
  return(

  <main>
    <div>
        <img></img>
        <p>Voltar para login </p>
    </div>
    <div>
        <div>
          <img src= 'images/logo.png' atl= ''></img>
          <img  ></img>
        </div>
        <div>
            <div>
                <input type= 'text' placeholder= 'Nome:'></input>
                <input type= 'text' placeholder= 'Sobrenome'></input>
                <input type= 'text' placeholder= 'Email:'></input>
                <input type= 'text' placeholder= 'CPF:' ></input>
                <input type= 'text' placeholder= 'Data de nascimento:'></input>
                <input type= 'text' placeholder= 'Senha'></input>
                <input type= 'text' placeholder= 'Confirmar senha'></input>
                <input type= 'radio'> Tenho 13 anos de idade ou mais e aceito os termos do Acordo de Assinatura </input>
            </div>
            <div>
             <button> Confirmar </button>       
            </div>
        </div>
    </div>
  </main>
  )}