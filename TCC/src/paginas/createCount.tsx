import { Link } from "react-router-dom";
import logo from "../assets/boschSimbolo.png";
import { cadastrar } from "../servicos/api";
import Button from "../componentes/button";
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { User } from "../interface/interfaceUsuario"
import Box from '@mui/material/Box';
import Rodape from "../componentes/rodape";
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import Logo from "../assets/faixaBosch.png"

export function CriarConta() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

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
    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("aaaaa")
        try {
            const response = await cadastrar(user);
            console.log(response)
            // Lógica após o cadastro bem-sucedido
        } catch (error) {
            // Lógica para lidar com erros
        }
    };
    return (
        <div className="w-full h-full">
            <img className="w-full h-1" src={Logo} alt="" />
            <header className="w-full h-[8vh] border-[#F1F1F1] border-b-2 flex items-center">
                <img className="w-[125px]" src={logo} alt="" />
            </header>
            <div className="w-full flex items-center justify-center pt-12">
                {/* O texto precisa ser transparente para o gradiente pegar */}
                <label className=" text-transparent text-[40px] bg-clip-text bg-gradient-to-r from-[#004290] from-10% via-[#4D3E8F] via-30% to-[#CE44D1]">Corporate wiki</label>
            </div>
            <div className="w-full flex items-center flex-col pt-20 justify-center">
                <div className="w-[80%] flex items-center justify-center flex-col">
                    <label className="font-bold">Crie sua conta</label>
                    <Box
                        onSubmit={handleFormSubmit}
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: "100%" },
                        }}
                        noValidate
                        autoComplete="off"

                    >
                        <TextField required id="outlined-required" label="Nome" onChange={handleChange} name="nome" />
                        <TextField required id="outlined-required" label="E-mail" onChange={handleChange} name="email" />
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Senha *</InputLabel>
                            <OutlinedInput id="outlined-adornment-password" type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password" />
                        </FormControl>
                        <Button onclick={() => { VerificarCampos() }}>Sing in</Button>
                    </Box>
                </div>
                <div className="w-[80%] border-b-[1px] border-[#E5E5E5] pt-6">

                </div>
                <div className="pt-4 pb-8 flex flex-row">
                    <label>Já possuí conta? </label>
                    <Link to={'/login'}>
                        <label className="text-[#503D8F]">login</label>
                    </Link>
                </div>
            </div>
            <Rodape />
        </div>
    )


}
export default CriarConta;


