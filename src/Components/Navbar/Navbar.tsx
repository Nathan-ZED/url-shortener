import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/images/logo.svg'
import hamburger from '../../Assets/images/hamburger.png'
import { isMobile } from 'react-device-detect' 
import MobileMenu from './MobileMenu/MobileMenu'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState<boolean>(false)



  return (
    <nav>
        <article className='nav-wrapper'>
            {isOpen 
                ? <MobileMenu />
                : null
            }
            {isMobile ? <img className="logo" src={logo} alt="logo" /> : null}
            {isMobile 
                ? 
                <button type="button" onClick={() => setIsOpen(!isOpen)} className="hamburger-button">
                    <img className="hamburger" src={hamburger} alt="hamburger" />
                </button>
                :  
                <>
                    <ul>
                            <li>
                                <img className="logo" src={logo} alt="logo" />  
                            </li>
                            <li>
                                <button type="button">Pricing</button>
                            </li>
                            <li>
                                <button type="button">Features</button>
                            </li>
                            <li>
                                <button type="button">Ressources</button>
                            </li>
                        </ul>
                        <div className='btn-wrap'>
                            <button type='button'>Login</button>
                            <button type='button'>Sign Up</button>
                        </div>
                </>
            }
        </article>
    </nav>
  )
}
