export  function Input(props){
    const { type , label, placeholder } = props; 
    return(
        <>
        <label className="form-label">{label}</label>
        <input type={type} className="my-2 form-control" placeholder={placeholder}/>
        </>
    )
}