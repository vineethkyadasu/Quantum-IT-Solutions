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
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img 
                src="/FOOTERLOGO.jpg" 
                alt="Quantum IT Solutions - Simplifying IT. Amplifying Success." 
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* <p className="text-gray-300 mb-4 leading-relaxed">
              Simplifying IT. Amplifying Success. We help businesses transform their digital infrastructure with cloud, data, and automation expertise.
            </p> */}
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPinIcon className="w-4 h-4" />
              <span className="text-sm">Casper, Wyoming, USA</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Cloud Strategy & Migration</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Data Engineering</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">AI & Analytics</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">DevOps Automation</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Security & Compliance</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Managed Services</Link></li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Technologies</h4>
            <div className="space-y-2">
              <div className="text-gray-300 text-sm">
                <span className="font-medium text-primary-400">Cloud:</span> AWS, Azure, GCP
              </div>
              <div className="text-gray-300 text-sm">
                <span className="font-medium text-primary-400">Data:</span> Snowflake, Databricks, Kafka
              </div>
              <div className="text-gray-300 text-sm">
                <span className="font-medium text-primary-400">DevOps:</span> Terraform, Airflow, Python
              </div>
              <div className="text-gray-300 text-sm">
                <span className="font-medium text-primary-400">Security:</span> Governance, Compliance
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-4 h-4 text-primary-400" />
                <a href="mailto:info@quantumitsolutions.com" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  info@quantumitsolutions.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">+1 (307) 247-0821</span>
              </div>
              <div className="flex items-center space-x-3">
                <ClockIcon className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">Mon-Fri: 9:00 AM - 6:00 PM (MT)</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Stay Updated</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm focus:outline-none focus:border-primary-500"
                />
                <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-r-md transition-colors duration-200">
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Quantum IT Solutions LLC. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">Terms of Service</Link>
              <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


