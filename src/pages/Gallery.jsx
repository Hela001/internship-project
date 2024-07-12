import React from 'react';

const Gallery = () => {
  const items = [
    {
      id: 1,
      title: 'Smartphone 1',
      image: 'y.jpg', // Path relative to the public folder
    },
    {
      id: 2,
      title: 'Smartphone 2',
      image: 'x.jpeg', // Path relative to the public folder
    },
    {
      id: 3,
      title: 'Tablet 1',
      image: 'tab1.jpeg', // Path relative to the public folder
    },
    {
      id: 4,
      title: 'Tablet 2',
      image: 'tab2.jpg', // Path relative to the public folder
    }
  ];

  return (
    <div className='max-w-screen-xl mx-auto px-4 py-8'>
        <br />
        <br />

      <h1 className='text-3xl font-bold mb-6 text-center'>Gallery</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {items.map((item) => (
          <div key={item.id} className='border rounded-lg shadow-lg overflow-hidden'>
            <img className='w-full h-48 object-cover' src={item.image} alt={item.title} />
            <div className='p-4'>
              <h2 className='text-xl font-bold mb-2'>{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
