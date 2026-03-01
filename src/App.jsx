import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./styles/globals.css";
import { createClient } from '@supabase/supabase-js'

function App() {
  return (
    <div className="layout">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
