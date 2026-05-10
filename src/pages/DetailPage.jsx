import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

function DetailPage() {
  const [movieReviews, setMovieReviews] = useState({});
  const { id } = useParams();

  const fetchMovieReviews = () => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((response) => {
        setMovieReviews(response.data);
      })
      .catch((error) => {
        console.error("Errore durante il recupero delle recensioni:", error);
      });
  };

  useEffect(() => {
    fetchMovieReviews();
  }, [id]);

  return (
    <>
      <main className="bg-black min-vh-100 text-white py-5">
        <div className="container">
          <h1 className="fw-bold mb-4">{movieReviews.title}</h1>

          <div className="row g-5 align-items-start">
            <div className="col-12 col-md-4">
              <img
                src={`http://localhost:3000/movies_cover/${movieReviews.image}`}
                alt={movieReviews.title}
                className="img-fluid rounded border border-secondary"
              />
            </div>

            <div className="col-12 col-md-8">
              <div className="d-flex flex-wrap gap-2 mb-4">
                <span className="badge bg-secondary">
                  {movieReviews.release_year}
                </span>

                <span className="badge bg-secondary">{movieReviews.genre}</span>

                <span className="badge bg-secondary">
                  {movieReviews.director}
                </span>
              </div>

              <p className="text-light fs-5 mb-4">{movieReviews.abstract}</p>

              <div className="card bg-dark border-secondary text-white"></div>
            </div>
          </div>

          <div>
            {movieReviews.reviews?.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default DetailPage;
