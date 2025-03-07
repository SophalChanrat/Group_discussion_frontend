import Food from "./components/Food.jsx";
import { FOODS } from "./data.js";

function App() {
  return (
    <>
      <header>
        <h1>Foods</h1>
        <p>Which one is your favorite?</p>
      </header>
      <main>
        <section className="places-category">
          <ul className="places">
            {FOODS.map((food, index) => (
              <Food key={food.id} food={food} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;