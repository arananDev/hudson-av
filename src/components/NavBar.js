import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link} from 'react-scroll'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const navigate = useNavigate()
    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <h1 className='name-h1'>Data Crackle</h1>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                      <Link to= {'aboutSection'} spy = {true} smooth = {true} offset = {50} duration ={500} onClick = {closeMenu}> About </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to= {'projectSection'} spy = {true} smooth = {true} offset = {50} duration ={500} onClick = {closeMenu}> Projects </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to= {'serviceSection'} spy = {true} smooth = {true} offset = {50} duration ={500} onClick = {closeMenu}> Services </Link>
                    </li>
                    <li >
                      <button className='contact-button' onClick={() => (navigate('/contact'))}> Contact us</button>
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default NavBar