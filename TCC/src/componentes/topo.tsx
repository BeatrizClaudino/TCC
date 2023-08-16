import logo from '../assets/boschSimbolo.png'
import Faixa from '../assets/faixaBosch.png'

const Header: React.FC = () => {
    return (
        <>
            <img className="w-full h-2" src={Faixa} alt="" />
            <header className="w-full h-[60px] border-[#F1F1F1] border-b-2 flex items-center">
                <img className="w-[125px]" src={logo} alt="" />
            </header>
        </>
    );
}

export default Header;