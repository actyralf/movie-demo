import "./MovieCard.css";
export function MovieCard({ title }) {
  return (
    <li className="movie-card">
      <h2>{title}</h2>
    </li>
  );
}
