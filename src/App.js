import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import ListaFilmes from './components/ListaFilmes'
import ListaFilmesCabecalho from './components/ListaFilmesCabecalho'
import CaixaBusca from './components/CaixaBusca'
import AdicionaFavoritos from './components/AdicionaFavoritos'
import RemoveFavoritos from './components/RemoveFavoritos'

import './App.css'

const App = () => {
  const [filmes, setFilmes] = useState([])
  const [favoritos, setFavoritos] = useState([])
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

  useEffect(() => {
    const filmesFavoritos = JSON.parse(
      localStorage.getItem('react-movie-app-favoritos')
    )

    setFavoritos(filmesFavoritos)
  }, [])

  const salvarParaLocalStorage = items => {
    localStorage.setItem('react-movie-app-favoritos', JSON.stringify(items))
  }

  const adicionarFilmeAosFavoritos = filme => {
    const novaListaFavoritos = [...favoritos, filme]
    setFavoritos(novaListaFavoritos)

    salvarParaLocalStorage(novaListaFavoritos)
  }

  const removerFilmeDoFavoritos = filme => {
    const novaListaFavoritos = favoritos.filter(
      favorito => favorito.imdbID !== filme.imdbID
    )

    setFavoritos(novaListaFavoritos)
    salvarParaLocalStorage(novaListaFavoritos)
  }

  return (
    <h1>
      <div className='container-fluid filme-app'>
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <ListaFilmesCabecalho titulo='Filmes' />
          <CaixaBusca busca={busca} setBusca={setBusca} />
        </div>
        <div className='row'>
          {busca && (
            <ListaFilmes
              filmes={filmes}
              handleFavoritosClick={adicionarFilmeAosFavoritos}
              componente={AdicionaFavoritos}
            />
          )}
        </div>
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <ListaFilmesCabecalho titulo='Favoritos' />
        </div>
        <div className='row'>
          {favoritos && (
            <ListaFilmes
              filmes={favoritos}
              handleFavoritosClick={removerFilmeDoFavoritos}
              componente={RemoveFavoritos}
            />
          )}
        </div>
      </div>
    </h1>
  )
}

export default App
