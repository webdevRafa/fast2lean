import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { IntermittentFasting } from "./pages/IntermittentFasting";
import { About } from "./pages/About";
import ArticlePage from "./pages/ArticlePage";
import Articles from "./pages/Articles";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
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
