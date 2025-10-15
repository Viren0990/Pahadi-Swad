'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { motion, Variants } from 'framer-motion';

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Contact details
  const email = "sunitav.4291@gmail.com";
  const phone = "918057197903";
  const whatsappMessage = "Hi! I'm interested in your products.";
  
  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  // Gmail links
  const mailtoLink = `mailto:${email}?subject=Product Inquiry&body=Hello Pahadi Swad Team,%0D%0A%0D%0AI would like to know more about your products.`;
  const gmailWebLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Product Inquiry&body=Hello Pahadi Swad Team,%0D%0A%0D%0AI would like to know more about your products.`;
  
  // WhatsApp link
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(whatsappMessage)}`;
  
  // Handle Gmail click
  const handleGmailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isMobile) {
      window.location.href = mailtoLink;
    } else {
      window.open(gmailWebLink, '_blank');
    }
  };

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
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-10 pb-2 px-4 bg-gradient-to-br from-orange-100 to-amber-50 overflow-hidden">
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
          className="max-w-4xl mx-auto text-center z-10 relative"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-amber-900 font-serif mb-6 mt-16"
            variants={heroVariants}
          >
            संपर्क करें
          </motion.h1>
          <motion.h2 
            className="text-3xl md:text-4xl text-orange-700 mb-4"
            variants={heroVariants}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700"
            variants={heroVariants}
          >
            We would love to hear from you!
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Options Section */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Have questions about our products? Want to place an order? Or just want to say hello? 
              Choose your preferred way to reach us.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            
            {/* Gmail Card */}
            <motion.div 
              className="group bg-white rounded-2xl p-8 shadow-xl border-2 border-orange-200"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-center">
                <motion.div 
                  className="bg-gradient-to-br from-red-500 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  variants={iconVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-amber-900 mb-3">Email Us</h3>
                <p className="text-gray-600 mb-6">
                  Send us a detailed message and we will get back to you within 24 hours.
                </p>
                
                <motion.button 
                  onClick={handleGmailClick}
                  className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(239, 68, 68, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {isMobile ? 'Open Gmail App' : 'Open Gmail'}
                </motion.button>
                
                <p className="text-gray-500 text-sm mt-4">{email}</p>
              </div>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div 
              className="group bg-white rounded-2xl p-8 shadow-xl border-2 border-green-200"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-center">
                <motion.div 
                  className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  variants={iconVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-amber-900 mb-3">WhatsApp Us</h3>
                <p className="text-gray-600 mb-6">
                  Chat with us instantly! We are available to answer your questions quickly.
                </p>
                
                <motion.a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(34, 197, 94, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Chat on WhatsApp
                </motion.a>
                
               
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Contact Info */}
          
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
            <h3 className="text-2xl font-bold text-white mb-2 font-serif">पहाड़ी स्वाद</h3>
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
