import MovieCard from "../components/FilmCard";
import axios from "axios";
import { useEffect, useState } from "react";

function HomePage() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei film:", error);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <main className="bg-black">
        <div className="container">
          <h4 className="text-white fw-bold p-1">FILM DA VEDERE</h4>
          <div className="row g-4">
            {movies.map((movie) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
