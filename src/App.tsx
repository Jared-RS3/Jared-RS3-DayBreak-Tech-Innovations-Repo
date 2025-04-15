import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import Navbar from './components/Navbar';
import {
  Code2,
  Bot,
  Smartphone,
  Brain,
  Database,
  MessageSquareMore,
  ChevronDown,
  ChevronUp,
  Star,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Users,
  Coffee,
  Code,
} from 'lucide-react';

function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-pink-900/50 rounded-lg mb-4">
        <Icon className="w-6 h-6 text-pink-500" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

function TestimonialCard({
  name,
  role,
  company,
  content,
}: {
  name: string;
  role: string;
  company: string;
  content: string;
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
      <div className="flex items-center mb-4">
        <Star className="w-5 h-5 text-yellow-500" />
        <Star className="w-5 h-5 text-yellow-500" />
        <Star className="w-5 h-5 text-yellow-500" />
        <Star className="w-5 h-5 text-yellow-500" />
        <Star className="w-5 h-5 text-yellow-500" />
      </div>
      <p className="text-gray-300 mb-4">{content}</p>
      <div className="border-t border-gray-700 pt-4">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-gray-400">
          {role} at {company}
        </p>
      </div>
    </div>
  );
}

function PortfolioCard({
  project,
  isExpanded,
  onToggle,
  index,
}: {
  project: any;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}) {
  const shortDescription =
    project.description.length > 150
      ? project.description.substring(0, 150) + '...'
      : project.description;

  const expandedContent = {
    'AI-Powered Website & Chatbot for Mobile Coffee Catering': {
      challenge:
        'The client needed a way to automate their booking process and provide instant customer support 24/7 without increasing operational overhead.',
      solution:
        'We built a smart AI chatbot that manages inquiries, bookings, and invoicing while integrating fully with their calendar and CRM system. The platform now serves as a one-stop solution for both users and staff.',
      results: [
        '50% reduction in manual booking management',
        '24/7 customer support availability',
        '30% increase in booking conversion rate',
      ],
      technologies: [],
    },
    'AI-Powered Recruitment Platform for Red Academy': {
      challenge:
        'Red Academy needed a scalable solution to identify and onboard the right candidates for their training programs — faster, smarter, and without the manual bottlenecks of traditional recruiting methods.',
      solution:
        'We built a recruitment platform powered by AI that automates sourcing, screens applicants using intelligent filters, and provides structured workflows for interview scheduling and feedback. The system centralizes hiring data and ensures a smooth journey from applicant to accepted trainee.',
      results: [
        ' 60% reduction in manual screening efforts',
        '3x faster candidate onboarding',
        '40% increase in qualified applicant conversion',
      ],
      technologies: [],
    },
    'E-commerce Platform for Twigs Vintage': {
      challenge:
        'The client needed a modern online storefront that showcased their unique vintage inventory while offering a seamless shopping experience across devices — without compromising brand identity or speed.',
      solution:
        "We built a responsive e-commerce site using Shopify, complete with custom collection layouts, detailed product pages, and a streamlined cart and checkout flow. The design stays true to the brand's retro-modern vibe while making it easy for customers to browse and buy.",
      results: [
        '2x increase in online product views within the first month',
        '35% boost in completed checkouts',
        '120% growth in email subscribers after launch',
      ],
      technologies: [],
    },
  };

  return (
    <motion.div
      layout
      className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg ${
        isExpanded ? 'col-span-2 row-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div layout className="relative overflow-hidden">
        <motion.img
          layout
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105 rounded-t-xl"
        />
        <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
          {project.category}
        </div>
      </motion.div>
      <motion.div layout className="p-6">
        <motion.h3 layout className="text-xl font-semibold mb-2">
          {project.title}
        </motion.h3>
        <motion.p layout className="text-gray-400">
          {isExpanded ? project.description : shortDescription}
        </motion.p>

        <AnimatePresence>
          {isExpanded && expandedContent[project.title] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-4"
            >
              <div>
                <h4 className="font-semibold text-gray-800">Challenge</h4>
                <p className="text-gray-400">
                  {expandedContent[project.title].challenge}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Solution</h4>
                <p className="text-gray-400">
                  {expandedContent[project.title].solution}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Results</h4>
                <ul className="list-disc list-inside text-gray-400">
                  {expandedContent[project.title].results.map((result, i) => (
                    <li key={i}>{result}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800"></h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {expandedContent[project.title].technologies.map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          layout
          onClick={onToggle}
          className="mt-4 flex items-center text-pink-600 font-semibold hover:text-pink-700"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="ml-1 w-4 h-4" />
            </>
          ) : (
            <>
              Learn More <ChevronDown className="ml-1 w-4 h-4" />
            </>
          )}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function JobCard({
  title,
  location,
  type,
  description,
  requirements,
}: {
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
            <div className="flex items-center">
              <Briefcase className="w-4 h-4 mr-1" />
              {type}
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-pink-500 hover:text-pink-400"
        >
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>

      <p className="text-gray-300 mb-4">{description}</p>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4"
          >
            <div>
              <h4 className="font-semibold text-white mb-2">Requirements:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => {
                const element = document.getElementById('careers-form');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-all duration-300 mt-4"
            >
              Apply Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description:
        'Fast, smart, and scalable websites tailored to your goals — from selling online to managing your business operations effortlessly.',
    },
    {
      icon: Brain,
      title: 'AI Implementation',
      description:
        'Make better decisions and save time by automating repetitive tasks with intelligent AI solutions designed to streamline your workflow and boost performance.',
    },
    {
      icon: Database,
      title: 'Business Automation',
      description:
        'Connect your systems, cut down on manual work, and keep things running smoothly with automation that frees up your team to focus on what matters.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description:
        'Deliver a seamless experience to your users with beautiful, fast, and reliable mobile apps that drive engagement and keep your brand in their pocket.',
    },
    {
      icon: MessageSquareMore,
      title: 'Custom CRMs',
      description:
        'Manage your customer relationships smarter — with tailored CRM systems that give you real-time insights, streamline sales, and improve follow-ups.',
    },
    {
      icon: Bot,
      title: 'Chatbots',
      description:
        'Support your customers 24/7 with AI-powered chatbots that answer questions instantly, guide users, and turn conversations into conversions.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechStart Inc.',
      content:
        'Working with TechCorp has been transformative for our business. Their expertise in AI implementation helped us achieve 40% better efficiency.',
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'InnovateCo',
      content:
        'The custom CRM solution they built for us has streamlined our operations and improved customer satisfaction significantly.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'FutureTech',
      content:
        'Their mobile app development team delivered a fantastic product that exceeded our expectations. Highly recommended!',
    },
  ];

  const portfolioItems = [
    {
      title: 'AI-Powered Website & Chatbot for Mobile Coffee Catering',
      category: 'AI & Web',
      image:
        'https://www.dropbox.com/scl/fi/rz6h1a9g9ej1pbbzqhvc5/2025-04-06-02.19.30.jpg?rlkey=btln0hyvw1botjfyf2padswep&st=n7xrquj7&raw=1',
      description:
        'We designed and developed a responsive website integrated with an AI chatbot to transform customer engagement for a mobile coffee brand. The chatbot enables users to instantly book events, ask questions, and receive real-time responses — all while seamlessly syncing with the clients CRM. From automating bookings and emails to generating invoices, the solution significantly reduced manual workload and improved customer experience.',
    },
    {
      title: 'AI-Powered Recruitment Platform for Red Academy',
      category: 'AI & Web',
      image:
        'https://www.dropbox.com/scl/fi/8n34rzp7mq1gil6aalvp5/red_ac.jpeg?rlkey=mrdb8gjvbjuqj1dozsw84ofn0&st=kf2659nf&raw=1',
      description:
        'We developed a custom AI-driven recruitment system for Red Academy, a tech education company focused on transforming raw talent into skilled software engineers. The platform replaces outdated, manual hiring methods with smart automation — from candidate sourcing to shortlisting — dramatically reducing time-to-hire and boosting candidate quality. Tailored workflows and integrations enable the team to focus on nurturing top talent instead of chasing resumes.',
    },
    {
      title: 'E-commerce Platform for Twigs Vintage',
      category: 'Web',
      image:
        'https://www.dropbox.com/scl/fi/0oezbuj97b3w7yht6pxjo/twigs.jpg?rlkey=vrwoqtv4vypr9tgjhgqljh2ns&st=dq8q410w&raw=1',
      description:
        'We designed and developed a visually striking, mobile-optimized e-commerce website for Twigs Vintage, a boutique brand selling curated vintage fashion. The site features smooth navigation, bold visuals, and secure checkout — all built on Shopify to give the client full control over inventory, pricing, and promotions. Custom sections like "Collectors Items" and "Our Latest Drop" help highlight exclusive products and drive urgency, while email capture and product filtering enhance the overall shopping experience.',
    },
  ];

  const jobListings = [
    {
      title: 'Senior Full Stack Developer',
      location: 'Remote',
      type: 'Full-time',
      description:
        'Join our core team to build innovative solutions using modern technologies and best practices.',
      requirements: [
        '5+ years of experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS/GCP)',
        'Strong understanding of software architecture and design patterns',
        'Experience with AI/ML integration is a plus',
      ],
    },
    {
      title: 'AI Engineer',
      location: 'Cape Town, South Africa',
      type: 'Part-time',
      description:
        'Help us push the boundaries of AI implementation in business applications.',
      requirements: [
        'Strong background in Machine Learning and Deep Learning',
        'Experience with Python and popular ML frameworks',
        'Understanding of LLMs and their practical applications',
        'Strong problem-solving skills and attention to detail',
      ],
    },
    {
      title: 'UI/UX Designer',
      location: 'Ho Chi Minh City, Vietnam',
      type: 'Full-time',
      description:
        'Create beautiful, intuitive interfaces that delight users and solve real problems.',
      requirements: [
        'Portfolio demonstrating strong UI/UX skills',
        'Experience with Figma and modern design tools',
        'Understanding of user-centered design principles',
        'Ability to work closely with developers',
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <HomeSection />

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Comprehensive solutions for your digital needs
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Work That Speaks For Itself
            </h2>
            <p className="text-xl text-gray-300">
              Here's what sets us apart — our key milestones
            </p>
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioItems.map((project, index) => (
              <PortfolioCard
                key={project.title}
                project={project}
                index={index}
                isExpanded={expandedCard === project.title}
                onToggle={() =>
                  setExpandedCard(
                    expandedCard === project.title ? null : project.title
                  )
                }
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Join Our Team
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We're always looking for talented individuals who are passionate
              about technology and innovation.
            </motion.p>
          </div>

          {/* Culture Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-pink-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Collaborative Culture
              </h3>
              <p className="text-gray-400">
                Work with passionate people who support and inspire each other.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-pink-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
              <p className="text-gray-400">
                Flexible hours, remote work options, and focus on wellbeing.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-pink-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth & Learning</h3>
              <p className="text-gray-400">
                Continuous learning opportunities and career development
                support.
              </p>
            </motion.div>
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 gap-6 mb-16">
            {jobListings.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>

          {/* Application Form */}
          {/* Airtable Form Embed */}
          <div className="pt-8 border-t border-gray-800 text-center">
            <div className="flex justify-center">
              <div className="w-full max-w- px-4">
                {' '}
                {/* Adjust max-w-md to your desired width */}
                <iframe
                  id="careers-form"
                  className="airtable-embed"
                  src="https://airtable.com/embed/appqw8HIqnTiOGWN2/pagO91BGuPKIjKklh/form"
                  frameBorder="0"
                  width="100%"
                  height="533"
                  style={{
                    background: 'transparent',
                    border: '1px solid #ccc',
                  }}
                  title="Contact Form"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-300">
              Get in touch with us to discuss your project
            </p>
          </div>

          {/* Airtable Form Embed */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <iframe
              className="airtable-embed"
              src="https://airtable.com/embed/appqw8HIqnTiOGWN2/pagKxDLrxgk2mOPbZ/form"
              frameBorder="0"
              width="100%"
              height="533"
              style={{ background: 'transparent', border: '1px solid #ccc' }}
              title="Contact Form"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
            {/* Left Placeholder (could add a map or image here later) */}
            <div></div>

            {/* Right Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl text-gray-900 mb-6">
                Contact Information
              </h3>

              {/* Email Block */}
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">
                    YaaseenK@DayBreakTechInnovations.com
                  </p>
                  <p className="text-gray-600">
                    JaredM@DayBreakTechInnovations.com
                  </p>
                </div>
              </div>

              {/* Address Block */}
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">
                    Cape Town, Vietnam
                    <br />
                    South Africa
                  </p>
                </div>
              </div>

              {/* Social Media Block */}
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-400">Follow Us</h4>
                  <a
                    href="https://www.instagram.com/daybreak_tech_innovations?igsh=N29xbDNyM3U0ejZp"
                    className="text-gray-600 hover:text-pink-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">About Us</h3>
            <p className="text-gray-400">
              We're passionate about creating innovative software solutions that
              help businesses thrive in the digital age.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>AI Implementation</li>
              <li>Business Automation</li>
              <li>Mobile Apps</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>YaaseenK@DayBreakTechInnovations.com</li>
              <li>+27 82 384 8238</li>
              <li>Cape Town, South Africa</li>
              <li>Ho Chi Minh City,, Vietnam</li>
            </ul>
          </div>
          <div>
            <div className="flex space-x-4"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"></div>
      </footer>
    </div>
  );
}

export default App;
