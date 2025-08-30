import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      
{/* Hero Section */}

<section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white">
<h1 className="text-4xl md:text-6xl font-bold mb-4">
Smart Mobility Platform
</h1>
<p className="max-w-2xl text-lg md:text-xl mb-6">
Real-time navigation, eco-friendly routes, smart parking, carpooling, and EV charging—all in one app.
</p>
<button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
Get Started
</button>
</section>


{/* Features Section */}
<section className="py-16 px-6 max-w-6xl mx-auto">
<h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
<div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
<h3 className="text-xl font-semibold mb-2">🚦 Real-time Navigation</h3>
<p>Get instant traffic updates and hazard alerts for a safer commute.</p>
</div>


<div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
<h3 className="text-xl font-semibold mb-2">🅿️ Smart Parking</h3>
<p>Discover available parking spots near your destination in seconds.</p>
</div>


<div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
<h3 className="text-xl font-semibold mb-2">🌱 Eco-Friendly Routes</h3>
<p>Reduce your carbon footprint by choosing sustainable routes.</p>
</div>


<div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
<h3 className="text-xl font-semibold mb-2">🤝 Carpool Matching</h3>
<p>Connect with nearby commuters to save money and reduce traffic.</p>
</div>


<div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
<h3 className="text-xl font-semibold mb-2">⚡ EV Charging Stations</h3>
<p>Locate charging points for electric vehicles in real-time.</p>
</div>


<div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
<h3 className="text-xl font-semibold mb-2">📊 Smart Insights</h3>
<p>Track your travel history, fuel savings, and eco-impact reports.</p>
</div>
</div>
</section>


{/* Call to Action
<section className="py-16 bg-green-600 text-white text-center">
<h2 className="text-3xl font-bold mb-4">Make Your Commute Smarter & Greener</h2>
<p className="max-w-xl mx-auto mb-6">
Join thousands of drivers who are already saving time, money, and the environment.
</p>
<button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
Download App
</button>
</section> */}


{/* Footer */}
<footer className="py-6 text-center bg-gray-800 text-gray-300">
<p>© 2025 Smart Mobility Platform. All rights reserved.</p>
</footer>
</main>
  );
}
