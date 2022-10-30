import './index.scss'

export default function Index() {

    return( 
        <main>
            <div className='maedetudo'> 
                <div className='text1'>    
                    <p className='text1'>Navegar</p>
                    <p className='text1'> Descobrir</p>
                    <p className='text1'> Ofertas</p>
                </div> 
                <button className='inputtudo'>  
                    <img className='lupinha' src='./assets/images/lupinha.png' alt=''/>   
                    <input className='text3' placeholder='Procure seus jogos e mais'></input>
                </button>
                <button className='carregar'> <img className='carrinho' src='./assets/images/carrinhoCarregar.png'/></button>
            </div>
                   
            
        </main>
    )
}