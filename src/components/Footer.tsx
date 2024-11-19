


const Footer = () => {
  return (
    <footer className="bg-background-light text-primary-light p-6">
      <div className="container mx-auto flex flex-wrap justify-between">
        
        <div className="w-full md:w-1/4 mb-6">
          <h3 className="font-bold text-lg">SolaEnergy Inc.</h3>
          <p className='text-white'>123 Solar Lane, Green City, ST 45678</p>
          <p className='text-white'>Phone: (123) 456-7890</p>
          <p>Email: <a href="mailto:info@solaenergy.com" className="text-white">info@solaenergy.com</a></p>
        </div>

        <div className="w-full md:w-1/4 mb-6">
          <h4 className="font-bold text-lg">Quick Links</h4>
          <ul className='text-white'>
            <li><a href="/" className=" hover:underline">Home</a></li>
            <li><a href="/about" className=" hover:underline">About Us</a></li>
            <li>
              <a href="/services" className=" hover:underline">Services</a>
              <ul className="ml-4 text-white">
                <li><a href="/services/residential" className="hover:underline">Residential Solar</a></li>
                <li><a href="/services/commercial" className="hover:underline">Commercial Solar</a></li>
                <li><a href="/services/storage" className="hover:underline">Energy Storage</a></li>
              </ul>
            </li>
            <li><a href="/blog" className=" hover:underline">Blog</a></li>
            <li><a href="/faqs" className=" hover:underline">FAQs</a></li>
            <li><a href="/contact" className=" hover:underline">Contact Us</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-6">
          <h4 className="font-bold text-lg">Follow Us</h4>
          <ul className='text-white'>
            <li><a href="#" className=" hover:underline">Facebook</a></li>
            <li><a href="#" className=" hover:underline">Twitter</a></li>
            <li><a href="#" className=" hover:underline">LinkedIn</a></li>
            <li><a href="#" className=" hover:underline">Instagram</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-6">
          <h4 className="font-bold text-lg">Legal Information</h4>
          <ul className='text-white'>
            <li><a href="/privacy-policy" className=" hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className=" hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        <div className="w-full mb-6">
          <h4 className="font-bold text-lg">Stay Informed!</h4>
          <p className='text-white'>Sign up for our newsletter to get the latest updates and offers.</p>
          <div className="flex mt-2">
            <input type="email" placeholder="Email Address" className="flex-1 p-2 border border-gray-300 rounded-l" />
            <button className="text-background p-2 rounded-r bg-primary-light hover:bg-primary-dark">Subscribe</button>
          </div>
        </div>

        <div className="w-full mb-6">
          <h4 className="font-bold text-lg">Certifications & Partnerships</h4>
          <img src="path/to/certification-logo.png" alt="Certification Logo" className="inline-block mr-2" />
          <img src="path/to/partner-logo.png" alt="Partner Logo" className="inline-block" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
