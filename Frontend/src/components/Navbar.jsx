import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/book?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Course</a></li>
      <li><a href="/book">Books</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/about">About</a></li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? "shadow-md bg-base-200 dark:bg-slate-700 dark:text-white transition-all duration-300"
          : "dark:bg-slate-800 dark:text-white"
      }`}
    >
      <div className="navbar py-3">
        {/* Mobile menu */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:bg-slate-700 dark:text-white">
              {navItems}
            </ul>
          </div>
          <a className="text-2xl font-bold cursor-pointer">BookNest</a>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        {/* Right side */}
        <div className="navbar-end flex items-center gap-4">
          {/* Search */}
          <form onSubmit={handleSearch} className="hidden md:block">
            <label className="px-3 py-2 border rounded-md flex items-center gap-2">
              <input
                type="text"
                className="grow outline-none rounded-md px-1 dark:bg-slate-900 dark:text-white"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </label>
          </form>

          {/* Theme toggle */}
          <button
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-600"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "dark" ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.64,13A1,1,0,0,0,20.59,12.86,8.05,8.05,0,0,1,17.22,13.59,8.15,8.15,0,0,1,9.08,5.49,8.59,8.59,0,0,1,9.33,3.49,1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 5a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM12 19a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM4 12a1 1 0 011-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zM18 12a1 1 0 011-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zM6.34 6.34a1 1 0 011.41 0l.71.71a1 1 0 01-1.41 1.41l-.71-.71a1 1 0 010-1.41zM16.95 16.95a1 1 0 011.41 0l.71.71a1 1 0 01-1.41 1.41l-.71-.71a1 1 0 010-1.41zM6.34 17.66a1 1 0 010-1.41l.71-.71a1 1 0 011.41 1.41l-.71.71a1 1 0 01-1.41 0zM16.95 7.05a1 1 0 010-1.41l.71-.71a1 1 0 011.41 1.41l-.71.71a1 1 0 01-1.41 0z" />
              </svg>
            )}
          </button>

          {/* Login/Logout */}
          {authUser ? (
            <Logout />
          ) : (
            <>
              <a
                className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </a>
              <Login />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
