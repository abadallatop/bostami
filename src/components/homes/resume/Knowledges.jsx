import { knoledges } from "@/data/knoledges";
import React from "react";
import { staticText } from "@/data/staticText";

export default function Knowledges({ lang }) {
  return (
    <div className="col-xl-6 col-lg-5">
      <div className="sk-section-title-wrap mb-20">
        <h4 className="section-title">{staticText.resume.knowledges[lang]}</h4>
      </div>

      <div className="knowledeges-item-wrap">
        {knoledges.map((elm, i) => (
          <span key={i} className="gk-item">
            {elm}
          </span>
        ))}
      </div>
    </div>
  );
}
