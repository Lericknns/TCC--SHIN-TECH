import './index.scss';
import Cabeçalho from '../../../components/cabeçalho';
import BarraPesquisa from '../../../components/barraPesquisa';


export default function Index() {

    return(
       <main className='Home'>
            <Cabeçalho />
            <BarraPesquisa />
            <div>    
                <div>
                    <p> Destaques </p>
                    <img/>
                </div>
                <div>
                    <p> Á PARTIR DE 249,99</p>
                    <button>COMPRE AGORA</button>
                </div> 
            </div>
            <div>
                <p>Recomendados</p>
                <div>
                    <div>
                       <img/>
                       <img/>
                    </div>
                    <div>
                    <div>
                       <h1>Mortal Kombat X</h1>
                       <p></p>
                    </div>
                    <div>
                        <p>89,90</p>
                    </div>
                    </div>
                </div>
                
            </div>


    
   

            
         
      
  
     
     
     
       </main>
    )
}