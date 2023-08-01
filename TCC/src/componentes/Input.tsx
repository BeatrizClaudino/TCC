//Para passar a props para o componente é necessário criar uma interface e tipar.
interface Props{
    nameInput: string 
    type: string
    placeholder: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
   
}

const Input: React.FC<Props> = ({nameInput, type, placeholder, onChange}) => {
    // const mudanca = (event: ChangeEvent<HTMLInputElement>)=>{
    //     console.log(event.target.value)
    // }
    return ( 
        <div className="pt-5 flex flex-col">
            <label className="text-[16px]">{nameInput}</label>
            <input className="border bg-[#f2f2f2f2] border-[#e0e0e0] h-10 rounded-md p-3" onChange={onChange} type={type} placeholder={placeholder} />
        </div>
    );
}
 
export default Input;