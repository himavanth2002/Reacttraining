type InputProps={
    label:string,
    type:string,
    value:string,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
    placeholder?:string
}
export const Input:React.FC<InputProps>=({label,type,onChange,value,placeholder})=>{
    return(
        <div className="form-group">
            <label>{label}</label>
            <input type={type} value={value} onChange={onChange} placeholder={placeholder}/>
        </div>
    )



}