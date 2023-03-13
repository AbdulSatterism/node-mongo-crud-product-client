import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import Home from './components/Home';
import Update from './components/Update';

function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/products')
    },
    {
      path: '/addproduct',
      element: <AddProduct></AddProduct>
    },
    {
      path: '/update/:id',
      element: <Update></Update>,
      loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
