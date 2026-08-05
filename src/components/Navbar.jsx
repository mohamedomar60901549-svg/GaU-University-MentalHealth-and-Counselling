import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Heart, 
  Home, 
  LogIn, 
  UserPlus, 
  LayoutDashboard,
  LogOut,
  Menu,
  X,
  User,
  Shield,
  GraduationCap,
  Stethoscope,
  Bell,
  Settings,
  ChevronDown
} from "lucide-react";
import { useState, useEffect } from "react";

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
    { to: "/", label: "Home", icon: <Home className="size-4" /> },
  ];

  const getDashboardLink = () => {
    if (!user) return null;
    if (user.role === "student") return "/student";
    if (user.role === "counsellor") return "/counsellor";
    if (user.role === "admin") return "/admin";
    return null;
  };

  const getRoleIcon = () => {
    if (!user) return <User className="size-4" />;
    if (user.role === "student") return <GraduationCap className="size-4" />;
    if (user.role === "counsellor") return <Stethoscope className="size-4" />;
    if (user.role === "admin") return <Shield className="size-4" />;
    return <User className="size-4" />;
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
              <div className="absolute inset-0 bg-red-600/20 rounded-xl blur-md group-hover:blur-xl transition" />
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg shadow-red-600/25 group-hover:scale-105 transition">
                <Heart className="size-5 fill-white/20" />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900">
                Life<span className="text-red-600">Link</span>
              </span>
              <span className="ml-2 text-xs font-medium text-gray-400 border-l border-gray-200 pl-2">
                Mental Health
              </span>
            </div>
            <div className="sm:hidden">
              <span className="text-lg font-bold text-gray-900">
                Life<span className="text-red-600">Link</span>
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
                    ? "text-red-600 bg-red-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.icon}
                {link.label}
                {isActive(link.to) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-red-600 rounded-full"
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
                      ? "text-red-600 bg-red-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <LogIn className="size-4" />
                  Login
                  {isActive("/login") && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-red-600 rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition shadow-lg shadow-red-600/25 hover:shadow-red-600/40"
                >
                  <UserPlus className="size-4" />
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
                  <ChevronDown className={`size-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
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
                        <LayoutDashboard className="size-4" />
                        Dashboard
                      </Link>
                    )}
                    
                    <Link
                      to="/profile"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
                    >
                      <User className="size-4" />
                      Profile
                    </Link>
                    
                    <Link
                      to="/settings"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
                    >
                      <Settings className="size-4" />
                      Settings
                    </Link>
                    
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <button
                        onClick={logout}
                        className="flex items-center gap-3 px-4 py-2.5 w-full text-sm text-red-600 hover:text-red-700 hover:bg-red-50 transition"
                      >
                        <LogOut className="size-4" />
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
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
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
                    ? "text-red-600 bg-red-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.icon}
                {link.label}
                {isActive(link.to) && (
                  <span className="ml-auto text-red-600">●</span>
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
                      ? "text-red-600 bg-red-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <LogIn className="size-4" />
                  Login
                  {isActive("/login") && (
                    <span className="ml-auto text-red-600">●</span>
                  )}
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 mx-4 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition"
                >
                  <UserPlus className="size-4" />
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
                    <LayoutDashboard className="size-4" />
                    Dashboard
                  </Link>
                )}
                
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
                >
                  <User className="size-4" />
                  Profile
                </Link>
                
                <button
                  onClick={() => {
                    setIsOpen(false);
                    logout();
                  }}
                  className="flex items-center gap-3 px-4 py-3 w-full text-sm text-red-600 hover:text-red-700 hover:bg-red-50 transition"
                >
                  <LogOut className="size-4" />
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