import CategoryCard from "../components/eCommerce/CategoryCard";



export const categories = [
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


const Categories = () => {
  return (
    <div className="min-h-screen ">
    
      {/* Main Content */}
      <main className="pt-20 pb-10 container mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </main>


    </div>
  );
};

export default Categories;