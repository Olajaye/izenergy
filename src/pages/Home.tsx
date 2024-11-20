
import {  ShieldAlertIcon, DollarSignIcon, MessageCircleCode } from 'lucide-react';
import { Package, Wrench, RefreshCcw, WrenchIcon, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../lib/themeStore';
import Counter from '../components/Counter';
import Marquee from 'react-fast-marquee';

const services = [
  {
    id: 'energy-packages',
    name: 'Energy Packages',
    icon: Package,
    description: 'Pre-configured energy solutions designed to match your specific power requirements.',
    features: [
      'Residential packages for homes',
      'Commercial solutions for businesses',
      'Scalable configurations',
      'Warranty coverage',
      'Professional installation'
    ]
  },
  {
    id: 'custom-solutions',
    name: 'Custom Energy Solutions',
    icon: Wrench,
    description: 'Specialized energy setups tailored to your unique requirements and environment.',
    features: [
      'Residential customization',
      'Commercial & industrial solutions',
      'Rural electrification',
      'Off-grid systems',
      'Hybrid solutions'
    ]
  },
  {
    id: 'swap-upgrade',
    name: 'Swap and Upgrade',
    icon: RefreshCcw,
    description: 'Seamless transition to modern, efficient energy solutions with minimal disruption.',
    features: [
      'Battery technology upgrades',
      'System capacity expansion',
      'Equipment modernization',
      'Performance optimization',
      'Environmental disposal'
    ]
  },
  {
    id: 'installation',
    name: 'Installation Services',
    icon: WrenchIcon,
    description: 'Professional installation and maintenance services by certified technicians.',
    features: [
      'Expert system installation',
      'Regular maintenance',
      'Emergency repairs',
      'System monitoring',
      'Performance testing'
    ]
  },
  {
    id: 'consultation',
    name: 'Energy Consultation',
    icon: Headphones,
    description: 'Expert guidance to help you make informed decisions about your energy needs.',
    features: [
      'Energy audit',
      'Cost analysis',
      'System planning',
      'ROI calculations',
      'Technical specifications'
    ]
  }
];

const imageUrls= [
  { url: '/Izs1.png'},
  { url: '/Izs12.png'},
  { url: '/izsmpri.png'},
  { url: '/izsmpric.png'},
  { url: '/izenergylogoFP_page-0008.jpg'}
]

const Home = () => {
  const { isDark } = useTheme();

  return (
    <>
      <section className={`${isDark ? 'bg-primary-dark text-white' : 'bg-white' } p-2`}>
        <div className='container mx-auto pt-24'>
          <p  className={`my-5 text-center md:text-left  ${isDark ? 'text-accent-light' : 'bg-white'}`}>We are all about Solar & renewable energy</p>

          <div className='md:flex md:justify-between'>
            <div className='md:max-w-[600px]'>
              <h1 className='text-2xl md:text-5xl md:max-w-[600px]'>Discover our range of solar solutions, designed to brighten your world</h1>
            </div>

            <div className='flex justify-end items-end'>
             <Link to={"/products"} className='md:p-4 p-2 border-2 rounded-full border-accent-light hover:text-background-light hover:bg-accent-light transition-all duration-1000 text-2xl'>
              Shop now!!!
             </Link>
            </div>
          </div>

          <div className='h-[400px] w-[100%] my-5 md:my-10 rounded-t-xl'>
            <img src="/izenergylogoFP_page-0008.jpg" alt=""  className='h-[400px] w-full rounded-t-xl'/>
          </div>


          <p className={`text-center ${isDark ? 'text-accent-light' : 'text-primary-light'} my-5`}>We are all about Solar & renewable energy</p>
          <h1 className='text-2xl md:text-5xl text-center md:px-28'>Our team of experts bring to your home and office a customer-centered solution</h1>
        </div>
      </section>

      <div className="my-16">
        <Marquee
          className=""
          speed={70}
          pauseOnHover
        >
          {imageUrls?.map((image: any, index: number) => {
            return (
              <div
                key={index}
                className=""
              >
                <img
                  loading="lazy"
                  src={image?.url || ""}
                  alt="Images"
                  width={400}
                  height={400}
                  className="w-[200px] md:w-[400px] h-[200px] md:h-[300px] mx-5 object-cover px-1 rounded-3xl"
                />
              </div>
            );
          })}
        </Marquee>
      </div>

      {/* Features Section */}
      <section className={`py-20`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-8 rounded-lg ${
              isDark ? 'bg-background-dark' : 'bg-secondary'
            }`}>
              <div className='w-16 h-16 rounded-full border-2 border-accent-dark flex justify-center items-center mb-4'>
              <DollarSignIcon className=" w-10 h-10 text-accent-light" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-accent-light">Flexible payment options</h3>
              <p className={isDark ? 'text-text-dark' : 'text-background'}>
                We'll customize your agreement based on your individual needs
              </p>
            </div>
            <div className={`p-8 rounded-lg ${
              isDark ? 'bg-background-dark' : 'bg-secondary'
            }`}>
               <div className='w-16 h-16 rounded-full border-2 border-accent-dark flex justify-center items-center mb-4'>
              <MessageCircleCode className=" w-10 h-10 text-accent-light" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-accent-light">System performance</h3>
              <p className={isDark ? 'text-text-dark' : 'text-background'}>
                Manage your solar system from anywhere in the world with 24/7 mobile monitoring.
              </p>
            </div>
            <div className={`p-8 rounded-lg ${
              isDark ? 'bg-background-dark' : 'bg-secondary'
            }`}>
              <div className='w-16 h-16 rounded-full border-2 border-accent-dark flex justify-center items-center mb-4'>
              <ShieldAlertIcon className=" w-10 h-10 text-accent-light" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-accent-light">Power Solutions</h3>
              <p className={isDark ? 'text-text-dark' : 'text-background'}>
                Portable power stations and inverters for all your energy needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* counter */}
      <section className={`${isDark ? 'bg-background-light text-secondary-light' : 'bg-secondary' }  p-10`}>
        <div className='container mx-auto md:flex justify-around items-center'>
          <div className={`md:border-r-2 ${isDark ? 'border-secondary' : 'border-background-light' } text-center md:w-1/4 min-[300px]:w-full md:m-0 min-[300px]:my-10 px-5`}>
            <h2 className='text-5xl font-semibold '>
              <Counter 
                from={0}
                to={25}
                Component='span'
              />
            </h2>
            <p className={`text-xl my-3 min-[300px]:mx-auto min-[300px]:w-3/5 md:w-full ${isDark && "text-secondary"}`}>
              Years warranty on the equipment.
            </p>
          </div>
          <div className={`md:border-r-2 ${isDark ? 'border-secondary' : 'border-background-light' } text-center md:w-1/4 min-[300px]:w-full md:m-0 min-[300px]:my-10 px-5 `}>
            <h2 className='text-5xl font-semibold'>
              <Counter 
                from={0}
                to={4.5}
                Component='span'
                suffix='+'
                noOfDecimalPoints={1}
              />
            </h2>
            <p className={`text-xl my-3 min-[300px]:mx-auto min-[300px]:w-3/5 md:w-full ${isDark && "text-secondary"}`}>
              Stars from over 9000 customers.
            </p>
          </div>
          <div className={`md:border-r-2 ${isDark ? 'border-secondary' : 'border-background-light' } text-center md:w-1/4 min-[300px]:w-full md:m-0 min-[300px]:my-10 px-5`}>
            <h2 className='text-5xl font-semibold'>
              <Counter 
                from={0}
                to={100}
                Component='span'
                suffix='+'
              />
            </h2>
            <p className={`text-xl my-3 min-[300px]:mx-auto min-[300px]:w-3/5 md:w-full ${isDark && "text-secondary"}`}>
              Professionals in our team.
            </p>
          </div>
          <div className={`${isDark ? 'border-secondary' : 'border-background-light' } text-center md:w-1/4 min-[300px]:w-full md:m-0 min-[300px]:my-10 px-5`}>
            <h2 className='text-5xl font-semibold'>
              <Counter 
                from={0}
                to={90}
                Component='span'
                suffix='+'
              />
            </h2>
            <p className={`text-xl my-3 min-[300px]:mx-auto min-[300px]:w-3/5 md:w-full ${isDark && "text-secondary"}`}>
              we take responsibility.
            </p>
          </div>  
        </div>
      </section>
          
      <section>
        <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`rounded-lg p-6 ${
                    isDark ? 'bg-background-light' : 'bg-secondary'
                  } transition-transform hover:scale-105`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className={`w-8 h-8 ${
                      isDark ? 'text-accent' : 'text-primary'
                    }`} />
                    <h3 className="text-xl font-bold">{service.name}</h3>
                  </div>
                  <p className={`${isDark ? 'text-text-dark' : 'text-background'} mb-6`}>
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <svg
                          className={`w-5 h-5 ${isDark ? 'text-accent' : 'text-primary'}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className={isDark ? 'text-text-dark' : 'text-background'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 bg-primary hover:bg-primary-dark text-text px-6 py-3 rounded-lg font-medium transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
        </div>
        <div className={`${isDark ? 'bg-background-light' : 'bg-secondary'} py-16`}>
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className={`${isDark ? 'text-text-dark' : 'text-background'} mb-8 max-w-2xl mx-auto`}>
                Contact our team of experts today to discuss your energy needs and discover the perfect solution for your requirements.
              </p>
              <button className="bg-accent hover:bg-accent/90 text-background px-8 py-4 rounded-lg font-medium transition-colors">
                Schedule a Consultation
              </button>
            </div>
        </div>
      </section>
    </>
  );
};

export default Home;