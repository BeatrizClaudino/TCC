export interface User{
    nome: string 
    email: string
    senha: string
}

export interface PropsButton {
    onclick: React.MouseEventHandler<HTMLButtonElement>
    //O React.ReactNode é para fazer com que o botão seja flexível e aceite vários tipos de elementos EX: Jsx, string, number
    //O ponto de interrogação indica que esse children é opcional
    children?: React.ReactNode
};