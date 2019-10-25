import React, { useState } from "react"

function App() {
    const [count, setCount] = useState(0)
    const [increment, setIncrement] = useState(1)

    const handleIncrement = ({ target }) => {
        setIncrement(Number(target.value))
    }

    return (
        <>
            <button onClick={() => setCount(count - increment)}>-</button>
            {count}
            <button onClick={() => setCount(count + increment)}>+</button>
            <input type="number" onChange={handleIncrement} value={increment} />
        </>
    )
}

export default App
