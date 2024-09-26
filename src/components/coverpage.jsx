import React from 'react'
import cover from "../assets/cover-4.jpg"

function coverpage() {
  return (
    <div className='bg-slate-400 h-full w-full'>
      <img src={cover} alt="" className='h-full w-full object-cover'/>
</div>
  )
}

export default coverpage
