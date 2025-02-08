
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: string;
  title: string;
  prefix: string;
  img: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, prefix, img, description }) => {
  return (
    <Link
      to={`/categories/${prefix}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;