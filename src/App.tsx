import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateYourPlan from "./components/CreateYourPlan";
import AboutUs from "./pages/AboutUs";
import { Navbar } from "./components/Navbar";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/create-your-plan" element={<CreateYourPlan />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  );
}

export default App;
