import { useState, useEffect } from 'react';
import CategoryCard from '../components/eCommerce/CategoryCard';
import ProductCard from '../components/eCommerce/ProductCard';

// تعريف الأنواع
interface Category {
  id: string;
  title: string;
  prefix: string;
  img: string;
  description: string;
}

interface Product {
  id: string;
  title: string;
  price: number;
  cat_prefix: string;
  img: string;
  description: string;
  colors: string[];
  sizes: string[];
  rating: number;
  brand: string;
}

// Import slider images from assets
import slider1 from '../assets/slide1.png';
import slider2 from '../assets/slide2.png';
import slider3 from '../assets/slide3.png';

export const categories: Category[] = [
  {
    id: '1',
    title: 'Men',
    prefix: 'men',
    img: 'https://cdn-eu.dynamicyield.com/api/9876644/images/cfb357649428__hp-w12-22032022-h_m-men.jpg',
    description:
      'Explore our latest collection of men\'s clothing, including shirts, pants, and accessories.',
  },
  {
    id: '2',
    title: 'Women',
    prefix: 'women',
    img: "https://cdn-eu.dynamicyield.com/api/9876644/images/30d354267a09b__hp-w12-22032022-h_m-women_dresses.jpg",
    description:
      'Discover trendy women\'s fashion, from dresses to accessories, designed for every occasion.',
  },
  {
    id: '3',
    title: 'Kids',
    prefix: 'kids',
    img: 'https://cdn-eu.dynamicyield.com/api/9876644/images/37d243d334c63__hp-w12-22032022-h_m-kids1.jpg',
    description:
      'Find adorable and comfortable clothing for kids, perfect for playtime and special events.',
  },
];

export const products: Product[] = [
  {
    id: '1',
    title: 'Regular Fit Jersey Top',
    price: 249,
    cat_prefix: 'men',
    img: 'https://eg.hm.com/assets/styles/HNM/14482498/6103a8463876770c30cdba3535b7be1f333315fe/2/image-thumb__3464789__product_listing/cb91f8f128ac2125e0ec3a008a2e8d2497d15434.jpg',
    description: 'A comfortable and stylish jersey top, perfect for casual outings.',
    colors: ['black', 'white', 'blue'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.5,
    brand: 'H&M',
  },
  {
    id: '2',
    title: 'Regular Fit Jersey Top',
    price: 229,
    cat_prefix: 'men',
    img: 'https://eg.hm.com/assets/styles/HNM/14482498/6103a8463876770c30cdba3535b7be1f333315fe/2/image-thumb__3464789__product_listing/cb91f8f128ac2125e0ec3a008a2e8d2497d15434.jpg',
    description: 'A versatile jersey top, available in multiple colors.',
    colors: ['gray', 'navy'],
    sizes: ['S', 'M', 'L'],
    rating: 4,
    brand: 'H&M',
  },
];

const sliderImages: string[] = [slider1, slider2, slider3];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout> | undefined;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = (): void => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Slider Section */}
      <section className="relative h-96 overflow-hidden">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Slider Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        
        <button
          className="absolute bottom-4 right-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white"
          onClick={toggleAutoPlay}
        >
          {isAutoPlaying ? 'Pause' : 'Play'}
        </button>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </section>

      {/* Promo Section */}
      <section className="bg-indigo-600 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Discover Our New Collection</h2>
          <p className="text-lg text-indigo-100">
            Explore the latest trends and styles in our new collection. Shop now and get exclusive
            discounts!
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;