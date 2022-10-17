import './index.scss'
import { Link } from 'react-router-dom';


export default function Index() {
  return(

  <main>
    <div>
        <img src=''></img>
        <p>Voltar para login </p>
    </div>
    <div>
        <div>
          <img src= 'images/logo.png' atl= ''></img>
        </div>
        <div>
            <div>
                <button>
                    <img></img>
                </button>
                <p> ADICIONE UMA FOTO </p>
                <input type= 'text' placeholder= 'Nickname'></input>
                <input type= 'text' placeholder= 'Game favorito'></input>
            </div>   
            <div>
             <button> Concluído </button>       
            </div>
        </div>
    </div>
  </main>
 )}