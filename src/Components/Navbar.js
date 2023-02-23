import './Navbar.css'
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
    const [icon, setIcon] = useState(false)
    const handleClick = () => {
        setIcon(!icon)
    }
    const closeSideDrawer = () => {
        setIcon(false)
    }
    return(
        <>
            <nav className='navbar'>
                <Link to = '/' className='nav-logo' onClick = {closeSideDrawer}>BETS</Link>
                <div className= 'menu-icon' onClick = {handleClick}>
                    {
                        icon ? <FaTimes className = 'fa-times'></FaTimes> : <FaBars className='fa-bars'></FaBars>
                    }
                </div>
                <ul className = {
                    icon ? 'nav-menu active' : 'nav-menu'
                }>
                    <li>
                        <Link to = '/' className='nav-links' onClick = {closeSideDrawer}>Home</Link>
                    </li>

                    <li>
                        <Link to = '/login' className='nav-links' onClick = {closeSideDrawer}>LOG IN</Link>
                    </li>

                    <li>
                        <Link to = '/signup' className='nav-links' onClick = {closeSideDrawer}>SIGN UP</Link>
                    </li>
                    
                </ul>
            </nav>
        </>
    )
}

export default Navbar