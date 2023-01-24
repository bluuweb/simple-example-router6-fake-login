import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { fakePromise } from "../utils/fakePromise";

export default function Login() {
  const { user, setUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/menus");
    }
  }, [user]);

  const handleLogin = async () => {
    setLoading(true);
    await fakePromise(1500);
    setUser(true);
    setLoading(false);
  };

  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={handleLogin}
        aria-busy={loading}
      >
        Acceder
      </button>
    </div>
  );
}
