import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-10 px-6 md:px-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            <img src="/logo.png" alt="Mona AI Logo" className="w-12 h-12 mr-2" />
            <span className="text-2xl font-semibold">MONA AI</span>
          </div>
          <p className="text-sm leading-relaxed">
            We harness the power of artificial intelligence to break down language barriers, making worldwide information
            and educational content accessible to all Mongolians. Our suite of AI-powered tools is designed to empower
            Mongolian learners, researchers, and curious minds, opening doors to a world of knowledge previously hindered
            by language constraints.
          </p>
        </div>

        <div className="flex justify-between">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About us</a></li>
              <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms and Policy</a></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Tools</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">AI Video Subtitles</a></li>
              <li><a href="#" className="hover:text-gray-300">YouTube Translation</a></li>
              <li><a href="#" className="hover:text-gray-300">YouTube Watch</a></li>
              <li><a href="#" className="hover:text-gray-300">Images Generation</a></li>
              <li><a href="#" className="hover:text-gray-300">AI Assistant</a></li>
            </ul>
          </div>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get in touch</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">📍</span>
              Times Square Office Building
            </li>
            <li className="flex items-center">
              <span className="mr-2">✉️</span>
              <a href="mailto:info@mona-ai.mn" className="hover:text-gray-300">info@mona-ai.mn</a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              <a href="tel:+976" className="hover:text-gray-300">+976</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4">
        <p className="text-sm text-center md:text-left">&copy; 2024 MAZAL.AI. All rights reserved.</p>
        <div className="flex mt-4 md:mt-0">
          <img src="/apple-pay.png" alt="Apple Pay" className="w-8 h-8 mx-2" />
          <img src="/meta.png" alt="Meta" className="w-8 h-8 mx-2" />
          <img src="/google-pay.png" alt="Google Pay" className="w-8 h-8 mx-2" />
          <img src="/mastercard.png" alt="Mastercard" className="w-8 h-8 mx-2" />
          <img src="/paypal.png" alt="PayPal" className="w-8 h-8 mx-2" />
          <img src="/visa.png" alt="Visa" className="w-8 h-8 mx-2" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;