import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Prizes from "./pages/Prizes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dora" element={<Prizes />} />
    </Routes>
  );
}

export default App;