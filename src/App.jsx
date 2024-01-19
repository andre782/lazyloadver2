import { useState } from 'react'
import './App.css'
import Navbar from "./navbar/Navbar"
import Header1 from './body/header1'
import Header2 from './body/header2'
import Konten from './body/konten'
import Konten2 from './body/konten2'
import Konten3 from './body/konten3'
import Footer from './Footer'

function App() {

  return (
    <div className='container_utama'>
      <Navbar/>
      <div className="container_xxl">
        <Header1/>
        <Header2/>
        <Konten/>
        <Konten2/>
        <Konten3/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
