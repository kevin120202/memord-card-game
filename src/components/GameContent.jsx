import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function GameContent(props) {
    // console.log(props.pokemons);
    const [shuffledPokemons, setShuffledPokemons] = useState([])
    const [pokemonsClicked, setPokemonsClicked] = useState([])

    useEffect(() => {
        setShuffledPokemons(shuffleArray(props.pokemons));
    }, [props.pokemons]);

    function shuffleArray(array) {
        const shuffledArray = [...array]
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const randomNum = Math.floor(Math.random() * (i + 1))
            let temp = shuffledArray[i]
            shuffledArray[i] = shuffledArray[randomNum]
            shuffledArray[randomNum] = temp
        }

        return shuffledArray.slice(0, 5)
    }

    useEffect(() => {
        if (props.tries > 2) {
            console.log("you lose");
            if (props.score > props.bestScore) {
                props.setBestScore(props.score)
            }
            props.setScore(0)
            props.setTries(0)
            setPokemonsClicked([])
        }
    }, [props.tries])

    function handleBtnClick(pokemonName) {
        setShuffledPokemons(shuffleArray(props.pokemons))
        if (!pokemonsClicked.includes(pokemonName)) {
            setPokemonsClicked(prev => {
                return [...prev, pokemonName]
            })
            props.setScore(prev => prev + 1)
        } else {
            props.setTries(prev => prev + 1)
        }
    }

    const cards = shuffledPokemons.map((pokemon, i) => {
        return <Card pokemon={pokemon} key={i} onClick={handleBtnClick} />
    })

    return (
        <div className="cards-container">
            {cards}
        </div>
    )
}