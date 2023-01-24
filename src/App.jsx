import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";

import Home from "./pages/Home";
import Menus from "./pages/Menus";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";

export default function App() {
  const { user, setUser } = useAuthContext();

  return (
    <div className="container">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/checkout"
          element={user ? <Checkout /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/menus"
          element={user ? <Menus /> : <Navigate to="/login" />}
        />
        <Route
          path="/menus/:id"
          element={user ? <Menu /> : <Navigate to="/login" />}
        />
      </Routes>

      <footer>
        {user && (
          <button
            className="secondary"
            onClick={() => setUser(false)}
          >
            Logout
          </button>
        )}
      </footer>
    </div>
  );
}
