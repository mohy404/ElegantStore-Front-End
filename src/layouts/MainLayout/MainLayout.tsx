import { Outlet } from 'react-router-dom';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet /> {/* يتم عرض المحتوى الديناميكي هنا */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;