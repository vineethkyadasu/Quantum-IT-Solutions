import React from 'react';
import { Link } from 'react-router-dom';
import { 
  DocumentTextIcon, 
  ScaleIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  BanknotesIcon,
  UserGroupIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const TermsOfServicePage = () => {
  const sections = [
    {
      id: '1',
      title: 'Acceptance of Terms',
      icon: DocumentTextIcon,
      content: 'By accessing or using the services provided by Quantum IT Solutions LLC ("Company", "we", "us", or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our services. These Terms constitute a legally binding agreement between you and Quantum IT Solutions LLC.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: '2',
      title: 'Services Provided',
      icon: GlobeAltIcon,
      content: 'Quantum IT Solutions LLC provides technology consulting, cloud migration, data engineering, AI analytics, DevOps automation, security and compliance, and managed IT services. The scope, deliverables, timelines, and fees for specific services will be detailed in separate agreements, statements of work (SOWs), or service contracts.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: '3',
      title: 'User Responsibilities',
      icon: UserGroupIcon,
      content: 'You agree to provide accurate information, maintain the confidentiality of your account credentials, use our services in compliance with all applicable laws and regulations, and not engage in any activity that could harm, disable, or impair our services or networks.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: '4',
      title: 'Intellectual Property Rights',
      icon: ShieldCheckIcon,
      content: 'All content, materials, software, tools, and intellectual property provided by Quantum IT Solutions remain our exclusive property unless otherwise specified in a written agreement. You are granted a limited, non-exclusive, non-transferable license to use our services for their intended purpose.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const additionalTerms = [
    {
      id: '5',
      title: 'Payment Terms',
      icon: BanknotesIcon,
      content: 'Fees for services will be outlined in your service agreement or invoice. Payment is due within the timeframe specified (typically 30 days from invoice date). Late payments may incur interest charges and may result in suspension of services. All fees are non-refundable unless otherwise stated in your service agreement.'
    },
    {
      id: '6',
      title: 'Confidentiality',
      icon: ShieldCheckIcon,
      content: 'Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. We implement industry-standard security measures to protect your data. Details regarding data handling and security are outlined in our Privacy Policy and applicable service agreements.'
    },
    {
      id: '7',
      title: 'Limitation of Liability',
      icon: ExclamationTriangleIcon,
      content: 'To the maximum extent permitted by law, Quantum IT Solutions LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities. Our total liability shall not exceed the fees paid by you for the specific service giving rise to the claim in the twelve (12) months preceding the claim.'
    },
    {
      id: '8',
      title: 'Warranties and Disclaimers',
      icon: CheckCircleIcon,
      content: 'We provide our services "as is" and make no warranties, express or implied, regarding the services\' performance, reliability, or suitability for your specific needs. We strive to deliver high-quality services but do not guarantee uninterrupted or error-free service delivery.'
    },
    {
      id: '9',
      title: 'Termination',
      icon: ClockIcon,
      content: 'Either party may terminate services upon written notice as specified in the service agreement. Upon termination, you must cease using our services and return or destroy any confidential materials. Fees for services rendered prior to termination remain due and payable.'
    },
    {
      id: '10',
      title: 'Indemnification',
      icon: ScaleIcon,
      content: 'You agree to indemnify and hold harmless Quantum IT Solutions LLC from any claims, damages, or expenses arising from your use of our services, violation of these Terms, or infringement of any third-party rights.'
    },
    {
      id: '11',
      title: 'Governing Law',
      icon: ScaleIcon,
      content: 'These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Wyoming.'
    },
    {
      id: '12',
      title: 'Changes to Terms',
      icon: DocumentTextIcon,
      content: 'We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website with an updated effective date. Your continued use of our services after such changes constitutes acceptance of the modified Terms.'
    },
    {
      id: '13',
      title: 'Third-Party Services',
      icon: GlobeAltIcon,
      content: 'Our services may integrate with or utilize third-party platforms, tools, or services (e.g., AWS, Azure, Snowflake). Your use of such third-party services is subject to their respective terms and conditions. We are not responsible for third-party services or their performance.'
    },
    {
      id: '14',
      title: 'Data Protection and Privacy',
      icon: ShieldCheckIcon,
      content: 'We are committed to protecting your data in accordance with applicable data protection laws. Please refer to our Privacy Policy for detailed information on how we collect, use, and safeguard your personal information.'
    },
    {
      id: '15',
      title: 'Force Majeure',
      icon: ExclamationTriangleIcon,
      content: 'Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, or governmental actions.'
    },
    {
      id: '16',
      title: 'Severability',
      icon: ScaleIcon,
      content: 'If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.'
    },
    {
      id: '17',
      title: 'Entire Agreement',
      icon: DocumentTextIcon,
      content: 'These Terms, together with any service agreements, SOWs, and our Privacy Policy, constitute the entire agreement between you and Quantum IT Solutions LLC regarding the use of our services, superseding any prior agreements or understandings.'
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
            <span className="text-primary-400">Terms of Service</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-lg flex items-center justify-center border border-white/20">
                <ScaleIcon className="w-8 h-8 text-primary-400" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                  Terms of Service
                </h1>
                <p className="text-primary-400 mt-2 flex items-center">
                  <ClockIcon className="w-4 h-4 mr-2" />
                  Effective Date: September 26, 2025
                </p>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Please read these Terms of Service carefully before using our services. By accessing or using any services provided by Quantum IT Solutions LLC, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
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
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-primary-600 mb-1">Section {section.id}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </div>
                <div className={`h-1 bg-gradient-to-r ${section.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>

          {/* Additional Terms */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
              Additional Terms and Conditions
            </h2>
            
            <div className="space-y-8">
              {additionalTerms.map((term, index) => (
                <div key={term.id} className="group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-cyan-100 text-primary-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <term.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="text-sm font-semibold text-primary-600">Section {term.id}</div>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary-200 to-transparent"></div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{term.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{term.content}</p>
                    </div>
                  </div>
                  {index < additionalTerms.length - 1 && (
                    <div className="mt-6 border-b border-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-primary-600 to-cyan-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white mb-16">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-lg flex items-center justify-center border border-white/30">
                <EnvelopeIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Contact Information</h2>
                <p className="text-sm text-primary-100">Questions about these Terms?</p>
              </div>
            </div>
            
            <p className="text-lg text-primary-50 mb-8 leading-relaxed">
              If you have any questions, concerns, or require clarification regarding these Terms of Service, please contact us:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-lg mb-4">Company Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPinIcon className="w-5 h-5 text-primary-200 flex-shrink-0 mt-1" />
                    <div className="text-sm text-primary-50">
                      <div className="font-semibold text-white mb-1">Quantum IT Solutions LLC</div>
                      <div>830 E 2nd St, Ste 7000 #28995</div>
                      <div>Casper, WY 82609, United States</div>
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
                      href="tel:+13072470821" 
                      className="text-sm text-primary-50 hover:text-white transition-colors"
                    >
                      +1 (307) 247-0821
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-2xl p-8 mb-8">
            <div className="flex items-start space-x-4">
              <ExclamationTriangleIcon className="w-8 h-8 text-yellow-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Important Notice</h3>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service are subject to change. We recommend reviewing them periodically. Your continued use of our services following any modifications indicates your acceptance of the updated Terms. If you do not agree with any changes, you must discontinue use of our services.
                </p>
              </div>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <div className="flex items-start space-x-4">
              <CheckCircleIcon className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Acknowledgment</h3>
                <p className="text-gray-700 leading-relaxed">
                  By using Quantum IT Solutions LLC's services, you acknowledge that you have read these Terms of Service, understand them, and agree to be bound by them. If you are entering into these Terms on behalf of a company or organization, you represent that you have the authority to bind such entity to these Terms.
                </p>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Last updated: September 26, 2025</p>
            <p className="mt-2">These Terms of Service are effective as of the date stated above.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn more about our services or contact us to discuss your project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-primary-600 to-cyan-600 text-white hover:from-primary-700 hover:to-cyan-700 px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Services
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

export default TermsOfServicePage;
