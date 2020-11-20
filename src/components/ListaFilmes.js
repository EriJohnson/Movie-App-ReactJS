const ListaFilmes = props => {
  return (
    <>
      {props.filmes.map((filme, indice) => (
        <div key={filme.imdbID} className='d-flex justify-content-start m-4'>
          <img src={filme.Poster} alt='Filme'></img>
        </div>
      ))}
    </>
  )
}

export default ListaFilmes
