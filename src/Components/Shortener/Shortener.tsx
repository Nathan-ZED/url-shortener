import React, { useContext, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { ShortenContext } from '../../Context/ShortenContext'
import './Shortener.css'
import bgShortM from '../../Assets/images/bgShortM.svg'
import bgShortD from '../../Assets/images/bgShortD.svg'

export default function Shortener() {

  const { shortenLink } = useContext(ShortenContext)
  const [input, setInput] = useState<string>('')
  const [classInput, setClassInput] = useState<string>('input')

  const handleButton = (val:string) => {
      input === ''
        ? setClassInput('input error')
        : shortenLink(val)
  }

  return (
    <article className="shortener" style={
      !isMobile
        ? {
          backgroundImage: `url(${bgShortD})`,
          backgroundSize: 'cover'
      }
        : {
          backgroundImage: `url(${bgShortM})`,
          backgroundSize: 'cover'
        }
    }>
      <div className='err-container'>
          <input 
              className={classInput}
              type={"text"} 
              placeholder={"Shorten a link here..."}
              onInput={(e:any) => setInput(e.target.value)}
              value={input}
          />
          {
            classInput !== "input" && isMobile
              ? <span className='err'>Please add a link</span>
              : null
          }
            <button 
            type="button"
            onClick={() => handleButton(input)}
            >
                Shorten it!
            </button>
          </div>
          {
            classInput !== "input" && !isMobile
              ? <span className='err'>Please add a link</span>
              : null
          }
    </article>
  )
}
