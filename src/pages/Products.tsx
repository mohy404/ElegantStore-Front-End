import ProductCard from "../components/eCommerce/ProductCard";


export const products = [
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
const Products = () => {
  return (
    <div className="min-h-screen ">
    
      {/* Main Content */}
      <main className="pt-20 pb-10 container mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>

  
    </div>
  );
};

export default Products;