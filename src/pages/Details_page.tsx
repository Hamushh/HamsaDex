import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonDetails } from "../api/pokeApi";
import Loading from "../components/Loading";
import type { PokemonDetail } from "../types/pokemonTypes";

function getTypeClass(typeName: string) {
  return `type-badge type-${typeName}`;
}

function PokemonDetailsPage() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDetails() {
      if (!name) return;

      try {
        setIsLoading(true);
        setError("");

        const data = await getPokemonDetails(name);
        setPokemon(data);
      } catch {
        setError("Could not load Pokémon details. Please check the Pokémon name.");
      } finally {
        setIsLoading(false);
      }
    }

    loadDetails();
  }, [name]);

  if (isLoading) {
    return <Loading />;
  }

  if (error || !pokemon) {
    return (
      <section className="page">
        <Link to="/pokedex" className="back-link">
          ← Back to Pokédex
        </Link>
        <p className="error">{error}</p>
      </section>
    );
  }

  const totalStats = pokemon.stats.reduce(
    (total, item) => total + item.base_stat,
    0
  );

  const pokemonImage =
    pokemon.sprites.other["official-artwork"].front_default ||
    pokemon.sprites.front_default;

  return (
    <section className="details-page">
      <Link to="/pokedex" className="back-link">
        ← Back to Pokédex
      </Link>

      <div className="details-card">
        <div className="details-image">
          <img src={pokemonImage} alt={pokemon.name} />
        </div>

        <div className="details-info">
          <p className="pokemon-number">#{pokemon.id}</p>
          <h1>{pokemon.name}</h1>

          <div className="tag-list">
            {pokemon.types.map((item) => (
              <span
                key={item.type.name}
                className={getTypeClass(item.type.name)}
              >
                {item.type.name}
              </span>
            ))}
          </div>

          <div className="info-grid">
            <div>
              <strong>Height</strong>
              <p>{pokemon.height / 10} m</p>
            </div>

            <div>
              <strong>Weight</strong>
              <p>{pokemon.weight / 10} kg</p>
            </div>

            <div className="stat-total-box">
              <strong>Base Stat Total</strong>
              <p>{totalStats}</p>
            </div>
          </div>

          <h2>Abilities</h2>
          <ul className="ability-list">
            {pokemon.abilities.map((item) => (
              <li key={item.ability.name}>{item.ability.name}</li>
            ))}
          </ul>

          <h2>Stats</h2>
          <div className="stats-list">
            {pokemon.stats.map((item) => (
              <div key={item.stat.name} className="stat-row">
                <span>{item.stat.name}</span>
                <div className="stat-bar">
                  <div style={{ width: `${Math.min(item.base_stat, 100)}%` }} />
                </div>
                <strong>{item.base_stat}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PokemonDetailsPage;