import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Index } from "./pages/index";
import { Preview } from "./pages/preview";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/preview/:hash" element={<Preview />} />
    </Routes>
  </BrowserRouter>
}

export default App;
