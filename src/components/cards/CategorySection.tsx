import { motion } from 'framer-motion';
import { NavCategory } from '../../types';
import NavCard from '../cards/NavCard';

interface CategorySectionProps {
  category: NavCategory;
  index: number;
}

export default function CategorySection({ category, index }: CategorySectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="mb-12"
    >
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-2">
          {category.emoji && (
            <span className="text-3xl" role="img" aria-label={category.title}>
              {category.emoji}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {category.title}
          </h2>
        </div>
        {category.description && (
          <p className="text-gray-600 dark:text-gray-400 ml-12">
            {category.description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {category.links.map((link, linkIndex) => (
          <NavCard key={link.url} link={link} index={linkIndex} />
        ))}
      </div>
    </motion.section>
  );
}
