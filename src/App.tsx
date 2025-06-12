import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import ArticlePage from "./pages/ArticlePage";
import Articles from "./pages/Articles";
import ScrollToTop from "./components/ScrollToTop";
import { Tools } from "./pages/Tools";
// tool pages
import { FastingSchedule } from "./pages/tools/FastingSchedule";
import { MacroCalculator } from "./pages/tools/MacroCalculator";
import { MealExamples } from "./pages/tools/MealExamples";
import { KetosisQuiz } from "./pages/tools/KetosisQuiz";
import { GroceryListGenerator } from "./pages/tools/GroceryListGenerator";
import { SupplementMatcher } from "./pages/tools/SupplementMatcher";

// diet pages
import { IntermittentFastingPage } from "./pages/diets/IntermittentFasting";
import { KetogenicDietPage } from "./pages/diets/KetogenicDietPage";
import { MediterraneanDietPage } from "./pages/diets/MediterraneanDietPage";
import { PaleoDietPage } from "./pages/diets/PaleoDietPage";
import { VeganDietPage } from "./pages/diets/VeganDietPage";
import { CompareDietsPage } from "./pages/diets/CompareDietsPage";

// add
import AddProductFormWrapper from "./components/AddProductFormWrapper";
import Login from "./pages/Login";

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dev-add-product" element={<AddProductFormWrapper />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route
            path="/diets/intermittent-fasting"
            element={<IntermittentFastingPage />}
          />
          <Route path="/tools" element={<Tools />} />
          <Route path="/diets/ketogenic-diet" element={<KetogenicDietPage />} />
          <Route
            path="/diets/mediterranean-diet"
            element={<MediterraneanDietPage />}
          />
          <Route path="/diets/paleo-diet" element={<PaleoDietPage />} />
          <Route path="/diets/vegan-diet" element={<VeganDietPage />} />
          <Route path="/diets/compare" element={<CompareDietsPage />} />
          <Route path="/tools/fasting-schedule" element={<FastingSchedule />} />
          <Route path="/tools/macro-calculator" element={<MacroCalculator />} />
          <Route path="/tools/meal-examples" element={<MealExamples />} />
          <Route path="/tools/ketosis-quiz" element={<KetosisQuiz />} />
          <Route
            path="/tools/supplement-matcher"
            element={<SupplementMatcher />}
          />
          <Route
            path="/tools/grocery-list-generator"
            element={<GroceryListGenerator />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
