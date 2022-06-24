export  function Input(props){
    const { type , label, placeholder } = props; 
    return(
        <>
        <label class="form-label">{label}</label>
        <input type={type} class="form-control" placeholder={placeholder}/>
        </>
    )
}