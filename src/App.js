import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Layouts/Header";
import Home from "./pages/Home.jsx";
import Apropos from "./pages/Apropos.jsx";
import Logements from "./pages/Logements.jsx";
import Error404 from "./pages/Error404.jsx";
import Footer from "./components/Layouts/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Kasa" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Logements/:id" element={<Logements />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
