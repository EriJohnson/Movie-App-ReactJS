const CaixaBusca = props => {
  return (
    <div className='col col-sm-4'>
      <input
        className='form-control'
        value={props.value}
        onChange={event => props.setBusca(event.target.value)}
        placeholder='Digite para buscar...'
      />
    </div>
  )
}

export default CaixaBusca
