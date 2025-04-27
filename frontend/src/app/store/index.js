const BASE_URL = "http://localhost:3001"

const links = {
    authLinks: [
        { name: "Explore", path: "/" },
        { name: "About", path: "/about" },
        { name: "NFTs", path: "/nfts" },
        { name: "Trending🔥", path: "/trending" },
        { name: "FAQ💬", path: "/faq" }
    ],
    nonAuthLinks: [
        { name: "Explore", path: "/" },
        { name: "About", path: "/about" },
        { name: "FAQ💬", path: "/faq" }
    ],
    footer: []
}


export {
    links,
    BASE_URL
}