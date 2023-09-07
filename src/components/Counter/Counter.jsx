import React from 'react'
import { Button } from 'bootstrap'

const Counter = ({ count, sumar, restar }) => {
    return (
        <div>
            <p>Valor: {count}</p>
            <button onClick={() => sumar() }>Sumar</button>
            <button onClick={() => restar()}>Restar</button>
        </div>
    )
}

export default Counter
