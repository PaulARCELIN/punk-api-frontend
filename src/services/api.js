async function getBeerList() {
    const response = await fetch(`https://api.punkapi.com/v2/beers`);
    return await response.json()  
}

async function getSingleBeer(id) {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
    return await response.json()
}

async function getRandomBeer() {
    const response = await fetch(`https://api.punkapi.com/v2/beers/random`);
    return await response.json()
}

module.exports = {
    getBeerList,
    getSingleBeer,
    getRandomBeer
}