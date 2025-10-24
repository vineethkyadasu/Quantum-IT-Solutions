import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon,
  BuildingOfficeIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const contactMethods = [
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      description: 'We\'ll respond within 1 business day',
      details: 'Info@quantumitusa.com',
      link: 'mailto:Info@quantumitusa.com',
      color: 'text-blue-600'
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      description: 'Mon–Fri · 9:00–18:00 (MT)',
      details: '+1 (317) 457-6497',
      link: 'tel:+13174576497',
      color: 'text-green-600'
    },
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      description: 'Based in beautiful Wyoming',
      details: '5830 E 2nd St, Suite 7000 #28995, Casper, Wyoming - 82609 USA',
      link: '#',
      color: 'text-purple-600'
    },
    {
      icon: ClockIcon,
      title: 'Response Time',
      description: 'Quick and efficient',
      details: 'Within 24 hours',
      color: 'text-orange-600'
    }
  ];

  const services = [
    'Cloud Strategy & Migration',
    'Data Engineering',
    'AI & Analytics',
    'DevOps Automation',
    'Security & Compliance',
    'Support & Managed Services'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // EmailJS configuration
    const serviceId = 'service_t2rccav'; // Replace with your EmailJS Service ID
    const templateId = 'template_kjmxeh8'; // Replace with your EmailJS Template ID
    const publicKey = 'X-zllro9LbYeOlYCQ'; // Replace with your EmailJS Public Key

    // Template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      service: formData.service,
      message: formData.message,
      to_email: 'Info@quantumitusa.com'
    };

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', response);
      setIsSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        });
      }, 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setError('Failed to send message. Please try again or contact us directly at Info@quantumitusa.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section 
        className="relative min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-cyan-600/20"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-500/30 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-indigo-500/30 blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <nav className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6">
            <span className="hover:text-white transition-colors cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="text-primary-400">Contact</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Let's Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">Project</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Tell us about your goals. We'll respond within 1 business day to discuss how we can help transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 sm:py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contactMethods.map((method, index) => (
              <div 
                key={method.title}
                className="group text-center p-6 sm:p-8 bg-gray-50 rounded-xl sm:rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-50 to-cyan-50 ${method.color} flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">{method.description}</p>
                {method.link ? (
                  <a 
                    href={method.link} 
                    className="text-primary-600 hover:text-primary-700 font-semibold text-base sm:text-lg transition-colors break-all"
                  >
                    {method.details}
                  </a>
                ) : (
                  <div className="text-gray-900 font-semibold text-base sm:text-lg">{method.details}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Get In Touch</span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mt-2">
                  Ready to Transform Your Business?
                </h2>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  Whether you're starting a new project or looking to optimize existing systems, we're here to help. Share your vision and let's build something amazing together.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <BuildingOfficeIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quantum IT Solutions LLC</h4>
                    <p className="text-gray-600 mt-1">5830 E 2nd St, Suite 7000 #28995</p>
                    <p className="text-gray-600">Casper, Wyoming - 82609 USA</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600 mt-1">Monday - Friday: 9:00 AM - 6:00 PM MT</p>
                    <p className="text-gray-500 text-sm">Emergency support available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quick Response</h4>
                    <p className="text-gray-600 mt-1">We guarantee a response within 24 hours</p>
                    <p className="text-gray-500 text-sm">Typically much faster</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-500 to-cyan-500 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  {[
                    '10+ years of industry experience',
                    '150+ successful projects',
                    '40% average cost savings for clients',
                    '99.9% uptime guarantee'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                      <span className="text-primary-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6">
                  <div className="flex items-start">
                    <ExclamationTriangleIcon className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="text-red-800 font-semibold mb-1">Error Sending Message</h4>
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setError(null)}
                    className="mt-4 text-red-600 hover:text-red-700 font-semibold text-sm"
                  >
                    Dismiss
                  </button>
                </div>
              )}
              
              {isSubmitted ? (
                <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircleIcon className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We've received your message and will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-2xl p-8 relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 rounded-xl bg-primary-500 text-white flex items-center justify-center mr-4">
                        <UserIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Start the Conversation</h3>
                        <p className="text-gray-600">Fill out the form below</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Your Name *
                          </label>
                          <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                            placeholder="john@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Company
                          </label>
                          <input 
                            type="text" 
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                            placeholder="Your company name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Service Interest
                          </label>
                          <select 
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          >
                            <option value="">Select a service</option>
                            {services.map((service, index) => (
                              <option key={index} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          How can we help? *
                        </label>
                        <textarea 
                          rows="6"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                          placeholder="Tell us about your project, challenges, or goals..."
                          required
                        ></textarea>
                      </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                onClick={(e) => {
                  if (!isSubmitting) {
                    e.stopPropagation();
                  }
                }}
                className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
              >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRightIcon className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you agree to our terms and privacy policy. 
                        We respect your data and will never share it with third parties.
                      </p>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Our Location</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mt-2">
              Based in Wyoming, Serving Worldwide
            </h2>
          </div>
          
          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.8!2d-106.313!3d42.8501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDUxJzAwLjQiTiAxMDbCsDE4JzQ2LjgiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Quantum IT Solutions Location"
            ></iframe>
          </div>
          
          {/* Address Details Below Map */}
          <div className="mt-8 text-center bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-4">
              <MapPinIcon className="w-8 h-8 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Visit Our Office</h3>
            </div>
            <p className="text-xl font-semibold text-gray-800">5830 E 2nd St, Suite 7000 #28995</p>
            <p className="text-lg text-gray-600 mt-2">Casper, Wyoming - 82609 USA</p>
            <p className="text-gray-500 mt-4">Serving clients across the United States and globally</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;