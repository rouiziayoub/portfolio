import { Route, Routes, topbar } from "react-router-loading";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
topbar.config({ barColors: { 0: 'rgba(26,188,156,.7' } })

function App() {
  return (
    <>
      <Header />

      <Routes >
        <Route path="/" element={<Home />}  />
        <Route path="/Contact" element={<Contact />}  />
        <Route path="/About" element={<About />}  />
        <Route path="/Projects" element={<Projects />}  /></Routes>
    </>
  );
}

export default App;
