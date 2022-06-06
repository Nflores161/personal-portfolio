import React from 'react'
import '../learn/learn.css'

const Learn = ({img, link}) => {
  return (
    <div className='l'>
      <div className="l-browser">
        <div className="l-circle" id='circ-1'></div>
        <div className="l-circle" id='circ-2'></div>
        <div className="l-circle" id='circ-3'></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt='webpage' className='l-img'/>
      </a>  
    </div>
  )
}

export default Learn