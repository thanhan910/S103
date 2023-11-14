"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from 'react-icons/fi';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import style from '@/styles/Toggle.module.css';


const DarkThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
      <Toggle
        checked={currentTheme === "light"}
        onChange={() => {
          setTheme(currentTheme === "light" ? "dark" : "light");
        }}
        icons={{
          checked: (
            <FiSun
              fontSize={12}
            />
          ),
          unchecked: (
            <FiMoon
              fontSize={12}
            />
          ),
        }}
      />
    );
  };

  return (
    <>
      {renderThemeChanger()}
    </>
  );
};

export default DarkThemeSwitcher;