import React, { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

function Private() {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h2>Página privada!</h2>

      <h3>Olá {auth.user?.name}, tudo bem?</h3>
    </div>
  );
}

export default Private;
