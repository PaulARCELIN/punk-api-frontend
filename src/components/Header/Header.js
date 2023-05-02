import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {


    return (<div className="header">
       <NavLink to='/home' className="nav" activeclassname='active'>HOME</NavLink> 
       <h1>PUNK API FRONT-END</h1>
    </div>)
}

export default Header

