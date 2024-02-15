"use client";
import React, { useState, useEffect } from "react";
import Menu from "../menus/Menu";
import { menuItems, menuItemsSmall } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import { langInfo } from "@/data/langInfo";
import { usePathname } from "next/navigation";

export default function Header({ lang }) {
  // Extract the value of "two"

  const [darkMode, setDarkMode] = useState(false);
  const addDarkbg = () => {
    if (
      document.body.style.backgroundImage !=
      "url(/assets/img/bg/page-bg-dark-1.jpg"
    ) {
      document.body.style.backgroundImage =
        "url(/assets/img/bg/page-bg-dark-1.jpg";

      setDarkMode(true);
    }
  };

  const addlightBg = () => {
    if (
      document.body.style.backgroundImage != "url(/assets/img/bg/page-bg-1.jpg)"
    ) {
      document.body.style.backgroundImage = "url(/assets/img/bg/page-bg-1.jpg)";

      setDarkMode(false);
    }
  };

  const handleDarkmode = () => {
    const currentState = localStorage?.getItem("idDarkMode");

    if (JSON.parse(currentState) == true) {
      localStorage.setItem("idDarkMode", false);
      document.body.classList.remove("dark-theme");

      addlightBg();
    } else {
      localStorage?.setItem("idDarkMode", true);
      document.body.classList.add("dark-theme");
      addDarkbg();
    }
  };
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const currentState = localStorage?.getItem("idDarkMode");
    if (JSON.parse(currentState) == true) {
      document.body.classList.add("dark-theme");
      addDarkbg();
    } else {
      document.body.classList.remove("dark-theme");
      addlightBg();
    }
  }, []);

  const getDirectFromPathname = () => {
    const pathname = usePathname();
    const parts = pathname.split("/");
    const direct = parts.length > 1 ? parts[2] : undefined;
    return direct !== undefined ? direct : "home";
  };
  const direct = getDirectFromPathname();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const changeThemePrimaryColor = () => {
    const root = document.documentElement;

    // Generate a random color
    const newColor = getRandomColor();

    // Update the light theme
    root.style.setProperty("--theme-primary", newColor);

    // Update the dark theme
    const darkThemeRoot = document.documentElement.querySelector(".dark-theme");
    if (darkThemeRoot) {
      darkThemeRoot.style.setProperty("--theme-primary", newColor);
    }
  };

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const [menuSmallOpen, setMenuSmallOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      // Check window width and update state accordingly
      setMenuSmallOpen(window.innerWidth < 1200);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sk-header-area mb-30">
      <div className="container">
        <div className="sk-header-wrap">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="sk-header-logo">
                <Link className="site-logo" href="/">
                  <Image
                    width={153}
                    height={32}
                    src="/assets/img/logo/logo-2.png"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>

            {/* <div className="col-6"> */}
            
              <div className="sk-header-menu-btn text-right">
                <div className="column-container">
                  <div className="lang-options">
                    {langMenuOpen ? (
                      <>
                        {Object.entries(langInfo).map(([key, value]) => (
                          <Link
                            href={`/${key}/${getDirectFromPathname()}`}
                            key={key}
                            onClick={() => setLangMenuOpen(false)}
                            className={`dark-btn mode-btn ${
                              langMenuOpen ? "active" : ""
                            }`}>
                            {value}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <div
                        className={`dark-btn dark-btn-stored mode-btn ${
                          langMenuOpen ? "active" : ""
                        }`}
                        onClick={() => setLangMenuOpen((prev) => !prev)}>
                        <i className="fa-light fa-language"></i>
                      </div>
                    )}
                  </div>
                </div>
                {/* <div
                  className={`dark-btn dark-btn-stored mode-btn`}
                  onClick={() => {
                    changeThemePrimaryColor();
                  }}>
                  <i className="fa-light fa-cogs"></i>
                </div> */}
                <div
                  className="dark-btn dark-btn-stored mode-btn"
                  onClick={() => handleDarkmode()}>
                  {darkMode ? (
                    <i className="sunicon fa-light fa-sun-bright"></i>
                  ) : (
                    <i className="moonicon fa-solid fa-moon"></i>
                  )}
                </div>
                <div
                  className={`menu-btn toggle_menu ${menuOpen && "active"}`}
                  onClick={() => setMenuOpen((pre) => !pre)}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu-wrap">
          <div className={`mobile-menu mobile_menu ${menuOpen && "active"}`}>
            {/* Pass currentLanguage to the Menu component to use it when rendering menu items */}
            {menuSmallOpen ? (
              <Menu
                setMenuOpen={setMenuOpen}
                data={menuItemsSmall}
                lang={lang}
              />
            ) : (
              <Menu setMenuOpen={setMenuOpen} data={menuItems} lang={lang} />
            )}
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}
