import './index.scss';
import Cabeçalho from '../../../components/cabeçalho';
import BarraPesquisa from '../../../components/barraPesquisa';
import Carrossel from '../../../components/carrossel';

export default function Index() {

    return(
       <main>
            <Cabeçalho />
            <BarraPesquisa />
            


            <section className='ser1'>    
             <h1> destaques</h1>
                   <Carrossel />
                 
            </section>


            <section>


        <h1>Recomendados</h1>


        <div>
                  <img src='/assets/images/mkx.svg' alt=''/>
                
                        <h1>Mortal Kombat X</h1>
                        <p>Luta, Ação, Sangrento, Multiplayer</p>
                    
                
                            <p>89,90</p>
                    
                    
        </div>


                  
        <div>
               <img src='/assets/images/minecraft image.png' alt=''/>
      
                <h1>minecraft</h1>
                <p>Sobrevivência, SandBox, Multiplayer</p>
            
        
                    <p>75,00</p>
            
                      
                    
                    
        </div>
       
        <div>
                  <img src='/assets/images/redead.png' alt=''/>
       
                  <h1>Red Dead Redemption 2</h1>
  
                    <p>Mundo Aberto, Aventura, Velho Oeste, Multiplayer</p>
                    
                
                    <p>230,00</p>
                
            
        </div>

                
            </section>


             


            <section>
              
               <h1>Mais populares</h1>
              
            </section>

       </main>
    )
}