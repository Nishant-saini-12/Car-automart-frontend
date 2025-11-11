import { useState } from 'react';
import { Car, Search, Plus, User, Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Shield, Award, Clock, DollarSign, Upload, ArrowUpDown } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'cars' && <CarsPage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}


// Navbar Component
function Navbar({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'cars', label: 'Browse Cars' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="bg-blue-600 p-2 rounded-lg">
              <Car className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CarDealing</h1>
              <p className="text-xs text-gray-500">Quality Used Cars</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`font-semibold transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Sell Your Car
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 font-semibold ${
                  currentPage === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full mt-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Sell Your Car
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}


// HomePage Component
function HomePage({ setCurrentPage }) {
  const cars = [
    {
      id: 1,
      brand: 'Toyotaaaaa',
      model: 'Camry',
      year: 2018,
      price: 15500,
      mileage: 45000,
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600'
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
      year: 2019,
      price: 17800,
      mileage: 32000,
      image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600'
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'Focus',
      year: 2017,
      price: 12300,
      mileage: 58000,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Find Your Perfect Car</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Browse thousands of quality used cars at reasonable prices
          </p>
          <div className="max-w-3xl mx-auto bg-white rounded-lg p-2 flex gap-2">
            <input
              type="text"
              placeholder="Search by brand, model, or year..."
              className="flex-1 px-4 py-3 text-gray-900 outline-none"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 flex items-center gap-2">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Verified Sellers</h3>
              <p className="text-gray-600">All sellers are verified for your safety</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Quality Cars</h3>
              <p className="text-gray-600">Inspected and certified vehicles</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive and fair pricing</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here to help you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Cars</h2>
            <p className="text-xl text-gray-600">Check out our latest listings</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cars.map(car => (
              <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={car.image} alt={`${car.brand} ${car.model}`} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {car.brand} {car.model}
                  </h3>
                  <p className="text-gray-600 mb-4">Year: {car.year} | {car.mileage.toLocaleString()} miles</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-blue-600">${car.price.toLocaleString()}</span>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('cars')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 text-lg"
            >
              View All Cars
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Sell Your Car?</h2>
          <p className="text-xl mb-8 text-blue-100">List your car in minutes and reach thousands of buyers</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 text-lg">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}


// CarsPage Component - OLX Style
function CarsPage() {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [showSellModal, setShowSellModal] = useState(false);

  const allCars = [
    { id: 1, brand: 'Maruti', model: 'Swift', year: 2020, price: 6500, mileage: 25000, fuel: 'Petrol', location: 'Mumbai', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600' },
    { id: 2, brand: 'Hyundai', model: 'i20', year: 2021, price: 8200, mileage: 18000, fuel: 'Petrol', location: 'Delhi', image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600' },
    { id: 3, brand: 'Honda', model: 'City', year: 2019, price: 9500, mileage: 35000, fuel: 'Diesel', location: 'Bangalore', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600' },
    { id: 4, brand: 'Maruti', model: 'Baleno', year: 2022, price: 7800, mileage: 12000, fuel: 'Petrol', location: 'Mumbai', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600' },
    { id: 5, brand: 'Tata', model: 'Nexon', year: 2021, price: 10500, mileage: 22000, fuel: 'Diesel', location: 'Pune', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600' },
    { id: 6, brand: 'Hyundai', model: 'Creta', year: 2020, price: 14500, mileage: 28000, fuel: 'Petrol', location: 'Delhi', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600' },
    { id: 7, brand: 'Honda', model: 'Amaze', year: 2023, price: 8900, mileage: 8000, fuel: 'Petrol', location: 'Chennai', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600' },
    { id: 8, brand: 'Maruti', model: 'Dzire', year: 2021, price: 7200, mileage: 20000, fuel: 'Petrol', location: 'Bangalore', image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600' },
    { id: 9, brand: 'Tata', model: 'Altroz', year: 2022, price: 8500, mileage: 15000, fuel: 'Petrol', location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600' }
  ];

  const brands = ['Maruti', 'Hyundai', 'Honda', 'Tata'];
  const locations = ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Chennai', 'Hyderabad'];

  const toggleBrand = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const filteredCars = allCars.filter(car => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(car.brand);
    const priceMatch = car.price >= priceRange[0] && car.price <= priceRange[1];
    const yearMatch = selectedYear === 'all' ||
      (selectedYear === 'under3' && new Date().getFullYear() - car.year <= 3) ||
      (selectedYear === 'under5' && new Date().getFullYear() - car.year <= 5) ||
      (selectedYear === 'under10' && new Date().getFullYear() - car.year <= 10);
    const locationMatch = selectedLocation === 'all' || car.location === selectedLocation;
    const searchMatch = searchQuery === '' || 
      car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase());
    
    return brandMatch && priceMatch && yearMatch && locationMatch && searchMatch;
  });

  // Sort cars
  const sortedCars = [...filteredCars].sort((a, b) => {
    if (sortBy === 'newest') return b.year - a.year;
    if (sortBy === 'priceLow') return a.price - b.price;
    if (sortBy === 'priceHigh') return b.price - a.price;
    return 0;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Bar with Search and Sell Button */}
        <div className="mb-6">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Used Cars for Sale</h1>
            <button
              onClick={() => setShowSellModal(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
            >
              <Plus className="w-5 h-5" />
              Sell Your Car
            </button>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by brand or model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
            />
          </div>
        </div>
        
        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Filters</h2>
              
              {/* Brand Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Brand</h3>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="ml-3 text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0].toLocaleString()}</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Year Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Year</h3>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="all">All Years</option>
                  <option value="under3">Under 3 years</option>
                  <option value="under5">Under 5 years</option>
                  <option value="under10">Under 10 years</option>
                </select>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="all">All Locations</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedBrands([]);
                  setPriceRange([0, 50000]);
                  setSelectedYear('all');
                  setSelectedLocation('all');
                }}
                className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Cars Grid */}
          <div className="flex-1">
            {/* Results Count and Sort */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="text-gray-700 font-semibold">
                {sortedCars.length} cars found
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="newest">Newest First</option>
                  <option value="priceLow">Price: Low to High</option>
                  <option value="priceHigh">Price: High to Low</option>
                </select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedCars.map(car => (
                <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer border border-gray-200">
                  {/* Car Image */}
                  <div className="relative">
                    <img src={car.image} alt={`${car.brand} ${car.model}`} className="w-full h-48 object-cover" />
                    <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-semibold text-gray-700">
                      {car.year}
                    </div>
                  </div>
                  
                  {/* Car Details */}
                  <div className="p-4">
                    {/* Price */}
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      ${car.price.toLocaleString()}
                    </div>
                    
                    {/* Model and Brand */}
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {car.brand} {car.model}
                    </h3>
                    
                    {/* Car Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span>{car.mileage.toLocaleString()} km</span>
                      <span>•</span>
                      <span>{car.fuel}</span>
                    </div>
                    
                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{car.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* No Results */}
            {sortedCars.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-xl text-gray-500">No cars found matching your filters</p>
                <button
                  onClick={() => {
                    setSelectedBrands([]);
                    setPriceRange([0, 50000]);
                    setSelectedYear('all');
                    setSelectedLocation('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 text-blue-600 hover:underline font-semibold"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Sell Car Modal */}
      {showSellModal && <SellCarModal onClose={() => setShowSellModal(false)} />}
    </div>
  );
}

// Sell Car Modal Component
function SellCarModal({ onClose }) {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: new Date().getFullYear(),
    price: '',
    mileage: '',
    fuel: 'Petrol',
    location: '',
    image: '',
    phone: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Car ad posted successfully! (This is a demo)');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Post Your Car Ad</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Car Details */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Brand *</label>
              <input
                type="text"
                required
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Maruti"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Model *</label>
              <input
                type="text"
                required
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Swift"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Year *</label>
              <input
                type="number"
                required
                min="1990"
                max={new Date().getFullYear()}
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Price ($) *</label>
              <input
                type="number"
                required
                min="0"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 6500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mileage (km) *</label>
              <input
                type="number"
                required
                min="0"
                value={formData.mileage}
                onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 25000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Fuel Type *</label>
              <select
                value={formData.fuel}
                onChange={(e) => setFormData({ ...formData, fuel: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Location *</label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Mumbai"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., +91 98765 43210"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Car Image URL *</label>
            <div className="flex items-center gap-4">
              <input
                type="url"
                required
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com/car-image.jpg"
              />
              <div className="flex items-center gap-2 text-gray-500">
                <Upload className="w-5 h-5" />
                <span className="text-sm">Or upload</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Paste image URL or upload from your device</p>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe your car's condition, features, etc."
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Post Ad
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


// ServicesPage Component
function ServicesPage() {
  const services = [
    { icon: <Search className="w-12 h-12" />, title: 'Car Search', description: 'Advanced search filters to find your perfect car', color: 'blue' },
    { icon: <Plus className="w-12 h-12" />, title: 'List Your Car', description: 'Easy listing process with photo uploads', color: 'green' },
    { icon: <Shield className="w-12 h-12" />, title: 'Vehicle Inspection', description: 'Professional inspection services', color: 'purple' },
    { icon: <DollarSign className="w-12 h-12" />, title: 'Financing', description: 'Flexible financing options available', color: 'orange' },
    { icon: <Award className="w-12 h-12" />, title: 'Quality Guarantee', description: 'All vehicles verified and certified', color: 'red' },
    { icon: <Clock className="w-12 h-12" />, title: '24/7 Support', description: 'Round-the-clock customer assistance', color: 'teal' }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Everything you need for buying and selling cars</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className={`bg-${service.color}-100 w-20 h-20 rounded-lg flex items-center justify-center mb-6 text-${service.color}-600`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// AboutPage Component
function AboutPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About CarDealing</h1>
          <p className="text-xl text-gray-600">Your trusted partner in car buying and selling</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600" alt="About Us" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              CarDealing is a leading online marketplace for buying and selling quality used cars. We connect buyers with verified sellers, ensuring a safe and transparent transaction process.
            </p>
            <p className="text-gray-600 mb-4">
              With thousands of listings and a commitment to customer satisfaction, we make car buying and selling simple, secure, and stress-free.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-3xl font-bold text-blue-600">500+</p>
                <p className="text-gray-600">Cars Listed</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-3xl font-bold text-green-600">1000+</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ContactPage Component
function ContactPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with our team</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg"></textarea>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <p className="text-gray-600">info@cardealing.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Address</h3>
                <p className="text-gray-600">123 Car Street, Auto City, AC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// Footer Component
function Footer({ setCurrentPage }) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">CarDealing</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted marketplace for quality used cars at reasonable prices.
            </p>
            <div className="flex gap-4">
              <div className="bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="bg-blue-400 p-2 rounded-full cursor-pointer hover:bg-blue-500">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="bg-pink-600 p-2 rounded-full cursor-pointer hover:bg-pink-700">
                <Instagram className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage('home')} className="text-gray-400 hover:text-white">Home</button></li>
              <li><button onClick={() => setCurrentPage('cars')} className="text-gray-400 hover:text-white">Browse Cars</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="text-gray-400 hover:text-white">Services</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="text-gray-400 hover:text-white">About Us</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Buy a Car</li>
              <li className="hover:text-white cursor-pointer">Sell Your Car</li>
              <li className="hover:text-white cursor-pointer">Car Inspection</li>
              <li className="hover:text-white cursor-pointer">Financing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@cardealing.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Car Street, Auto City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CarDealing. All rights reserved. Made with ❤️ for car enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
}
