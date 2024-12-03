import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Navegation from "./modules/Navegation.tsx";
import Documentation from "./Documentation.tsx";
import Designer from "./Designer.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="main-navegation">
        <Navegation />
      </div>
      <div className="main-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/designer" element={<Designer />} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
);
