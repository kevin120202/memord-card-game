import React, { useEffect, useState } from 'react'
import './index.css'
import Header from './components/Header'
import GameContent from './components/GameContent'

function App() {
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon"
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [tries, setTries] = useState(0)
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const res = await fetch(BASE_URL)
                const pokemons = await res.json()
                setPokemons(pokemons.results);
            } catch (err) {
                console.log(err);
            }
        }

        fetchPokemons()
    }, [])

    return (
        <div>
            <Header score={score} bestScore={bestScore} tries={tries} />
            <GameContent pokemons={pokemons} />
        </div>
    )
}

export default App
