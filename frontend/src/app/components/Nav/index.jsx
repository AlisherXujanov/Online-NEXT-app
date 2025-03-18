import { RiSearchLine } from "react-icons/ri"
import Image from "next/image";
import LogoPng from "../../assets/icons/logo.png"
import "./style.scss"

function Nav(props) {
    return (
        <nav className="global-nav">
            <div className="left">
                <Image
                    src={LogoPng}
                    alt="NFTs logo"
                    width={60}
                    height={20}
                />
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
            <div className="right"></div>
        </nav>
    );
}

export default Nav;