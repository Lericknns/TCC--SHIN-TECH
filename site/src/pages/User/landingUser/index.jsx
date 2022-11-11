import './index.scss';
import Cabeçalho from '../../../components/cabeçalho';
import BarraPesquisa from '../../../components/barraPesquisa';
import Carrossel from '../../../components/carrossel';

export default function Index() {

    return(
       <main>
            <Cabeçalho />
           <div className='bar'> <BarraPesquisa /></div>
            


            <section className='ser1'>    
            
            <div className='daha'>
            
            <h1> destaques</h1>
             
          
            </div>
            <div> <Carrossel /></div>
            
            
           
            </section>
            
            
            <section>
            
            <div className='recomen'> 
                
                
                <h1>recomendados</h1>


            </div>

            </section>
              
                  


          


             


       </main>
    )
}