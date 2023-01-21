import { Route, Routes as MyRoutes } from "react-router-dom";

import Home from "../pages/Home";

const Routes = () => {
  return (
    <MyRoutes>
      <Route path="/" element={<Home />} />
    </MyRoutes>
  );
};

export default Routes;
