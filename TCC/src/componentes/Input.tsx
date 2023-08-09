//Para passar a props para o componente é necessário criar uma interface e tipar.
type Props = {
    labelInput: string 
    type: string
    placeholder: string
    mudancainput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    nome: string
    maxDigitos: number
}

const Input: React.FC<Props> = ({labelInput, type, placeholder, mudancainput, nome, maxDigitos}) => {
    return (
        <div className="pt-5 flex flex-col relative ">
            <label className="text-[16px]">{labelInput}</label>
            <input className="border mt-1 bg-[#f2f2f2f2] border-[#e0e0e0] h-10 rounded-md p-3" onChange={mudancainput} maxLength={maxDigitos} name={nome} type={type} placeholder={placeholder} />
        </div>
    );
}
 
export default Input;