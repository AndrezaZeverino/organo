import "./CampoTexto.css"

export function CampoTexto(props) {
    console.log(props.label)
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}></input>
        </div>
    )
}