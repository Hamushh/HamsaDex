import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="hero">
      <h1>Welcome to HamsaDex</h1>
      <p>
        Search through Pokémon, view their stats, abilities, height, weight and
        types.
      </p>

      <Link className="button" to="/pokedex">
        Open Pokédex
      </Link>
    </section>
  );
}

export default HomePage;