import './App.css'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers'
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
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App
