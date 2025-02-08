import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/home';
import Categories from '../pages/Categories';
import Products from '../pages/Products';
import AboutUs from '../pages/AboutUs';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Error from '../pages/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'categories',
                element: <Categories />,
            },
            {
                path: 'products/:prefix',
                element: <Products />,
                loader: ({ params }) => {
                  const { prefix } = params;
              
                  // تحقق من أن prefix موجود وأنه يتكون فقط من أحرف إنجليزية
                  if (typeof prefix !== 'string' || !/^[a-zA-Z]+$/.test(prefix)) {
                    throw new Response('Invalid prefix', { status: 400 });
                  }
             
                  return null; // أو قم بإرجاع البيانات المطلوبة
                },
              },
            {
                path: 'about-us',
                element: <AboutUs />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
                element: <Register />,
            },
        ],
    },
]);

export default router;