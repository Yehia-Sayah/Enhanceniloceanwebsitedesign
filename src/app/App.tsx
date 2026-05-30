import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Destinations } from "./pages/Destinations";
import { Trips } from "./pages/Trips";
import { Stays } from "./pages/Stays";
import { ProductDetails } from "./pages/ProductDetails";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/stays" element={<Stays />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
