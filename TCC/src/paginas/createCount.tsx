import { Link } from "react-router-dom";
import logo from "../assets/boschSimbolo.png";
import Input from "../componentes/Input";
import Button from "../componentes/button";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

interface novoUsuario {
    nome: string
    email: string
    senha: string
    confirmarSenha: string
}

function senhaFacil(password: string): string {
    const tamanhoMinino = 8;
    const letraMaiuscula = /[A-Z]/.test(password);
    const letraMinuscula = /[a-z]/.test(password);
    const numero = /\d/.test(password);
    const caracteresEspeciais = /[!@#$%&*-^]/

    if (password.length < tamanhoMinino) {
        alert("A senha deve ter pelo menos 8 caracteres.");
    }
    if (!letraMaiuscula || !letraMinuscula || !numero || !caracteresEspeciais) {
        console.log("A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais.");
    }

    return password
}

export function CriarConta(){
    const navigate = useNavigate()
    
    const [user, setUser] = useState<novoUsuario>({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
        // user[name] = value
    }

    

    return (
        <div className="w-full h-full">
            <header className=" w-full h-[10vh]">
                <img className="w-[130px] h-[7vh]" src={logo} alt="" />
            </header>
            <div className="w-full flex items-center justify-center pt-4">
                {/* O texto precisa ser transparente para o gradiente pegar */}
                <label className=" text-transparent text-[40px] bg-clip-text bg-gradient-to-r from-[#004290] from-10% via-[#4D3E8F] via-30% to-pink-600">Corporate wiki</label>
            </div>
            <div className="w-full flex items-center flex-col pt-14">
                <div className="w-[80%]">
                    <label className="font-bold">Create your account</label>
                    <form className="flex flex-col">
                        <Input onChange={handleChange} nameInput="Full name" placeholder="Enter your full name" type="text" />
                        <Input onChange={handleChange} nameInput="E-mail" placeholder="Enter your e-mail" type="text" />
                        <Input onChange={handleChange} nameInput="Password" placeholder="Enter your password" type="text" />
                        <Input onChange={handleChange} nameInput="Confirm password" placeholder="Confirm your password" type="text" />
                    </form>
                </div>
                <div className="w-[80%] border-b-[1px] border-[#E5E5E5] pt-12">

                </div>
                <div className="pt-6 pb-8 flex flex-row">
                    <label>Have an account? </label>
                    <Link to={'/login'}>
                        <label className="text-[#503D8F]"> login</label>
                    </Link>
                </div>
            </div>
            <Button onclick={() => { alert("aaa") }}>Sing in</Button>
        </div>
    )


}
export default CriarConta;


