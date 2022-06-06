import React from 'react'
import Learn from '../learn/Learn'
import '../learnlist/learnList.css'
import {learn} from '../data'

const LearnList = () => {
  return (
    <div className='ll'>
      <div className='ll-texts'>
        <h1 className='ll-title'>Find me on the Web.</h1>
        <p className='ll-desc'>Get to know me through any of my professional or creative outlets below.</p>
      </div>
      <div className="ll-list">
        {learn.map((item) => (
          <Learn key={item.id} img={item.img} link={item.link}/>
        ))}
      </div>
    </div>
  )
}

export default LearnList