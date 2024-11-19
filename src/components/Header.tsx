import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sun, 
  ShoppingCart, 
  User,
  Menu,
  X,
  Clock,
  Phone,
  Moon
} from 'lucide-react';
// import { useCart } from '../stores/cartSlice';
import { useTheme } from '../stores/themeStore';
import { Popup } from './PopUp';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [signIn, setSignIn] = useState(false)
  // const { items, } = useCart();

  const { isDark, toggleTheme } = useTheme();

  const handleclose = ()=>{
    setSignIn(false)
  }
  

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about',  submenu: [
      { name: 'Web Development', path: '/services/web-development' },
      { name: 'SEO', path: '/services/seo' },
      { name: 'App Development', path: '/services/app-development' },
    ]},
    { name: 'Products', path: 'products' },
    { name: 'Services', path: '/services', submenu: [
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'SEO', path: '/services/seo' },
        { name: 'App Development', path: '/services/app-development' },
    ]},
    
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];
  



  return (
    <>
    <header className={`fixed w-full z-50 top-0 left-0 right-0 transform-gpu ease-out-cubic duration-300 bg-base/80  ${isDark ? " bg-accent-dark transition-colors": "bg-background-dark" }`}>
      <div className={`py-1 ${isDark ? "bg-background  transition-colors": " bg-accent-dark"} `}>
        <div className={`container mx-auto px-4 flex justify-between items-center text-sm  ${isDark ? "text-text": "text-background-light"} `}>
          <div className="flex items-center space-x-4">
            <div className="flex items-start">
              <Clock className="w-6 h-6 mr-2" />
              <span>Mon-Fri: 9AM-6PM</span>
            </div>
            <div className="flex items-start">
              <Phone className="w-6 h-6 mr-2" />
              <span>Support: support@myizenergy.com</span>
            </div>
          </div>
        </div>
      </div>
      


      <nav className="container mx-auto px-4 py-4">
        {/* <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={`${isDark ?'/Izenergylogolight.png' :'/Izenergylogodark.png'}`} alt="logo" className='w-[200px]' /> 
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:text-primary transition-colors ${
                  isDark ? 'text-background' : 'text-accent-light'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-primary-dark/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-background" />
              ) : (
                <Moon className="w-5 h-5 text-accent" />
              )}
            </button>
            <Link to="/cart" className="relative">
              <ShoppingCart className={`w-6 h-6 ${ isDark ? 'text-background' : 'text-accent-light'}`} />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-text text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
            <Link to="/account">
              <User className={`w-6 h-6 ${isDark ? 'text-background' : 'text-accent-light'}`} />
            </Link>
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${ isDark ? 'text-background' : 'text-accent-light'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isDark ? 'text-background' : 'text-accent-light'}`} />
              )}
            </button>
          </div>
        </div> */}

        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={`${isDark ? '/Izenergylogolight.png' : '/Izenergylogodark.png'}`}
              alt="logo"
              className="w-[200px]"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`hover:text-primary transition-colors ${
                    isDark ? 'text-background' : 'text-accent-light'
                  }`}
                >
                  {item.name}
                </Link>
                
                
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute -left-7 hidden mt-2 space-y-2 bg-white rounded-md shadow-lg group-hover:block z-10 w-[200px]">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        to={subitem.path}
                        className={`block px-4 py-2 text-sm hover:bg-primary hover:text-white transition-colors ${
                          isDark ? 'text-background' : 'text-accent-light'
                        }`}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center md:space-x-6 space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-primary-dark/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-background" />
              ) : (
                <Moon className="w-5 h-5 text-accent" />
              )}
            </button>
            <Link to="/cart" className="relative">
              <ShoppingCart
                className={`w-6 h-6 ${isDark ? 'text-background' : 'text-accent-light'}`}
              />
              {[].length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-text text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {[].length}
                </span>
              )}
            </Link>
            <div onClick={()=>setSignIn(true)}>
              <User
                className={`w-6 h-6 ${isDark ? 'text-background' : 'text-accent-light'}`}
              />
            </div>
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${isDark ? 'text-background' : 'text-accent-light'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isDark ? 'text-background' : 'text-accent-light'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 hover:text-primary ${
                  isDark ? 'text-background' : 'text-accent-light'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      
    </header>
    {signIn && <Popup onClose={handleclose} value={<LoginForm/>}/>}
    </>
  );
};

export default Header;



const LoginForm = () => {
  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [form, setForm] = useState("Login")
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError(""); // Reset error message

    // Basic validation
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    // Simulate form submission
    setIsSubmitting(true);

    // Here you can add API request logic
    setTimeout(() => {
      // Simulate a successful login
      setIsSubmitting(false);
      console.log("Login successful", { email, password });
      // Redirect user or handle after login logic here
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="bg-white px-8 pb-6 rounded-lg text-black shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-background-light text-start">{form === "Login" ? "Login" : "Register"}</h2>

        {error && <div className="bg-red-200 text-red-600 p-2 mb-4 text-sm">{error}</div>}

        <form onSubmit={handleSubmit}>
          {form !== "Login" && <div className="mb-4">
            <label htmlFor="name" className="block text-start text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>}

          <div className="mb-4">
            <label htmlFor="email" className="block text-start text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-start text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 text-white bg-blue-500 rounded-md ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Log In"}
          </button>
        </form>

        { form === "Login" 
          ? 
            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account? <span onClick={()=> setForm("Register")} className="text-blue-500 cursor-pointer">Sign up</span>
            </p> 
          : 
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account? <span onClick={()=> setForm("Login")} className="text-blue-500 cursor-pointer">Sign in</span>
            </p> 
        }
      </div>
    </div>
  );
};


