import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Create root element
const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found");
}

// Render the app
createRoot(root).render(<App />);
