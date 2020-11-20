import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import ListaFilmes from './components/ListaFilmes'
import ListaFilmesCabecalho from './components/ListaFilmesCabecalho'
import CaixaBusca from './components/CaixaBusca'

import './App.css'

const App = () => {
  const [filmes, setFilmes] = useState([])
  const [busca, setBusca] = useState('')

  const getFilmesRequest = async busca => {
    const url = `http://www.omdbapi.com/?s=${busca}&apikey=9823e243`

    const resposta = await fetch(url)
    const respostaJson = await resposta.json()

    console.log('respostaJson  :>> ', respostaJson)

    if (respostaJson.Search) {
      setFilmes(respostaJson.Search)
    }
  }

  useEffect(() => {
    getFilmesRequest(busca)
  }, [busca])

  return (
    <h1>
      <div className='container-fluid filme-app'>
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <ListaFilmesCabecalho titulo='Filmes' />
          <CaixaBusca busca={busca} setBusca={setBusca} />
        </div>
        <div className='row'>
          <ListaFilmes filmes={filmes} />
        </div>
      </div>
    </h1>
  )
}

export default App
