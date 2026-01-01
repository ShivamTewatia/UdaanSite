// import Nav from "./components/nav/nav.jsx"
import Home from "./pages/home.jsx"
import AboutUs from "./pages/aboutUs.jsx"
import Team from "./pages/ourTeam.jsx"
import ContactUs from "./pages/contactUs.jsx"
import LoginP from "./pages/login.jsx"
import Placement from "./pages/placement.jsx"
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      {/* <Nav/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<LoginP />} />
        <Route path="/placement" element={<Placement/>} />
      </Routes>
    </div>
  );
}

export default App;
