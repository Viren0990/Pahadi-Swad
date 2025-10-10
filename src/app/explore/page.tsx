// app/products/page.tsx
'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import mirch from '@/images/mirch.png';
import nimbu from '@/images/nimbu.jpg';
import garlic from '@/images/garlic.png';
import mix from '@/images/mix.jpg';
import aavla from '@/images/aavla.jpg';
import mango from '@/images/mango.png';
import karela from '@/images/karela.jpg';
import haldi from '@/images/haldi.png';
import bans from '@/images/baans.png';
import methi from '@/images/methi.png';
import haldiAchar from '@/images/haldiAchar.jpg'
import jack from "@/images/jack.png"
import dryred from "@/images/dry red.png"
import garlicSalt from "@/images/GarlicSalt.png"
import alsi from "@/images/alsi.png"
import bhang from "@/images/bhaang.png"
import greensalt from "@/images/greensalt.png"
import zeera from "@/images/zeera.png"
import lemonSalt from "@/images/lemonSalt.png"
import timur from "@/images/timur.png"
import gingerSalt from "@/images/gingerSalt.png"
import garamSalt from "@/images/garamMasala.png"
import chai from "@/images/chai.png"
import moong from "@/images/moong.png"
import suuji from "@/images/suji.png"
import sabu from "@/images/sabu.png"
import madwa from "@/images/madwa.png"
import pithya from "@/images/pithya.png"
import matri from "@/images/mathri.png"
import tomato from "@/images/tomato.png"
import batti from "@/images/batti.png"
import acandy from "@/images/acandy.png"
import amcandy from "@/images/amcandy.png"
import avcandy from "@/images/avcandy.png"
import ajuice from "@/images/ajuice.png"
import badi from "@/images/badi.png"
import mogori from "@/images/mogori.png"

type Category = 'all' | 'achaar' | 'papad' | 'masala' | 'others';

interface Product {
  id: number;
  name: string;
  category: 'achaar' | 'papad' | 'masala' | 'others';
  description: string;
  price: string;
  image: string | StaticImageData; // Update type to accept both
  features: string[];
}

