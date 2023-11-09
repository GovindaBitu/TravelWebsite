import React, { useState } from 'react'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'


const sliderData = [
  {
    url:'https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?auto=format&fit=crop&q=80&w=1375&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    url:'https://images.unsplash.com/photo-1698252686757-b0100f26987e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    url:'https://images.unsplash.com/photo-1682687981907-170c006e3744?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

const Carousel = () => {
  const [slide, setSlide]= useState(0)
  const length = sliderData.length
    // console.log(length)
  const prevSlide =()=>{
    setSlide(slide=== length - 1 ? 0 : slide + 1)
  }
  const nextSlide =()=>{
    setSlide( slide === 0 ? length - 1 : slide-1)
  }
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
      <BsArrowLeft onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8' />
      <BsArrowRight onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8' />
     { sliderData.map((item, index)=>(
        <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
          {index === slide && <img className='w-full rounded-md' src={item.url} alt='/' />}
        </div>
      ))}
    </div>
  )
}

export default Carousel
