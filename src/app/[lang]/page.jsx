import Header from "@/components/homes/headers/Header";
import PersonalInfo from "@/components/homes/personalInfo/PersonalInfo";
import AboutOne from "@/components/homes/about/AboutOne";
import React from "react";

import Menu from "@/components/homes/menus/MenuTwo";

export const metadata = {
  title: "SK_Home",
  description: "Abdullah Sheikh Khalil",
};

export default function Home1({ params: { lang } }) {
  const defaultLang = lang || "en";
  return (
    <>
      {/* <div className="page-wrapper home-1" id="home-1">
        <Header />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfo /> */}
      <AboutOne lang={defaultLang} />
      {/* <Menu />
          </div>
        </div>
      </div> */}
    </>
  );
}
