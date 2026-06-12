import { useState } from "react";
import Home from "./pages/Home";
import ThemeToggle from "./components/ThemeToggle";
function App() {
  return (
    <div className="bg-white h-screen w-screen dark:bg-black text-black dark:text-white">
      <ThemeToggle />
      <Home />
    </div>
  );
}

export default App;
