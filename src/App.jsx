import './App.css'
import { Footer, Blog, Possibility, WhatGPT3, Header, Features} from './containers'
import { Brand, CTA, NavBar } from './components'

function App() {
  return (
    <div className='App'> 
        <div className='gradient__bg'>
          <NavBar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App
