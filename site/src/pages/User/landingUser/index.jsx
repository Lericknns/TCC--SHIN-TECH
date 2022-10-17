import './index.scss'
import { Link } from 'react-router-dom';

export default function Index() {

    return(
       <main className='Home'>

        <section className='sec'>
        <img className='img' src='./assets/images/logo.png' alt='' />
        
        <Link className='text' to={'/User/loja'}>Loja</Link>
        <Link className='text' to={'/User/suporte'}>sobre</Link>
        <Link className='text' to={'/User/sobre'}>suporte</Link>

        <Link to={'/User/loginUser'}>
            <button>
                <p className='text2'>Login</p>
            </button>
            </Link>

    
        </section>
        <hr/>
        <section></section>
       </main>
    )
}