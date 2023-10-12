import React from "react";
import "./App.css";
import { Footer, Header} from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-full">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
