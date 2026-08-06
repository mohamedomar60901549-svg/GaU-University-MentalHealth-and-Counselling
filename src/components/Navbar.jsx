import { Link, useLocation } from "react-router-dom";
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
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
    { to: "/faq", label: "FAQs" },
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
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(255,255,255,0.95)" : "white",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #e5e7eb" : "1px solid #f3f4f6",
        boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.05)" : "none",
        transition: "all 0.3s"
      }}
    >
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 24px"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px"
        }}>
          {/* Logo */}
          <Link 
            to="/" 
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none"
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              color: "white",
              fontSize: "18px"
            }}>
              <FaBrain />
            </div>
            <div>
              <span style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#111827"
              }}>
                Student<span style={{ color: "#2563eb" }}>Mental</span>
              </span>
              <span style={{
                marginLeft: "8px",
                fontSize: "12px",
                fontWeight: "500",
                color: "#9ca3af",
                borderLeft: "1px solid #e5e7eb",
                paddingLeft: "8px",
                display: "none"
              }}>
                Health
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div style={{
            display: "none",
            alignItems: "center",
            gap: "4px",
            "@media (min-width: 1024px)": {
              display: "flex"
            }
          }}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: isActive(link.to) ? "#2563eb" : "#6b7280",
                  background: isActive(link.to) ? "#eff6ff" : "transparent",
                  textDecoration: "none",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  if (!isActive(link.to)) {
                    e.target.style.color = "#111827";
                    e.target.style.background = "#f3f4f6";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(link.to)) {
                    e.target.style.color = "#6b7280";
                    e.target.style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </Link>
            ))}

            {!user && (
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginLeft: "8px" }}>
                <Link
                  to="/login"
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: isActive("/login") ? "#2563eb" : "#6b7280",
                    background: isActive("/login") ? "#eff6ff" : "transparent",
                    textDecoration: "none",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive("/login")) {
                      e.target.style.color = "#111827";
                      e.target.style.background = "#f3f4f6";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive("/login")) {
                      e.target.style.color = "#6b7280";
                      e.target.style.background = "transparent";
                    }
                  }}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  style={{
                    padding: "8px 20px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "white",
                    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                    textDecoration: "none",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.02)";
                    e.target.style.boxShadow = "0 4px 12px rgba(37,99,235,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  Get Started
                </Link>
              </div>
            )}

            {user && (
              <div style={{ position: "relative", marginLeft: "8px" }}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#6b7280",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#111827";
                    e.target.style.background = "#f3f4f6";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#6b7280";
                    e.target.style.background = "transparent";
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {getRoleIcon()}
                    <span style={{ display: "none" }}>{getRoleLabel()}</span>
                  </span>
                  <FaChevronDown style={{
                    fontSize: "10px",
                    transition: "transform 0.2s",
                    transform: showDropdown ? "rotate(180deg)" : "rotate(0)"
                  }} />
                </button>

                {showDropdown && (
                  <div style={{
                    position: "absolute",
                    right: 0,
                    marginTop: "8px",
                    width: "224px",
                    background: "white",
                    borderRadius: "12px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    border: "1px solid #f3f4f6",
                    padding: "6px 0"
                  }}>
                    <div style={{
                      padding: "8px 16px",
                      borderBottom: "1px solid #f3f4f6"
                    }}>
                      <p style={{ fontSize: "12px", color: "#9ca3af" }}>Signed in as</p>
                      <p style={{ fontSize: "14px", fontWeight: "600", color: "#111827" }}>
                        {user.full_name || user.username}
                      </p>
                    </div>
                    
                    {getDashboardLink() && (
                      <Link
                        to={getDashboardLink()}
                        onClick={() => setShowDropdown(false)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "10px 16px",
                          fontSize: "14px",
                          color: "#6b7280",
                          textDecoration: "none",
                          transition: "all 0.2s"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = "#111827";
                          e.target.style.background = "#f3f4f6";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = "#6b7280";
                          e.target.style.background = "transparent";
                        }}
                      >
                        <FaTachometerAlt style={{ fontSize: "14px" }} />
                        Dashboard
                      </Link>
                    )}
                    
                    <Link
                      to="/profile"
                      onClick={() => setShowDropdown(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px 16px",
                        fontSize: "14px",
                        color: "#6b7280",
                        textDecoration: "none",
                        transition: "all 0.2s"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "#111827";
                        e.target.style.background = "#f3f4f6";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#6b7280";
                        e.target.style.background = "transparent";
                      }}
                    >
                      <FaUser style={{ fontSize: "14px" }} />
                      Profile
                    </Link>
                    
                    <Link
                      to="/settings"
                      onClick={() => setShowDropdown(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px 16px",
                        fontSize: "14px",
                        color: "#6b7280",
                        textDecoration: "none",
                        transition: "all 0.2s"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "#111827";
                        e.target.style.background = "#f3f4f6";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#6b7280";
                        e.target.style.background = "transparent";
                      }}
                    >
                      <FaCog style={{ fontSize: "14px" }} />
                      Settings
                    </Link>
                    
                    <div style={{
                      borderTop: "1px solid #f3f4f6",
                      marginTop: "4px",
                      paddingTop: "4px"
                    }}>
                      <button
                        onClick={logout}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "10px 16px",
                          width: "100%",
                          fontSize: "14px",
                          color: "#dc2626",
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                          transition: "all 0.2s",
                          textAlign: "left"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = "#b91c1c";
                          e.target.style.background = "#fef2f2";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = "#dc2626";
                          e.target.style.background = "transparent";
                        }}
                      >
                        <FaSignOutAlt style={{ fontSize: "14px" }} />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              borderRadius: "8px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => e.target.style.background = "#f3f4f6"}
            onMouseLeave={(e) => e.target.style.background = "transparent"}
          >
            {isOpen ? <FaTimes style={{ fontSize: "18px" }} /> : <FaBars style={{ fontSize: "18px" }} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div style={{
          overflow: "hidden",
          borderTop: isOpen ? "1px solid #f3f4f6" : "none",
          maxHeight: isOpen ? "1000px" : "0",
          opacity: isOpen ? 1 : 0,
          transition: "all 0.3s ease"
        }}>
          <div style={{ padding: "16px 0" }}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: isActive(link.to) ? "#2563eb" : "#6b7280",
                  background: isActive(link.to) ? "#eff6ff" : "transparent",
                  textDecoration: "none",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  if (!isActive(link.to)) {
                    e.target.style.color = "#111827";
                    e.target.style.background = "#f3f4f6";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(link.to)) {
                    e.target.style.color = "#6b7280";
                    e.target.style.background = "transparent";
                  }
                }}
              >
                {link.label}
                {isActive(link.to) && (
                  <span style={{ float: "right", color: "#2563eb" }}>●</span>
                )}
              </Link>
            ))}

            {!user && (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: "block",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: isActive("/login") ? "#2563eb" : "#6b7280",
                    background: isActive("/login") ? "#eff6ff" : "transparent",
                    textDecoration: "none",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive("/login")) {
                      e.target.style.color = "#111827";
                      e.target.style.background = "#f3f4f6";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive("/login")) {
                      e.target.style.color = "#6b7280";
                      e.target.style.background = "transparent";
                    }
                  }}
                >
                  Login
                  {isActive("/login") && (
                    <span style={{ float: "right", color: "#2563eb" }}>●</span>
                  )}
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: "block",
                    margin: "0 16px",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "white",
                    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                    textDecoration: "none",
                    textAlign: "center",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  Signup
                </Link>
              </>
            )}

            {user && (
              <>
                <div style={{
                  padding: "8px 16px",
                  borderBottom: "1px solid #f3f4f6"
                }}>
                  <p style={{ fontSize: "12px", color: "#9ca3af" }}>Signed in as</p>
                  <p style={{ fontSize: "14px", fontWeight: "600", color: "#111827" }}>
                    {user.full_name || user.username}
                  </p>
                </div>
                
                {getDashboardLink() && (
                  <Link
                    to={getDashboardLink()}
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      fontSize: "14px",
                      color: "#6b7280",
                      textDecoration: "none",
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#111827";
                      e.target.style.background = "#f3f4f6";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#6b7280";
                      e.target.style.background = "transparent";
                    }}
                  >
                    Dashboard
                  </Link>
                )}
                
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: "block",
                    padding: "12px 16px",
                    fontSize: "14px",
                    color: "#6b7280",
                    textDecoration: "none",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#111827";
                    e.target.style.background = "#f3f4f6";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#6b7280";
                    e.target.style.background = "transparent";
                  }}
                >
                  Profile
                </Link>
                
                <button
                  onClick={() => {
                    setIsOpen(false);
                    logout();
                  }}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "14px",
                    color: "#dc2626",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#b91c1c";
                    e.target.style.background = "#fef2f2";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#dc2626";
                    e.target.style.background = "transparent";
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}