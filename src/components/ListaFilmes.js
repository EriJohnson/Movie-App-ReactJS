const ListaFilmes = props => {
  const Componente = props.componente

  return (
    <>
      {props.filmes.map(filme => (
        <div
          key={filme.imdbID}
          className='image-container d-flex justify-content-start m-4'
        >
          <img src={filme.Poster} alt='Filme'></img>
          <div
            onClick={() => props.handleFavoritosClick(filme)}
            className='overlay d-flex align-items-center justify-content-center'
          >
            <Componente />
          </div>
        </div>
      ))}
    </>
  )
}

export default ListaFilmes
