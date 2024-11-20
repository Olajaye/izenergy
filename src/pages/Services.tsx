
// import { Package, Wrench, RefreshCcw, WrenchIcon, Headphones } from 'lucide-react';
import { useTheme } from '../lib/themeStore';
import clsx from 'clsx';
import Marquee from 'react-fast-marquee';

// const services = [
//   {
//     id: 'energy-packages',
//     name: 'Energy Packages',
//     icon: Package,
//     description: 'Pre-configured energy solutions designed to match your specific power requirements.',
//     features: [
//       'Residential packages for homes',
//       'Commercial solutions for businesses',
//       'Scalable configurations',
//       'Warranty coverage',
//       'Professional installation'
//     ]
//   },
//   {
//     id: 'custom-solutions',
//     name: 'Custom Energy Solutions',
//     icon: Wrench,
//     description: 'Specialized energy setups tailored to your unique requirements and environment.',
//     features: [
//       'Residential customization',
//       'Commercial & industrial solutions',
//       'Rural electrification',
//       'Off-grid systems',
//       'Hybrid solutions'
//     ]
//   },
//   {
//     id: 'swap-upgrade',
//     name: 'Swap and Upgrade',
//     icon: RefreshCcw,
//     description: 'Seamless transition to modern, efficient energy solutions with minimal disruption.',
//     features: [
//       'Battery technology upgrades',
//       'System capacity expansion',
//       'Equipment modernization',
//       'Performance optimization',
//       'Environmental disposal'
//     ]
//   },
//   {
//     id: 'installation',
//     name: 'Installation Services',
//     icon: WrenchIcon,
//     description: 'Professional installation and maintenance services by certified technicians.',
//     features: [
//       'Expert system installation',
//       'Regular maintenance',
//       'Emergency repairs',
//       'System monitoring',
//       'Performance testing'
//     ]
//   },
//   {
//     id: 'consultation',
//     name: 'Energy Consultation',
//     icon: Headphones,
//     description: 'Expert guidance to help you make informed decisions about your energy needs.',
//     features: [
//       'Energy audit',
//       'Cost analysis',
//       'System planning',
//       'ROI calculations',
//       'Technical specifications'
//     ]
//   }
// ];

const Constant = [
  {
    projectname: "Service NAme",
    location: "Location of service",
    // url: "https://example.com/project-alpha",
    excerpt: "A brief description of service.",
    // tagline: "Innovative Solutions",
    imageUrls: [
      { url: 'https://picsum.photos/200/300?random=1' },
      { url: 'https://picsum.photos/200/300?random=2' },
      { url: 'https://picsum.photos/200/300?random=3' },
      { url: 'https://picsum.photos/200/300?random=1' },
      { url: 'https://picsum.photos/200/300?random=2' },
      { url: 'https://picsum.photos/200/300?random=3' },
      { url: 'https://picsum.photos/200/300?random=4' },
      { url: 'https://picsum.photos/200/300?random=5' },
      { url: 'https://picsum.photos/200/300?random=6' },
      { url: 'https://picsum.photos/200/300?random=7' },
      { url: 'https://picsum.photos/200/300?random=8' },
    ],
  },
  {
    projectname: "Service NAme",
    location: "Location of service",
    // url: "https://example.com/project-alpha",
    excerpt: "A brief description of service.",
    // tagline: "Innovative Solutions",
    imageUrls: [
      { url: 'https://picsum.photos/200/300?random=1' },
      { url: 'https://picsum.photos/200/300?random=2' },
      { url: 'https://picsum.photos/200/300?random=3' },
      { url: 'https://picsum.photos/200/300?random=1' },
      { url: 'https://picsum.photos/200/300?random=2' },
      { url: 'https://picsum.photos/200/300?random=3' },
      { url: 'https://picsum.photos/200/300?random=4' },
      { url: 'https://picsum.photos/200/300?random=5' },
      { url: 'https://picsum.photos/200/300?random=6' },
      { url: 'https://picsum.photos/200/300?random=7' },
      { url: 'https://picsum.photos/200/300?random=8' },
    ],
  },
  {
    projectname: "Service NAme",
    location: "Location of service",
    // url: "https://example.com/project-alpha",
    excerpt: "A brief description of service.",
    // tagline: "Innovative Solutions",
    imageUrls: [
      { url: 'https://picsum.photos/200/300?random=1' },
      { url: 'https://picsum.photos/200/300?random=2' },
      { url: 'https://picsum.photos/200/300?random=3' },
      { url: 'https://picsum.photos/200/300?random=1' },
      { url: 'https://picsum.photos/200/300?random=2' },
      { url: 'https://picsum.photos/200/300?random=3' },
      { url: 'https://picsum.photos/200/300?random=4' },
      { url: 'https://picsum.photos/200/300?random=5' },
      { url: 'https://picsum.photos/200/300?random=6' },
      { url: 'https://picsum.photos/200/300?random=7' },
      { url: 'https://picsum.photos/200/300?random=8' },
    ],
  },
  {
    projectname: "Service NAme",
    location: "Location of service",
    // url: "https://example.com/project-alpha",
    excerpt: "A brief description of service.",
    // tagline: "Innovative Solutions",
    imageUrls: [
      { url: 'https://picsum.photos/200/300?random=1' },
      { url: 'https://picsum.photos/200/300?random=2' },
      { url: 'https://picsum.photos/200/300?random=3' },
      { url: 'https://picsum.photos/200/300?random=1' },
      { url: 'https://picsum.photos/200/300?random=2' },
      { url: 'https://picsum.photos/200/300?random=3' },
      { url: 'https://picsum.photos/200/300?random=4' },
      { url: 'https://picsum.photos/200/300?random=5' },
      { url: 'https://picsum.photos/200/300?random=6' },
      { url: 'https://picsum.photos/200/300?random=7' },
      { url: 'https://picsum.photos/200/300?random=8' },
    ],
  },
  {
    projectname: "Service NAme",
    location: "Location of service",
    // url: "https://example.com/project-alpha",
    excerpt: "A brief description of service.",
    // tagline: "Innovative Solutions",
    imageUrls: [
      { url: 'https://picsum.photos/200/300?random=1' },
      { url: 'https://picsum.photos/200/300?random=2' },
      { url: 'https://picsum.photos/200/300?random=3' },
      { url: 'https://picsum.photos/200/300?random=1' },
      { url: 'https://picsum.photos/200/300?random=2' },
      { url: 'https://picsum.photos/200/300?random=3' },
      { url: 'https://picsum.photos/200/300?random=4' },
      { url: 'https://picsum.photos/200/300?random=5' },
      { url: 'https://picsum.photos/200/300?random=6' },
      { url: 'https://picsum.photos/200/300?random=7' },
      { url: 'https://picsum.photos/200/300?random=8' },
    ],
  },
];

