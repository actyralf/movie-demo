import "./App.css";
import { MovieCard } from "./components/MovieCard";

function App() {
  return (
    <>
      <main>
        <h1>Movie List</h1>
        <ul className="movie-list">
          <MovieCard title="Godfather" />
          <MovieCard title="Titanic" />
          <MovieCard title="Taxi Driver" tofu="test" sdkjfh="sdfgkjh" />
        </ul>
      </main>
    </>
  );
}

// Props
// {
//   title: "Taxi Driver",
//   tofu: "test"
// }

export default App;
