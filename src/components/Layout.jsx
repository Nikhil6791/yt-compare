import ThemeToggle from "./ThemeToggle";

function Layout({ children }) {
  return (
    <div className="bg-white h-screen w-screen dark:bg-black text-black dark:text-white">
      <ThemeToggle />
      {children}
    </div>
  );
}

export default Layout;
