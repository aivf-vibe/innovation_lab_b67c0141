import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">Serenity Tea House</h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Experience the perfect blend of tradition and innovation in every cup. 
              Join us in our journey through the world of premium teas.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<FiInstagram />} />
              <SocialLink href="#" icon={<FiFacebook />} />
              <SocialLink href="#" icon={<FiTwitter />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#collection">Our Collection</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>123 Tea Garden Street</li>
              <li>Zen Valley, CA 94123</li>
              <li>+1 (555) 123-4567</li>
              <li>info@serenityteahouse.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Serenity Tea House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
      >
        {children}
      </a>
    </li>
  );
}