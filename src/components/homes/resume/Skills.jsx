import { skillData } from "@/data/skills";
import React from "react";
import { staticText } from "@/data/staticText";
export default function Skills({ lang }) {
  return (
    <div className="col-xl-6 col-lg-7">
      <div className="sk-section-title-wrap mb-20">
        <h4 className="section-title">
          {staticText.resume.workingSkills[lang]}
        </h4>
      </div>

      <div className="skill-bar-wrap">
        {skillData.map((elm, i) => (
          <div
            key={i}
            className={`skill-bar-item ${
              i + 1 != skillData.length && "mb-30"
            } `}>
            <div className="title-wrap">
              <h5 className="title">{elm[lang].title}</h5>
              <span className="count">{elm.progress}%</span>
            </div>
            <div className="progress-bar-wrap">
              <div
                className={`progress-line ${elm.progressClass}`}
                style={{ width: `${elm.progress}%`, "--progress-width": `${elm.progress}%`  }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
