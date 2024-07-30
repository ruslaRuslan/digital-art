import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";

const container: any = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Header />
    <App />
  </BrowserRouter>
);
