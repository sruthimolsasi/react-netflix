import './App.css';
import Row from './components/Row'
import requests from './requests';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row tittle='Netfilx Originals' fetchUrl={requests.fetchNetflixOriginals } isLargeRow={true}/>
      <Row tittle='Trending' fetchUrl={requests.fetchTrending}/>
      <Row tittle='TopRated' fetchUrl={requests.fetchTopRated}/>
      <Row tittle='ActionMovies' fetchUrl={requests.fetchActionMovies}/>
      <Row tittle='ComedyMovies' fetchUrl={requests.fetchComedyMovies}/>
      <Row tittle='HorrorMovies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row tittle='RomanceMovies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row tittle='Documentaries' fetchUrl={requests.fetchDocumentaries}/>





    </div>
  );
}

export default App;
