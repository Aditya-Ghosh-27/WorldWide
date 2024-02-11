import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>HomePage</h1>
      <NavLink to="/app">App navigation</NavLink>
    </div>
  );
}

export default Homepage;
