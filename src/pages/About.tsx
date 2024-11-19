import { useTheme } from "../stores/themeStore";


const About = () => {
  const { isDark } = useTheme();
  return (
    <div className={`min-h-screen ${isDark ? 'bg-primary-dark' : 'bg-text'}`}>
    {/* Hero Section */}
    <div className="relative pt-24">
      <div className="absolute inset-0">
        <img
          src="/izenergyhilux.png"
          alt="Service Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-background/70" />
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
          About Us
        </h1>
        <p className="text-xl text-text-dark max-w-2xl">
          Comprehensive energy solutions tailored to your needs, backed by expert consultation and professional installation.
        </p>
      </div>
    </div>
    <div className='mt-30 pt-32 h-[400px] w-full'></div>
    </div>
  )
}

export default About