const Services = () => {
  const { isDark } = useTheme();

  return (
    <>
      <div className={`min-h-screen ${isDark ? 'bg-background' : 'bg-text'}`}>
        {/* Hero Section */}
        <div className="relative pt-24">
          <div className="absolute inset-0">
            <img
              src="/izsmpri.png"
              alt="Service Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
          </div>
          <div className="relative container mx-auto px-4 py-24">
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
              Our Services
            </h1>
            <p className="text-xl text-text-dark max-w-2xl">
              Comprehensive energy solutions tailored to your needs, backed by expert consultation and professional installation.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        {/* <div className="container mx-auto px-4 py-16">
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
        </div> */}

        {/* CTA Section */}
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
      </div>


      <section
        id="section"
        className={`pt-20 sm:h-fit relative w-full justify-center flex flex-col items-center ${isDark ? 'bg-background' : 'bg-text'}`}
        >
        {Constant.map((project: any, index: number) => {
          const { location, imageUrls, excerpt, tagline, projectname } =
            project;

          return (
            <div
              key={index}
              className={clsx(
                "sticky text-accent-dark overflow-hidden top-0 sm:h-[75vh] pb-24 pt-24 shrink-0 w-full",
                index % 2 == 0 ? "bg-background text-black" : "bg-background-light text-white"
              )}
            >
              <div id="container" className="px-6 sm:px-24 w-full h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 justify-between py-6 px-6 border-b-black">
                  <div className="">
                    <h3 className="text-3xl font-bebas">{projectname}</h3>
                    <div className="flex xl:flex-row flex-col gap-3 sm:gap-6 xl:items-center">
                      <span className="font-bold text-xl">{location}</span>
                      <span
                        className={clsx(
                          "border-2  italic rounded-full px-2 py-2 w-fit",
                          index % 2 == 0
                            ? "bg-white text-black border-black"
                            : "bg-black text-white border-white"
                        )}
                      >
                        {tagline}
                      </span>
                    </div>
                  </div>

                  <div className="">
                    <p>{excerpt}</p>
                    {/* <a
                      href={url}
                      target="_blank"
                      className={clsx(
                        "bg-black font-bebas w-fit h-fit shrink-0  border-solid px-6 py-2 rounded-full border-2 duration-300 ",
                        index % 2 == 0
                          ? "bg-black text-white border-white hover:bg-white hover:border-black hover:text-black"
                          : "bg-white text-black border-white hover:bg-black hover:border-white hover:text-white"
                      )}
                    >
                      See More
                    </a> */}
                  </div>
                </div>
                <div className="relative flex -mx-[50%]">
                  <Marquee
                    className="w-fit overflow-hidden"
                    speed={90}
                    pauseOnHover
                  >
                    {imageUrls?.map((image: any, index: number) => {
                      return (
                        <div
                          key={index}
                          className="w-[88vw] overflow-hidden shrink-0 cursor-pointer flex items-center justify-center sm:w-[450px] aspect-video"
                        >
                          <img
                            loading="lazy"
                            src={image?.url || ""}
                            alt="Images"
                            width={200}
                            height={300}
                            className="h-full w-full object-cover px-1"
                          />
                        </div>
                      );
                    })}
                  </Marquee>
                </div>
              </div>
            </div>
          );
        })}

        <div className="sticky text-black top-82 bg-slate-600 opacity-0 h-[600px] shrink-0 w-full"></div>
      </section> 
    </>
  );
};

export default Services;





 