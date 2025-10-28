import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="h-1 accent-gradient-top" />
      
      {/* Main Footer Content */}
      <div className="container-custom py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <div className="mb-4 flex justify-center sm:justify-start">
              <img 
                src="/FOOTERLOGO.jpg" 
                alt="Quantum IT Solutions - Simplifying IT. Amplifying Success." 
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
            </div>

            {/* <p className="text-gray-300 mb-4 leading-relaxed">
              Simplifying IT. Amplifying Success. We help businesses transform their digital infrastructure with cloud, data, and automation expertise.
            </p> */}
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-400">
              <MapPinIcon className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm">5830 E 2nd St, Suite 7000 #28995, Casper, Wyoming - 82609 USA</span>
            </div>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm sm:text-base">Cloud Strategy & Migration</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm sm:text-base">Data Engineering</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm sm:text-base">AI & Analytics</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm sm:text-base">DevOps Automation</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm sm:text-base">Security & Compliance</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm sm:text-base">Managed Services</Link></li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Technologies</h4>
            <div className="space-y-2">
              <div className="text-gray-300 text-xs sm:text-sm">
                <span className="font-medium text-primary-400">Cloud:</span> AWS, Azure, GCP
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">
                <span className="font-medium text-primary-400">Data:</span> Snowflake, Databricks, Kafka
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">
                <span className="font-medium text-primary-400">DevOps:</span> Terraform, Airflow, Python
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">
                <span className="font-medium text-primary-400">Security:</span> Governance, Compliance
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Get In Touch</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                <EnvelopeIcon className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <a href="mailto:Info@quantumitusa.com" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-xs sm:text-sm break-all">
                  Info@quantumitusa.com
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                <PhoneIcon className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm">+1 (307) 247-0821</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                <ClockIcon className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm">Mon-Fri: 9:00 AM - 6:00 PM (MT)</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-5 sm:mt-6">
              <h5 className="font-medium mb-2 sm:mb-3 text-sm sm:text-base">Stay Updated</h5>
              <div className="flex max-w-sm mx-auto sm:mx-0">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-xs sm:text-sm focus:outline-none focus:border-primary-500"
                />
                <button className="px-3 sm:px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-r-md transition-colors duration-200 touch-manipulation">
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-4 sm:py-5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 gap-3">
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} Quantum IT Solutions LLC. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">Terms of Service</Link>
              <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">Contact</Link>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="text-center text-gray-500 text-xs sm:text-sm">
              Designed and Developed by{' '}
              <a 
                href="https://www.vikrin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 font-semibold hover:text-primary-300 transition-colors duration-200 hover:underline"
              >
                Vikrin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


