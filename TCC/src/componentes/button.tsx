import React from "react";

interface PropsButton {
    onclick: React.MouseEventHandler<HTMLButtonElement>
    //O React.ReactNode é para fazer com que o botão seja flexível e aceite vários tipos de elementos EX: Jsx, string, number
    //O ponto de interrogação indica que esse children é opcional
    children?: React.ReactNode
};

const Button: React.FC<PropsButton> = ({ onclick, children }) => {
    return ( 
        <div className="w-full flex items-center justify-center md:pb-10">
            <button onClick={onclick} className="w-[80%] bg-[#503D8F] h-[5vh] rounded-md text-white font-medium">
               {children}
            </button>
        </div>
    );
}
 
export default Button;