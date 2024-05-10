import Features from '../features/Features'
import React from 'react'
import './WhatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__padding' id='whpt3'>
      <div className='gpt3__whatgpt3-features'>
        <Features />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
    </div>
  )
}

export default WhatGPT3
