import "./CampoTexto.css"

export function CampoTexto(props) {

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
        // console.log(valor)
    }
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} placeholder={props.placeholder} required={props.obrigatorio}></input>
        </div>
    )
}

//required={props.obrigatorio} = chama a propriedade do componente pai (Formulario)