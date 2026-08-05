import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  User, 
  Calendar, 
  MessageCircle, 
  Target, 
  Shield, 
  Clock, 
  Smartphone,
  Users,
  Award,
  Globe,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Star,
  Quote,
  TrendingUp,
  UserPlus
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-5 w-64 h-64 bg-red-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-5 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
                <Sparkles className="size-4" />
                ITS REAL GET HELP, HEAL FASTER
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-6 leading-tight">
                Student Mental Health
                <br />
                <span className="text-red-600">& Counselling</span>
              </h1>
              
              <p className="text-lg text-gray-600 mt-6 max-w-lg leading-relaxed">
                Connect with experienced counsellors, book appointments, 
                and get the support you need to thrive.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3.5 rounded-full font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-lg shadow-red-600/25 hover:shadow-red-600/40"
                >
                  Start Your Journey
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 border-2 border-red-600 text-red-600 px-8 py-3.5 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all"
                >
                  Login
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {[
                  { value: "2+", label: "Expert Counsellors" },
                  { value: "1K+", label: "Happy Students" },
                  { value: "72%", label: "Success Rate" },
                  { value: "24/7", label: "Always Available" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-red-600">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-xl bg-red-100 p-2.5 text-red-600">
                    <Heart className="size-6" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Mental Health Dashboard</h2>
                  <span className="ml-auto px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold animate-pulse">
                    Live
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: <User className="size-5" />, label: "Active Counsellors", value: "12" },
                    { icon: <MessageCircle className="size-5" />, label: "Today's Sessions", value: "34" },
                    { icon: <Calendar className="size-5" />, label: "Appointments", value: "28" },
                    { icon: <Shield className="size-5" />, label: "Privacy Protected", value: "100%" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0">
                      <div className="flex items-center gap-3 text-gray-600">
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                      <span className="font-bold text-gray-900">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle className="size-4" />
                    <span>All systems operational</span>
                    <span className="ml-auto text-gray-400 text-xs">Updated just now</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold">
              ✨ FEATURES
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Everything You Need to <span className="text-red-600">Thrive</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: <Target className="size-8" />, title: "Personalized Matching", desc: "Expert counselors matched to your needs" },
              { icon: <MessageCircle className="size-8" />, title: "Real-time Chat", desc: "Instant messaging for immediate support" },
              { icon: <TrendingUp className="size-8" />, title: "Progress Tracking", desc: "Monitor your emotional wellbeing" },
              { icon: <Shield className="size-8" />, title: "100% Confidential", desc: "Bank-level encryption for privacy" },
              { icon: <Clock className="size-8" />, title: "24/7 Support", desc: "Help available anytime, anywhere" },
              { icon: <Smartphone className="size-8" />, title: "Multi-Platform", desc: "Desktop, tablet, and mobile ready" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-5 group-hover:bg-red-600 group-hover:text-white transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold">
              SIMPLE PROCESS
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Start in <span className="text-red-600">4 Simple Steps</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <UserPlus className="size-8" />, step: "1", title: "Create Account", desc: "Sign up in 2 minutes" },
              { icon: <Users className="size-8" />, step: "2", title: "Choose Counselor", desc: "Browse expert profiles" },
              { icon: <Calendar className="size-8" />, step: "3", title: "Book Session", desc: "Schedule at your time" },
              { icon: <Heart className="size-8" />, step: "4", title: "Start Healing", desc: "Begin your journey" }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-red-600/25 group-hover:scale-110 transition-transform mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-600 font-bold text-sm shadow-md">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-1 text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold">
              💬 TESTIMONIALS
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              What Our <span className="text-red-600">Community Says</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { name: "Dr. Abdifatah Ibrahim", role: "Senior Counsellor", text: "This platform has revolutionized how I connect with students.", icon: "👨‍⚕️" },
              { name: "Jamal Buthul", role: "Engineering Student", text: "The real-time chat feature was a game-changer for me.", icon: "👨‍🎓" },
              { name: "Dr. Yussuf Gab", role: "Clinical Psychologist", text: "I've seen remarkable transformations in my students.", icon: "👨‍⚕️" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <Quote className="size-8 text-red-400 mb-4" />
                <p className="text-gray-600 leading-relaxed italic">"{item.text}"</p>
                <hr className="my-6 border-gray-200" />
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-red-600 font-medium">{item.role}</p>
                  </div>
                  <div className="ml-auto text-yellow-400">
                    {"★★★★★"}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT US ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold">
              ℹ️ ABOUT US
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Empowering Students <span className="text-red-600">Worldwide</span>
            </h2>
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              The Student Mental Health & Counselling platform was founded to make professional mental health 
              support accessible to every student. We believe emotional well-being is the foundation of academic success.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                { icon: <Target className="size-4" />, label: "Mission-Driven" },
                { icon: <Award className="size-4" />, label: "Award-Winning" },
                { icon: <Globe className="size-4" />, label: "Global Community" },
                { icon: <Heart className="size-4" />, label: "Student-First" },
                { icon: <Star className="size-4" />, label: "5-Star Rated" }
              ].map((badge, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  {badge.icon}
                  {badge.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-700 via-red-800 to-red-900" />
        <div className="absolute inset-0 -z-10 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-red-100 mt-4 max-w-2xl mx-auto">
              Join thousands of students finding hope, healing, and happiness
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 bg-white text-red-700 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl"
              >
                Start Your Journey Now
                <ArrowRight className="size-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-red-700 transition-all"
              >
                Learn More
              </Link>
            </div>
            <div className="mt-8 flex justify-center gap-6 text-sm text-red-200">
              <span className="flex items-center gap-2">
                <CheckCircle className="size-4 text-green-400" />
                Free Registration
              </span>
              <span className="flex items-center gap-2">
                <Shield className="size-4 text-blue-400" />
                Secure & Private
              </span>
              <span className="flex items-center gap-2">
                <Heart className="size-4 text-red-400" />
                24/7 Support
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}