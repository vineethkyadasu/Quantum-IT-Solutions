import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CloudIcon, 
  CircleStackIcon, 
  CpuChipIcon, 
  WrenchScrewdriverIcon, 
  ShieldCheckIcon, 
  LifebuoyIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  StarIcon,
  BuildingStorefrontIcon,
  UsersIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'AI & Analytics',
    description: 'Turn data into insights using ML models, real-time analytics, and interactive dashboards for data-driven decisions.',
    icon: CpuChipIcon,
    features: ['Machine Learning', 'Predictive analytics', 'BI dashboards'],
    gradient: 'from-purple-500 to-pink-500',
    industries: ['Healthcare', 'Finance', 'Marketing'],
    caseStudy: 'Increased prediction accuracy by 35% with custom ML models'
  },
  {
    title: 'Cloud Strategy & Migration',
    description: 'Design secure, scalable, and cost-efficient cloud architectures across AWS, Azure, and GCP with proven migration frameworks.',
    icon: CloudIcon,
    features: ['Multi-cloud strategy', 'Cost optimization', 'Disaster recovery'],
    gradient: 'from-blue-500 to-cyan-500',
    industries: ['Finance', 'Healthcare', 'Retail', 'Technology'],
    caseStudy: 'Reduced infrastructure costs by 45% for Fortune 500 client'
  },
  {
    title: 'Data Engineering',
    description: 'Build high-performance data platforms with Snowflake, Databricks, and modern pipelines for real-time analytics.',
    icon: CircleStackIcon,
    features: ['Real-time pipelines', 'Data warehousing', 'ETL/ELT processes'],
    gradient: 'from-green-500 to-emerald-500',
    industries: ['E-commerce', 'Telecom', 'Manufacturing'],
    caseStudy: 'Built data platform processing 10M+ events daily'
  },
  {
    title: 'DevOps Automation',
    description: 'Implement CI/CD, IaC, and observability using Terraform and automation frameworks for seamless deployments.',
    icon: WrenchScrewdriverIcon,
    features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring'],
    gradient: 'from-orange-500 to-red-500',
    industries: ['Technology', 'Finance', 'Startups'],
    caseStudy: 'Reduced deployment time from days to minutes'
  },
  {
    title: 'Security & Compliance',
    description: 'Integrate governance and security at every layer to ensure compliance with industry standards and regulations.',
    icon: ShieldCheckIcon,
    features: ['Security audits', 'Compliance frameworks', 'Risk assessment'],
    gradient: 'from-indigo-500 to-blue-500',
    industries: ['Healthcare', 'Finance', 'Government'],
    caseStudy: 'Achieved HIPAA compliance 3 months ahead of schedule'
  },
  {
    title: 'Support & Managed Services',
    description: 'End-to-end technical support and maintenance for future-ready operations with 24/7 monitoring.',
    icon: LifebuoyIcon,
    features: ['24/7 support', 'Proactive monitoring', 'Performance optimization'],
    gradient: 'from-teal-500 to-green-500',
    industries: ['All Industries'],
    caseStudy: 'Maintained 99.99% uptime for critical applications'
  }
];

const addOns = [
  { 
    name: 'Cloud Cost Optimization', 
    description: 'Reduce cloud spending with intelligent resource management',
    icon: ChartBarIcon
  },
  { 
    name: 'Data Governance & Cataloging', 
    description: 'Implement comprehensive data management frameworks',
    icon: ShieldCheckIcon
  },
  { 
    name: 'Observability & SRE', 
    description: 'Ensure system reliability with advanced monitoring',
    icon: WrenchScrewdriverIcon
  },
  { 
    name: 'Performance Tuning', 
    description: 'Optimize application and database performance',
    icon: RocketLaunchIcon
  },
  { 
    name: 'MLOps & Model Monitoring', 
    description: 'Streamline machine learning operations',
    icon: CpuChipIcon
  },
  { 
    name: 'Landing Zone Design', 
    description: 'Build secure and scalable cloud foundations',
    icon: CloudIcon
  },
];

const industries = [
  { name: 'Financial Services', icon: BuildingStorefrontIcon, count: '50+' },
  { name: 'Healthcare', icon: UsersIcon, count: '30+' },
  { name: 'Retail & E-commerce', icon: ChartBarIcon, count: '25+' },
  { name: 'Telecommunications', icon: WrenchScrewdriverIcon, count: '20+' },
];

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <main className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section 
        className="relative min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
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
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center">
          <nav className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6">
            <span className="hover:text-white transition-colors cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="text-primary-400">Services</span>
          </nav>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white px-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">Services</span>
          </h1>
          <h2 className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 px-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            End-to-end expertise across cloud, data, AI, DevOps, and security to drive your digital transformation journey.
          </p>
          
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <Link to="/contact" className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg touch-manipulation">
              Get Started
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold transition-colors touch-manipulation">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '40%', label: 'Avg. Cost Savings' },
              { number: '99.9%', label: 'Uptime Guarantee' },
              { number: '24/7', label: 'Support Coverage' }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <span className="text-primary-600 font-semibold text-xs sm:text-sm uppercase tracking-wide">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-2 px-4">
              Core Services
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive solutions designed to transform your business through technology innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.gradient} text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-7 h-7" />
                    </div>
                    <div className="flex space-x-1">
                      {service.industries.slice(0, 3).map((industry, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                      Case Study
                    </div>
                    <p className="text-sm text-gray-700">{service.caseStudy}</p>
                  </div>

                  <Link to="/contact" className="w-full bg-gray-100 hover:bg-primary-500 hover:text-white text-gray-700 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:shadow-lg flex items-center justify-center">
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Industries</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-2">
              Trusted Across Industries
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We have successfully delivered solutions for diverse industry verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={industry.name}
                className="group text-center p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <industry.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                <div className="text-2xl font-bold text-primary-600 mb-2">{industry.count}</div>
                <p className="text-gray-600 text-sm">Projects Completed</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Add-ons Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-200 font-semibold text-sm uppercase tracking-wide">Additional Services</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-2">
              Add-on Capabilities
            </h2>
            <p className="mt-4 text-xl text-primary-100 max-w-3xl mx-auto">
              Extend your capabilities with our specialized add-on services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addOn, index) => (
              <div 
                key={addOn.name}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <addOn.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{addOn.name}</h3>
                <p className="text-primary-100 text-sm leading-relaxed">{addOn.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-500 to-cyan-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Start Your Project
              </Link>
              <Link to="/contact" className="border border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;