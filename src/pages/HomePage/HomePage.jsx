import Items from "/src/components/Items/Items.jsx";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/new-item">
        <input type="button" value="+" />
      </Link>
      <Items />
    </div>
  );
}
export default HomePage;
