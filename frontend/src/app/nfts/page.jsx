"use client"
import Heading from "../components/Heading"
import { useState } from "react"
import { BASE_URL } from "../store"

function NFTs(props) {
    const [nfts, setNFTs] = useState([])

    async function getNFTs() {
        const URL = BASE_URL + "/nfts"
        const response = await fetch(URL)
        const data = await response.json()
        setNFTs(data)
    }
    return (
        <div className="nfts-page page-wrapper">
            <Heading size={2}>NFTs Page</Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, in expedita consequuntur, veritatis odit voluptas, harum similique optio mollitia sed architecto dolore delectus! Est mollitia natus, optio ut impedit molestias.</p>

            <hr />
            <button onClick={getNFTs}>Get NFTs</button>
            {
                nfts.length > 0 ?
                    nfts.map(nft => {
                        return (
                            <div className="nft-item-wrapper">
                                <h2>{nft.name}</h2>
                                <p>{nft.description}</p>
                            </div>
                        )
                    })
                    : "No NFTs found"
            }
        </div>
    );
}

export default NFTs;