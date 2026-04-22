import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage     from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import PostsPage    from "./pages/PostsPage";
// import FriendsPage  from "./pages/FriendPage"; --- IGNORE --- Might be added in the future, but not a priority right now but it looks off ngl
import AboutPage    from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

// ============================================================
// 🗺️  ROUTES — Add new pages here
//
// 1. Create src/pages/YourPage.tsx  (duplicate any existing page)
// 2. Import it above
// 3. Add a <Route> below
// 4. Add the nav link in src/components/Layout.tsx → navLinks array
// ============================================================

const App: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/"          element={<HomePage />}     />
        <Route path="/projects"  element={<ProjectsPage />} />
        <Route path="/posts"     element={<PostsPage />}    />
        <Route path="/about"     element={<AboutPage />}    />
        {/* Add more routes here */}
        <Route path="*"          element={<NotFoundPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;