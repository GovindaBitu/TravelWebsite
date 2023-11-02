import React from 'react'
import img1 from '../assets/6.jpg'
import img2 from '../assets/2.beach.jpg'
import img3 from '../assets/3.beach.jpg'
import img4 from '../assets/4.beach.jpg'
import img5 from '../assets/5.jpg'

const Destinations = () => {
  return (
    <div className='max-w-[1240px]  mx-auto py-16 px-4 text-center'>
     <h1>All-Inclusive Resorts</h1>
     <p className='py-4'>On the India's Best Beach</p>
     <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={img1} alt="" />
        <img className='w-full h-full object-cover' src={img2} alt="" />
        <img className='w-full h-full object-cover' src={img3} alt="" />
        <img className='w-full h-full object-cover' src={img4} alt="" />
        <img className='w-full h-full object-cover' src={img5} alt="" />
     </div>
    </div>
  )
}

export default Destinations
