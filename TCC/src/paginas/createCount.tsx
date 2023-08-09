import { Link } from "react-router-dom";
import logo from "../assets/boschSimbolo.png";
import { User } from "../interface/interfaceUsuario";
import Button from "../componentes/button";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Input from "../componentes/Input";
import axios from "axios";
import Rodape from "../componentes/rodape";
import ButtonToggle from "../componentes/buttonToggle";

export function CriarConta() {
    const navigate = useNavigate()
    const [user, setUser] = useState<User>({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    })

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
        else{
            cadastrarBanco()
        }
        return password
    }

    function VerificarCampos() {
        //Verificar se todos os campos estão preenchidos
        if (user.nome == "" && user.senha == "" && user.email == "" && user.confirmarSenha == "") {
            alert("Preencha todos os campos obrigatórios")
            //Verificar o campo nome tá preenchido e se tá completo
        } if (user.nome != "") {
            if (!user.nome.includes(" ")) {
                alert("Digite o nome completo")
            }
        } else {
            alert("Campo nome vazio")
        }
        //Verificar o campo e-mail tá preenchido e se tá com o final bosch
        if (user.email) {
            if (!user.email.includes("@br.bosch.com")) {
                alert("E-mail fora dos padrões Bosch")
            }
            //Verificar o campo senha tá preenchido e se tá compativel
        } if (user.senha === "" || user.confirmarSenha === "") {
            alert("Preencha os campos de senha")
        }
        else if (user.senha != user.confirmarSenha) {
            alert("senhas incompativeis")
        }
        else if (user.senha == user.confirmarSenha) {
            console.log("Chegou aqui")
            senhaFacil(user.senha)
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //ESSE NAME SE REFERE AO NAME QUE TÁ DENTRO DO INPUT E NÃO A PROPRIDADE DEFINIDA DO OBJETO
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
        console.log(user)
    }

    async function cadastrarBanco(){
        await axios.post("http://127.0.0.1:8000/cadastro/",{
            nome: user.nome,
            senha: user.senha,
            email: user.email
        }).then(res =>{
            if(res.status == 201){
                alert("Deu certo")
            }
            else{
                alert("ops, parece qeu estamos fodidos")
            }
        })
    }
    return (
        <div className="w-full h-full">
            <header className=" w-full h-[10vh]">
                <img className="w-[125px] h-[7vh]" src={logo} alt="" />
            </header>
            <div className="w-full flex items-center justify-center pt-4">
                {/* O texto precisa ser transparente para o gradiente pegar */}
                <label className=" text-transparent text-[40px] bg-clip-text bg-gradient-to-r from-[#004290] from-10% via-[#4D3E8F] via-30% to-[#CE44D1]">Corporate wiki</label>
            </div>
            <div className="w-full flex items-center flex-col pt-14">
                <div className="w-[80%]">
                    <label className="font-bold">Crie sua conta</label>
                    <form className="flex flex-col">
                        <Input maxDigitos={255} labelInput="Nome" type="text" placeholder="Digite o seu nome completo" nome="nome" mudancainput={handleChange} />
                        <Input maxDigitos={255} mudancainput={handleChange} type="email" placeholder="Digite o seu e-mail" labelInput="email" nome="email"></Input>
                        <Input maxDigitos={9} mudancainput={handleChange} type="password" placeholder="Digite sua senha" labelInput="senha" nome="senha"></Input>
                        <Input maxDigitos={9} mudancainput={handleChange} type="password" placeholder="Confirme a sua senha" labelInput="Confirmar senha" nome="confirmarSenha"></Input>
                    </form>
                </div>
                <div className="w-[80%] border-b-[1px] border-[#E5E5E5] pt-6">

                </div>
            <Button onclick={() => { VerificarCampos()}}>Sing in</Button>
                <div className="pt-4 pb-8 flex flex-row">
                    <label>Já possuí conta? </label>
                    <Link to={'/login'}>
                        <label className="text-[#503D8F]">login</label>
                    </Link>
                </div>
            </div>
            <Rodape/>
        </div>
    )


}
export default CriarConta;


