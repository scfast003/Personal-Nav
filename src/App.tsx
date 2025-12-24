import { useTheme } from './hooks/useTheme';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CategorySection from './components/cards/CategorySection';
import { navCategories } from './config/nav-data';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      <Header theme={theme} onToggleTheme={toggleTheme} />
      
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {navCategories.map((category, index) => (
            <CategorySection key={category.id} category={category} index={index} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
