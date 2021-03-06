import React, { useState, useEffect } from "react";
import "./App.css";
import Sitebar from "./home/Navbar";
import Auth from "./auth/Auth";
import InventoryIndex from "./inventory/InventoryIndex";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = newToken => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <InventoryIndex clickLogout={clearToken} token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
      // <Login updateToken={updateToken} />
    );
  };

  return (
    <div>
      <h1 className="title-margin">KDP Overstock Inventory</h1>
      {/* <Sitebar clickLogout={clearToken} /> */}
      {protectedViews()}
    </div>
  );
}

export default App;
