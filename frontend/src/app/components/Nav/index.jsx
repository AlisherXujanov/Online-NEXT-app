import { RiSearchLine } from "react-icons/ri"
import Image from "next/image"
import LogoPng from "../../assets/icons/logo.png"
import Link from "next/link"
import "./style.scss"

// --------------------------------------------------------------------------
// The simple tag <a href="..."> here is changed by the component <Link href="..."> from next/link
// The component <Link> is used to navigate between pages
// --------------------------------------------------------------------------
// RU:
// Простой тег <a href="..."> здесь заменен на компонент <Link href="..."> из next/link
// Компонент <Link> используется для навигации между страницами
// --------------------------------------------------------------------------


function Nav(props) {
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
                <Link href="/">Explore</Link>
                <Link href="/about">About</Link>
                <Link href="/nfts">NFTs</Link>
                <Link href="/trending">Trending</Link>
                <Link href="/faq">FAQ</Link>
            </div>
        </nav>
    );
}

export default Nav;