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
  UserPlus
} from 'lucide-react';

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    { icon: <Brain className="w-8 h-8" />, title: "Personalized Counselling", desc: "One-on-one sessions with experienced mental health professionals" },
    { icon: <MessageCircle className="w-8 h-8" />, title: "Real-time Chat Support", desc: "Instant messaging for immediate emotional support" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Progress Tracking", desc: "Monitor your emotional wellbeing and growth" },
    { icon: <Clock className="w-8 h-8" />, title: "24/7 Crisis Support", desc: "Emergency help available anytime, anywhere" },
    { icon: <Users className="w-8 h-8" />, title: "Group Therapy Sessions", desc: "Connect with peers in a supportive environment" },
    { icon: <BookOpen className="w-8 h-8" />, title: "Wellness Workshops", desc: "Learn coping strategies and life skills" }
  ];

  const stats = [
    { value: "500+", label: "Students Helped" },
    { value: "50+", label: "Counsellors" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support Available" }
  ];

  const testimonials = [
    { name: "Mohamed Omar", role: "Computer Science Student", text: "The counselling services helped me overcome anxiety and perform better in my studies.", icon: "👨‍🎓" },
    { name: "Fatuma Hassan", role: "Education Student", text: "I found a safe space to share my feelings. The counsellors are truly understanding.", icon: "👩‍🎓" },
    { name: "Dr. Ahmed Noor", role: "Senior Counsellor", text: "Seeing students transform and grow is the most rewarding part of my work.", icon: "👨‍⚕️" }
  ];

  const quickLinks = [
    { to: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { to: "/about", label: "About Us", icon: <Info className="w-4 h-4" /> },
    { to: "/contact", label: "Contact", icon: <Phone className="w-4 h-4" /> },
    { to: "/faq", label: "FAQs", icon: <HelpCircle className="w-4 h-4" /> },
    { to: "/privacy", label: "Privacy Policy", icon: <Shield className="w-4 h-4" /> },
    { to: "/terms", label: "Terms of Service", icon: <FileText className="w-4 h-4" /> }
  ];

  const whyChooseUs = [
    { icon: <Shield className="w-7 h-7" />, title: "Confidential", text: "Your privacy is our priority. All sessions are 100% confidential." },
    { icon: <Users className="w-7 h-7" />, title: "Expert Counsellors", text: "Connect with licensed and experienced mental health professionals." },
    { icon: <Clock className="w-7 h-7" />, title: "24/7 Availability", text: "Get support whenever you need it, day or night." },
    { icon: <Award className="w-7 h-7" />, title: "Quality Care", text: "We maintain the highest standards of mental health care." }
  ];

  const howItWorks = [
    { icon: <UserPlus className="w-8 h-8" />, step: "01", title: "Create Account", desc: "Sign up in 2 minutes" },
    { icon: <Users className="w-8 h-8" />, step: "02", title: "Choose Counselor", desc: "Browse expert profiles" },
    { icon: <Calendar className="w-8 h-8" />, step: "03", title: "Book Session", desc: "Schedule at your time" },
    { icon: <Smile className="w-8 h-8" />, step: "04", title: "Start Healing", desc: "Begin your journey" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/25">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">
                  Student<span className="text-blue-600">Mental</span>
                </span>
                <span className="hidden sm:inline-block ml-1 text-xs font-medium text-gray-400 border-l border-gray-200 pl-2">
                  Health
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition"
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/login"
                className="px-5 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-6 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition shadow-lg shadow-blue-600/25"
              >
                Get Started
              </Link>
            </div>

            <button className="lg:hidden p-2.5 rounded-lg hover:bg-gray-50 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden pt-16 md:pt-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-5 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-5 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                Welcome to Student Mental Health
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-6 leading-tight">
                Empowering Students
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Mental Wellness
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 mt-6 max-w-lg leading-relaxed">
                Empowering students with professional mental health support, 
                counselling services, and a caring community dedicated to your well-being.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3.5 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all"
                >
                  Learn More
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-xl bg-blue-100 p-2.5 text-blue-600">
                    <Smile className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Quick Support</h2>
                  <span className="ml-auto px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold animate-pulse">
                    Online
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Users className="w-5 h-5" />
                      <span>Active Counsellors</span>
                    </div>
                    <span className="font-bold text-gray-900">12</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <MessageCircle className="w-5 h-5" />
                      <span>Today's Sessions</span>
                    </div>
                    <span className="font-bold text-gray-900">34</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5" />
                      <span>Appointments</span>
                    </div>
                    <span className="font-bold text-gray-900">28</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Shield className="w-5 h-5" />
                      <span>Privacy Protected</span>
                    </div>
                    <span className="font-bold text-gray-900">100%</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>All systems operational</span>
                    <span className="ml-auto text-gray-400 text-xs">Updated just now</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold">
              STATISTICS
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Making a <span className="text-blue-600">Difference</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-blue-600 mb-5 mx-auto group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition">
                  {i === 0 && <Users className="w-8 h-8" />}
                  {i === 1 && <UserPlus className="w-8 h-8" />}
                  {i === 2 && <TrendingUp className="w-8 h-8" />}
                  {i === 3 && <Clock className="w-8 h-8" />}
                </div>
                <div className="text-4xl font-extrabold text-blue-600">{item.value}</div>
                <p className="mt-2 text-gray-600 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-white text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
              OUR SERVICES
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Comprehensive <span className="text-blue-600">Mental Health</span> Support
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              We offer a range of services designed to support your mental wellness journey
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-blue-600 mb-5 group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold">
              HOW IT WORKS
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Start Your <span className="text-blue-600">Journey</span> in 4 Steps
            </h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {howItWorks.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="relative">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/25 group-hover:scale-110 transition-transform mb-4">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-sm shadow-md">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-white text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
              WHY CHOOSE US
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Your Mental Health <span className="text-blue-600">Matters to Us</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/25 group-hover:scale-110 transition mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              What Our <span className="text-blue-600">Community Says</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <Quote className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-gray-600 leading-relaxed italic">"{item.text}"</p>
                <hr className="my-6 border-gray-200" />
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-blue-600 font-medium">{item.role}</p>
                  </div>
                  <div className="ml-auto text-yellow-400">★★★★★</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-700 via-purple-700 to-blue-800" />
        <div className="absolute inset-0 -z-10 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto mb-6 inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur text-white">
              <Brain className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Your Mental Health Matters
            </h2>
            <p className="text-xl text-blue-100 mt-4 max-w-2xl mx-auto">
              Join thousands of students finding hope, healing, and happiness through our support
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 bg-white text-blue-700 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-blue-700 transition-all"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Free Registration
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-300" />
                Confidential & Private
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-300" />
                24/7 Support Available
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <Link to="/" className="flex items-center gap-2.5 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  <Brain className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold">
                  Student<span className="text-blue-400">Mental</span>
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering students with professional mental health support, counselling services, 
                and a caring community dedicated to your well-being.
              </p>
              <div className="flex gap-3 mt-6">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 transition flex items-center justify-center">
                  <span className="text-sm">📘</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 transition flex items-center justify-center">
                  <span className="text-sm">🐦</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 transition flex items-center justify-center">
                  <span className="text-sm">📸</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 transition flex items-center justify-center">
                  <span className="text-sm">🔗</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm"
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Our Services
              </h3>
              <ul className="space-y-3">
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
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Get In Touch
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                  <span>Garissa University, Garissa, Kenya</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a href="mailto:support@studentmentalhealth.com" className="hover:text-white transition">
                    support@studentmentalhealth.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a href="tel:+1234567890" className="hover:text-white transition">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <Clock className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                  <span>24/7 Emergency Support Available</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                © 2026 Student Mental Health & Counselling | All Rights Reserved
              </p>
              <div className="flex items-center gap-6 text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white transition">
                  Terms of Use
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-white transition">
                  Cookie Policy
                </Link>
                <span className="text-gray-600">|</span>
                <span className="text-gray-400 text-xs font-mono">
                  PREPARED BY: MASELO MOH
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}