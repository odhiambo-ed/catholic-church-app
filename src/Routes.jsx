import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Components = React.lazy(() => import("pages/Components"));
const Contact = React.lazy(() => import("pages/Contact"));
const Sermonevent = React.lazy(() => import("pages/Sermonevent"));
const BlogPost = React.lazy(() => import("pages/BlogPost"));
const Blog = React.lazy(() => import("pages/Blog"));
const Sermons = React.lazy(() => import("pages/Sermons"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Home1 = React.lazy(() => import("pages/Home1"));
const Gallery = React.lazy(() => import("pages/Gallery"));
import Readings from "pages/Readings"

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/blog" element={<Gallery />} />
          <Route path="/blogpost" element={<BlogPost />} />
          <Route path="/sermonevent" element={<Sermonevent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/components" element={<Components />} />
          <Route path="/readings" element={<Readings />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
