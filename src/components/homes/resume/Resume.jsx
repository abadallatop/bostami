import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Knowledges from "./Knowledges";
import { staticText } from "@/data/staticText";

export default function Resume({ lang }) {
  return (
    <div className="col-xxl-8 col-xl-9">
      <div className="sk-page-content-wrap">
        <div className="sk-animations">
          <div className="section-wrapper pl-60 pr-60 pt-60">
            <div className="sk-page-title-wrap mb-15">
              <h2 className="page-title">{staticText.resume.resume[lang]}</h2>
            </div>
          </div>

          <div className="section-wrapper pl-60 pr-60 mb-60">
            <div className="row">
              <Education lang={lang} />

              <Experience lang={lang} />
            </div>
          </div>

          <div className="section-wrapper  pt-70 pb-60 pl-60 pr-60 ">
            <div className="row">
              <Skills lang={lang} />

              <Knowledges lang={lang} />
            </div>
          </div>

          <div className="footer-copyright text-center pt-25 pb-25">
            <span>
              © {new Date().getFullYear()} All Rights Reserved by Abdullah SK.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
