import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-amber-500 text-white px-3 py-2 rounded-lg font-bold text-xl">2RD</div>
              <div>
                <div className="footer-heading font-bold text-lg">Consulting Associates</div>
                <div className="text-sm text-slate-400">RC: 7743580</div>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Professional immigration and visa consulting services. Your trusted partner in global mobility solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-heading font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/work-visa" className="text-slate-400 hover:text-white">
                  Work Visa
                </Link>
              </li>
              <li>
                <Link href="/services/study-visa" className="text-slate-400 hover:text-white">
                  Study Visa
                </Link>
              </li>
              <li>
                <Link href="/services/tourist-visa" className="text-slate-400 hover:text-white">
                  Tourist Visa
                </Link>
              </li>
              <li>
                <Link href="/services/permanent-residency" className="text-slate-400 hover:text-white">
                  Permanent Residency
                </Link>
              </li>
              <li>
                <Link href="/services/corporate-mobility" className="text-slate-400 hover:text-white">
                  Corporate Mobility
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="footer-heading font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-amber-500 mt-1" />
                <div className="text-slate-400">
                  <p>Lagos Office: 33 Alfred Rewane, Ikoyi, Lagos</p>
                  <p>Abuja Office: Available</p>
                  <p>UK Office: Available</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-amber-500" />
                <span className="text-slate-400">+234 215 885 521</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-amber-500" />
                <span className="text-slate-400">2rdconsultingassociate@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">© 2024 2RD Consulting Associates. All rights reserved. | RC: 7743580</p>
        </div>
      </div>
    </footer>
  )
}
