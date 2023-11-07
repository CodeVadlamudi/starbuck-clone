import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import GiftPage from "../pages/GiftPage";
import OrderPage from "../pages/OrderPage";
import PayPage from "../pages/PayPage";
import StorePage from "../pages/StorePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="gift" element={<GiftPage />} />
      <Route path="order" element={<OrderPage />} />
      <Route path="pay" element={<PayPage />} />
      <Route path="store" element={<StorePage />} />
    </Routes>
  );
}

export default App;
