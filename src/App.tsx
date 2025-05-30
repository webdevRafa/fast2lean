import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { IntermittentFasting } from "./pages/IntermittentFasting";
import { About } from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/intermittent-fasting"
            element={<IntermittentFasting />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
