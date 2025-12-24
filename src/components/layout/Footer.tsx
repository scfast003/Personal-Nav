import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import { siteConfig } from '../../config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="w-full py-8 px-4 sm:px-6 lg:px-8 mt-auto"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-4">
            {siteConfig.github && (
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
            )}
            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
            )}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} {siteConfig.author}. Made with ❤️
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
