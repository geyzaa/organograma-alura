import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'> 
        <div>
            <img className='fundo'src='/imagens/fundo.png' alt='fundo' />
        </div>
        <div className='icones'>
            <img src='/imagens/fb.png' alt='facebook' />
            <img src='/imagens/twitter.png' alt='twitter' />
            <img src='/imagens/instagram.png' alt='instagram' />
            <img src='/imagens/logo.png' alt='logo organo' />
            <p> Desenvolvido por Alura.</p>
        </div>
            
        </footer>
    )
}

export default Rodape