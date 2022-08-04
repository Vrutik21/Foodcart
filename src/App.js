import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/eCommerce-vrutik" element={<Cards />} />
        <Route path="/eCommerce-vrutik/cart/:id" element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
