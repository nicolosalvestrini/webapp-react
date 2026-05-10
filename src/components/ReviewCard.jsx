export default function ReviewCard({ review }) {
  const { name, vote, text } = review;

  return (
    <div className="border-bottom border-secondary py-3">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <div>
          <h6 className="text-white fw-bold mb-1">{name}</h6>

          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-warning text-dark">
              {vote}/10
            </span>
            <span className="text-secondary small">
              Recensione utente
            </span>
          </div>
        </div>
      </div>

      <p className="text-light mb-0">
        {text}
      </p>
    </div>
  );
}
