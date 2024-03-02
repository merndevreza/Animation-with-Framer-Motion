import { Outlet } from "react-router-dom";
import Home from "./components/Home";

const Root = () => {
   return (
      <div className="flex p-12 gap-5">
          <Home/>
          <Outlet/>
      </div>
   );
};

export default Root;