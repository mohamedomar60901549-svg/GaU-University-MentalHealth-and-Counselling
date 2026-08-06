import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  MessageCircle,
  TrendingUp,
  Clock,
  Users,
  Calendar,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Sparkles,
  Quote,
  CheckCircle,
  Shield,
  Smile,
  BookOpen,
  Home,
  Info,
  HelpCircle,
  FileText,
  Award,
  Target,
  Star,
  Globe,
  UserPlus,
  Heart,
  Headphones,
  Video,
  Coffee,
  Moon,
  Sun,
  Flower,
  Compass
} from 'lucide-react';

export default function HomePage() {
  const services = [
    { icon: <Brain className="w-6 h-6" />, title: "Personalized Counselling", desc: "One-on-one sessions with experienced mental health professionals" },
    { icon: <MessageCircle className="w-6 h-6" />, title: "Real-time Chat Support", desc: "Instant messaging for immediate emotional support" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Progress Tracking", desc: "Monitor your emotional wellbeing and growth" },
    { icon: <Clock className="w-6 h-6" />, title: "24/7 Crisis Support", desc: "Emergency help available anytime, anywhere" },
    { icon: <Users className="w-6 h-6" />, title: "Group Therapy Sessions", desc: "Connect with peers in a supportive environment" },
    { icon: <BookOpen className="w-6 h-6" />, title: "Wellness Workshops", desc: "Learn coping strategies and life skills" }
  ];

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
    { to: "/faq", label: "FAQs" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/terms", label: "Terms of Service" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================= NAVBAR ================= */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white">
                <Brain className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Student<span className="text-blue-600">Mental</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-gray-600 hover:text-blue-600 transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="text-sm text-gray-600 hover:text-gray-900 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-5 py-2 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                🧠 Student Mental Health
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-6 leading-tight">
                Empowering Students
                <br />
                <span className="text-blue-600">Mental Wellness</span>
              </h1>
              <p className="text-lg text-gray-600 mt-6 max-w-lg leading-relaxed">
                Empowering students with professional mental health support, 
                counselling services, and a caring community dedicated to your well-being.
              </p>
              <div className="flex gap-4 mt-8">
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/30"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Quick Support</h2>
                <span className="ml-auto px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                  ● Online
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <span className="text-gray-600">Active Counsellors</span>
                  <span className="font-bold text-gray-900">12</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <span className="text-gray-600">Today's Sessions</span>
                  <span className="font-bold text-gray-900">34</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <span className="text-gray-600">Appointments</span>
                  <span className="font-bold text-gray-900">28</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Privacy Protected</span>
                  <span className="font-bold text-gray-900">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <p className="text-sm text-gray-600 mt-1">Students Helped</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">50+</div>
              <p className="text-sm text-gray-600 mt-1">Counsellors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">98%</div>
              <p className="text-sm text-gray-600 mt-1">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">24/7</div>
              <p className="text-sm text-gray-600 mt-1">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="text-gray-600 mt-2">Comprehensive mental health support for students</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="text-gray-600 mt-2">Start your journey in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Create Account", desc: "Sign up in 2 minutes" },
              { step: "02", title: "Choose Counselor", desc: "Browse expert profiles" },
              { step: "03", title: "Book Session", desc: "Schedule at your time" },
              { step: "04", title: "Start Healing", desc: "Begin your journey" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
            <p className="text-gray-600 mt-2">What our community says</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Mohamed Omar", role: "Student", text: "The counselling services helped me overcome anxiety and perform better in my studies.", icon: "👨‍🎓" },
              { name: "Fatuma Hassan", role: "Student", text: "I found a safe space to share my feelings. The counsellors are truly understanding.", icon: "👩‍🎓" },
              { name: "Dr. Ahmed Noor", role: "Counsellor", text: "Seeing students transform and grow is the most rewarding part of my work.", icon: "👨‍⚕️" }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-gray-600 leading-relaxed italic">"{item.text}"</p>
                <hr className="my-4 border-gray-100" />
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-blue-600">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Your Mental Health Matters
          </h2>
          <p className="text-blue-100 mt-4">
            Join thousands of students finding hope, healing, and happiness
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/signup"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
            >
              Start Your Journey
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-3">
                🧠 StudentMental
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering students with professional mental health support and counselling services.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-gray-400 hover:text-white transition text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Our Services
              </h3>
              <ul className="space-y-2">
                {services.map((service, i) => (
                  <li key={i}>
                    <Link to="/services" className="text-gray-400 hover:text-white transition text-sm">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Contact
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📍 Garissa University</li>
                <li>📧 support@studentmental.com</li>
                <li>📞 +1 (234) 567-890</li>
                <li>🕐 24/7 Support Available</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 Student Mental Health & Counselling | All Rights Reserved</p>
            <p className="mt-1 text-xs text-gray-500">PREPARED BY: MASELO MOH</p>
          </div>
        </div>
      </footer>
    </div>
  );
}