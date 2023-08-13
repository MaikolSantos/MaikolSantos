import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import MenuProvider from "./contexts/MenuContext";
import WorksProvider from "./contexts/WorksContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuProvider>
        <WorksProvider>
          <App />
        </WorksProvider>
      </MenuProvider>
    </BrowserRouter>
  </React.StrictMode>
);
