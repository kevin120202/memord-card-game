import React from "react";
import Card from "./Card";

export default function GameContent(props) {
    // console.log(props.pokemons);

    function shuffleArray(array) {
        const shuffledArray = [...array]
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const randomNum = Math.floor(Math.random() * (i + 1))
            let temp = shuffledArray[i]
            shuffledArray[i] = shuffledArray[randomNum]
            shuffledArray[randomNum] = temp
        }

        return shuffledArray
    }

    const shuffledPokemons = shuffleArray(props.pokemons);
    const cardsToDisplay = shuffledPokemons.slice(0, 5)
    const cards = cardsToDisplay.map((pokemon, i) => {
        return <Card pokemon={pokemon} key={i} />
    })

    return (
        <div className="cards-container">
            {cards}
        </div>
    )
}