import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//routes
import { Home, Contact, Error } from './routes';

//Components
import { Navigation } from './components';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
      { path: '', element: <Home /> },
      { path: 'contact', element: <Contact /> },
    ],
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
