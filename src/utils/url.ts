const BASE_URL = "https://nft-backend-json.vercel.app/"

export const getImageMarketplease = async () => {
    return await fetch(BASE_URL.concat("imageMarketplease"))
        .then((r) => r.json())
}
export const getExplore = async () => {
    return await fetch(BASE_URL.concat("explore"))
        .then((r) => r.json())
}
export const getStatistics = async () => {
    return await fetch(BASE_URL.concat("statistics"))
        .then((r) => r.json())
}
export const getTrendingCollection = async () => {
    return await fetch(BASE_URL.concat("trendingCollection"))
        .then((r) => r.json())
}
export const getTopCreators = async () => {
    return await fetch(BASE_URL.concat("topCreators"))
        .then((r) => r.json())
}
export const getCategories = async () => {
    return await fetch(BASE_URL.concat("categories"))
        .then((r) => r.json())
}
export const getDiscoverMore = async () => {
    return await fetch(BASE_URL.concat("discoverMore"))
        .then((r) => r.json())
}
export const getHowItWorksIcon = async () => {
    return await fetch(BASE_URL.concat("howItWorksIcon"))
        .then((r) => r.json())
}
export const getFooterLogo = async () => {
    return await fetch(BASE_URL.concat("footerLogo"))
        .then((r) => r.json())
}
export const getRankings = async () => {
    return await fetch(BASE_URL.concat("rankings"))
        .then((r) => r.json())
}
export const getArtist_page = async () => {
    return await fetch(BASE_URL.concat("artist_page"))
        .then((r) => r.json())
}
export const getArtist_page2 = async () => {
    return await fetch(BASE_URL.concat("artist_page2"))
        .then((r) => r.json())
}
export const getConnect_wallet = async () => {
    return await fetch(BASE_URL.concat("connect_wallet"))
        .then((r) => r.json())
}
export const getMarket_Please = async () => {
    return await fetch(BASE_URL.concat("market_Please"))
        .then((r) => r.json())
}
export const getNft_Page = async () => {
    return await fetch(BASE_URL.concat("nft_Page"))
        .then((r) => r.json())
}

// -----------------------
export const getArtistById = async (id: string) => {
    const rankings = await getRankings()
    const artist = rankings[0].desc.find((artist: any) => artist.id == id)
    return artist;
}

