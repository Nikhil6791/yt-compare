import { useState } from "react";
import Home from "./pages/Home";
import ThemeToggle from "./components/ThemeToggle";
function App() {
  return (
    <>
      <ThemeToggle />
      <Home />
    </>
  );
}

export default App;
