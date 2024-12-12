import React from 'react'

const InfoCard = () => {
  return (
    <>
    <div className='mt-28 flex justify-evenly text-7xl font-semibold h-56'>
       <p>302+</p><p className='font-thin'>|</p>
       <p>25</p><p className='font-thin'>|</p>
       <p>510+</p><p className='font-thin'>|</p>
       <p>35</p>
    </div>
    <div id='info' className=' flex justify-evenly text-xl  -mt-36 font-medium h-56'>
        <p>Room & Suites</p>
        <p className='ml-9'>Restaurant</p>
        <p>Exceptional Food</p>
        <p>Destination</p>
    </div>
    </>
  )
}

export default InfoCard