import React, { useState, useEffect } from "react";

export default function Card(props) {
    const [pokemonImg, setPokemonImg] = useState("")

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemon.name}`)
                const pokemon = await res.json()
                setPokemonImg(pokemon.sprites.front_default)
            } catch (err) {
                console.log(err);
            }
        }

        fetchPokemon()
    }, [pokemonImg])

    return (
        <button className="card">
            <img className="pokemon-img" src={pokemonImg} alt={props.pokemon.name} />
            <p className="pokemon-name">{props.pokemon.name}</p>
        </button>
    )
}