import { useState, useEffect } from "react"
import { getSingleBeer, getRandomBeer } from "../../services/api"
import './Details.css'


function Details() {
    
    const search = window.location.search
    const params = new URLSearchParams (search)
    const urlID = params.get ('id')

    const [beer, setBeer] = useState({})

    useEffect(() => {
        initData()
      }, [])

    async function initData() {
        if(urlID) {
            const data = await getSingleBeer(urlID)
            setBeer(data)
        }
        else {
            const data = await getRandomBeer()
            setBeer(data)
        }    
    } 

    function dataEmptyCheck(data) {
        return Object.keys(data).length === 0 && data.constructor === Object;
    }
    
    if(dataEmptyCheck(beer)) {
        return <div>ERROR 404</div>
    }

    console.log(beer)

    return (<div className="details-container">
        <h2 className="details-title">{beer[0].name}</h2>
        <img className="details-img" src={beer[0].image_url} alt={beer[0].name}/>
        <div className="details-tagline">{beer[0].tagline}</div>
        <div className="details-description">{beer[0].description}</div>
    </div>)
}

export default Details