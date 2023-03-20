//https://pokeapi.co/api/v2/pokemon/{POKEMON_NAME}

import { useEffect, useState } from "react";

export function Pokemon(props) {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function searchPokemon() {
    setLoading(true);
    setError(null);
    setPokemon(null);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => {
        setError(error.message);
      })
      .finally(setLoading(false));
  }

  function moreDetails() {
    setLoading(true);
    setError(null);
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`)
      .then((response) => response.json())
      .then((data) => setPokemon((pokemon) => ({ ...pokemon, ...data })))
      .catch((error) => {
        setError(error.message);
      })
      .finally(setLoading(false));
  }

  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);

  return (
    <div>
      <input
        type="text"
        value={pokemonName}
        onChange={(event) => setPokemonName(event.target.value)}
      />
      <button onClick={searchPokemon}>Search</button>
      {pokemon && (
        <div>
          <h1>Name: {pokemon.name}</h1>
          <img
            src={pokemon.sprites.back_default}
            alt=""
            width="200px"
            height="200px"
          />
          <h2>Base experience: {pokemon.base_experience}</h2>
          <div style={{ backgroundColor: "azure", padding: "20px" }}>
            <h2>Abilities</h2>
            <ul>
              {pokemon.abilities.map((el, index) => {
                return <li key={index}>{el.ability.name}</li>;
              })}
            </ul>
          </div>
          <button onClick={moreDetails}>More details</button>
          {pokemon.egg_groups && (
            <div style={{ backgroundColor: "azure", padding: "20px" }}>
              <h2>Color: {pokemon.color.name}</h2>
              <h2>Shape: {pokemon.shape.name}</h2>
              <h2>EggGroups</h2>
              <ul>
                {pokemon.egg_groups.map((el, index) => {
                  return <li key={index}>{el.name}</li>;
                })}
              </ul>
            </div>
          )}
        </div>
      )}
      {error && <h1>{error}</h1>}
      {loading && <h1>Loading...</h1>}
    </div>
  );
}
