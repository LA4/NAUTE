import { Home } from "./pages/home/home";
import { Login } from "./pages/login/Login";
import { Layout } from "./partials/layout/Layout";

function App() {
  return (
    <>
      <Layout>
        {/* <Login></Login> */}
        <Home></Home>
      </Layout>
    </>
  );
}

export default App;
