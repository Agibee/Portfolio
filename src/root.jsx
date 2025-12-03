import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PreLoader from "./components/PreLoader.jsx";
import App from "./App.jsx";

export default function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // SELAMA loading, cuma PreLoader yg tampil
  if (loading) return <PreLoader />;

  // Setelah loading selesai → Navbar, App, Footer muncul
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-20">
        <App />
      </div>
      <Footer />
    </>
  );
}
