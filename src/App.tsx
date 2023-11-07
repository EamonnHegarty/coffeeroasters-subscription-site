import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
