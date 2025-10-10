// app/contact/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Contact details
  const email = "sunitav.4291@gmail.com";
  const phone = "919410774291";
  const whatsappMessage = "Hi! I'm interested in your products.";
  
  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint is 768px
    };
    
    // Check on mount
    checkScreenSize();
    
    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  // Gmail links - different for mobile and desktop
  const mailtoLink = `mailto:${email}?subject=Product Inquiry&body=Hello Pahadi Swad Team,%0D%0A%0D%0AI would like to know more about your products.`;
  const gmailWebLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Product Inquiry&body=Hello Pahadi Swad Team,%0D%0A%0D%0AI would like to know more about your products.`;
  
  // WhatsApp link
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(whatsappMessage)}`;
  
  // Handle Gmail click
  const handleGmailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  if (isMobile) {
    // On mobile, use mailto to open Gmail app
    window.location.href = mailtoLink;
  } else {
    // On desktop, open Gmail web interface in new tab
    window.open(gmailWebLink, '_blank');
  }
};

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-10 pb-2 px-4 bg-gradient-to-br from-orange-100 to-amber-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-15"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-200 rounded-full blur-3xl opacity-10"></div>
        
        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 font-serif mb-6 mt-16">संपर्क करें</h1>
          <h2 className="text-3xl md:text-4xl text-orange-700 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-700">We would love to hear from you!</p>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Have questions about our products? Want to place an order? Or just want to say hello? 
              Choose your preferred way to reach us.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            {/* Gmail Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-200">
              <div className="text-center">
                <div className="bg-gradient-to-br from-red-500 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-amber-900 mb-3">Email Us</h3>
                <p className="text-gray-600 mb-6">
                  Send us a detailed message and we wll get back to you within 24 hours.
                </p>
                
                <button 
  onClick={handleGmailClick}
  className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
>
  {isMobile ? 'Open Gmail App' : 'Open Gmail'}
</button>
                
                <p className="text-gray-500 text-sm mt-4">{email}</p>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-200">
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-amber-900 mb-3">WhatsApp Us</h3>
                <p className="text-gray-600 mb-6">
                  Chat with us instantly! We are available to answer your questions quickly.
                </p>
                
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Chat on WhatsApp
                </a>
                
                <p className="text-gray-500 text-sm mt-4">+91 9410774291</p>
              </div>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-orange-200">
            <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">Other Ways to Reach Us</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-200 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-700">सुनीता वर्मा: +91 9410774291</p>
                  <p className="text-gray-700">सुनीता परिहार: +91 9058365954</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-200 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-700">डे.एन.यू.एल.एम.नगर पालिका परिषद बागेश्वर</p>
                  <p className="text-gray-700">Bageshwar, Uttarakhand</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-orange-100 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2 font-serif">पहाड़ी स्वाद</h3>
            <p className="text-orange-200 mb-2">Pahadi Swad - Bageshwar, Uttarakhand</p>
            <p className="text-orange-200">Empowering women, preserving tradition</p>
            <div className="mt-4 border-t border-orange-800 pt-4 text-orange-200 text-sm">
              © 2025 Pahadi Swad. Made with ❤️ in Bageshwar, Uttarakhand
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
