import React from 'react'
import './Footer.css'
import facebook from '../../Assets/images/facebook.svg'
import instagram from '../../Assets/images/instagram.svg'
import pinterest from '../../Assets/images/pinterest.svg'
import twitter from '../../Assets/images/twitter.svg'
import bgBoostD from '../../Assets/images/bgBoostD.svg'
import bgBoostM from '../../Assets/images/bgBoostM.svg'
import { isMobile } from 'react-device-detect'

export default function Footer() {
  return (
    <>
            <div 
                className="boost" 
                style={
                    !isMobile 
                        ? {
                            backgroundImage: `url(${bgBoostD})`,
                            backgroundSize: 'cover'
                        } 
                        : {
                            backgroundImage: `url(${bgBoostM})`,
                            backgroundSize: 'cover'
                        }
                }>
                <h2>Boost your links today</h2>
                <button type='button'>Get Started</button>
            </div>
        <section id="footer">
            <div className='dark-section'>
                <h3>Shortly</h3>
            </div>
                <ul>
                    <li>
                        <h4>Features</h4>
                        <a href='#'>Link Shortening</a>
                        <a href='#'>Branded Links</a>
                        <a href='#'>Analytics</a>
                    </li>
                    <li>
                        <h4>Ressources</h4>
                        <a href='#'>Blog</a>
                        <a href='#'>Developers</a>
                        <a href='#'>Support</a>
                    </li>
                    <li>
                        <h4>Company</h4>
                        <a href='#'>About</a>
                        <a href='#'>Our Team</a>
                        <a href='#'>Careers</a>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            <div className='social-row'>
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={pinterest} alt="pinterest" />
                <img src={instagram} alt="instagram" />
            </div>
        </section>
    </>
  )
}
