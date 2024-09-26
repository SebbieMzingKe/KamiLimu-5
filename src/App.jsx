import React from 'react'
import CoverPage from './components/coverpage'
import HTMLFlipBook from 'react-pageflip'
import BigPicture from './components/BigPicture'
import LastPage from './components/lastpage'
import Header from './components/Header'
import Sessions from './components/Sessions'
import MapLessons from './components/MapLessons'
import Card from './components/Card'
import KeyTakeaways from './components/KeyTakeaways'
import MapLessons2 from './components/MapLessons2'
import KeyTakeaways2 from './components/KeyTakeaways2'


function App() {
  return (
    <div className='flex flex-col h-screen overflow-clip justify-center items-center bg-teal-400"] '>
      <Header/>
      <Card/>
        <HTMLFlipBook width={500} height={500} showCover={true} size='fixed' className=' gap-2 p-2'>
            <div className="bg-white flex"><CoverPage/></div>
            <div className="bg-white p-10"><MapLessons/></div>
            <div className='bg-white p-10'><MapLessons2/></div>
            <div className="bg-white p-10"><BigPicture/></div>
            <div className="bg-white p-10"><Sessions/></div>
            <div className="bg-white p-10"><KeyTakeaways/></div>
            <div className="bg-white p-10"><KeyTakeaways2/></div>

            <div className="bg-white"><LastPage/></div>
        </HTMLFlipBook>

    </div>
  )
}

export default App
