import { useEffect, useState } from 'react'
import './App.css'
import Navbar from "./navbar/Navbar"
import Header1 from './body/header1'
import Header2 from './body/header2'
import Konten from './body/konten'
import SkeletonLoad from './body/SkeletonLoad'
import Konten2 from './body/konten2'
import Konten3 from './body/konten3'
import Footer from './Footer'
// progress bar
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 80 ? prevProgress + 20 : prevProgress));
    }, 1000);
  
    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setLoading(false);
    }, 2000);
  
    return () => clearInterval(interval);
  }, []);
  


  return (
   

    <>
    <div className='container_utama'>
      <Navbar/>
      <LoadingBar
        color='yellow'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
       {/* <button onClick={() => setProgress(progress + 10)}>Add 10%</button>
      <button onClick={() => setProgress(progress + 20)}>Add 20%</button>
      <button onClick={() => setProgress(100)}>Complete</button> */}
      <div className="container_xxl">
        <Header1/>
        <Header2/>
        {loading ? <SkeletonLoad/> : <Konten/>}
        <Konten2/>
        <Konten3/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default App
