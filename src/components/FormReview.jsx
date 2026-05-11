import axios from "axios";
import { useState } from "react";

export default function ReviewForm({ movieId, onReviewSubmit }) {
  const initialFormData = {
    name: "",
    vote: 1,
    text: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:3000/movies/${movieId}`, {
        ...formData,
      })
      .then((response) => {
        console.log("Recensione inviata:", response.data);
        setFormData(initialFormData);

        if (onReviewSubmit) {
          onReviewSubmit();
        }
      })
      .catch((error) => {
        console.error("Errore durante l'invio:", error);
      });
  };

  return (
    <div className="card bg-dark text-white border-secondary rounded-4 shadow">
      <div className="card-body p-4">
        <h3 className="fw-bold mb-4">Scrivi una recensione</h3>

        <div className="mb-3">
          <label className="form-label text-light">La tua valutazione</label>

          <input
            type="number"
            name="vote"
            className="form-control bg-black text-white border-secondary"
            placeholder="Inserisci un voto da 1 a 5"
            min="1"
            max="5"
            value={formData.vote}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-light">Nome</label>

          <input
            type="text"
            className="form-control bg-black text-white border-secondary"
            placeholder="Inserisci il tuo nome"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="form-label text-light">La tua recensione</label>

          <textarea
            className="form-control bg-black text-white border-secondary"
            rows="5"
            name="text"
            placeholder="Scrivi la tua recensione..."
            value={formData.text}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-danger px-4 py-2 fw-semibold"
            onClick={handleSubmit}
          >
            Invia recensione
          </button>
        </div>
      </div>
    </div>
  );
}
