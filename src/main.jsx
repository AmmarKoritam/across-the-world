import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CitiesProvider } from "./contexts/CitiesProvider";
import { AuthProvider } from "./contexts/FakeAuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CitiesProvider>
        <App />
      </CitiesProvider>
    </AuthProvider>
  </StrictMode>
);
