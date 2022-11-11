import './index.scss'
import { Link } from 'react-router-dom';


export default function Index() {
  return(

  <main>
    
    <Link className='texted' to={'/User/loginUser'}>Voltar para o login</Link>
        
        <section className='afaa'>
        
        <img className='ima' src='/assets/images/logo.png'/>

        </section>
     
  </main>
  )}