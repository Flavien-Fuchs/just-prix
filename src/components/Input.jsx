/* eslint-disable react/prop-types */
import { useState } from 'react'

function Input({ handleClick }) {

    const [input, setInput] = useState(0)

    const handleInputChange = (event) => {
        const value = event.target.value
        setInput(value)
    }

    return (
        <div>
            <input className='Input' type='number' placeholder={0} onChange={handleInputChange} />
            <button onClick={() => handleClick(input)}>Valider</button>
        </div >
    )
}

export default Input