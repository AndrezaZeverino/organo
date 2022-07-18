import { useState } from 'react'
import { Botao } from '../Botao/Botao'
import { CampoTexto } from '../CampoTexto/CampoTexto'
import { ListaSuspensa } from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'

export function Formulario() {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão',
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Formulario submetido', nome, cargo, imagem, time)
        
        
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador: </h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite o seu nome" 
                valor={nome}
                aoAlterado={valor => setNome(valor)}/>            
                <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite o seu cargo" 
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto 
                label="Imagem" 
                placeholder="Informe o endereço da imagem"
                valor={imagem} 
                aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                obrigatorio={true} 
                label="Time" 
                itens={times}
                valor={time}
                aoAlterado={valor => setTime(valor)}/>
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

//label e placeholder são props passadas do componente pai, para o componente filho 
// no componente filho tem o complemento dessa parte: 'obrigatorio={true}' - aqui estou tornando o campo obrigatório 