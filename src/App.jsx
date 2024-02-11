import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppNav from "./components/AppNav"
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="app" element={<AppNav />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

