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
    // ---------------
    // all other staff
    // ...
    function handleChange(e) {
        // const { value } = e.target
        // setMemory(value)
        setMemory(e.target.value)
    }
    return (
        <div className="nfts-page page-wrapper">
            <Heading size={2}>NFTs Page</Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, in expedita consequuntur, veritatis odit voluptas, harum similique optio mollitia sed architecto dolore delectus! Est mollitia natus, optio ut impedit molestias.</p>
            <hr />
            <h3>{memory}</h3>
            <input type="text" onChange={handleChange}/>
        </div>
    )
}

export default NFTs