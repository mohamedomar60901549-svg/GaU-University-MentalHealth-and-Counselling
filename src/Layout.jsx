import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;