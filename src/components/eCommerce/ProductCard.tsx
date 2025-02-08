import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  img: string;
  description: string;
  rating: number;
  brand: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  img,
  description,
  rating,
  brand,
}) => {
  const handleAddToCart = () => {
    // Add the product to the cart
    console.log(`Product ${id} added to cart`);
    
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/products/${id}`}>
        <img src={img} alt={title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg font-bold text-indigo-600">${price}</span>
            <span className="text-sm text-gray-600">Rating: {rating}</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">Brand: {brand}</p>
        </div>
      </Link>

      {/* زر Add to Cart */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleAddToCart}
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 font-medium"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;