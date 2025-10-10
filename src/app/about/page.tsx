// app/about/page.tsx
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-orange-100 to-amber-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-15"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-200 rounded-full blur-3xl opacity-10"></div>
        
        <div className="max-w-4xl mx-auto text-center z-10 relative mt-14">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 font-serif mb-6">हमारी कहानी</h1>
          <h2 className="text-3xl md:text-4xl text-orange-700 mb-4">Our Story</h2>
          <p className="text-xl text-gray-700">पहाड़ी स्वाद - A Journey of Empowerment & Tradition</p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">

          {/* The Beginning - Bilingual */}
          <div className="mb-10 bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border-l-4 border-orange-500">
            <h2 className="text-3xl font-bold text-amber-900 mb-4 font-serif">शुरुआत / The Beginning</h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              हमने 2020 में 10 महिलाओं के समूह के साथ अपना सफर शुरू किया। हर महिला का सपना था कि वह आत्मनिर्भर बने और अपने परिवार की मदद कर सके। इसी सोच के साथ <strong className="text-orange-700">पहाड़ी स्वाद</strong>—एक घरेलू खाद्य उत्पाद ब्रांड—का जन्म हुआ।
            </p>
            <p className="text-gray-700 text-base italic">
              We began our journey in 2020 with a group of 10 women. Each woman had a dream to become self-reliant (आत्मनिर्भर) and support her family. With this vision, <strong>Pahadi Swad</strong>—a homemade food product brand—was born.
            </p>
          </div>

          {/* Growth Journey */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-amber-900 mb-3">विकास की यात्रा / Our Growth</h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-3">
              शुरुआत में हमारे पास सिर्फ आम और मिर्च का अचार था, और उत्पादन बहुत ही सीमित था। धीरे-धीरे हमारे स्वाद और मेहनत को लोगों का प्यार मिला और आज हमारे पास 11 तरह के अचार के अलावा पापड़, मसाले, जूस, कैंडी जैसी कई घरेलू चीजें हैं।
            </p>
           <p className="text-gray-700 mb-4">
  In the beginning, we had only mango and chili pickle, with very limited production. Gradually, our taste and hard work earned people&apos;s love, and today we offer 11 varieties of pickles along with papads, masalas, juices, candies, and many other homemade products.
</p>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-4 my-6">
              <div className="bg-white border-2 border-orange-200 rounded-xl p-4 text-center shadow-md">
                <div className="text-4xl font-bold text-orange-600 mb-1">2020</div>
                <p className="text-gray-600 text-sm">Year Founded</p>
              </div>
              <div className="bg-white border-2 border-orange-200 rounded-xl p-4 text-center shadow-md">
                <div className="text-4xl font-bold text-orange-600 mb-1">10 → 25</div>
                <p className="text-gray-600 text-sm">Women Empowered</p>
              </div>
              <div className="bg-white border-2 border-orange-200 rounded-xl p-4 text-center shadow-md">
                <div className="text-4xl font-bold text-orange-600 mb-1">11+</div>
                <p className="text-gray-600 text-sm">Product Varieties</p>
              </div>
            </div>
          </div>

          {/* Today's Impact */}
          <div className="mb-10 bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-amber-900 mb-3">आज / Today</h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-3">
              आज हमारा समूह 25 महिलाओं तक पहुंच चुका है, जो न सिर्फ आत्मनिर्भर हैं बल्कि अपने परिवार को भी सहारा दे रही हैं। हमारा उद्देश्य हर महिला को उसके पैरों पर खड़ा करना और पारंपरिक पहाड़ी स्वाद को घर-घर पहुंचाना है।
            </p>
            <p className="text-gray-700">
              Today, our group has grown to 25 women who are not only self-reliant but also supporting their families. Our mission is to help every woman stand on her own feet and bring traditional Pahadi flavors to every home.
            </p>
          </div>

          {/* From Bageshwar */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-amber-900 mb-3">बागेश्वर से / From Bageshwar</h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-3">
              हम बागेश्वर, उत्तराखंड की खूबसूरती और शुद्धता को हर बोतल और पैकेट के जरिए आपके घर तक पहुँचाने के लिए समर्पित हैं।
            </p>
            <p className="text-gray-700">
              We are dedicated to bringing the beauty and purity of Bageshwar, Uttarakhand to your home through every bottle and packet.
            </p>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="text-4xl mb-3">👩‍🌾</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Women Empowerment</h3>
              <p className="text-gray-700">Empowering 25 women to become self-reliant and support their families</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="text-4xl mb-3">🏔️</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Pahadi Tradition</h3>
              <p className="text-gray-700">Preserving and sharing authentic Uttarakhand flavors</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">100% Natural</h3>
              <p className="text-gray-700">No preservatives, pure homemade quality</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="text-4xl mb-3">❤️</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Made with Love</h3>
              <p className="text-gray-700">Every product crafted with care and dedication</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 py-8 bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Taste the Tradition of Bageshwar</h3>
            <Link href="/explore" className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:scale-105 transition-all">
              Explore Our Products
            </Link>
          </div>
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
