import { useState } from "react";
import Header from "/src/components/Header/Header";
import Items from "/src/components/Items/Items.jsx";
import Search from "/src/components/Search/Search";

function HomePage() {
  const [items, setItems] = useState([]);

  return (
    <div>
      <Header />
      <Search setItems={setItems} />
      <Items items={items} setItems={setItems} />
    </div>
  );
}
export default HomePage;
