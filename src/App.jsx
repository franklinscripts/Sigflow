import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transformation from "./pages/Transformation";
import ErrorPage from "./components/Error";
import Login from "./pages/auth/login";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "transformation",
        element: <Transformation />,
        index:true
      },
      {
        path: '',
        element: <Transformation />,
      }
    ],
  },
  {
    path: 'auth/login',
    element: <Login />,

  },
  {
    path: '*',
    errorElement: <ErrorPage />
  }
]);

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
