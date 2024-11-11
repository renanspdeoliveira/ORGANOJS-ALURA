import { useState } from 'react'
import CampoTexto from '..'
import Botao from '../../../Botao'
import ListaSuspensa from '../../../ListaSuspensa'
import './Formulario.css'




const Formulario = (props) => {



    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoAlterado = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time,
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }


    return (
        <section className='formulario' >
            <form onSubmit={aoAlterado} >
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome:" valor={nome} aoAlterado={valor => setNome(valor)} />
                <CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite seu cargo:" />
                <CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} obrigatorio={false} label="Imagem" placeholder="Digite o endereço da imagem:" />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)} />
                <Botao> Criar Card  </Botao >

            </form>
        </section>
    )
}

export default Formulario