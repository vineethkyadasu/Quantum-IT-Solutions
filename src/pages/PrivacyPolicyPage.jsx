import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon, 
  DocumentTextIcon,
  LockClosedIcon,
  UserGroupIcon,
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      id: '1.1',
      title: 'What Information We Collect',
      icon: DocumentTextIcon,
      content: 'We may collect the following categories of personal data: Contact details (e.g., name, email address, phone number), business details, payment/billing information, usage data, cookies, and tracking technologies.'
    },
    {
      id: '1.2',
      title: 'How We Collect the Information',
      icon: UserGroupIcon,
      content: 'We collect information directly from you, automatically through cookies and tracking technologies, and from third-party services such as analytics providers.'
    },
    {
      id: '1.3',
      title: 'Why We Collect the Information & How We Use It',
      icon: ShieldCheckIcon,
      content: 'We use the information to provide and maintain our services, process your requests, communicate with you, perform billing, personalize experience, and comply with laws.'
    },
    {
      id: '1.4',
      title: 'Cookies and Similar Technologies',
      icon: LockClosedIcon,
      content: 'We use cookies to recognize you, remember preferences, analyze usage, and improve our site. You may control cookies via browser settings.'
    }
  ];

  const additionalSections = [
    {
      id: '1.5',
      title: 'Disclosure of Your Information',
      content: 'We may share data with service providers, legal/regulatory authorities, or during business transfers (e.g., mergers or acquisitions).'
    },
    {
      id: '1.6',
      title: 'Data Retention',
      content: 'We retain your personal data as long as necessary for business and legal obligations, after which it is deleted or anonymized.'
    },
    {
      id: '1.7',
      title: 'Security',
      content: 'We employ technical and administrative safeguards to protect your information, but cannot guarantee absolute security.'
    },
    {
      id: '1.8',
      title: 'Your Rights',
      content: 'Depending on jurisdiction, you may access, correct, delete, restrict, or object to processing your data, or withdraw consent.'
    },
    {
      id: '1.9',
      title: 'Children',
      content: 'Our website and services are not directed to children under 13/16. We delete such data upon notice.'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative min-h-[40vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-cyan-600/20"></div>
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary-500/20 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <nav className="text-sm text-gray-300 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-primary-400">Privacy Policy</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-lg flex items-center justify-center border border-white/20">
                <ShieldCheckIcon className="w-8 h-8 text-primary-400" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                  Privacy Policy
                </h1>
                <p className="text-primary-400 mt-2 flex items-center">
                  <ClockIcon className="w-4 h-4 mr-2" />
                  Effective Date: September 26, 2025
                </p>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Quantum IT Solutions LLC ("we", "us", "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          {/* Featured Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {sections.map((section) => (
              <div 
                key={section.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-primary-600 mb-1">{section.id}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-primary-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
              Additional Privacy Information
            </h2>
            
            <div className="space-y-8">
              {additionalSections.map((section, index) => (
                <div key={section.id} className="group">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 font-semibold text-sm group-hover:bg-primary-500 group-hover:text-white transition-colors">
                      {section.id}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                  {index < additionalSections.length - 1 && (
                    <div className="mt-6 border-b border-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-primary-600 to-cyan-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-lg flex items-center justify-center border border-white/30">
                <EnvelopeIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
                <p className="text-sm text-primary-100">Section 1.10</p>
              </div>
            </div>
            
            <p className="text-lg text-primary-50 mb-8 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or our data practices, please don't hesitate to contact us:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-lg mb-4">Company Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPinIcon className="w-5 h-5 text-primary-200 flex-shrink-0 mt-1" />
                    <div className="text-sm text-primary-50">
                      <div className="font-semibold text-white mb-1">Quantum IT Solutions LLC</div>
                      <div>5830 E 2nd St, Suite 7000 #28995</div>
                      <div>Casper, Wyoming - 82609, United States</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-lg mb-4">Contact Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <EnvelopeIcon className="w-5 h-5 text-primary-200 flex-shrink-0" />
                    <a 
                      href="mailto:info@quantumitusa.com" 
                      className="text-sm text-primary-50 hover:text-white transition-colors underline"
                    >
                      info@quantumitusa.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="w-5 h-5 text-primary-200 flex-shrink-0" />
                    <a 
                      href="tel:+13174576497" 
                      className="text-sm text-primary-50 hover:text-white transition-colors"
                    >
                      +1 (317) 457-6497
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Changes to Policy Section */}
          <div className="mt-16 bg-gray-100 rounded-2xl p-8 md:p-10 border-l-4 border-primary-500">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 font-semibold">
                1.11
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Changes to This Policy</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may update this policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. The effective date at the top of this page will be updated accordingly. Your continued use of our website and services after any modifications constitutes acceptance of the updated Privacy Policy. We encourage you to review this page regularly to stay informed about how we protect your information.
                </p>
              </div>
            </div>
          </div>

          {/* Last Updated Info */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Last updated: September 26, 2025</p>
            <p className="mt-2">This Privacy Policy is effective as of the date stated above and will remain in effect except with respect to any changes in its provisions in the future.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Have Questions About Your Privacy?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us for any privacy-related inquiries or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-primary-600 to-cyan-600 text-white hover:from-primary-700 hover:to-cyan-700 px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
            <Link 
              to="/" 
              className="border-2 border-gray-300 text-gray-700 hover:border-primary-600 hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
