"use client";
import { ToastContainer } from "react-toastify";
import "../../../public/main.scss";
import FlareCursor from "@/components/homes/FlareCursor";

import Header from "@/components/homes/headers/Header";
import PersonalInfo from "@/components/homes/personalInfo/PersonalInfo";
import React from "react";
import { useEffect, useState } from "react";

import Menu from "@/components/homes/menus/MenuTwo";

export default function RootLayout({ children, params: { lang } }) {
  const isRTL = ["ar", "he"].includes(lang);

  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setShowPersonalInfo(window.innerWidth >= 1200); // Adjust the breakpoint as needed
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

  const getCurrentScreenSize = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    console.log(`Current Screen Size: ${screenWidth} x ${screenHeight}`);
  };

  return (
    <html lang={lang}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap"
        />
      </head>
      <body className="">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div style={{ direction: isRTL ? "rtl" : "ltr" }}>
          <div className="page-wrapper home-1">
            <div className="gif-overlay"></div>
            <Header lang={lang} />
            <div className="container z-index-3">
              <div className="row">
                {showPersonalInfo && <PersonalInfo lang={lang} />}
                {children}
                <Menu lang={lang} />
                <FlareCursor />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
