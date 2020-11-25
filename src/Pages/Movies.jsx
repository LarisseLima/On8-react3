import filmes from '../Services/dados'
import '../Styles/Pages/movies.css'
import Sidebar from '../Components/Sidebar'

const ListMovies = () => {

  return (
    <>
      <Sidebar />
      <div id="container">
        {filmes.map(filme => {
          return <div className="card" key={filme.id}>
            <h3>Título: {filme.nome}</h3>
            <p>Gênero: {filme.genero}</p>
            <img src={filme.capa} alt="capa" />
          </div>
        })}
      </div>
    </>
  )
}
export default ListMovies