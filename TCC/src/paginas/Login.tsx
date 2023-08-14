import { Link } from "react-router-dom";
import logo from "../assets/boschSimbolo.png";
import { User } from "../interface/interfaceUsuario";
import imgFooter from "../assets/Vectors.png"
import Button from "../componentes/button";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/faixaBosch.png"
import Rodape from "../componentes/rodape";
import ButtonToggle from "../componentes/buttonToggle";
import { Box, TextField, ToggleButton } from "@mui/material";

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
        <div className="w-full h-[90vh]">
            <img className="w-full h-2" src={Logo} alt="" />
            <header className="w-full h-[8vh] border-[#F1F1F1] border-b-2 flex items-center">
                <img className="w-[125px]" src={logo} alt="" />
            </header>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-full flex items-center justify-center">
                    {/* O texto precisa ser transparente para o gradiente pegar */}
                    <label className=" text-transparent text-[40px] bg-clip-text bg-gradient-to-r from-[#004290] from-10% via-[#4D3E8F] via-30% to-[#CE44D1]">Corporate wiki</label>
                </div>
                <div className="w-full flex items-center flex-col pt-16 justify-center">
                    <div className="w-[80%] flex flex-col">
                        <label className="font-bold pb-6">Crie sua conta</label>
                        <Box
                            // onSubmit={}
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { mb: 4, width: "100%" },
                            }}
                            noValidate
                            autoComplete="off">
                            <TextField required id="outlined-required" label="Nome" onChange={handleChange} name="nome" />
                            <TextField required id="outlined-required" label="E-mail" onChange={handleChange} name="email" />
                            <Button onclick={() => { VerificarCampos() }}>Sing in</Button>
                        </Box>
                    <ButtonToggle />
                    </div>
                    <div className="w-[80%] border-b-[1px] border-[#E5E5E5] pt-6">

                    </div>
                    <div className="pt-4 pb-8 flex flex-row">
                        <label>Já possuí conta? </label>
                        <Link to={'/cadastro'}>
                            <label className="text-[#503D8F]">login</label>
                        </Link>
                    </div>
                </div>
            </div>
            <Rodape />
        </div>
    )


}
export default Login;