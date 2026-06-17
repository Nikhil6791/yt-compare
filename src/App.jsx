import Home from "./pages/Home";
import Layout from "./components/Layout";
import { RouterProvider } from "react-router";
import { router } from "./app.routes";

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
      {/* <Home /> */}
    </Layout>
  );
}

export default App;
