const ButtonToggle = () => {
    return(
        <div className="w-full flex pt-7 justify-between">
            <label className="relative inline-flex items-center mb-4 cursor-pointer ">
                <input type="checkbox" value="" className="sr-only peer"/>
                <div className="w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                <span className="text-[14px] ml-2">Me lembre</span>
            </label>
            <div>
                <label className="text-[#503D8F] text-[14px]">esqueceu a sua senha?</label>
            </div>
        </div>
    )
}
export default ButtonToggle