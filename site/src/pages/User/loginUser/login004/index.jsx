import './index.scss'
import { Link } from 'react-router-dom';

export default function Index(){
    return(

    <main> 
        <div>
            <img></img>
            <p>Voltar para login</p>
        </div>
        <div>
            <div> 
                <img></img>
                <img></img>
            </div>
            <div>
                <div>
                    <p>Voltar para login
                        Esqueci o nome de usuário e/ou senha da minha conta
                      
                    </p>
                    <p>
                    Informe o seu endereço de e-mail 
                    </p>
                    <input  type= 'text' placeholder= 'Informe seu endereço email:'></input>
                </div>
                <div>
                    <button>Concluído</button>
                </div>

            </div>
        </div>
    </main>
    )
}