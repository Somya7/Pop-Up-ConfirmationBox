import { React, useState } from "react";
import "./App.css";

import Home from "./components/Home";

function App() {
  const [dialog, setdialog] = useState({ isOpen: false });
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
