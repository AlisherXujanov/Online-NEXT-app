"use client"
// HOOKS -> are designed to control the components
// RU: хуки предназначены для управления компонентами
// ----------------------------------------------------
// useState -> is a hook that allows you to add state to your components
// RU: это хук, который позволяет добавлять память в ваши компоненты
// ----------------------------------------------------
// STATE  ==  память  ==  xotira  ==  memory
// ----------------------------------------------------
import Heading from "../components/Heading"
import { useState } from "react"

function NFTs(props) {
    // HOOKS
    // ...
    const [memory, setMemory] = useState("Hello world")
    const [rangeInp, setRangeInput] = useState(50)
    const [color, setColor] = useState("black")
    // ---------------
    // all other staff
    // ...
    function handleChange(e) {
        const { value, name } = e.target
        if (name === "memory") {
            setMemory(value)
        }
        else if (name === "range") {
            setRangeInput(value)
        }
        else if (name === 'color') {
            setColor(value)
        }
    }

    const boxStyle = {
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        backgroundColor: "lightgray",
        margin: "10px"
    }

    return (
        <div className="nfts-page page-wrapper">
            <Heading size={2}>NFTs Page</Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, in expedita consequuntur, veritatis odit voluptas, harum similique optio mollitia sed architecto dolore delectus! Est mollitia natus, optio ut impedit molestias.</p>

            <div className="box" style={boxStyle}>
                <h3>{memory}</h3>
                <input
                    type="text"
                    onChange={handleChange}
                    name='memory'
                    value={memory}
                />
            </div>
            <div className="box" style={boxStyle}>
                <h2>Range: {rangeInp}</h2>
                <input
                    type="range"
                    name='range'
                    onChange={handleChange}
                    value={rangeInp}
                />
            </div>
            <div className="box" style={boxStyle}>
                <p style={{ color: color }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <input type="color" onChange={handleChange} name='color' />
            </div>
        </div>
    )
}

export default NFTs