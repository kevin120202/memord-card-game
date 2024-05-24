import React from "react";
import '../index.css'


export default function Header(props) {
    return (
        <header>
            <h1>PokeMemo</h1>
            <div>
                <p>Score: <span>{props.score}</span></p>
                <p>High Score: <span>{props.bestScore}</span></p>
            </div>
            <p>{props.tries}/2</p>
        </header>
    )
}