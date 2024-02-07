import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Thumbnail = React.lazy(() => import("pages/Thumbnail"));
const BuyHere = React.lazy(() => import("pages/BuyHere"));
const Design = React.lazy(() => import("pages/Design"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/design" element={<Design />} />
          <Route path="/buyhere" element={<BuyHere />} />
          <Route path="/thumbnail" element={<Thumbnail />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
