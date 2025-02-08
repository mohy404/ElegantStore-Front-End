import React from 'react';
import cartIcon from '../../../assets/svg/cart.svg';

interface HeaderBasketProps {
  quantity?: number; // الكمية اختيارية (Optional)
}

const HeaderBasket: React.FC<HeaderBasketProps> = ({ quantity = 0 }) => {
  return (
    <div className="relative">
      {/* أيقونة السلة */}
      <img
        src={cartIcon}
        alt="Basket"
        className="w-8 h-8 text-gray-800 hover:text-indigo-600 transition duration-300"
      />

      {/* Quantity Badge */}
      {quantity > 0 && (
        <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {quantity}
        </div>
      )}
    </div>
  );
};

export default HeaderBasket;