import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  FaBrain,
  FaHome, 
  FaSignInAlt, 
  FaUserPlus, 
  FaTachometerAlt,
  FaSignOutAlt,
  FaUser,
  FaShieldAlt,
  FaGraduationCap,
  FaUserMd,
  FaBell,
  FaCog,
  FaChevronDown,
  FaBars,
  FaTimes
} from 'react-icons/fa';

export default function Navbar() {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("activeStudent");
    window.location.href = "/";
  };

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { to: "/", label: "Home", icon: <FaHome className="text-sm" /> },
    { to: "/about", label: "About Us", icon: <FaUser className="text-sm" /> },
    { to: "/contact", label: "Contact", icon: <FaUser className="text-sm" /> },
    { to: "/faq", label: "FAQs", icon: <FaUser className="text-sm" /> },
  ];

  const getDashboardLink = () => {
    if (!user) return null;
    if (user.role === "student") return "/student";
    if (user.role === "counsellor") return "/counsellor";
    if (user.role === "admin") return "/admin";
    return null;
  };

  const getRoleIcon = () => {
    if (!user) return <FaUser className="text-sm" />;
    if (user.role === "student") return <FaGraduationCap className="text-sm" />;
    if (user.role === "counsellor") return <FaUserMd className="text-sm" />;
    if (user.role === "admin") return <FaShieldAlt className="text-sm" />;
    return <FaUser className="text-sm" />;
  };

  const getRoleLabel = () => {
    if (!user) return "Guest";
    return user.role.charAt(0).toUpperCase() + user.role.slice(1);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 rounded-xl blur-md group-hover:blur-xl transition" />
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/25 group-hover:scale-105 transition">
                <FaBrain className="text-lg" />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900">
                Student<span className="text-blue-600">Mental</span>
              </span>
              <span className="ml-2 text-xs font-medium text-gray-400 border-l border-gray-200 pl-2">
                Health
              </span>
            </div>
            <div className="sm:hidden">
              <span className="text-lg font-bold text-gray-900">
                Student<span className="text-blue-600">Mental</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive(link.to)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.icon}
                {link.label}
                {isActive(link.to) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {!user && (
              <>
                <Link
                  to="/login"
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive("/login")
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <FaSignInAlt className="text-sm" />
                  Login
                  {isActive("/login") && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40"
                >
                  <FaUserPlus className="text-sm" />
                  Signup
                </Link>
              </>
            )}

            {user && (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
                >
                  <span className="flex items-center gap-2">
                    {getRoleIcon()}
                    <span className="hidden md:inline">{getRoleLabel()}</span>
                  </span>
                  <FaChevronDown className={`text-xs transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5"
                  >
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-xs text-gray-500">Signed in as</p>
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {user.full_name || user.username}
                      </p>
                    </div>
                    
                    {getDashboardLink() && (
                      <Link
                        to={getDashboardLink()}
                        onClick={() => setShowDropdown(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
                      >
                        <FaTachometerAlt className="text-sm" />
                        Dashboard
                      </Link>
                    )}
                    
                    <Link
                      to="/profile"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
                    >
                      <FaUser className="text-sm" />
                      Profile
                    </Link>
                    
                    <Link
                      to="/settings"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
                    >
                      <FaCog className="text-sm" />
                      Settings
                    </Link>
                    
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <button
                        onClick={logout}
                        className="flex items-center gap-3 px-4 py-2.5 w-full text-sm text-red-600 hover:text-red-700 hover:bg-red-50 transition"
                      >
                        <FaSignOutAlt className="text-sm" />
                        Logout
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-lg hover:bg-gray-50 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden border-t border-gray-100"
        >
          <div className="py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
                  isActive(link.to)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.icon}
                {link.label}
                {isActive(link.to) && (
                  <span className="ml-auto text-blue-600">●</span>
                )}
              </Link>
            ))}

            {!user && (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
                    isActive("/login")
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <FaSignInAlt className="text-sm" />
                  Login
                  {isActive("/login") && (
                    <span className="ml-auto text-blue-600">●</span>
                  )}
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 mx-4 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition"
                >
                  <FaUserPlus className="text-sm" />
                  Signup
                </Link>
              </>
            )}

            {user && (
              <>
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-xs text-gray-500">Signed in as</p>
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    {user.full_name || user.username}
                  </p>
                </div>
                
                {getDashboardLink() && (
                  <Link
                    to={getDashboardLink()}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
                  >
                    <FaTachometerAlt className="text-sm" />
                    Dashboard
                  </Link>
                )}
                
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
                >
                  <FaUser className="text-sm" />
                  Profile
                </Link>
                
                <button
                  onClick={() => {
                    setIsOpen(false);
                    logout();
                  }}
                  className="flex items-center gap-3 px-4 py-3 w-full text-sm text-red-600 hover:text-red-700 hover:bg-red-50 transition"
                >
                  <FaSignOutAlt className="text-sm" />
                  Logout
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}