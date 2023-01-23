import { Route, Routes as MyRoutes } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Works from "../pages/Works";

const Routes = () => {
  return (
    <MyRoutes>
      <Route path="/" element={<Home />} />
      <Route path="works" element={<Works />} />
      <Route path="*" element={<NotFound />} />
    </MyRoutes>
  );
};

export default Routes;
