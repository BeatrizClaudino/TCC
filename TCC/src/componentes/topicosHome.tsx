import React from "react";

interface ImagemTextoProps {
    imagemSrc: string;
    altText: string;
    texto: string
}

const TopicosHome: React.FC<ImagemTextoProps> = ({ texto, altText, imagemSrc }) => {
    return (
        <div className="w-full flex space-x-2 items-center justify-center">
            <img className="w-[40px]" src={imagemSrc} alt={altText} />
            <label>{texto}</label>
        </div>
    );
}

export default TopicosHome;