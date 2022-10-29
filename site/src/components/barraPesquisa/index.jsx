import './index.scss'

export default function Index() {

    return( 
        <main>
            <div> 
                <div className='text1'>    
                    <p>Navegar</p>
                    <p>Ofertas</p>
                    <p>Descobrir</p>
                </div>   
                <img className='lupinha' src='./assets/images/lupinha.png' alt=''/>   
                <input placeholder='Procure seus jogos e mais' type='text'></input>
                <button> <img  className='carinho' src='./assets/images/carinho.png' alt=''/> </button>
            </div>        
            
        </main>
    )
}