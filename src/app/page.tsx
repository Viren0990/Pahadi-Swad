'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import qqq from "@/images/qqq.png"
import ttt from "@/images/ttt.png"
import www from "@/images/www.png"
import { motion, Variants } from 'framer-motion';

export default function Home() {
  // Animation variants - Fixed TypeScript errors
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

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

        {/* Floating Decorative Elements with Animation */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-orange-300 rounded-full blur-3xl opacity-20"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-red-300 rounded-full blur-3xl opacity-20"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-yellow-300 rounded-full blur-2xl opacity-20"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="container mx-auto px-4 z-10 py-16">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="text-center mb-12 mt-18">
              {/* Decorative Element */}
              <motion.div 
                className="flex justify-center mb-6"
                variants={fadeIn}
              >
                <motion.div 
                  className="w-20 h-1 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>
          
              <motion.h1 
                className="text-6xl md:text-7xl font-bold text-amber-900 mb-6 font-serif"
                variants={fadeInUp}
              >
                पहाड़ी स्वाद बागेश्वर
              </motion.h1>
              <motion.p 
                className="text-2xl md:text-3xl text-orange-700 mb-4 italic"
                variants={fadeInUp}
              >
                पहाड़ों की शुद्धता, परंपरा का स्वाद
              </motion.p>
              <motion.p 
                className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8"
                variants={fadeInUp}
              >
                Authentic homemade pickles, masalas & papads crafted with love and traditional recipes passed down through generations
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex justify-center mt-8 gap-4 flex-wrap"
                variants={fadeInUp}
              >
                <motion.button 
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/explore">Explore Products</Link>
                </motion.button>
                <motion.button 
                  className="bg-white border-2 border-orange-500 text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact">Contact Us</Link>
                </motion.button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div 
                className="mt-12 flex justify-center gap-8 flex-wrap"
                variants={staggerContainer}
              >
                {[
                  { number: "500+", label: "Happy Customers" },
                  { number: "15+", label: "Product Varieties" },
                  { number: "100%", label: "Satisfaction Rate" }
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    className="text-center"
                    variants={scaleIn}
                    whileHover={{ scale: 1.1 }}
                  >
                    <p className="text-4xl font-bold text-orange-600">{stat.number}</p>
                    <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0">
          <motion.div 
            className="h-2 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
          <div className="h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 opacity-50"></div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 font-serif">
              Our Specialties
            </h2>
            <div className="flex justify-center">
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                image: qqq,
                title: "Homemade Pickles",
                description: "Traditional mango, lime, and mixed vegetable pickles made with authentic spices and pure mustard oil",
                features: ["No preservatives", "Traditional recipes", "Fresh ingredients"],
                gradient: "from-orange-50 to-red-50",
                borderColor: "border-orange-200",
                decorColor: "bg-orange-200"
              },
              {
                image: ttt,
                title: "Fresh Masalas",
                description: "Hand-ground spice blends including garam masala, chaat masala, and special curry mixes",
                features: ["Freshly ground", "Aromatic & flavorful", "Pure ingredients"],
                gradient: "from-yellow-50 to-orange-50",
                borderColor: "border-yellow-200",
                decorColor: "bg-yellow-200"
              },
              {
                image: www,
                title: "Crispy Papads",
                description: "Sun-dried papads in various flavors - moong, urad, jeera, and black pepper",
                features: ["Sun-dried", "Multiple varieties", "Handmade quality"],
                gradient: "from-amber-50 to-yellow-50",
                borderColor: "border-amber-200",
                decorColor: "bg-amber-200"
              }
            ].map((product, idx) => (
              <motion.div 
                key={idx}
                className={`group relative bg-gradient-to-br ${product.gradient} rounded-2xl p-8 shadow-xl border-2 ${product.borderColor}`}
                variants={scaleIn}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${product.decorColor} rounded-bl-full opacity-20`}></div>
                <div className="relative z-10">
                  <motion.div 
                    className="mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Image 
                      src={product.image}
                      alt={product.title}
                      priority
                      className="h-40 w-40 object-contain drop-shadow-lg"
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {product.description}
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {product.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        ✓ {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-amber-50 relative overflow-hidden">
        <motion.div 
          className="absolute top-10 left-10 w-40 h-40 bg-orange-300 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-60 h-60 bg-red-300 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 font-serif">
              The Traditional Touch
            </h2>
            <div className="flex justify-center">
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { emoji: "👵", title: "Family Recipes", description: "Time-tested recipes handed down through generations" },
              { emoji: "🌿", title: "Natural Ingredients", description: "Only the finest, freshest ingredients without chemicals" },
              { emoji: "❤️", title: "Made with Love", description: "Every product crafted with care and attention" },
              { emoji: "✨", title: "Authentic Taste", description: "The real taste of home-cooked Indian flavors" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="text-center"
                variants={scaleIn}
              >
                <motion.div 
                  className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <span className="text-4xl">{item.emoji}</span>
                </motion.div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 font-serif">
              What Our Customers Say
            </h2>
            <div className="flex justify-center">
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
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
              <motion.div 
                key={idx} 
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-lg border-l-4 border-orange-500"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.02,
                  borderLeftWidth: 8
                }}
              >
                <motion.div 
                  className="flex mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span 
                      key={i} 
                      className="text-yellow-500 text-xl"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <p className="font-semibold text-amber-900">— {testimonial.name}</p>
              </motion.div>
            ))}
          </motion.div>
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

        <motion.div 
          className="container mx-auto px-4 text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
            variants={fadeInUp}
          >
            Experience Authentic Home Flavors
          </motion.h2>
          <motion.p 
            className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Order now and bring the taste of traditional homemade goodness to your table
          </motion.p>
          <motion.div variants={fadeInUp}>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                className="inline-block bg-white text-orange-600 hover:bg-orange-50 px-10 py-4 rounded-lg font-semibold text-lg shadow-2xl" 
                href="/contact"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-orange-100 py-2">
        <motion.div 
          className="text-center mt-4 mb-4 pt-8 border-t border-orange-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-orange-200">© 2025 पहाड़ी स्वाद. Made with ❤️ in India</p>
        </motion.div>
      </footer>
    </main>
  );
}
