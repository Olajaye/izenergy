import { Battery, Sun, Zap, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../stores/themeStore';

const categories = [
  {
    id: 'portable-power',
    name: 'Portable Power Station',
    icon: Battery,
    description: 'High-capacity portable power solutions for all your outdoor and backup needs.',
    image: '/izsmpricc.png'
  },
  {
    id: 'solar-panels',
    name: 'Solar Panels',
    icon: Sun,
    description: 'High-efficiency solar panels for residential and commercial installations.',
    image: '/izsmpric.png'
  },
  {
    id: 'inverters',
    name: 'Inverters',
    icon: Zap,
    description: 'Reliable power inverters for solar systems and backup power solutions.',
    image: '/izsmpri.png'
  },
  {
    id: 'batteries',
    name: 'Lithium Battery Solutions',
    icon: Battery,
    description: 'Advanced lithium battery systems for energy storage and backup power.',
    image: '/Izs1.png'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: Wrench,
    description: 'Essential accessories and components for your energy system.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920'
  }
];

const Products = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-background' : 'bg-text'}`} id='products'>
      {/* Hero Section */}
      <div className="relative pt-24">
        <div className="absolute inset-0">
          <img
            src="/izsmpricc.png"
            alt="Service Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-background/70" />
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Our Products
          </h1>
          <p className="text-xl text-text-dark max-w-2xl">
            Discover our range of sustainable energy solutions designed to power your life while protecting the environment.
          </p>
        </div>
      </div>
      {/* <div className="relative bg-gradient-to-r from-background-light to-primary-dark py-24 ">
        <div className="container mx-auto px-4 pt-24">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Our Products
          </h1>
          <p className="text-xl text-text-dark max-w-2xl">
            Discover our range of sustainable energy solutions designed to power your life while protecting the environment.
          </p>
        </div>
      </div> */}

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className={`group relative overflow-hidden rounded-lg ${
                isDark ? 'bg-background-light' : 'bg-secondary'
              } transition-transform hover:scale-105`}
            >
              <div className="aspect-w-16 relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6 relative">
                <div className="flex items-center gap-3 mb-3">
                  <category.icon className={`w-6 h-6 ${
                    isDark ? 'text-accent' : 'text-primary'
                  }`} />
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
                <p className={`${isDark ? 'text-text-dark' : 'text-background'} mb-4`}>
                  {category.description}
                </p>
                <span className={`inline-flex items-center text-sm font-medium ${
                  isDark ? 'text-accent' : 'text-primary'
                }`}>
                  View Products
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className={`${isDark ? 'bg-background-dark' : 'bg-secondary'} py-16`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className={`rounded-lg overflow-hidden ${
                  isDark ? 'bg-background' : 'bg-text'
                }`}
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1592833159155-c62df1b65634' : item === 2 ? '1509391366360-2e959784a276' : item === 3 ? '1623127899673-39264566a100' : '1620714223084-8fcacc6dfd8d'}?auto=format&fit=crop&q=80&w=800`}
                    alt="Featured Product"
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Featured Product {item}</h3>
                  <p className={`text-sm ${isDark ? 'text-text-dark' : 'text-background'} mb-3`}>
                    High-quality sustainable energy solution for your needs.
                  </p>
                  <button className="bg-primary hover:bg-primary-dark text-text px-4 py-2 rounded-lg text-sm transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;