import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src="ways.png" alt="/"
        className='w-full h-full object-cover'
        />
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Find your special artical </h1>
                <h2 className='text-4xl py-4 italic'>With TTSHOP</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, eveniet illo excepturi earum optio incidunt asperiores laboriosam alias provident totam et suscipit aut distinctio beatae reiciendis, nam id voluptate deleniti.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero