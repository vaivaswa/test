import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./features/auth/login";
import Checkout from "./pages/checkout";
import Home from "./pages/lome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
