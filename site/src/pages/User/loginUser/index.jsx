import './index.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Index(){
  return(
       <main className='mae'>


<section className='sec1'>
          
 <div className='div1'>
                <Link className='texto2' to={'/'}>Voltar para o inicio</Link>
 </div>



 <div className='div2'>
<h1>
    Não possui uma conta?
</h1>
<Link className='texto' to={'/User/cadastroUser/cadastro1'}>Cadastre-se</Link>

 </div>
        
</section>

<section className='sec2'>
   
   <img className='' src='../assets/images/logo.png' alt='' />
    
</section>

<section className='sec3'>
    {/* futura barra de pesquisa do email */} 
    {/* futura barra de pesquisa da senha */} 
    <Link className='texto2' to={'/esquecisenha'}>esqueci a minha senha?</Link>
    </section>
    
       </main>
    )
}

 