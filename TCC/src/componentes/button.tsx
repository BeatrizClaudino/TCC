import React from "react";
import { PropsButton } from "../interface/interfaces"

const Button: React.FC<PropsButton> = ({ onclick, children }) => {
    return ( 
        <div className="w-full flex items-center justify-center md:pb-10">
            <button onClick={onclick} className="w-full bg-[#503D8F] h-[6vh] rounded-md text-white font-medium">
               {children}
            </button>
        </div>
    );
}
 
export default Button;