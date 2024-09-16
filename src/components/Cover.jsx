import React, { useEffect, useState } from 'react'
import '/src/pages/Home.css'


function Cover() {

   
    return (
        <div className='sticky top-0 z-[-1]'>
            {/* Cover Image */}
            <img src="/images/1hwlddc6xnq21.jpg" alt="" className='w-full  lg:h-[650px] ' />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent'></div>
            
            {/* Glass box with heading and caption */}
            <div className="absolute inset-0 flex items-center justify-start md:ml-14 lg:ml-32">
                <div className="bg-neutral-700/40  rounded-xl p-2 lg:p-8 text-left text-orange-500 w-3/4 sm:w-1/2 lg:w-2/5 ml-4 sm:ml-8 font-serif">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold mb-4 text-3d" >Guardian's Gate</h1>
                    <p className="text-sm sm:text-base md:text-md lg:text-xl text-3d">"A Voice for Your Grievances, A Shield for the City."</p>
                </div>
            </div>
        </div>




    )
}

export default Cover