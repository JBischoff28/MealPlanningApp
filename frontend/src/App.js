// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LandingPage from "./pages/LandingPage/LandingPage";

// Component Imports
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import RecipePage from "./pages/RecipePage/RecipePage";
import MealBuilderPage from "./pages/MealBuilderPage/MealBuilderPage";
import DisplayMealsPage from "./pages/DisplayMealsPage/DisplayMealsPage";
import ChooseForMePage from "./pages/ChooseForMePage/ChooseForMePage";
import PlannedMealsPage from "./pages/PlannedMealsPage/PlannedMealsPage";
import DisplayRecipesPage from './pages/DisplayRecipesPage/DisplayRecipesPage';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/"
          element={
            <LandingPage />
          }
        />
        <Route path="/register"
          element={
            <RegisterPage />
          }
        />
        <Route path="/login"
          element={
            <LoginPage />
          }
        />
        <Route path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/recipe/:recipeId"
          element={
            <RecipePage />
          }
        />
        <Route path="/meals"
          element={
            <PrivateRoute>
              <DisplayMealsPage />
            </PrivateRoute>
          }
        />
        <Route path="/mealbuilder"
          element={
            <PrivateRoute>
              <MealBuilderPage />
            </PrivateRoute>
          }
        />
        <Route path="/plannedmeals"
          element={
            <PrivateRoute>
              <PlannedMealsPage />
            </PrivateRoute>
          }
        />
        <Route path="/choose"
          element={
            <PrivateRoute>
              <ChooseForMePage />
            </PrivateRoute>
          }
        />
        <Route path="/recipes" element={
          <PrivateRoute>
            <DisplayRecipesPage />
          </PrivateRoute>
        }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
