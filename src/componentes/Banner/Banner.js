import './Banner.css'

function Banner () {
    //JSX parece html (como o react entende e transforma em elementos no DOM)
    return (
        <header className="banner">
            <img src="/imagens/banner.png" alt="Banner principal da página do Organo"/>
        </header>
    )
}

export default Banner 