import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Private from "./Pages/Private";
import { useContext } from "react";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { AuthContext } from "./contexts/Auth/AuthContext";

function App() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.reload();
  };

  return (
    <>
      <div className="bg-teal-500 ">
        <header className="flex flex-col w-[1000px] h-52 items-center justify-center m-auto">
          <h1 className="text-5xl font-bold">Sistema de Login</h1>
          <nav className="flex items-center gap-5 p-1 mt-10 text-xl font-bold text-black">
            <Link
              to="/"
              className="p-3 bg-slate-200 border-solid border-4 border-slate-200 rounded hover:bg-slate-300 hover:border-slate-300"
            >
              Home
            </Link>
            <Link
              to="/private"
              className="p-3 bg-slate-200 border-solid border-4 border-slate-200 rounded hover:bg-slate-300 hover:border-slate-300"
            >
              Página privada
            </Link>
            {auth.user && <button onClick={handleLogout}>Sair</button>}
          </nav>
        </header>
      </div>

      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
