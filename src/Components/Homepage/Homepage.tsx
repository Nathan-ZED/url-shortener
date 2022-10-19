import React, { useContext } from 'react'
import './Homepage.css'
import illustrationHome from '../../Assets/images/illustrationHome.svg'
import brandRecorgnition from '../../Assets/images/brandRecognition.svg'
import fullyCustom from '../../Assets/images/fullyCustom.svg'
import detailedRecord from '../../Assets/images/detailedRecord.svg'
import Shortener from '../Shortener/Shortener'
import ShortenCard from '../Shortener/ShortenCard/ShortenCard'
import { ShortenContext } from '../../Context/ShortenContext'

export default function Homepage() {

    const { shortenLinks, LOCAL_DATA } = useContext(ShortenContext)


  return (
    <main>
        <section id="home">
            <img 
                className="home-img" 
                src={illustrationHome} 
                alt={"image d'accueil"} 
                />
                <div className='text-block'>
                    <h1>More than just shorter links</h1>
                    <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
                    <div className="button-wrapper">
                        <button type="button">Get Started</button>
                    </div>
                </div>
        </section>
        <Shortener />
        <div className="shorten-list">
            { LOCAL_DATA ?
                JSON.parse(LOCAL_DATA).map((link:any) => (
                    <ShortenCard 
                        key={link.original}
                        initial={link.original}
                        shortLink={link.short}
                    />
                ))
                : null
            }
        </div>
        <section id={"stats"}>
            <div className='top-title'>
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
            </div>
            <div className="behind-bar"></div>
             <ul>
                <li>
                    <div className='img'>
                        <img src={brandRecorgnition} alt="brand recognition"/>
                    </div>
                    <div className='text-card'>
                        <h3>Brand Recognition</h3>
                        <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content</p>
                    </div>
                </li>
                <li>
                    <div className='img'>
                        <img src={detailedRecord} alt="brand recognition"/>
                    </div>
                    <div className='text-card'>
                        <h3>Detailed Records</h3>
                        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                </li>
                <li>
                    <div className='img'>
                        <img src={fullyCustom} alt="brand recognition"/>
                    </div>
                    <div className='text-card'>
                        <h3>Fully Customizable</h3>
                        <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>
                </li>
            </ul>
        </section>
    </main>
  )
}
