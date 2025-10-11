import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import  qqq  from "@/images/qqq.png"
import  ttt  from "@/images/ttt.png"
import  www  from "@/images/www.png"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
  {/* Enhanced Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23D97706' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

  {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-300 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-yellow-300 rounded-full blur-2xl opacity-20 animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 z-10 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 mt-18">
            {/* Decorative Element */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 rounded-full"></div>
            </div>
        
            <h1 className="text-6xl md:text-7xl font-bold text-amber-900 mb-6 font-serif">
              पहाड़ी स्वाद <br /> बागेश्वर
            </h1>
            <p className="text-2xl md:text-3xl text-orange-700 mb-4 italic">
              पहाड़ों की शुद्धता, परंपरा का स्वाद
            </p>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Authentic homemade pickles, masalas & papads crafted with love and traditional recipes passed down through generations
            </p>

        {/* CTA Buttons */}
        <div className="flex justify-center mt-8 gap-4 flex-wrap">
          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <Link href="/explore">Explore Products</Link>
          </button>
          <button className="bg-white border-2 border-orange-500 text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
             <Link href="/contact">Contact Us</Link>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 flex justify-center gap-8 flex-wrap">
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-600">500+</p>
            <p className="text-sm text-gray-600 font-medium">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-600">15+</p>
            <p className="text-sm text-gray-600 font-medium">Product Varieties</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-600">100%</p>
            <p className="text-sm text-gray-600 font-medium">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </div>
  </div>

        {/* Enhanced Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0">
        <div className="h-2 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400"></div>
        <div className="h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 opacity-50"></div>
      </div>
    </section>



      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 font-serif">
              Our Specialties
            </h2>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Pickle Card */}
            <div className="group relative bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-bl-full opacity-20"></div>
              <div className="relative z-10">
                <div className="mb-4">
                  <Image 
                    src={qqq}
                    alt="Authentication illustration"
                    priority
                    className="h-40 w-40 object-contain drop-shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">
                  Homemade Pickles
                </h3>
                <p className="text-gray-700 mb-4">
                  Traditional mango, lime, and mixed vegetable pickles made with authentic spices and pure mustard oil
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ No preservatives</li>
                  <li>✓ Traditional recipes</li>
                  <li>✓ Fresh ingredients</li>
                </ul>
              </div>
            </div>

            {/* Masala Card */}
            <div className="group relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-yellow-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-bl-full opacity-20"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4">
                  <Image 
                    src={ttt}
                    alt="Authentication illustration"
                    priority
                    className="h-40 w-40 object-contain drop-shadow-lg"
                  /></div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">
                  Fresh Masalas
                </h3>
                <p className="text-gray-700 mb-4">
                  Hand-ground spice blends including garam masala, chaat masala, and special curry mixes
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Freshly ground</li>
                  <li>✓ Aromatic & flavorful</li>
                  <li>✓ Pure ingredients</li>
                </ul>
              </div>
            </div>

            {/* Papad Card */}
            <div className="group relative bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-amber-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200 rounded-bl-full opacity-20"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4">
                  <Image 
                    src={www}
                    alt="Authentication illustration"
                    priority
                    className="h-40 w-40 object-contain drop-shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">
                  Crispy Papads
                </h3>
                <p className="text-gray-700 mb-4">
                  Sun-dried papads in various flavors - moong, urad, jeera, and black pepper
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Sun-dried</li>
                  <li>✓ Multiple varieties</li>
                  <li>✓ Handmade quality</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-amber-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-orange-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-red-300 rounded-full opacity-10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 font-serif">
              The Traditional Touch
            </h2>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">👵</span>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Family Recipes</h3>
              <p className="text-gray-600">Time-tested recipes handed down through generations</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Natural Ingredients</h3>
              <p className="text-gray-600">Only the finest, freshest ingredients without chemicals</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Made with Love</h3>
              <p className="text-gray-600">Every product crafted with care and attention</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Authentic Taste</h3>
              <p className="text-gray-600">The real taste of home-cooked Indian flavors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* Testimonials Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 font-serif">
        What Our Customers Say
      </h2>
      <div className="flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[
        {
          name: "Priya Sharma",
          text: "The mango pickle reminds me of my grandmother's recipe. Absolutely authentic and delicious!",
          rating: 5
        },
        {
          name: "Rajesh Kumar",
          text: "Best garam masala I've ever used. The aroma fills the entire kitchen. Highly recommended!",
          rating: 5
        },
        {
          name: "Anita Patel",
          text: "The papads are crispy and flavorful. Finally found homemade quality products!",
          rating: 5
        }
      ].map((testimonial, idx) => (
        <div key={idx} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
          <div className="flex mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-xl">★</span>
            ))}
          </div>
          <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
          <p className="font-semibold text-amber-900">— {testimonial.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="pt-20 pb-20 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l20 20-20 20L0 20z' fill='%23ffffff' /%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            Experience Authentic Home Flavors
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Order now and bring the taste of traditional homemade goodness to your table
          </p>
          <Link className="bg-white text-orange-600 hover:bg-orange-50 px-10 py-4 rounded-lg font-semibold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300" href="/contact">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-orange-100 py-2">
          <div className="text-center mt-4 mb-4 pt-8 border-t border-orange-800">
            <p className="text-orange-200">© 2025 पहाड़ी स्वाद. Made with ❤️ in India</p>
          </div>
      </footer>
    </main>
  );
}
