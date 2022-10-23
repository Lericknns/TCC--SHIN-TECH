import './index.scss'
import { Link } from 'react-router-dom';
import Cabeçalho from '../../../components/cabeçalho'


export default function Index() {

    return(
       <main className='Home'>
       <Cabeçalho />
       
            <p>Navegar</p>
            <p>Ofertas</p>
            <p>Descobrir</p>
           
             <img src='./assets/images/lupinha.png' alt=''/>
             <input  type= 'text' placeholder='procure seus jogos e mais'> </input>
            
         
      
  
     
     
     
       </main>
    )
}