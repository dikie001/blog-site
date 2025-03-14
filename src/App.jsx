import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/createPost";

const App = () => {
  return (
    <Router >
      <nav className="bg-black text-white p-4 flex justify-center space-x-6 shadow-md">
  <Link to="/" className="hover:text-purple-400 transition">Home</Link>
  <Link to="/createpost" className="hover:text-purple-400 transition">Create Post</Link>
  <Link to="/login" className="hover:text-purple-400 transition">Login</Link>
</nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </Router>
  );
};

export default App;
