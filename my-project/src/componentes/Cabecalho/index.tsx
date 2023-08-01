import logo from "./assets/Logo.png"
import perfil from "./assets/account.png"

const CabecalhoEstilizado = styled.header`
    displa

`

function Cabecalho(){
    return(
        <header>
            <img src={logo} alt="logo da empresa Voll" />
            <div>
                <img src={perfil} alt="imagem de perfil do usuário" />
                <a href="#">Sair</a>
            </div>
        </header>
    )
}
export default Cabecalho;