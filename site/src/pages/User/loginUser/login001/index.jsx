import './index.scss'
import { Link } from 'react-router-dom';

export default function Index(){
  return(
       <main className='sorvete'>
        <div>
           <div>
                <img  src=''></img>
                <p> Voltar para a loja </p>
            </div>
            <div>
                <p>Não possui uma conta?</p>
                <p>Cadastre-se.</p>
            </div>
        </div>
        <div>
            <img> </img>
            <input type='text' placeholder= 'Nickname:'></input >
            <input type='text'  placeholder= 'senha:'></input>
            <p>esqueceu sua senha?</p>
            <button> LOGIN</button>
        </div>
       </main>
    )
}