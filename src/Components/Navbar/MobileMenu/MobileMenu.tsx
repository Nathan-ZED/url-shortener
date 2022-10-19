import React from 'react'
import './MobileMenu.css'

export default function MobileMenu() {
  return (
    <article className="nav-mobile">
        <button type="button" className='link'>Features</button>
        <button type="button" className='link'>Pricing</button>
        <button type="button" className='link'>Ressources</button>
        <hr/>
        <button type="button" className='link'>Login</button>
        <button type="button" className="green-btn">Sign Up</button>
    </article>
  )
}
