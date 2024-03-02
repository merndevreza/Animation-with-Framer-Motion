import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-green-300 p-5 rounded">
      <ul className=" space-y-5">
        <li>
          <NavLink to="/basic">Basic</NavLink>
        </li>
        <li>
          <NavLink to="/keyframes">Keyframes</NavLink>
        </li>
        <li>
          <NavLink to="/button">Button</NavLink>
        </li>
        <li>
          <NavLink to="/text">Text Motion</NavLink>
        </li>
        <li>
          <NavLink to="/transition">Transition Type</NavLink>
        </li>
        <li>
          <NavLink to="/counter">Counter</NavLink>
        </li>
        <li>
          <NavLink to="/scroll">Scroll Revel</NavLink>
        </li>
        <li>
          <NavLink to="/variant">Variant</NavLink>
        </li>
        <li>
          <NavLink to="/stagger">Stagger Animation</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Home;
