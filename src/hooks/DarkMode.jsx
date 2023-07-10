import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialMode());

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    saveModeToLocalStorage(isDarkMode);
  }, [isDarkMode]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("darkMode"));
    return savedMode !== null ? savedMode : getPrefersDarkMode();
  }

  function getPrefersDarkMode() {
    if (window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  }

  function saveModeToLocalStorage(mode) {
    localStorage.setItem("darkMode", JSON.stringify(mode));
  }

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="form-switch">
      <input
        className="form-check-input px-0"
        type="checkbox"
        id="darkModeSwitch"
        checked={isDarkMode}
        onChange={handleToggle}
      />
    </div>
  );
};

export default DarkModeToggle;
