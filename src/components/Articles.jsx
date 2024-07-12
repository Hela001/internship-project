import React from 'react';

const Articles = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* SmartWatches */}
        <div className='relative'>
          <h3 className='absolute top-2 left-2 text-white text-2xl font-bold bg-gray-900 bg-opacity-75 px-4 py-1 rounded'>
            SmartWatches
          </h3>
          <img
            className='w-full h-96 object-cover rounded-lg shadow-lg'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Smartwatch-828786.jpg/1024px-Smartwatch-828786.jpg'
            alt='SmartWatches'
          />
        </div>

        {/* Tablets */}
        <div className='relative'>
          <h3 className='absolute top-2 left-2 text-white text-2xl font-bold bg-gray-900 bg-opacity-75 px-4 py-1 rounded'>
            Tablets
          </h3>
          <img
            className='w-full h-96 object-cover rounded-lg shadow-lg'
            src='https://nypost.com/wp-content/uploads/sites/2/2022/09/tabletfeat.jpg?quality=75&strip=all&w=744'
            alt='Tablets'
          />
        </div>

        {/* SmartPhones */}
        <div className='relative'>
          <h3 className='absolute top-2 left-2 text-white text-2xl font-bold bg-gray-900 bg-opacity-75 px-4 py-1 rounded'>
            SmartPhones
          </h3>
          <img
            className='w-full h-96 object-cover rounded-lg shadow-lg'
            src='https://www.cnet.com/a/img/resize/592e5101f4fee1caf72f9e0169c8784ddf9eb12a/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&fit=crop&height=576&width=768'
            alt='SmartPhones'
          />
        </div>
      </div>
    </div>
  );
};

export default Articles;
