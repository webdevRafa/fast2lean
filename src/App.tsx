import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { IntermittentFasting } from "./pages/IntermittentFasting";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
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
