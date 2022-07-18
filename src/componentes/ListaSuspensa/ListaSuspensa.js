import './ListaSuspensa.css'

export function ListaSuspensa(props) {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.value}>
                {props.itens.map((item, index) => <option key={index}>{item}</option>)}
            </select>
        </div>
    )
}