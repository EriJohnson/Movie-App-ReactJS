const ListaFilmes = props => {
  return (
    <>
      {props.filmes.map((filme, indice) => (
        <div
          key={filme.imdbID}
          className='image-container d-flex justify-content-start m-4'
        >
          <img src={filme.Poster} alt='Filme'></img>
          <div className='overlay d-flex align-items-center justify-content-center'></div>
        </div>
      ))}
    </>
  )
}

export default ListaFilmes
