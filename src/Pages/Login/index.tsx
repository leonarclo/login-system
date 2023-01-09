import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      isLogged ? navigate("/") : alert("Não foi possível fazer login");
    }
  };

  return (
    <form className="border mt-8 p-10 w-[800px] m-auto flex flex-col gap-9 items-center">
      <h2 className="text-3xl">Login</h2>
      <input
        className="border p-3 w-96 text-xl"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="example@email.com"
      />
      <input
        className="border p-3 w-96 text-xl"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Digite sua senha"
      />
      <button
        className="border border-solid rounded p-5 text-xl"
        onClick={handleLogin}
      >
        login
      </button>
    </form>
  );
};
