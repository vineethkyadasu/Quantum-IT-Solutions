import React from 'react';
import { 
  ArrowRightIcon, 
  CloudIcon, 
  CircleStackIcon, 
  CpuChipIcon, 
  WrenchScrewdriverIcon, 
  ShieldCheckIcon, 
  LifebuoyIcon, 
  CheckCircleIcon, 
  ServerStackIcon,
  ChartBarIcon,
  UsersIcon,
  BuildingStorefrontIcon,
  RocketLaunchIcon,
  StarIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const Homepage = () => {
  // Unified background image
  const backgroundImage = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop&auto=format';
  const quantumLogo = '/logo.png';

  const services = [
    { 
      title: 'Cloud Strategy & Migration', 
      description: 'Design secure, scalable, and cost-efficient cloud architectures across AWS, Azure, and GCP with proven migration frameworks.', 
      icon: CloudIcon,
      features: ['Multi-cloud strategy', 'Cost optimization', 'Disaster recovery']
    },
    { 
      title: 'Data Engineering', 
      description: 'Build high-performance data platforms with Snowflake, Databricks, and modern pipelines for real-time analytics.', 
      icon: CircleStackIcon,
      features: ['Real-time pipelines', 'Data warehousing', 'ETL/ELT processes']
    },
    { 
      title: 'AI & Analytics', 
      description: 'Turn data into insights using ML models, real-time analytics, and interactive dashboards for data-driven decisions.', 
      icon: CpuChipIcon,
      features: ['Machine Learning', 'Predictive analytics', 'BI dashboards']
    },
    { 
      title: 'DevOps Automation', 
      description: 'Implement CI/CD, IaC, and observability using Terraform and automation frameworks for seamless deployments.', 
      icon: WrenchScrewdriverIcon,
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring']
    },
    { 
      title: 'Security & Compliance', 
      description: 'Integrate governance and security at every layer to ensure compliance with industry standards and regulations.', 
      icon: ShieldCheckIcon,
      features: ['Security audits', 'Compliance frameworks', 'Risk assessment']
    },
    { 
      title: 'Support & Managed Services', 
      description: 'End-to-end technical support and maintenance for future-ready operations with 24/7 monitoring.', 
      icon: LifebuoyIcon,
      features: ['24/7 support', 'Proactive monitoring', 'Performance optimization']
    },
  ];

  const technologies = [
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'GCP', category: 'Cloud' },
    { name: 'Snowflake', category: 'Data' },
    { name: 'Databricks', category: 'Data' },
    { name: 'Kafka', category: 'Data' },
    { name: 'Airflow', category: 'Data' },
    { name: 'Terraform', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Python', category: 'Development' },
    { name: 'React', category: 'Development' },
    { name: 'Node.js', category: 'Development' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'PyTorch', category: 'AI/ML' }
  ];

  const caseStudies = [
    {
      tag: 'Cloud Migration',
      title: 'Financial Cloud Migration',
      description: 'Migrated a large-scale financial platform to AWS with 99.99% uptime and cost reduction by 25%.',
      icon: ServerStackIcon,
      results: ['40% faster performance', '25% cost reduction', '99.99% uptime'],
      industry: 'Finance'
    },
    {
      tag: 'Data Engineering',
      title: 'Real-time Data Pipeline',
      description: 'Built a Kafka-Airflow based data pipeline processing millions of events per minute for e-commerce analytics.',
      icon: CircleStackIcon,
      results: ['10M+ events/minute', 'Real-time analytics', '95% faster insights'],
      industry: 'E-commerce'
    },
    {
      tag: 'AI Implementation',
      title: 'AI Analytics Dashboard',
      description: 'Developed ML-driven dashboards providing predictive insights for telecom operations and customer behavior.',
      icon: CpuChipIcon,
      results: ['30% better predictions', 'Automated reporting', '15% revenue growth'],
      industry: 'Telecom'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, FinTech Solutions",
      content: "Quantum IT Solutions transformed our cloud infrastructure, reducing costs by 40% while improving performance significantly.",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Data Director, Retail Corp",
      content: "Their data engineering team delivered a robust pipeline that handles our peak loads effortlessly. Exceptional expertise!",
      avatar: "👨‍💼",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "VP Operations, HealthTech",
      content: "The security framework implementation was seamless and helped us achieve HIPAA compliance ahead of schedule.",
      avatar: "👩‍⚕️",
      rating: 5
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '40%', label: 'Average Cost Savings' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Expert Team Members' }
  ];

  const industries = [
    { name: 'Financial Services', icon: ChartBarIcon },
    { name: 'Healthcare', icon: UsersIcon },
    { name: 'Retail & E-commerce', icon: BuildingStorefrontIcon },
    { name: 'Technology', icon: CpuChipIcon }
  ];

  return (
    <div className="min-h-screen smooth-scroll">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary-600/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[28rem] h-[28rem] rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl" />
        </div>
        
        {/* Reduced animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-white">
              <span className="inline-flex items-center text-xs md:text-sm px-4 py-2 rounded-full bg-white/10 ring-1 ring-white/15 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2" /> 
                Trusted by 100+ Enterprises Worldwide
              </span>
              
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                Digital Transformation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400 mt-2">
                  Made Simple
                </span>
              </h1>
              
              <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                We deliver <span className="text-primary-400 font-semibold">cutting-edge solutions</span> in cloud, data, and AI that drive measurable business outcomes and accelerate growth.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <a href="#contact" className="group bg-primary-500 hover:bg-primary-600 text-white text-lg px-8 py-4 rounded-lg inline-flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg">
                  Start Your Journey
                  <ArrowRightIcon className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#services" className="border border-white/30 hover:border-white/50 text-white text-lg px-8 py-4 rounded-lg inline-flex items-center justify-center backdrop-blur-sm transition-all duration-300">
                  <RocketLaunchIcon className="mr-3 h-5 w-5" />
                  Explore Solutions
                </a>
              </div>

              {/* Stats preview */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.slice(0, 4).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary-500/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
                  <img src={quantumLogo} alt="Quantum IT Solutions Logo" className="w-full h-auto rounded-2xl object-contain bg-white p-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section 
        className="py-12 border-b border-gray-700 bg-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm mb-8">Trusted by industry leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {['Microsoft', 'Google', 'Amazon', 'IBM', 'Oracle', 'Salesforce'].map((company) => (
              <div key={company} className="text-center text-white text-xl font-semibold grayscale hover:grayscale-0 transition-all">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services" 
        className="py-20 relative bg-white"
      >
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-2">
              Comprehensive Digital Solutions
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end expertise across cloud, data, AI, DevOps, and security to drive your digital transformation journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary-500 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="w-4 h-4 text-primary-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <a href="#" className="inline-flex items-center text-primary-600 font-semibold text-sm group-hover:text-primary-700">
                      Learn more
                      <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section 
        className="py-20 text-white bg-gray-900"
      >
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wide">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-2">
              Technology Stack
            </h2>
            <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
              We master the latest technologies to deliver cutting-edge solutions across all domains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {Object.entries(technologies.reduce((acc, tech) => {
              if (!acc[tech.category]) acc[tech.category] = [];
              acc[tech.category].push(tech);
              return acc;
            }, {})).map(([category, techs]) => (
              <div key={category} className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <h3 className="font-bold text-lg text-primary-400 mb-4">{category}</h3>
                <div className="space-y-3">
                  {techs.map((tech) => (
                    <div key={tech.name} className="flex items-center justify-between p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors">
                      <span className="text-white font-medium">{tech.name}</span>
                      <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        className="py-20 text-white relative bg-gradient-to-r from-blue-600 to-green-500"
      >
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section 
        className="py-20 relative bg-gray-50"
      >
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12">
            <div className="max-w-2xl">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Success Stories</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-2">
                Transformative Projects
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                See how we've helped businesses achieve remarkable results through technology innovation.
              </p>
            </div>
            <a href="#contact" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg mt-6 lg:mt-0 transition-colors">
              Start your project
            </a>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((project, index) => (
              <article key={project.title} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 overflow-hidden">
                <div className="p-8">
                  <span className="inline-flex items-center text-xs px-3 py-1 rounded-full bg-primary-100 text-primary-700 mb-4">
                    {project.tag}
                  </span>
                  
                  <div className="w-12 h-12 rounded-xl bg-primary-500 text-white flex items-center justify-center mb-6">
                    <project.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                        {result}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <span className="text-sm text-gray-500">{project.industry}</span>
                    <a href="#" className="text-primary-600 font-semibold text-sm hover:text-primary-700">
                      Read case study →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        className="py-20 relative bg-white"
      >
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-2">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group p-8 border border-gray-200/50">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section 
        className="py-20 relative bg-gray-50"
      >
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Industries</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-2">
              Serving Diverse Sectors
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={industry.name} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center p-8 border border-gray-200/50">
                <div className="w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <industry.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                <p className="text-gray-600 mt-3 text-sm">
                  Custom solutions tailored for {industry.name.toLowerCase()} industry challenges and opportunities.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="contact" 
        className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-r from-blue-600 to-green-500"
      >
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-cyan-400/20 blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-flex items-center text-sm px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <RocketLaunchIcon className="w-4 h-4 mr-2" />
            Let's Build Something Amazing
          </span>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Ready to Accelerate Your <span className="text-cyan-200">Transformation</span>?
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Partner with Quantum IT Solutions to deliver secure, scalable, and measurable outcomes. 
            Schedule a free consultation with our experts today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-12">
            <a href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg">
              Get Free Proposal
            </a>
            <a href="/contact" className="border border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4 rounded-lg font-semibold transition-colors">
              <PhoneIcon className="w-5 h-5 mr-2 inline" />
              Schedule Call
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto text-sm">
            <div className="flex items-center justify-center">
              <CheckCircleIcon className="w-5 h-5 text-cyan-300 mr-2" />
              <span>No upfront costs</span>
            </div>
            <div className="flex items-center justify-center">
              <ClockIcon className="w-5 h-5 text-cyan-300 mr-2" />
              <span>24/7 support</span>
            </div>
            <div className="flex items-center justify-center">
              <ShieldCheckIcon className="w-5 h-5 text-cyan-300 mr-2" />
              <span>Enterprise security</span>
            </div>
          </div>
        </div>
      </section>

      {/* Add smooth scrolling CSS */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        .smooth-scroll {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000;
        }
        section {
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default Homepage;