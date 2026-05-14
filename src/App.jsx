import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./component/MainLayout";
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import Service from "./pages/ServicePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <Service />,
      }
    

    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App