const products: Product[] = [
  // Achaar (Pickles)
  {
    id: 1,
    name: "आम का अचार - Mango Pickle",
    category: "achaar",
    description: "पारंपरिक स्वाद से भरपूर कच्चे आम का तीखा और खट्टा अचार",
    price: "₹150",
    image: mango,
    features: ["तीखा और खट्टा", "बिना प्रिजर्वेटिव", "500 ग्राम"]
  },
  {
    id: 2,
    name: "मिर्च का अचार - Chili Pickle",
    category: "achaar",
    description: "लाल और हरी मिर्च का सरसों के तेल और पहाड़ी मसालों से बना अचार",
    price: "₹150",
    image: mirch,
    features: ["तेज मसालेदार", "सरसों तेल में", "500 ग्राम"]
  },
  {
    id: 3,
    name: "नींबू का अचार - Lime Pickle",
    category: "achaar",
    description: "पहाड़ी मसालों के सही मेल के साथ बना स्वादिष्ट नींबू अचार",
    price: "₹150",
    image: nimbu,
    features: ["खट्टा-मीठा", "पारंपरिक रेसिपी", "500 ग्राम"]
  },
  {
    id: 4,
    name: "मिक्स अचार - Mixed Pickle",
    category: "achaar",
    description: "गाजर, फूलगोभी और मिर्च का सुगंधित मसालों में बना मिश्रित अचार",
    price: "₹150",
    image: mix,
    features: ["कुरकुरे सब्जियां", "5 प्रकार की सब्जियां", "500 ग्राम"]
  },
  {
    id: 5,
    name: "लहसुन का अचार - Garlic Pickle",
    category: "achaar",
    description: "लाल मिर्च और तेल में तैयार लहसुन की कलियों का अचार",
    price: "₹220",
    image: garlic,
    features: ["तीव्र स्वाद", "सेहतमंद", "500 ग्राम"]
  },
  {
    id: 6,
    name: "आवला का अचार - Amla Pickle",
    category: "achaar",
    description: "विटामिन सी से भरपूर आंवले का स्वादिष्ट अचार",
    price: "₹150",
    image: aavla,
    features: ["पौष्टिक", "खट्टा-मीठा", "500 ग्राम"]
  },
  {
    id: 7,
    name: "करेला का अचार - Karela Pickle",
    category: "achaar",
    description: "कड़वे करेले का तीखा और स्वादिष्ट अचार",
    price: "₹150",
    image: karela,
    features: ["पौष्टिक", "तीखा-कड़वा", "500 ग्राम"]
  },
  {
    id: 8,
    name: "बांस का अचार - Bamboo Pickle",
    category: "achaar",
    description: "बांस के कोपलों का स्वादिष्ट और अनोखा अचार",
    price: "₹150",
    image: bans,
    features: ["विशेष स्वाद", "दुर्लभ व्यंजन", "500 ग्राम"]
  },
  {
    id: 9,
    name: "मेथी दाना का अचार - Methi Dana Pickle",
    category: "achaar",
    description: "मेथी दानों का स्वास्थ्यवर्धक और सुगंधित अचार",
    price: "₹180",
    image: methi,
    features: ["पाचन के लिए अच्छा", "सुगंधित", "500 ग्राम"]
  },
  {
    id: 10,
    name: "हल्दी का अचार - Turmeric Pickle",
    category: "achaar",
    description: "ताजा हल्दी का सेहत से भरपूर औषधीय अचार",
    price: "₹180",
    image: haldiAchar,
    features: ["औषधीय गुण", "एंटी-इंफ्लेमेटरी", "500 ग्राम"]
  },
   {
    id: 11,
    name: "कटहल का अचार - JackFruit Pickle",
    category: "achaar",
    description: "ताजा कटहल का सेहत से भरपूर औषधीय अचार",
    price: "₹180",
    image: jack,
    features: ["औषधीय गुण", "एंटी-इंफ्लेमेटरी", "500 ग्राम"]
  },
  {
    id: 12,
    name: "पहाड़ी हल्दी पाउडर - Pahadi Haldi Powder",
    category: "masala",
    description: "शुद्ध पहाड़ी हल्दी से तैयार उच्च गुणवत्ता वाला पाउडर",
    price: "₹120",
    image: haldi,
    features: ["शुद्ध पहाड़ी", "तेज रंग", "500 ग्राम"]
  },
 {
  id: 13,
  name: "सूखी लाल मिर्च - Dry Red Chilli",
  category: "masala",
  description: "तेज स्वाद और सुगंध वाली उच्च गुणवत्ता की सूखी लाल मिर्च",
  price: "₹150",
  image: dryred,
  features: ["शुद्ध पहाड़ी", "तेज स्वाद", "500 ग्राम"]
},
{
  id: 23,
  name: "गरम मसाला",
  category: "masala",
  description: "सुगंधित मसालों का परफेक्ट ब्लेंड, हर व्यंजन को विशेष स्वाद प्रदान करता है",
  price: "₹150",
  image: garamSalt,
  features: ["मिश्रित मसाले", "सुगंधित", "500 ग्राम"]
},
{
  id: 24,
  name: "चाय मसाला",
  category: "masala",
  description: "सुगंधित मसालों का विशेष मिश्रण जो चाय को बनाता है यादगार",
  price: "₹180",
  image: chai,
  features: ["सुगंधित मसाले", "चाय विशेष", "500 ग्राम"]
},
{
  id: 14,
  name: "लहसुन का नमक",
  category: "masala",
  description: "लहसुन की सुगंध और स्वाद से भरपूर विशेष नमक",
  price: "₹80",
  image: garlicSalt,
  features: ["लहसुन युक्त", "सुगंधित", "200 ग्राम"]
},
{
  id: 15,
  name: "अलसी का नमक",
  category: "masala",
  description: "अलसी के पौष्टिक गुणों से भरपूर स्वादिष्ट नमक",
  price: "₹80",
  image: alsi,
  features: ["पौष्टिक", "स्वास्थ्यवर्धक", "200 ग्राम"]
},
{
  id: 17,
  name: "भांग का नमक",
  category: "masala",
  description: "पारंपरिक स्वाद और औषधीय गुणों से भरपूर विशेष नमक",
  price: "₹80",
  image: bhang,
  features: ["पारंपरिक", "औषधीय गुण", "200 ग्राम"]
},
{
  id: 18,
  name: "हरी मिर्च का नमक",
  category: "masala",
  description: "हरी मिर्च की ताजगी और तीखेपन से भरपूर नमक",
  price: "₹80",
  image: greensalt,
  features: ["तीखा स्वाद", "ताजगी युक्त", "200 ग्राम"]
},
{
  id: 19,
  name: "जीरा का नमक",
  category: "masala",
  description: "जीरे की सुगंध और स्वाद से सुसज्जित विशेष नमक",
  price: "₹80",
  image: zeera,
  features: ["जीरे की सुगंध", "स्वादिष्ट", "200 ग्राम"]
},
{
  id: 20,
  name: "निम्बू का नामक",
  category: "masala",
  description: "निम्बू की ताजगी और खटास से भरपूर स्वादिष्ट नमक",
  price: "₹80",
  image: lemonSalt,
  features: ["निम्बू युक्त", "ताजगी भरा", "200 ग्राम"]
},
{
  id: 21,
  name: "तिमुर का नामक",
  category: "masala",
  description: "पहाड़ी तिमुर के अनोखे स्वाद और सुगंध से युक्त नमक",
  price: "₹80",
  image: timur,
  features: ["पहाड़ी तिमुर", "अनोखा स्वाद", "200 ग्राम"]
},
{
  id: 22,
  name: "अद्रक का नामक",
  category: "masala",
  description: "अदरक की ताजगी और औषधीय गुणों से भरपूर नमक",
  price: "₹80",
  image: gingerSalt,
  features: ["अदरक युक्त", "औषधीय गुण", "200 ग्राम"]
},
{
  id: 25,
  name: "मूंग दाल पापड़",
  category: "papad",
  description: "कुरकुरे और स्वादिष्ट मूंग दाल से बने पारंपरिक पापड़",
  price: "₹120",
  image: moong,
  features: ["मूंग दाल", "कुरकुरे", "250 ग्राम"]
},
{
  id: 26,
  name: "सूजी के पापड़",
  category: "papad",
  description: "सूजी से तैयार हल्के और स्वादिष्ट पापड़",
  price: "₹100",
  image: suuji,
  features: ["सूजी युक्त", "हल्के", "250 ग्राम"]
},
{
  id: 27,
  name: "साबूदाना के पापड़",
  category: "papad",
  description: "साबूदाना से बने मुलायम और स्वादिष्ट पापड़",
  price: "₹100",
  image: sabu,
  features: ["साबूदाना", "मुलायम", "250 ग्राम"]
},
{
  id: 28,
  name: "मडवे(रागी) की नमकीन",
  category: "others",
  description: "रागी से बनी पौष्टिक और कुरकुरी नमकीन",
  price: "₹60",
  image: madwa,
  features: ["रागी युक्त", "पौष्टिक", "250 ग्राम"]
},
{
  id: 29,
  name: "पहाड़ी पीठ्या / टीका",
  category: "others",
  description: "पारंपरिक पहाड़ी हल्दी से बना विशेष टीका मिश्रण",
  price: "₹250",
  image: pithya,
  features: ["पारंपरिक", "विशेष मिश्रण", "500 ग्राम"]
},
{
  id: 30,
  name: "मठरी",
  category: "others",
  description: "मैदे से बनी कुरकुरी और स्वादिष्ट मठरी",
  price: "₹150",
  image: matri,
  features: ["कुरकुरी", "मैदा युक्त", "500 ग्राम"]
},
{
  id: 32,
  name: "टमाटर की चटनी",
  category: "others",
  description: "ताजे टमाटरों से बनी मसालेदार और स्वादिष्ट चटनी",
  price: "₹200",
  image: tomato,
  features: ["टमाटर युक्त", "मसालेदार", "500 ग्राम"]
},
{
  id: 33,
  name: "बत्तिया",
  category: "others",
  description: "पारंपरिक तरीके से तैयार बत्तियाँ",
  price: "₹25/packet",
  image: batti,
  features: ["सुगंधित", "प्राकृतिक", "50 in one packet"]
},
{
  id: 31,
  name: "अदरक कैंडी",
  category: "others",
  description: "अदरक से बनी स्वादिष्ट और स्वास्थ्यवर्धक कैंडी",
  price: "₹50",
  image: acandy,
  features: ["अदरक युक्त", "स्वास्थ्यवर्धक", "100 ग्राम"]
},
{
  id: 34,
  name: "आम की कैंडी",
  category: "others",
  description: "ताजे आमों से बनी मीठी और स्वादिष्ट कैंडी",
  price: "₹50",
  image: amcandy,
  features: ["आम युक्त", "मीठी", "100 ग्राम"]
},
{
  id: 40,
  name: "आवला की कैंडी",
  category: "others",
  description: "ताजा आवले से बानी स्वादिष्ट कैंडी",
  price: "₹50",
  image: avcandy,
  features: ["आम युक्त", "मीठी", "100 ग्राम"]
},
{
  id: 36,
  name: "आवला का जूस (Sugar-free)",
  category: "others",
  description: "शुगर-फ्री ताजे आवले का रस, स्वास्थ्य के लिए उत्तम",
  price: "₹180",
  image: ajuice,
  features: ["शुगर-फ्री", "पौष्टिक", "1 Litre"]
},
{
  id: 37,
  name: "बङिया",
  category: "others",
  description: "दाल से बनी पारंपरिक और स्वादिष्ट बड़िया",
  price: "₹150",
  image: badi,
  features: ["दाल युक्त", "पारंपरिक", "250 ग्राम"]
},
{
  id: 38,
  name: "मूंग की बङिया",
  category: "others",
  description: "मूंग दाल से बनी पौष्टिक और स्वादिष्ट बड़िया",
  price: "₹100",
  image: mogori,
  features: ["मूंग दाल", "पौष्टिक", "250 ग्राम"]
}

];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Products', count: products.length },
    { id: 'achaar', label: 'Achaar', count: products.filter(p => p.category === 'achaar').length },
    { id: 'papad', label: 'Papad', count: products.filter(p => p.category === 'papad').length },
    { id: 'masala', label: 'Masalas', count: products.filter(p => p.category === 'masala').length },
    { id: 'others', label: 'Others', count: products.filter(p => p.category === 'others').length },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-white">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative pt-24 pb-16 px-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l20 20-20 20L0 20z' fill='%23ffffff' /%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif">
              Explore Our Products
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Discover authentic homemade flavors from our traditional kitchen
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400"></div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="top-16 z-40 bg-white/95 backdrop-blur-md shadow-md border-b border-orange-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as Category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                    : 'bg-white border-2 border-orange-200 text-orange-700 hover:border-orange-400'
                }`}
              >
                {category.label}
                <span className="ml-2 text-sm opacity-80">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Results Count */}
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              Showing <span className="font-bold text-orange-600">{filteredProducts.length}</span> products
              {selectedCategory !== 'all' && (
                <span> in <span className="font-bold text-orange-600 capitalize">{selectedCategory}</span></span>
              )}
            </p>
          </div>

          {/* Products Grid */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
  {filteredProducts.map((product) => (
    <div
      key={product.id}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100 "
    >
     {/* Product Image - Updated to match 2:3 aspect ratio (600x900) */}
<div className="relative w-full bg-white overflow-hidden">
  {typeof product.image === 'string' ? (
    <div className="h-40 bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 flex items-center justify-center">
      <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
        {product.image}
      </div>
    </div>
  ) : (
    <div className="relative h-84 w-full overflow-hidden bg-white">
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-300"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
      />
    </div>
  )}
</div>




      {/* Product Info - More compact */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-amber-900 mb-1 group-hover:text-orange-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Features - More compact */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.features.map((feature, idx) => (
            <span
              key={idx}
              className="text-xs bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full border border-orange-200"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Price and CTA - More compact */}
        <div className="flex flex-col gap-y-2 md:flex-row items-center justify-between pt-3 border-t border-orange-100">
          <span className="text-xl font-bold text-orange-600">
            {product.price}
          </span>
          <Link className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-md transform hover:scale-105 transition-all" href="/contact">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-orange-200">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 font-serif">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              We take custom orders! Contact us for special requests or bulk orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-all" href="/contact">
                Contact Us
              </Link>
             
            </div>
          </div>
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
