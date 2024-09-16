import React from 'react'
import Cover from '../components/Cover'



import './Home.css'
import Story from '../components/Story';
import Services from '../components/Services';



function Home() {
  return (
    <div>
      <Cover />
      <Story />

      <div className='relative overflow-hidden'>
        <img src="/images/story/467259.jpg" alt="" className='h-[300px] lg:h-[500px] w-full animate-zoom' />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b  from-black via-transparent to-transparent'></div>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t  from-black via-transparent to-transparent'></div>
      </div>

      <Services />

      <div className='relative overflow-hidden'>
        <img src="/images/story/spiderman-ps4-games-hd-4k-wallpaper-preview.jpg" alt="" className='h-[300px] lg:h-[500px] w-full animate-zoom' />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b  from-black via-transparent to-transparent'></div>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t  from-black via-transparent to-transparent'></div>
      </div>

      

    </div>
  )
}

export default Home