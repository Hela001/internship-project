import React from 'react';

const Deals = () => {
  const deals = [
    {
      id: 1,
      title: 'Smartphone M50 (4/128Go)',
      description: 'Latest smartphone with advanced features.',
      image: 'x.jpeg', // Example image URL
      price: '$699'
    },
    {
      id: 2,
      title: 'SmartPhone infinix',
      description: 'High performance smartphone with sleek design.',
      image: 'y.jpg', // Example image URL
      price: '$799'
    },
    {
      id: 3,
      title: 'iPad',
      description: 'Powerful tablet for all your entertainment needs.',
      image: 'tab1.jpeg', // Example image URL
      price: '$499'
    },
    {
      id: 4,
      title: 'Tablet Pro',
      description: 'Professional grade tablet for work and play.',
      image: 'tab2.jpg', // Example image URL
      price: '$899'
    }
  ];

  return (
    <div className='max-w-screen-xl mx-auto px-4 py-8'>
        <br />
        <br />
        
      <h1 className='text-3xl font-bold mb-6 text-center'>Special Offers</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {deals.map((deal) => (
          <div key={deal.id} className='border rounded-lg shadow-lg overflow-hidden'>
            <img className='w-full h-48 object-cover' src={deal.image} alt={deal.title} />
            <div className='p-4'>
              <h2 className='text-xl font-bold mb-2'>{deal.title}</h2>
              <p className='text-gray-700 mb-2'>{deal.description}</p>
              <p className='text-gray-900 font-bold mb-4'>{deal.price}</p>
              <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
