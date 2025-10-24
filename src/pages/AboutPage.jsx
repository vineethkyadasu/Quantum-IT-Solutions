import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckBadgeIcon, 
  ShieldCheckIcon, 
  RocketLaunchIcon, 
  HandRaisedIcon,
  MapPinIcon,
  CalendarIcon,
  BuildingLibraryIcon,
  CpuChipIcon,
  CloudIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const AboutPage = () => {
  // Background images
  const backgroundImages = {
    hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    team: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    values: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  };

  const highlights = [
    { 
      label: 'Founded', 
      value: 'Wyoming, USA',
      icon: MapPinIcon,
      color: 'text-blue-600'
    },
    { 
      label: 'Experience', 
      value: '10+ years',
      icon: CalendarIcon,
      color: 'text-green-600'
    },
    { 
      label: 'Industries', 
      value: 'Finance, Airlines, Telecom, Healthcare',
      icon: BuildingLibraryIcon,
      color: 'text-purple-600'
    },
    { 
      label: 'Focus', 
      value: 'Cloud · Data · AI · Automation',
      icon: CpuChipIcon,
      color: 'text-orange-600'
    },
  ];

  const values = [
    { 
      title: 'Simplifying Complexity', 
      description: 'We cut through noise with clear roadmaps and pragmatic execution.',
      icon: RocketLaunchIcon,
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'Security by Design', 
      description: 'Governance and compliance integrated at every layer.',
      icon: ShieldCheckIcon,
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      title: 'Outcome-Driven', 
      description: 'We measure success by business impact, not artifacts.',
      icon: CheckBadgeIcon,
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      title: 'Long-term Partners', 
      description: 'Transparent, collaborative, and invested in your success.',
      icon: HandRaisedIcon,
      gradient: 'from-orange-500 to-red-500'
    },
  ];

  const technologies = [
    { name: 'AWS', icon: CloudIcon, category: 'Cloud' },
    { name: 'Azure', icon: CloudIcon, category: 'Cloud' },
    { name: 'GCP', icon: CloudIcon, category: 'Cloud' },
    { name: 'Snowflake', icon: CircleStackIcon, category: 'Data' },
    { name: 'Databricks', icon: CircleStackIcon, category: 'Data' },
    { name: 'Kafka', icon: CpuChipIcon, category: 'Data' },
    { name: 'Airflow', icon: WrenchScrewdriverIcon, category: 'Data' },
    { name: 'Terraform', icon: WrenchScrewdriverIcon, category: 'DevOps' },
  ];

  const stats = [
    { number: '150+', label: 'Projects Delivered' },
    { number: '99.9%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' },
    { number: '40%', label: 'Avg. Cost Savings' },
  ];

  return (
    <main className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section 
        className="relative min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImages.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-500/30 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-indigo-500/30 blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <nav className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6">
            {/* <span className="hover:text-white transition-colors cursor-pointer">Home</span> */}
            {/* <span className="mx-2">/</span> */}
            {/* <span className="text-primary-400">About</span> */}
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">Quantum IT</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Simplifying IT. Amplifying Success. We help organizations modernize with cloud, data, analytics, and automation — securely and at scale.
              </p>
              
              <div className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-2xl sm:rounded-3xl blur-xl opacity-30"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-white/20 p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {highlights.map((item, index) => (
                    <div 
                      key={item.label} 
                      className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 group"
                    >
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform ${item.color}`}>
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="text-[10px] sm:text-xs uppercase tracking-wide text-gray-300">{item.label}</div>
                      <div className="mt-1 font-semibold text-white text-xs sm:text-sm leading-tight">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Quantum IT Team" 
                  className="w-full h-64 sm:h-80 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                  <h3 className="text-lg sm:text-xl font-bold">Our Expert Team</h3>
                  <p className="text-sm sm:text-base text-gray-200">10+ years of combined experience</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">
                  Our <span className="text-primary-600">Mission</span> & Story
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Quantum IT Solutions LLC is a dynamic and forward-thinking technology consulting and services company based in Casper, Wyoming, USA (5830 E 2nd St, Suite 7000 #28995, Casper, Wyoming - 82609 USA). Founded with a vision to simplify complex IT challenges and empower digital transformation.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CloudIcon className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cloud Excellence</h4>
                    <p className="text-gray-600 mt-1">Specializing in AWS, Azure, and GCP with proven migration frameworks and cost optimization strategies.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CircleStackIcon className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Data Innovation</h4>
                    <p className="text-gray-600 mt-1">Deep expertise in Snowflake, Databricks, Kafka, and Airflow for real-time analytics and insights.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CpuChipIcon className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI & Automation</h4>
                    <p className="text-gray-600 mt-1">Building intelligent solutions with Python, ML models, and automation frameworks for seamless operations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Background */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${backgroundImages.values})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-cyan-600/20"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wide">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-2">
              How We Work
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Our core values guide every project, ensuring we deliver exceptional results while building lasting partnerships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.gradient} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="w-full bg-white/20 rounded-full h-1">
                    <div className="bg-white h-1 rounded-full w-0 group-hover:w-full transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-2">
              Technology Stack
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We master the latest technologies to deliver cutting-edge solutions across cloud, data, and automation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={tech.name} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-cyan-50 text-primary-600 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <tech.icon className="w-6 h-6" />
                </div>
                <div className="font-semibold text-gray-900 text-sm">{tech.name}</div>
                <div className="text-xs text-gray-500 mt-1">{tech.category}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Quantum IT?</h3>
                <p className="text-gray-600 leading-8">
                  We combine technical depth with strategic insight to simplify complexities and amplify business value. Our collaborative approach ensures we understand your goals, identify the right technologies, and deliver tailored solutions that drive agility, resilience, and innovation.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    'Proven track record across multiple industries',
                    'Security and compliance built into every solution',
                    'Scalable architectures for future growth',
                    'Dedicated support and maintenance'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <CheckBadgeIcon className="w-5 h-5 text-green-500 mr-3" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Modern Technology" 
                  className="relative rounded-2xl shadow-lg w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how Quantum IT Solutions can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              Get Started
            </Link>
            <Link 
              to="/services" 
              className="border border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;