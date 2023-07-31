import logo from "../assets/boschSimbolo.png";
import Input from "../componentes/Input";
import Button from "../componentes/button";
import React, { useState } from "react";

const Teste = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    function VerificarCampos(){
        if (nome === "" ){
            alert("Digita seu nome ai seu bosta")
        }if (senha === ""){
           alert("A senha meoo")
        }if (email === ""){
            alert("Agora o e-mail, sério isso?")
        }
        else{
            alert("Finalemente")
        }
        
    }

    return(
        <div className="w-full h-full">
            <header className=" w-full h-[10vh]">
                <img className="w-[130px] h-[7vh]" src={logo} alt="" />
            </header>
            <div className="w-full flex items-center justify-center pt-16">
                {/* O texto precisa ser transparente para o gradiente pegar */}
                <label className=" text-transparent text-[40px] bg-clip-text bg-gradient-to-r from-[#004290] from-10% via-[#4D3E8F] via-30% to-pink-600">Corporate wiki</label>
            </div>
            <div className="w-full flex items-center flex-col pt-20">
                <div className="w-[80%]"> 
                    <label className="font-bold">Create your account</label>
                    <form className="flex flex-col">
                        <Input onChange={e => setNome(e.target.value)} nameInput="Full name" placeholder="Enter your full name" type="text"/>
                        <Input onChange={e => setEmail(e.target.value)} nameInput="E-mail" placeholder="Enter your e-mail" type="text"/>
                        <Input onChange={e => setSenha(e.target.value)} nameInput="Password" placeholder="Enter your password" type="text"/>
                    </form>
                </div>
            </div>
                <Button onclick={() => {VerificarCampos()}}>Sing in</Button>
            </div>
    )


}
export default Teste;


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