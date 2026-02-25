import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./assets/components/navbar/Navbar";
import Carrossel from "./assets/components/swiper/Carrossel";
import Footer from "./assets/components/footer/Footer";
import Home from "./assets/pages/Home";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <div className="justify-center">
            <Carrossel />
          </div>
          <div className="min-h-[40vh]">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
