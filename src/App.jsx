import { useState } from 'react';
import Perfil from './components/Perfil';
import Formulario from './components/formulario'
import ReposList from './components/ReposList';

function App() {
  const [FormEstaVisivel, setFormEstaVisivel] = useState(true)
  const [NomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      <input type="text" placeholder='Digite o nome do usuário' onBlur={({ target }) => setNomeUsuario(target.value)} />

      {NomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={NomeUsuario} />
          <ReposList nomeUsuario={NomeUsuario} />
        </>
      )}

      {/* {FormEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormEstaVisivel(!FormEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App
