import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "../store/themeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="header">
      <h1 className="header-title">Task List</h1>
      <button onClick={handleThemeToggle} className="theme-toggle">
        {isDark ? (
          <Sun size={20} className="text-yellow-500" />
        ) : (
          <Moon size={20} className="text-gray-600" />
        )}
      </button>
    </div>
  );
};

export default Header;
