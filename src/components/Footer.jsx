import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Social icons
import HyperText from './magicui/hyper-text'; // Assuming HyperText is used for headings

const Footer = () => {
  return (
    <footer className="bg-[#191917] text-white py-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-10 lg:space-y-0 px-4">

        {/* Branding Section */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
          <HyperText className="text-3xl font-bold" text={"Kalp-Medika"} />
          <p className="text-sm text-gray-400 max-w-sm">
            Your one-stop solution for pharmaceutical supply chain tracking.
            Ensuring transparency and efficiency every step of the way.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col space-y-4 justify-center items-center">
          <HyperText className="text-2xl font-bold" text={"Quick Links"} />
          <ul className="text-sm flex gap-2 justify-center items-center text-gray-400">
            <li><a href="#services" className="hover:text-white transition duration-300">Services</a></li>
            <li><a href="#about" className="hover:text-white transition duration-300">About Us</a></li>
            <li><a href="#contact" className="hover:text-white transition duration-300">Contact</a></li>
            <li><a href="#blog" className="hover:text-white transition duration-300">Blog</a></li>
          </ul>
        </div>

        {/* Social Icons Section */}
        <div className="flex-1 flex flex-col items-center lg:items-end space-y-4 text-center lg:text-right">
          <HyperText className="text-2xl font-bold" text={"Follow Us"} />
          <div className="flex space-x-6 text-gray-400">
            <a href="https://x.com/dhruv_sood_" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/Dhruv-Sood/kalp-medika" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-8 border-t border-gray-700"></div>

      {/* Copyright Section */}
      <div className="container mx-auto text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Kalp-Medika. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
