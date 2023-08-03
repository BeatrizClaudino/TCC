import { Link } from "react-router-dom";
import logo from "../assets/boschSimbolo.png";

import Button from "../componentes/button";
import  { useState } from "react";
import { useNavigate } from 'react-router-dom';

interface cadastro{
    nome: string 
    email: string
    senha: string
    confirmarSenha: string
}

const CriarConta : React.FC = () => {
    const navigate = useNavigate()
    // const [cadastrar, setCadastrar] = useState({ nome: '', email: '',})
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [Confirmarsenha, setConfirmarsenha] = useState("")
    
    //Função que verifica se a senha é fácil com base nas regras de negócio
    function senhaFacil(password:string): string{
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

    //Função que verifica se os campos estão vazios
    function VerificarCampos(){
        //Verificar se todos os campos estão preenchidos
        if (nome == "" && senha == "" && email == "" && Confirmarsenha == ""){
            alert("Preencha todos os campos obrigatórios")
        //Verificar o campo nome tá preenchido e se tá completo
        }if (nome != ""){
            if (!nome.includes(" ")){
                alert("Digite o nome completo")
            }
        }else{
            alert("Campo nome vazio")
        }
         //Verificar o campo e-mail tá preenchido e se tá com o final bosch
        if (email){
            if(!email.includes("@br.bosch.com")){
                alert("E-mail fora dos padrões Bosch")
            }
        //Verificar o campo senha tá preenchido e se tá compativel
        }if (senha === "" || Confirmarsenha === ""){
            alert("Preencha os campos de senha")
        }
        else if(senha != Confirmarsenha){
            alert("senhas incompativeis")
        }
        else if (senha == Confirmarsenha) {
            console.log("Chegou aqui")
            senhaFacil(senha)
        }
        //se der tudo certo bate na API enviando os valores verificados e autenticados
    }
    return(
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
                        {/* <Input name="acao" acaoBotao={e => setNome(e.target.value)} labelInput="Full name" placeholder="Enter your full name" type="text"/>
                        <Input name="" acaoBotao={e => setEmail(e.target.value)} labelInput="E-mail" placeholder="Enter your e-mail" type="text"/> */}
                      
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
                <Button onclick={() => {VerificarCampos()}}>Sing in</Button>
            </div>
    )


}
export default CriarConta;


// type SumProps={
//     sum:number
// }

// //tipando as variaveis e o retorno da função
// export const sum = (a: number, b: number): SumProps =>{
//     //retornando um objeto 
//     return{
//         sum: a+b
//     }
// }