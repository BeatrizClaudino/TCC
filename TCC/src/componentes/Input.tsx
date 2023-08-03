//Para passar a props para o componente é necessário criar uma interface e tipar.
type Props = {
    labelInput: string 
    type: string
    placeholder: string
    mudancainput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string
}

const Input: React.FC<Props> = ({labelInput, type, placeholder, mudancainput, name}) => {
    return ( 
        <div className="pt-5 flex flex-col">
            <label className="text-[16px]">{labelInput}</label>
            <input className="border bg-[#f2f2f2f2] border-[#e0e0e0] h-10 rounded-md p-3" onChange={mudancainput} name={name} type={type} placeholder={placeholder} />
        </div>
    );
}
 
export default Input;