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
import { useTheme } from '../lib/themeStore';
import { Popup } from './PopUp';
import Authentification from './Authentification';
import { useSelector } from 'react-redux';
import { RootState } from '../stores/store';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [signIn, setSignIn] = useState(false)
  // const dispatch = useDispatch<AppDispatch>(); 
  const { data } = useSelector((state: RootState) => state.auth); 
  console.log(data)
  
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
    {signIn && <Popup onClose={handleclose} value={<Authentification onClose={handleclose}/>}/>}
    </>
  );
};

export default Header;






