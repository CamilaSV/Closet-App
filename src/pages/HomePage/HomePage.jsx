import { useState } from "react";
import Header from "/src/components/Header/Header";
import Items from "/src/components/Items/Items.jsx";
import Search from "/src/components/Search/Search";
import "./HomePage.scss";

function HomePage() {
  const [items, setItems] = useState([]);

  return (
    <div>
      <Header />
      <div className="home">
        <Search setItems={setItems} />
        <Items items={items} setItems={setItems} />
      </div>
    </div>
  );
}
export default HomePage;
