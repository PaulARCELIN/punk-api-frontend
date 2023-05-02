import React from "react"
import './Card.css'
import { Link } from "react-router-dom"

function Card({name, img, id}) {
    return (<Link to={'/beer/?id='+ id} className="card-container">
        <div className="card-name" key={id} >{name}</div>
        <img className="card-img" src={img} alt={name}></img>
    </Link>)
}

export default Card
