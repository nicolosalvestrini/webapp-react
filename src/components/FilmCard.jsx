export default function MovieCard({ movie }) {
  const { title, director, genre, release_year, abstract, image } = movie;

  return (
    <div className="card bg-dark text-white border-secondary h-100 overflow-hidden">
      <img
        src={image}
        className="card-img-top"
        alt="Titolo film"
        style={{
          height: "260px",
          objectFit: "cover",
        }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold mb-2">{title}</h5>

        <div className="d-flex gap-2 mb-3">
          <span className="badge bg-secondary">{release_year}</span>
          <span className="badge bg-secondary">Genere</span>
        </div>

        <p className="card-text text-light flex-grow-1">{abstract}</p>

        <button className="btn btn-danger align-self-start">
          Scopri di più
        </button>
      </div>
    </div>
  );
}
