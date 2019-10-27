import React, { useState } from "react"

function App() {
    const [count, setCount] = useState(0)
    const [increment, setIncrement] = useState(1)

    const handleIncrement = ({ target }) => {
        setIncrement(Number(target.value))
    }

    return (
        <section className="main">
            <div className="count">{count}</div>
            <button onClick={() => setCount(count - increment)}>-</button>
            <button onClick={() => setCount(count + increment)}>+</button>
            <input type="number" onChange={handleIncrement} value={increment} />
            <button
                onClick={() => {
                    setCount(0)
                    setIncrement(1)
                }}
            >
                reset
            </button>
        </section>
    )
}

export default App
