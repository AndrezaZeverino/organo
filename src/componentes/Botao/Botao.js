import './Botao.css'

export function Botao(props) {
    return (
        <button className="botao">{props.children}</button>
    )
}

//props.children é quando eu passo no componente pai, o componente filho desse modo: <Botao>tudo que for aqui dentro é children</Botao>