import './App.css';
import MoviesContainer from './components/MoviesContainer';

const listOfMovies = [
  'Anna', 'El Arqui', 'The First Lady', 'Balthazar', 'Professor T', 'The Offer',
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Flow Unit Test Workshop</h2>
        <MoviesContainer movies={listOfMovies} />
        <h3>vamo' a aprender snapshot testing</h3>
      </header>
    </div>
  );
};

export default App;
