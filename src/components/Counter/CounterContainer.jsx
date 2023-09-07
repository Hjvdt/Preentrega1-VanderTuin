import React, { useState } from 'react'
import Counter from './Counter'

const CounterContainer = ({initial}) => {
    const [count, setCount] = useState(initial) 
    const sumar = () => {
        setCount(count + 1) 
    }
    const restar = () => {
        if (count === 0) return 
        setCount(count - 1) 
    }
    return (
        <Counter count={count} sumar={sumar} restar={restar} />
    )
}

export default CounterContainer
