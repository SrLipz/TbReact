import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
// import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Contatos from "./Pages/Contatos";
import Cursos from "./Pages/Cursos";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
          <Routes>
            <Route path="/cursos" element={<Cursos />} />
          </Routes>
          <Routes>
            <Route path="/contatos" element={<Contatos />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
