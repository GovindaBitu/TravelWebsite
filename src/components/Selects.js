import React from 'react'
import Island1 from '../assets/island.1.jpg'
import Island2 from '../assets/island.2.jpg'
import Island3 from '../assets/island.3.jpg'
import Island4 from '../assets/island.4.jpg'
import Island5 from '../assets/island.5.jpg'
import Island6 from '../assets/island.6.jpg'
import SelectsCard from './SelectsCard'

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
     <SelectsCard bg={Island1} text='Maldives'/>
     <SelectsCard bg={Island2} text='Bally'/>
     <SelectsCard bg={Island3} text='Gutur'/>
     <SelectsCard bg={Island4} text='Rk Island'/>
     <SelectsCard bg={Island5} text='Merine Drive'/>
     <SelectsCard bg={Island6} text='Austria'/>
     
    </div>
  )
}

export default Selects
