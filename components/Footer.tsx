import { motion } from "framer-motion";
import { ChevronUp, Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/hasibulislam999",
      ariaLabel: "GitHub Profile",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/hasibulislam999",
      ariaLabel: "LinkedIn Profile",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/hasibulislam999",
      ariaLabel: "Twitter Profile",
    },
    {
      icon: Mail,
      href: "mailto:hasib143sl@gmail.com",
      ariaLabel: "Email Contact",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and about */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                Hasibul Islam
              </h2>
              <p className="text-gray-400 mb-6 max-w-md">
                A passionate full-stack developer creating beautiful,
                functional, and user-centered digital experiences. Available for
                freelance projects and full-time opportunities.
              </p>

              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    aria-label={link.ariaLabel}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                    whileHover={{ y: -3 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <motion.li key={item} whileHover={{ x: 3 }}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                    >
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-800">
              Contact
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="mailto:hasib143sl@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  hasib143sl@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801906315901"
                  className="hover:text-white transition-colors"
                >
                  +880 1906-315901
                </a>
              </li>
              <li>Chattogram, Bangladesh</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Hasibul Islam. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
