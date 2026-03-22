import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CreateListPage from "./pages/CreateListPage";
import MyListsPage from "./pages/MyListsPage";
import GameListPage from "./pages/GameListPage";
import AddGamePage from "./pages/AddGamePage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "create-list", element: <CreateListPage /> },
      { path: "my-lists", element: <MyListsPage /> },
      { path: "list/:id", element: <GameListPage /> },
      { path: "list/:id/add-game", element: <AddGamePage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);
