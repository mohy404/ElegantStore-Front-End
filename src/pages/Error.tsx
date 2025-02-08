
import { NavLink } from 'react-router-dom'; // لإنشاء روابط داخلية

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col">
    

      {/* Main Content */}  
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-indigo-600">404</h1>
          <p className="text-2xl font-medium text-gray-800 mt-4">Oops! Page Not Found</p>
          <p className="text-gray-600 mt-2">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <NavLink
            to="/"
            replace={true}  // تجاهل التحقق من صفحة العودة  
            className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300 font-medium"
          >
            Go Back Home
          </NavLink>
        </div>
      </main>

    </div>
  );
};

export default Error;