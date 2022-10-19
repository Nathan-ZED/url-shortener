import React, { useState, useRef } from 'react'
import './ShortenCard.css'

type Props = {
    initial: string,
    shortLink: string,
}

export default function ShortenCard({initial, shortLink}:Props) {
    const [copied, setCopied] = useState<boolean>(false)

    const shortened:any = useRef()

    const handleCopy = () => {
        navigator.clipboard.writeText(shortened.current.textContent)
        setCopied(true)
    }

  return (
    <div className='shorten-card'>
        <a href={initial}>{initial}</a>
        <div className='right-block'>
            <a href={shortLink} className='short' ref={shortened}>{shortLink}</a>
            <button 
                type='button' 
                className={copied ? 'copied' : 'non-copied'} 
                onClick={() => handleCopy()}>
                    {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    </div>
  )
}
