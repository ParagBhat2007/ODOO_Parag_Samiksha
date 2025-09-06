import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
    ],
    company: [
      { name: 'About', href: '#about' },
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy', href: '#privacy' },
      { name: 'Terms', href: '#terms' },
    ]
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ParagBhat2007', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/parag-bhat/', label: 'LinkedIn' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Mail, href: 'paragbhat2007@gmail.com', label: 'Contact' }
  ];

  return (
    <footer className="relative bg-background border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 ">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:"#3b82f6"}} />
                      <stop offset="100%" style={{stopColor:"#14b8a6"}} />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor:"#6366f1"}} />
                      <stop offset="100%" style={{stopColor:"#3b82f6"}} />
                    </linearGradient>
                  </defs>
                  <path d="M50 0 C77.6 0 100 22.4 100 50 C100 65 92.5 78.4 81.3 87.1 C79.3 74.6 71.9 63.6 61.2 56.5 C72.2 49.3 75.8 35.5 69.1 24.1 C62.3 12.7 48.9 7.9 37.1 14.1 C32 16.8 27.8 21 24.9 26 C15.1 36.4 14.2 51.6 22.1 63.2 C28.5 72.5 40 78.3 50.8 76.9 C43.2 85.8 32.5 91.5 20.3 91.5 C9.1 91.5 0 82.4 0 71.2 C0 42.9 22.4 20.5 50 20.5 C50 13.7 50 6.8 50 0 Z" fill="url(#gradient1)"/>
                  <path d="M50 100 C22.4 100 0 77.6 0 50 C0 35 7.5 21.6 18.7 12.9 C20.7 25.4 28.1 36.4 38.8 43.5 C27.8 50.7 24.2 64.5 30.9 75.9 C37.7 87.3 51.1 92.1 62.9 85.9 C68 83.2 72.2 79 75.1 74 C84.9 63.6 85.8 48.4 77.9 36.8 C71.5 27.5 60 21.7 49.2 23.1 C56.8 14.2 67.5 8.5 79.7 8.5 C90.9 8.5 100 17.6 100 28.8 C100 57.1 77.6 79.5 50 79.5 C50 86.3 50 93.2 50 100 Z" fill="url(#gradient2)"/>
                </svg>
              </div>
              <span className="font-heading font-bold text-2xl text-foreground">
                SynergySphere
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Developed by Parag Bhat and Samiksha Musale
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 + 0.2, duration: 0.8 }}
            >
              <h3 className="font-heading font-semibold text-foreground mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: linkIndex * 0.05 + categoryIndex * 0.1 + 0.4, duration: 0.6 }}
                  >
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-border/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="font-heading font-semibold text-foreground mb-2">
                Stay updated
              </h3>
              <p className="text-muted-foreground">
                Get the latest updates and features delivered to your inbox.
              </p>
            </div>
            
            <div className="flex gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-xl border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
              <motion.button
                className="px-6 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary-hover transition-all duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between border-t border-border/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 SynergySphere. Built at Odoo x NMIT Hackathon 2025.
          </p>
          
          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;