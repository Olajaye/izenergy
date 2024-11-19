
import { useParams } from 'react-router-dom'
import { Battery, Sun, Zap, Wrench } from 'lucide-react';

import { useTheme } from '../stores/themeStore';

const categories = [
  {
    id: 'portable-power',
    name: 'Portable Power Station',
    icon: Battery,
    price: 39,
    quantity: 90,
    description: 'High-capacity portable power solutions for all your outdoor and backup needs.',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=1920'
  },
  {
    id: 'solar-panels',
    name: 'Solar Panels',
    icon: Sun,
    price: 39,
    quantity: 90,
    description: 'High-efficiency solar panels for residential and commercial installations.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1920'
  },
  {
    id: 'inverters',
    name: 'Inverters',
    icon: Zap,
    price: 39,
    quantity: 90,
    description: 'Reliable power inverters for solar systems and backup power solutions.',
    image: 'https://images.unsplash.com/photo-1623127899673-39264566a100?auto=format&fit=crop&q=80&w=1920'
  },
  {
    id: 'batteries',
    name: 'Lithium Battery Solutions',
    icon: Battery,
    price: 39,
    quantity: 90,
    description: 'Advanced lithium battery systems for energy storage and backup power.',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=1920'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: Wrench,
    price: 39,
    quantity: 90,
    description: 'Essential accessories and components for your energy system.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920'
  }
];

const ProductDetail = () => {
  const {id} = useParams()
  const { isDark } = useTheme();
  const category = categories.find(item=> item.id === id)
  
  return (
    <div className='pt-36 px-6'>
      <div className=" relative w-[50vw]  rounded-lg">
        <img
          src={category?.image}
          alt={category?.name}
          className="object-cover w-full h-64 rounded-lg"
        />
      </div>
      <div className="p-6 relative">
        <div className="flex items-center gap-3 mb-3">
          {category && <category.icon className={`w-6 h-6 ${
            isDark ? 'text-accent' : 'text-primary'
          }`} />}
          <h3 className="text-xl font-bold">{category?.name}</h3>
        </div>
        <p className={`${isDark ? 'text-text-dark' : 'text-background'} mb-4`}>
          {category?.description}
        </p>
        {category && <span onClick={()=> console.log("add")} className={`inline-flex items-center text-sm font-medium ${
          isDark ? 'text-accent' : 'text-primary'
        }`}>
          Add to crat
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>}
      </div>
    </div>
  )
}

export default ProductDetail