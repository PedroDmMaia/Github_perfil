import { useEffect, useState } from "react"

import Styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(resJson)
                }, 2000)
            })
    }, [nomeUsuario])

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={Styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li key={id} className={Styles.listItem}>
                            <div className={Styles.listItemName}>
                                <b >Nome :</b> {name}
                            </div>
                            <div className={Styles.listItemLanguage}>
                                <b >Linguagens : </b> {language}
                            </div>
                            <a className={Styles.listItemLink} target="_blank" href={html_url}>Visitar no github</a>
                        </li>
                    ))}
                </ul >
            )}
        </div>
    )
}

export default ReposList