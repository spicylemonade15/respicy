import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RecipesPage from "./pages/RecipesPage";
import AppLayout from "./components/layouts/AppLayout";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import ErrorPage from "./components/layouts/ErrorPage";
import './App.css';

// implementing routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      }, 
      {
        path: "/about",
        element: <AboutPage />
      },
      { 
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/recipes",
        element: <RecipesPage />
      },
      {
        path: "/recipes/:id",
        element: <RecipeDetailsPage />
      }
    ]
  }
  
])

const App = () => {
  return <RouterProvider router={router} />
  
}

export default App;