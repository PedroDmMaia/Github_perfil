import { useState, useEffect, useInsertionEffect } from "react"

const Formulario = () => {
    const [MateriaA, setMateriaA] = useState(0)
    const [MateriaB, setMateriaB] = useState(0)
    const [MateriaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState('')

    useEffect(() => { //exemplo de useEffect para qunado um componente for exibido na pagina
        console.log('o componente foi iniciado')

        return () => {
            console.log('o componente finalizou')
        }
    }, [])

    useEffect(() => {
        // console.log('o estado nome mudou')
    }, [nome])

    useEffect(() => {
        // console.log('A matéria A mudou para: ' + MateriaA)
    }, [MateriaA, MateriaB, MateriaC])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = MateriaA + MateriaB + MateriaC
        const media = soma / 3

        if (media > 6) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="seu nome" onChange={alteraNome} /> <br />
            <input type="number" placeholder="Nota materia A" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario