import "./App.css";
import React, { useState } from "react";
import Chat from "./conponents/chat";
import Sw from "./conponents/Sw";
import Login from "./conponents/loging";

const App = () => {
  const [isLogedIn, setIsLogedIn] = useState(
    localStorage.getItem("isLogedIn") || false
  );

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || ""
  );
  return (
    <div className="App">
      {!isLogedIn ? (
        <Login setIsLogedIn={setIsLogedIn} setData={setData} />
      ) : (
        <Chat setIsLogedIn={setIsLogedIn} data={data} />
      )}
    </div>
  );
};

export default App;
