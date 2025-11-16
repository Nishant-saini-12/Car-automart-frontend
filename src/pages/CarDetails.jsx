import { useState } from 'react';
import { ArrowLeft, MapPin, Gauge, Calendar, Fuel, User, Phone, Mail, Share2, Heart, Shield, CheckCircle } from 'lucide-react';

export default function CarDetails({ carId, onNavigate, allCars }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Find the car by ID
  const car = allCars.find(c => c.id === parseInt(carId));

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Car not found</h2>
          <button
            onClick={() => onNavigate('cars')}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Back to listings
          </button>
        </div>
      </div>
    );
  }

  // Mock additional images (in real app, these would come from car data)
  const images = [
    car.image,
    car.image,
    car.image,
    car.image
  ];

  const features = [
    'Air Conditioning',
    'Power Steering',
    'Power Windows',
    'ABS',
    'Airbags',
    'Alloy Wheels',
    'Bluetooth',
    'USB Charger'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => onNavigate('cars')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Listings
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Main Image */}
              <div className="relative h-96 bg-gray-200">
                <img
                  src={images[selectedImage]}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <Heart className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2 p-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                    }`}
                  >
                    <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Car Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Car Details</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Year</p>
                    <p className="text-lg font-bold text-gray-900">{car.year}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Gauge className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Mileage</p>
                    <p className="text-lg font-bold text-gray-900">{car.mileage.toLocaleString()} km</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Fuel className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Fuel Type</p>
                    <p className="text-lg font-bold text-gray-900">{car.fuel}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <User className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Owner</p>
                    <p className="text-lg font-bold text-gray-900">1st Owner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">
                This {car.brand} {car.model} is in excellent condition with only {car.mileage.toLocaleString()} km on the odometer. 
                The car has been well-maintained with regular servicing. All features are in perfect working condition. 
                The vehicle comes with complete documentation and is ready for immediate delivery. 
                This is a great opportunity to own a reliable {car.brand} at a reasonable price.
              </p>
            </div>
          </div>

          {/* Right Column - Price and Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Price</p>
                  <p className="text-4xl font-black text-blue-600">${car.price.toLocaleString()}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span>{car.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <User className="w-5 h-5 text-gray-400" />
                    <span>{car.seller}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Seller
                  </button>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    Send Message
                  </button>
                  <button className="w-full border-2 border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                </div>
              </div>

              {/* Safety Tips */}
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Shield className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Safety Tips</h3>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Meet seller at a safe location</li>
                      <li>• Check all documents</li>
                      <li>• Inspect the car thoroughly</li>
                      <li>• Don't pay in advance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
