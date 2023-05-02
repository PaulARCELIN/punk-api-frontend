import Card from "../Card/Card"
import { SearchBar } from "../SearchBar/SearchBar"
import { useState } from "react"
import './CardList.css'
import { NavLink } from "react-router-dom";


function CardList({data}) {

  const [searchInput, setSearchInput] = useState('')

  /* the research algorthm */
  function searchBarAlgo(element) {
    if(searchInput.length >= 1) {     
        if(element.name.toUpperCase().includes(searchInput.toUpperCase()) 
        ){
            return true
        }
        else {
            return false
        }      
    }
    else return true     
  }


   return (
      <div>
        <div className="top-container">
          <SearchBar selection={setSearchInput}/>
          <NavLink to='/random' className="nav" activeclassname='active'>GET A RANDOM BEER!</NavLink>
        </div>
        <div className="card-list">
          {data.map((e) => {
            /* if the algorithm sends back true we display the element */
            if(searchBarAlgo(e)) {
              return <Card name={e.name} img={e.image_url} key={e.id} id={e.id}/>
            }
          })}
        </div>
      </div>
    )
  };

  export default CardList