import './index.scss'
import { Link } from 'react-router-dom';

export default function Index() {

    return(
       <main className='Home'>

        <section className='sec'>
        <img className='img' src='/assets/images/logo.png' alt='' />
        
        <Link className='text' to={'/User/loja'}>Loja</Link>
        <Link className='text' to={'/User/suporte'}>suporte</Link>
        <Link className='text' to={'/User/sobre'}>sobre</Link>

        <Link to={'/User/loginUser'}>
            <button>
                <p className='p'>Iniciar sessão</p>
            </button>
            </Link>

    
        </section>
        <hr/>
        
       </main>
    )
}