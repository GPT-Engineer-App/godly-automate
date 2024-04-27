import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Automation from "./pages/Automation.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/automation" element={<Automation />} />
      </Routes>
    </Router>
  );
}

export default App;
