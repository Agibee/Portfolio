import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./root.jsx";
import SplashCursor from "./components/SplashCursor";
import "remixicon/fonts/remixicon.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SplashCursor />
    <Root />
  </StrictMode>
);
