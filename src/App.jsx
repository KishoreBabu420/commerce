import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//routes
import { Home, Contact, Error, Shop, Authentication } from './routes';

//Components
import { Navigation } from './components';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
      { path: '', element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'auth', element: <Authentication /> },
      { path: 'shop', element: <Shop /> },
    ],
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
