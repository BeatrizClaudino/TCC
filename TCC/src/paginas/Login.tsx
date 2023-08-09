import { Link } from "react-router-dom";
import logo from "../assets/boschSimbolo.png";
import { User } from "../interface/interfaceUsuario";
import imgFooter from "../assets/Vectors.png"
import Button from "../componentes/button";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Input from "../componentes/Input";
import Rodape from "../componentes/rodape";
import ButtonToggle from "../componentes/buttonToggle";

const Login: React.FC = () => {
    const navigate = useNavigate()
    const [login, setLogin] = useState({
        email: '',
        senha: '',
    })

    //Função que verifica se a senha é fácil com base nas regras de negócio
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //ESSE NAME SE REFERE AO NAME QUE TÁ DENTRO DO INPUT E NÃO A PROPRIDADE DEFINIDA DO OBJETO
        const { name, value } = event.target;
        setLogin({ ...login, [name]: value })
        console.log(login)
    }

    //Função que verifica se os campos estão vazios
    function VerificarCampos() {
        //Verificar se todos os campos estão preenchidos
        if (login.email == "" && login.senha == "") {
            alert("Preencha todos os campos obrigatórios")
        }
        else if (login.email == "" && !(login.senha == "")) {
            alert("Preencha o campo email")
            
        }
        else if (login.senha == "" && !(login.email == "")) {
            alert("Preencha o campo senha")
        }
    }
    return (
        <div className="w-full h-[100vh]">
            <header className=" w-full h-[10vh] bg-white">
                <img className="w-[146px] h-[7vh]" src={logo} alt="" />
            </header>
            <div className="md:w-full md:h-[80%] flex items-center justify-center ">
                <div className="w-full pt-16 md:w-[60%] lg:w-[40%] xl:w-[35%] md:shadow-lg shadow-indigo-500/40 rounded-">
                    <div className="w-full flex items-center justify-center pt-4">
                        {/* O texto precisa ser transparente para o gradiente pegar */}
                        <label className="text-transparent text-[40px] bg-clip-text bg-gradient-to-r from-[#004290] from-10% via-[#4D3E8F] via-30% to-pink-600">Corporate wiki</label>
                    </div>
                    <div className="w-full flex items-center flex-col pt-14">
                        <div className="w-[80%]">
                            <label className="font-bold">Welcome back!</label>
                            <form className="flex flex-col">
                                <Input maxDigitos={255} labelInput="email" type="email" placeholder="Digite o seu e-mail" nome="email" mudancainput={handleChange} ></Input>
                                <Input maxDigitos={9} labelInput="senha" type="password" placeholder="Digite a sua senha" nome="senha" mudancainput={handleChange} />
                                <ButtonToggle/>
                            </form>
                        </div>
                        <Button onclick={() => { VerificarCampos() }}>Sing in</Button>
                        <div className="w-[80%] border-b-[1px] border-[#E5E5E5] pt-12"></div>
                        <div className="pt-6 pb-8 flex flex-row">
                            <label>É novo por aqui? </label>
                            <Link to={'/'}>
                                <label className="text-[#503D8F]"> crie sua conta </label>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Rodape/>
        </div>
    )


}
export default Login;