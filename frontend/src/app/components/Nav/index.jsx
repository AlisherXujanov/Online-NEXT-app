"use client"
import "./style.scss"
import Image from "next/image"
import LogoPng from "../../assets/icons/logo.png"
import Link from "next/link"
import { RiSearchLine } from "react-icons/ri"
import { usePathname } from 'next/navigation'
import ModalScreen from "../ModalScreen"
import Auth from "../auth"
import { links } from "../../store"
import { useState } from "react"


// Hook  ->  component controls (different types of hooks exist)
// RULES:
// 1. You should import them from react and use them only in client-side-components
// 2. You should always call them before any other 
//    functions inside component (at the top level)
// --------------------------------------------------------------------------
// The simple tag <a href="..."> here is changed by the component <Link href="..."> from next/link
// The component <Link> is used to navigate between pages
// --------------------------------------------------------------------------
// RU:
// Простой тег <a href="..."> здесь заменен на компонент <Link href="..."> из next/link
// Компонент <Link> используется для навигации между страницами
// --------------------------------------------------------------------------
function Nav(props) {
    // Call hooks here
    const pathname = usePathname()
    const [showModal, setShowModal] = useState(false)
    // ...
    // ---------------------
    // Other functions and variables
    // ...
    return (
        <nav className="global-nav">
            <div className="left">
                <Link href="/">
                    <Image
                        src={LogoPng}
                        alt="NFTs logo"
                        width={60}
                        height={20}
                    />
                </Link>
                <div className="global-searchbox">
                    <RiSearchLine />
                    {/* TODO: className="active" */}
                    <input
                        className="global-nav-search"
                        type="search"
                        placeholder="Search"
                    />
                </div>
            </div>
            <div className="right">
                {
                    links.navbar.map(l => {
                        return (
                            <Link
                                href={l.path}
                                className={pathname == l.path ? "active" : ""}
                                key={l.name}
                            >
                                {l.name}
                            </Link>
                        )
                    })
                }
                <button className="auth-button" onClick={() => setShowModal(true)}>
                    🧑🏻‍🦰Sign up
                </button>
            </div>
            {
                showModal &&
                <ModalScreen closeModal={() => setShowModal(false)}>
                    <Auth />
                </ModalScreen>
            }
        </nav>
    );
}

export default Nav;


// DRY  -> Don't repeat yourself
