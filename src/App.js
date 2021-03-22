import {useState} from 'react'
import Filter from './components/Filter'
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {title: "The Franshissec", description:"This is marvel film The avengers", posterUrl:"https://i.ytimg.com/vi/0N1uB34JiLU/maxresdefault.jpg", rate:"7.8"},
    {title: "Tenet", description:"This is Tenet", posterUrl:"https://media.senscritique.com/media/000019525188/source_big/Tenet.jpg", rate:"8.6"},
    {title: "The Town", description:"This is The Town", posterUrl:"https://i0.wp.com/views.fr/wp-content/uploads/2020/04/gunanaujdugt9ycqk7h3nyt2s2t-373-scaled.jpg?resize=1200%2C1800&ssl=1", rate:"6.9"},
    {title: "Tyler Rake", description:"This is Tyler Rake", posterUrl:"https://media.senscritique.com/media/000019356022/325/Tyler_Rake.jpg", rate:"8.8"},
    {title: "Inception", description:"This is Inception", posterUrl:"https://www.cinetrafic.fr/images/affiches/original/aff_3959020190822210008.jpg", rate:"9.4"},
    {title: "X-men", description:"This is movie X-men", posterUrl:"https://tse4.mm.bing.net/th?id=OIP.GQ5Jhmi5P9gJ9Ra6W2CY6QHaEK&pid=Api&P=0&w=279&h=158", rate:"7.9"},
    {title:'nothing',description:'nothing',posterUrl:'https://i.ytimg.com/vi/XXcAL1pTHzQ/maxresdefault.jpg', rate:'1.3'}
  ]);

  const [show, setShow] = useState(false)

    const submitting = e => {
      e.preventDefault();
      setMovies([
        ...movies,
        {
          title: document.getElementsByName("title")[0].value, description: document.getElementsByName("descri")[0].value, posterUrl: document.getElementsByName("posterUrl")[0].value, rate: document.getElementsByName("rate")[0].value
        }
      ]);
      alert(`${document.getElementsByName("title")[0].value} has been added!`)
  }

  return (
    <div className="App">
      <div >
      	<button className="btn" onClick={() => setShow(!show)}>Add a Movie</button>
        {show && (
          <>
            <form onSubmit={submitting} >
              <label>Movie Title : <input type="text" name="title" /></label>
              <label>Movie Description : <input type="text" name="descri" /></label>
              <label>Movie PosterUrl : <input type="text" name="posterUrl" /></label>
              <label>Movie Rate : <input type="text" name="rate" /></label>
              <input className="btn" type="submit" value="Submit" />
            </form>
          </>
        )}
      </div>
      <Filter movies={movies}/>
    </div>
  );
}
export default App;