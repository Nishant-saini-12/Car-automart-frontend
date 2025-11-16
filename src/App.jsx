import { useState, useEffect } from 'react';
import AdPopup from './AdPopup';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CarDetails from './pages/CarDetails';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CarsPage from './components/CarsPage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import { allCars } from './data/carsData';
import useDarkMode from './hooks/useDarkMode';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCarId, setSelectedCarId] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAdPopup, setShowAdPopup] = useState(false);
  const [isDark, setIsDark] = useDarkMode();

  // Navigate to car details
  const navigateToCarDetails = (carId) => {
    setSelectedCarId(carId);
    setCurrentPage('car-details');
  };

  // Show popup when component mounts (only on home page)
  useEffect(() => {
    if (currentPage === 'home') {
      const timer = setTimeout(() => {
        setShowAdPopup(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  // Routing for auth pages (no navbar/footer)
  if (currentPage === 'login') {
    return <Login onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'signup') {
    return <Signup onNavigate={setCurrentPage} />;
  }

  // Routing for car details page (no navbar/footer)
  if (currentPage === 'car-details') {
    return <CarDetails carId={selectedCarId} onNavigate={setCurrentPage} allCars={allCars} />;
  }

  // Main layout with navbar and footer
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'cars' && <CarsPage onCarClick={navigateToCarDetails} allCars={allCars} />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      
      <Footer setCurrentPage={setCurrentPage} />
      
      {/* Ad Popup */}
      {showAdPopup && <AdPopup onClose={() => setShowAdPopup(false)} />}
    </div>
  );
}
