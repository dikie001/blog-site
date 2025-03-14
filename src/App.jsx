import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/createPost";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase/config";
import { Toaster } from "react-hot-toast";

const App = () => {

  const [isAuth, setIsAuth] = useState(false);
  const LogOut=()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login"

    })

  }
  return (

    <Router>
      <Toaster position="top-right"/>
      <nav className="bg-black text-white p-4 flex items-center justify-center space-x-6 shadow-md">
        <Link to="/" className="hover:text-purple-400 transition">
          Home
        </Link>
        {isAuth && <Link to="/createpost" className="hover:text-purple-400 transition">
          Create Post
        </Link>}
        {!isAuth? (
          <Link to="/login" className="hover:text-purple-400 transition">
            Login
          </Link>
        ) : (
          <button onClick={LogOut} className="bg-purple-600 font-bold text-white px-4 py-2 rounded-md hover:bg-gray-900 transition">
  Log Out
</button>

        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
      </Routes>
    </Router>
  );
};

export default App;
