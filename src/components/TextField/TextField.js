import './TextField.Modules.css'

export const TextFiled = (props) =>{
    return(
        <div className="text-field">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}