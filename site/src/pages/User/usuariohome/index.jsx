import './index.scss'
import { Link } from 'react-router-dom';

export default function Index() {

    return(
       <main className='Home'>

        <section className='sec'>
        <img className='img' src='./assets/images/logo.png' alt='' />
        <h1 className='text'>loja</h1>
        <h1 className='text'>sobre</h1>  
        <h1 className='text'>suporte</h1>
        </section>
        <hr/>
        <section></section>
       </main>
    )
}