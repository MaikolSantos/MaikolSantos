import { Route, Routes as MyRoutes } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const Routes = () => {
  return (
    <MyRoutes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </MyRoutes>
  );
};

export default Routes;
