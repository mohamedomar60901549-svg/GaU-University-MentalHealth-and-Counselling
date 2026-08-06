import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center">Welcome to LifeLink</h1>
        <p className="text-center text-gray-600 mt-4">Student Mental Health & Counselling</p>
        <div className="flex justify-center gap-4 mt-8">
          <Link to="/signup" className="bg-red-600 text-white px-6 py-2 rounded-lg">Sign Up</Link>
          <Link to="/login" className="border border-red-600 text-red-600 px-6 py-2 rounded-lg">Login</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
