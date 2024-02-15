import { education } from "@/data/education";
import Image from "next/image";
import React from "react";
import { staticText } from "@/data/staticText";

export default function Education({ lang }) {
  return (
    <div className="col-xl-6 col-lg-7">
      <div className="sk-section-title-wrap mb-20">
        <h4 className="section-title">
          <Image
            width={38}
            height={23}
            src="/assets/img/icon/edu-icon.png"
            alt="icon"
          />
          {staticText.resume.education[lang]}
        </h4>
      </div>

      <div className="sk-card-wrap">
        {education.map((elm, i) => (
          <div
            className={`sk-card-item ${elm.bgClass} ${
              i + 1 != education.length && "mb-20"
            } `}>
            <span className="card-subtitle">{elm.session}</span>
            <h6 className="card-title">
              {elm[lang].cardTitle}{" "}
              <span>- {elm[lang].cardSubtitleSecondary}</span>
            </h6>
            <p className="card-text">{elm[lang].locatopn}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
