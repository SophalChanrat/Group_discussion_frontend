export default function Food({ food }) {
  return (
    <li className="place-item">
      <button>
        <img src={food.image.src} alt={food.image.alt} />
        <h3>{food.title}</h3>
      </button>
    </li>
  );
}