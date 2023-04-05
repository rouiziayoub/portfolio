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

      <Routes maxLoadingTime={(500)}>
        <Route path="/" element={<Home />} loading />
        <Route path="/Contact" element={<Contact />} loading />
        <Route path="/About" element={<About />} loading />
        <Route path="/Projects" element={<Projects />} loading /></Routes>
    </>
  );
}

export default App;
