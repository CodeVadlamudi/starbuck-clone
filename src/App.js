import { Route, Routes } from "react-router-dom";
import "./App.css";
import GiftPage from "./pages/GiftPage";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import PayPage from "./pages/PayPage";
import StorePage from "./pages/StorePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gift" element={<GiftPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/pay" element={<PayPage />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </div>
  );
}

export default App;
