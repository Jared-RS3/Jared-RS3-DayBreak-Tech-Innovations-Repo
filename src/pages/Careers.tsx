import { motion } from "framer-motion";
import {
  Briefcase,
  ChevronDown,
  ChevronUp,
  Code,
  Code2,
  Coffee,
  MapPin,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
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
              const element = document.getElementById("careers-form");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-all duration-300 mt-4"
          >
            Apply Now
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Careers() {
  const jobListings = [
    {
      title: "Senior Full Stack Developer",
      location: "Remote",
      type: "Full-time",
      description:
        "Join our core team to build innovative solutions using modern technologies and best practices.",
      requirements: [
        "5+ years of experience with React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS/GCP)",
        "Strong understanding of software architecture and design patterns",
        "Experience with AI/ML integration is a plus",
      ],
    },
    {
      title: "AI Engineer",
      location: "Cape Town, South Africa",
      type: "Part-time",
      description:
        "Help us push the boundaries of AI implementation in business applications.",
      requirements: [
        "Strong background in Machine Learning and Deep Learning",
        "Experience with Python and popular ML frameworks",
        "Understanding of LLMs and their practical applications",
        "Strong problem-solving skills and attention to detail",
      ],
    },
    {
      title: "UI/UX Designer",
      location: "Ho Chi Minh City, Vietnam",
      type: "Full-time",
      description:
        "Create beautiful, intuitive interfaces that delight users and solve real problems.",
      requirements: [
        "Portfolio demonstrating strong UI/UX skills",
        "Experience with Figma and modern design tools",
        "Understanding of user-centered design principles",
        "Ability to work closely with developers",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="fixed w-full shadow-md z-50 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <Link to="/" className="flex items-center cursor-pointer">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Code2 className="h-8 w-8 text-pink-600" />
              </motion.div>
              <span className="ml-2 text-xl font-bold text-white">
                DayBreak Tech-Innovations
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <section className="py-20 px-4 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Join Our Team
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We're always looking for talented individuals who are passionate
              about technology and innovation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-pink-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Collaborative Culture
              </h3>
              <p className="text-gray-400">
                Work with passionate people who support and inspire each other.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-pink-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Work-Life Balance
              </h3>
              <p className="text-gray-400">
                Flexible hours, remote work options, and focus on wellbeing.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-pink-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Growth & Learning
              </h3>
              <p className="text-gray-400">
                Continuous learning opportunities and career development
                support.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-6 mb-16">
            {jobListings.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>

          <div className="pt-8 border-t border-gray-800 text-center">
            <div className="flex justify-center">
              <div className="w-full max-w-3xl px-4">
                <iframe
                  id="careers-form"
                  className="airtable-embed"
                  src="https://airtable.com/embed/appqw8HIqnTiOGWN2/pagO91BGuPKIjKklh/form"
                  frameBorder="0"
                  width="100%"
                  height="533"
                  style={{
                    background: "transparent",
                    border: "1px solid #ccc",
                  }}
                  title="Contact Form"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
