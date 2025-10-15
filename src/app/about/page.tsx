'use client';

import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { motion, Variants } from 'framer-motion';

export default function AboutPage() {
  // Animation variants
  const heroVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-orange-100 to-amber-50 overflow-hidden">
        {/* Animated Background Orbs */}
        <motion.div 
          className="absolute top-0 left-0 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-15"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-40 h-40 bg-red-200 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div 
          className="max-w-4xl mx-auto text-center z-10 relative mt-14"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-amber-900 font-serif mb-6"
            variants={heroVariants}
          >
            [translate:हमारी कहानी]
          </motion.h1>
          <motion.h2 
            className="text-3xl md:text-4xl text-orange-700 mb-4"
            variants={heroVariants}
          >
            Our Story
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700"
            variants={heroVariants}
          >
            पहाड़ी स्वाद - A Journey of Empowerment & Tradition
          </motion.p>
        </motion.div>
      </section>

      {/* Main Story Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">

          {/* The Beginning - Bilingual */}
          <motion.div 
            className="mb-10 bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border-l-4 border-orange-500"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-3xl font-bold text-amber-900 mb-4 font-serif">[translate:शुरुआत] / The Beginning</h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              हमने 2020 में 10 महिलाओं के समूह के साथ अपना सफर शुरू किया। हर महिला का सपना था कि वह आत्मनिर्भर बने और अपने परिवार की मदद कर सके। इसी सोच के साथ <strong className="text-orange-700">पहाड़ी स्वाद</strong>एक घरेलू खाद्य उत्पाद ब्रांड—का जन्म हुआ।
            </p>
            <p className="text-gray-700 text-base italic">
              We began our journey in 2020 with a group of 10 women. Each woman had a dream to become self-reliant ([translate:आत्मनिर्भर]) and support her family. With this vision, <strong>Pahadi Swad</strong>—a homemade food product brand—was born.
            </p>
          </motion.div>

          {/* Growth Journey */}
          <motion.div 
            className="mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-2xl font-bold text-amber-900 mb-3"
              variants={fadeInUp}
            >
              विकास की यात्रा / Our Growth
            </motion.h2>
            <motion.p 
              className="text-gray-800 text-lg leading-relaxed mb-3"
              variants={fadeInUp}
            >
              शुरुआत में हमारे पास सिर्फ आम और मिर्च का अचार था, और उत्पादन बहुत ही सीमित था। धीरे-धीरे हमारे स्वाद और मेहनत को लोगों का प्यार मिला और आज हमारे पास 11 तरह के अचार के अलावा पापड़, मसाले, जूस, कैंडी जैसी कई घरेलू चीजें हैं।
            </motion.p>
            <motion.p 
              className="text-gray-700 mb-4"
              variants={fadeInUp}
            >
              In the beginning, we had only mango and chili pickle, with very limited production. Gradually, our taste and hard work earned people&apos;s love, and today we offer 11 varieties of pickles along with papads, masalas, juices, candies, and many other homemade products.
            </motion.p>

            {/* Stats Cards */}
            <motion.div 
              className="grid md:grid-cols-3 gap-4 my-6"
              variants={staggerContainer}
            >
              {[
                { value: "2020", label: "Year Founded" },
                { value: "10 → 25", label: "Women Empowered" },
                { value: "11+", label: "Product Varieties" }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-white border-2 border-orange-200 rounded-xl p-4 text-center shadow-md"
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "#f97316",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="text-4xl font-bold text-orange-600 mb-1"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: idx * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Today's Impact */}
          <motion.div 
            className="mb-10 bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-bold text-amber-900 mb-3">[translate:आज] / Today</h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-3">
             आज हमारा समूह 25 महिलाओं तक पहुंच चुका है, जो न सिर्फ आत्मनिर्भर हैं बल्कि अपने परिवार को भी सहारा दे रही हैं। हमारा उद्देश्य हर महिला को उसके पैरों पर खड़ा करना और पारंपरिक पहाड़ी स्वाद को घर-घर पहुंचाना है।
            </p>
            <p className="text-gray-700">
              Today, our group has grown to 25 women who are not only self-reliant but also supporting their families. Our mission is to help every woman stand on her own feet and bring traditional Pahadi flavors to every home.
            </p>
          </motion.div>

          {/* From Bageshwar */}
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-amber-900 mb-3">[translate:बागेश्वर से] / From Bageshwar</h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-3">
             हम बागेश्वर, उत्तराखंड की खूबसूरती और शुद्धता को हर बोतल और पैकेट के जरिए आपके घर तक पहुँचाने के लिए समर्पित हैं।
            </p>
            <p className="text-gray-700">
              We are dedicated to bringing the beauty and purity of Bageshwar, Uttarakhand to your home through every bottle and packet.
            </p>
          </motion.div>

          {/* Values Section */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6 my-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                emoji: "👩‍🌾",
                title: "Women Empowerment",
                description: "Empowering 25 women to become self-reliant and support their families"
              },
              {
                emoji: "🏔️",
                title: "Pahadi Tradition",
                description: "Preserving and sharing authentic Uttarakhand flavors"
              },
              {
                emoji: "🌿",
                title: "100% Natural",
                description: "No preservatives, pure homemade quality"
              },
              {
                emoji: "❤️",
                title: "Made with Love",
                description: "Every product crafted with care and dedication"
              }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                className="bg-orange-50 p-6 rounded-xl border border-orange-200"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#f97316",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {value.emoji}
                </motion.div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="text-center mt-12 py-8 bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-amber-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Taste the Tradition of Bageshwar
            </motion.h3>
            <Link href="/explore">
              <motion.button
                className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(234, 88, 12, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Explore Our Products
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-orange-100 py-10">
        <motion.div 
          className="max-w-4xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2 font-serif">[translate:पहाड़ी स्वाद]</h3>
            <p className="text-orange-200 mb-2">Pahadi Swad - Bageshwar, Uttarakhand</p>
            <p className="text-orange-200">Empowering women, preserving tradition</p>
            <div className="mt-4 border-t border-orange-800 pt-4 text-orange-200 text-sm">
              © 2025 Pahadi Swad. Made with ❤️ in Bageshwar, Uttarakhand
            </div>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
