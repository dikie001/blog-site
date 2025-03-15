import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Message:", message);
    setEmail("");
    setMessage("");
  };

  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Left: Copyright & Links */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} Blog Nest. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 justify-center md:justify-start">
            <Link to="/privacy" className="hover:text-purple-400 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-purple-400 transition">Terms of Service</Link>
          </div>
        </div>

        {/* Center: Contact Form */}
        <div className="text-center w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
              required
            ></textarea>
            <button type="submit" className="bg-purple-800 font-bold text-white px-4 py-2 rounded-md hover:bg-gray-900 transition w-full">
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Social Icons */}
       
      </div>
      <div className="flex items-center justify-center md:justify-start ml-6 space-x-4 text-xl mt-6 md:mt-0">
          <a href="#" className="hover:text-purple-400 transition"><FaFacebook /></a>
          <a href="#" className="hover:text-purple-400 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-purple-400 transition"><FaInstagram /></a>
        </div>
        
    </footer>
  );
};

export default Footer;
