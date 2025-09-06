import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API', href: '#api' },
      { name: 'Integrations', href: '#integrations' }
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Blog', href: '#blog' },
      { name: 'Press', href: '#press' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact', href: '#contact' },
      { name: 'Status', href: '#status' },
      { name: 'Security', href: '#security' }
    ],
    legal: [
      { name: 'Privacy', href: '#privacy' },
      { name: 'Terms', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#github', label: 'GitHub' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Mail, href: '#contact', label: 'Contact' }
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
              <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center shadow-soft">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-heading font-bold text-2xl text-foreground">
                SynergySphere
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Empowering teams to collaborate smarter and achieve more together. 
              Transform your workflow with our intuitive project management platform.
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
            © 2024 SynergySphere. All rights reserved. Made with ❤️ for productive teams.
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