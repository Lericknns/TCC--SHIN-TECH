import './index.scss';
import Cabeçalho from '../../../components/cabeçalho';
import BarraPesquisa from '../../../components/barraPesquisa';


export default function Index() {

    return(
       <main className='Home'>
            <Cabeçalho />
            <BarraPesquisa />
            <section>    
              
                    <h1> Destaques </h1>
                    <img className='img' src='/assets/images/spider man game.png' alt='' />
           
                
                    <p> Á PARTIR DE 249,99</p>
                    <button>COMPRE AGORA</button>
                 
            </section>


            <section>
                <p>Recomendados</p>
                <div>
                    <div>
                       <img/>
                       
                    </div>
                    <div>
                        <div>
                        <h1>Mortal Kombat X</h1>
                        <p>Luta, Ação, Sangrento, Multiplayer</p>
                        </div>
                        <div>
                            <p>89,90</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                       <img/>
                       
                    </div>
                    <div>
                        <div>
                        <h1>Mortal Kombat X</h1>
                        <p>Luta, Ação, Sangrento, Multiplayer</p>
                        </div>
                        <div>
                            <p>89,90</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                       <img/>
                       
                    </div>
                    <div>
                        <div>
                        <h1>Mortal Kombat X</h1>
                        <p>Luta, Ação, Sangrento, Multiplayer</p>
                        </div>
                        <div>
                            <p>89,90</p>
                        </div>
                    </div>
                </div>
                
            </section>

            <section>
                <p>Mais populares</p>
                <div>
                   <div>
                    <img/>
                   <p></p>
                   <p></p>
                   <p></p>
                   </div>
                   <div>       
                   <img/>
                   <p></p>
                   <p></p>
                   <p></p></div>
                   <div>
                   <img/>
                   <p></p>
                   <p></p>
                   <p></p>
                   </div>
                </div>
                <div>
                <div>
                <img/>
                   <p></p>
                   <p></p>
                   <p></p>
                </div>
                <div>        <img/>
                   <p></p>
                   <p></p>
                   <p></p>
                   </div>
                <div>        <img/>
                   <p></p>
                   <p></p>
                   <p></p>
                   </div>
                </div>
            </section>

       </main>
    )
}