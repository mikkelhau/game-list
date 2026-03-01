import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./styles/globals.css";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
