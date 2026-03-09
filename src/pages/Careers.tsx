import { motion } from "framer-motion";
import {
  Briefcase,
  ChevronDown,
  ChevronUp,
  Code,
  Coffee,
  MapPin,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ApplicationForm() {
  const [form, setForm] = useState({ name: "", email: "", role: "", portfolio: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Job Application – ${form.role || "General"} – ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nRole: ${form.role}\nPortfolio/LinkedIn: ${form.portfolio}\n\n${form.message}`
    );
    window.location.href = `mailto:Daybreaktechinnovations@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-2xl font-bold text-white mb-2">Application sent!</p>
        <p className="text-slate-400 text-sm">We'll review your details and be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Full Name <span className="text-blue-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Email <span className="text-blue-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
          Role You're Applying For
        </label>
        <input
          type="text"
          name="role"
          value={form.role}
          onChange={handleChange}
          placeholder="e.g. Senior Full Stack Developer"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
          Portfolio / LinkedIn
        </label>
        <input
          type="text"
          name="portfolio"
          value={form.portfolio}
          onChange={handleChange}
          placeholder="https://..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
          Tell us about yourself <span className="text-blue-400">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Share your experience, what excites you about Daybreak, and anything else relevant..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition resize-none"
        />
      </div>
      <button type="submit" className="btn-primary w-full py-3 text-sm">
        Submit Application
      </button>
    </form>
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
      className="card-glass p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {location}
            </div>
            <div className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              {type}
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1.5 text-blue-400 hover:text-blue-300 transition-colors flex-shrink-0"
        >
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed mb-4">{description}</p>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-4"
        >
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">Requirements</h4>
            <ul className="space-y-1.5">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById("careers-form");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary text-sm px-5 py-2 mt-2"
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
    <div className="min-h-screen bg-navy-900">
      {/* Minimal nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 h-16">
            <Link to="/" className="flex items-center gap-2.5 cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="text-[17px] font-bold text-white tracking-tight">
                Daybreak<span className="text-blue-400 font-normal"> Tech</span>
              </span>
            </Link>
            <span className="text-slate-700">/</span>
            <span className="text-sm text-slate-400 font-medium">Careers</span>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-badge mb-5 inline-flex">Join Our Team</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
                Build the future of{" "}
                <span className="gradient-text">tech with us</span>
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                We're always looking for talented people who are passionate about
                technology, innovation, and making a real impact.
              </p>
            </motion.div>
          </div>

          {/* Culture pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {[
              {
                icon: Users,
                title: "Collaborative Culture",
                desc: "Work with passionate people who support and inspire each other.",
              },
              {
                icon: Coffee,
                title: "Work-Life Balance",
                desc: "Flexible hours, remote options, and a real focus on wellbeing.",
              },
              {
                icon: Code,
                title: "Growth & Learning",
                desc: "Continuous learning opportunities and clear career progression.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="card-glass p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-xl mb-4">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Open positions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Open Positions</h2>
            <div className="space-y-4">
              {jobListings.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </div>
          </div>

          {/* Application form */}
          <div id="careers-form" className="card-glass p-6">
            <h2 className="text-xl font-bold text-white mb-1.5">Apply Now</h2>
            <p className="text-sm text-slate-400 mb-6">
              Don't see the right role? Send us your details and we'll reach out
              when a match opens up.
            </p>
            <ApplicationForm />
          </div>
        </div>
      </div>
    </div>
  );
}

