"use client"
import Heading from "../components/Heading"
import { useState, useEffect } from "react"
import { BASE_URL } from "../store"
import Spinner from "../components/Spinner"
import ModalScreen from "../components/ModalScreen"
import "./style.scss"


function NFTs(props) {
    const [nfts, setNFTs] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [form, setForm] = useState({
        name: '',
        description: ''
    })

    async function getNFTs() {
        const URL = BASE_URL + "/nfts"
        const response = await fetch(URL)
        const data = await response.json()
        setNFTs(data)
    }
    // ------------------------------------
    // SYNTAX of useEffect
    // useEffect(() => {....}, [])
    // ------------------------------------
    useEffect(() => {
        getNFTs()
    }, [])

    async function submitForm(e) {
        e.preventDefault()
        const URL = BASE_URL + "/nfts"
        const response = await fetch(URL, {
            method: "POST",
            body: JSON.stringify(form),
        })
        console.log(response)
        await getNFTs()
        
        setShowModal(false)
        setForm({
            name: '',
            description: ''
        })
    }


    return (
        <div className="nfts-page page-wrapper">
            <Heading size={2}>NFTs Page</Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, in expedita consequuntur, veritatis odit voluptas, harum similique optio mollitia sed architecto dolore delectus! Est mollitia natus, optio ut impedit molestias.</p>

            <div className="action-btns">
                <button className="create-nft-btn"
                    onClick={() => setShowModal(!showModal)}
                >
                    Create New NFT
                </button>
            </div>
            {
                showModal &&
                <ModalScreen closeModal={() => setShowModal(false)}>
                    <h1>Create New NFT</h1>
                    <form onSubmit={submitForm} className="create-nft-form">
                        <input
                            type="text"
                            placeholder="NFT Name"
                            name="name"
                            onChange={(e) => { setForm({ ...form, name: e.target.value }) }}
                            value={form.name}
                            required
                        />
                        <textarea 
                            name="description" 
                            placeholder="NFT Description" 
                            onChange={(e) => { setForm({ ...form, description: e.target.value }) }}
                            value={form.description}
                            required
                        ></textarea>
                        <button type="submit">Create NFT</button>
                    </form>
                </ModalScreen>
            }

            <div className="nfts-list">
                {
                    nfts.length > 0
                        ?
                        nfts.map(nft => {
                            return (
                                <div className="nft-item-wrapper" key={nft.id}>
                                    <h2>{nft.name}</h2>
                                    <p>{nft.description}</p>
                                </div>
                            )
                        })
                        :
                        <Spinner />
                }
            </div>
        </div>
    );
}

export default NFTs;