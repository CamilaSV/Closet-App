import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ItemPage from "./pages/ItemPage/ItemPage.jsx";
import NewItemPage from "./pages/NewItemPage/NewItemPage.jsx";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item" element={<HomePage />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/new-item" element={<NewItemPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
