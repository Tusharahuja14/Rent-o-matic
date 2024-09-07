import React from 'react'; 
import { Link } from 'react-router-dom';

const data = [
  { 
    id: 1, 
    name: "Equipments", 
    url: "https://plus.unsplash.com/premium_photo-1682142169420-d0ef7507ef01?q=80&w=2686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "High-quality equipment for various industrial and personal use, ensuring reliability and performance." 
  },
  { 
    id: 2, 
    name: "Cars", 
    url: "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A collection of luxury and sports cars, combining style, speed, and innovation." 
  },
  { 
    id: 3, 
    name: "Bikes", 
    url: "https://images.pexels.com/photos/9269111/pexels-photo-9269111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Top-tier motorcycles designed for adventure, speed, and endurance." 
  },
  { 
    id: 4, 
    name: "Furniture", 
    url: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Elegant and modern furniture pieces to enhance the aesthetics of any space." 
  },
  { 
    id: 5, 
    name: "Party supplies", 
    url: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "All the essentials to make your parties vibrant and memorable." 
  },
  { 
    id: 6, 
    name: "Dress", 
    url: "https://qny.queenly.com/wardrobe/wardrobe-1592010502167-extraImage-4.jpg",
    description: "A stunning collection of dresses perfect for any occasion, blending fashion with comfort." 
  },
  {
    id: 7,
    name: "Home",
    url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Comfortable and affordable rental homes offering modern amenities in prime locations" 
  }
];

const Card = () => {
  return (
    <section className='bg-gray-200 text-gray-800 py-6'>
      <h1 className='text-3xl text-center mb-6'>Category</h1>
      <div className='px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {data.map((item) => (
            <Link to={`/item/${item.id}`} key={item.id} className='w-full'>
              <article className='card bg-gray-300 rounded-lg p-4 text-center'>
                <h2 className='text-gray-800 mb-2 text-lg font-semibold'>{item.name}</h2>
                <img
                  className='w-full h-[10rem] object-cover rounded-md mb-2'
                  src={item.url}
                  alt={item.name}
                />
                <p className='text-sm'>{item.description}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Card;
