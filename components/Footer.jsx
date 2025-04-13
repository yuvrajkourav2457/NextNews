// import React from 'react'

// const Footer = () => {
//   return (
//     <footer className='bg-white text-black flex items-center justify-center h-16'>
//         <p className='text-center'>Copyright &copy; Next News - All rights reserved!</p>
//     </footer>
//   )
// }

// export default Footer


import Link from "next/link"
import { Newspaper, Twitter, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-md">
                <Newspaper size={20} className="text-white" />
              </div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                NextNews
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Your personalized news experience, delivering the stories that matter most to you.
            </p>
            <div className="flex space-x-3 pt-2">
              <SocialLink icon={<Twitter size={18} />} href="https://twitter.com" />
              <SocialLink icon={<Facebook size={18} />} href="https://facebook.com" />
              <SocialLink icon={<Instagram size={18} />} href="https://instagram.com" />
              <SocialLink icon={<Youtube size={18} />} href="https://youtube.com" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/trending">Trending News</FooterLink>
              <FooterLink href="/categories">Categories</FooterLink>
              <FooterLink href="/bookmarks">Saved Articles</FooterLink>
              <FooterLink href="/premium">Premium Access</FooterLink>
              <FooterLink href="/mobile-app">Mobile App</FooterLink>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-4">Subscribe to our newsletter for the latest news and updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
              />
              <button className="px-3 py-2 rounded-r-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} NextNews. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-700 text-sm">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-700 text-sm">
              Terms
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-gray-700 text-sm">
              Cookies
            </Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-gray-700 text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterLink = ({ href, children }) => {
  return (
    <li>
      <Link href={href} className="text-gray-500 hover:text-purple-600 transition-colors duration-300 text-sm">
        {children}
      </Link>
    </li>
  )
}

const SocialLink = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors duration-300"
    >
      {icon}
    </a>
  )
}

export default Footer

