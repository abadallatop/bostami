import { experiences } from "@/data/experience";
import Image from "next/image";
import React from "react";
import { staticText } from "@/data/staticText";

export default function Experience({ lang }) {
  return (
    <div className="col-xl-6 col-lg-5">
      <div className="sk-section-title-wrap mb-20">
        <h4 className="section-title">
          <Image
            width={30}
            height={27}
            src="/assets/img/icon/exper-icon.png"
            alt="experience"
          />
          {staticText.resume.experience[lang]}
        </h4>
      </div>

      {experiences.map((elm, i) => (
        <div
          key={i}
          className={`sk-card-item ${elm.bgClass} ${
            i + 1 != experiences.length && "mb-20"
          } `}>
          <span className="card-subtitle">{elm[lang].session}</span>
          <h6 className="card-title">{elm[lang].role}</h6>
          <p className="card-text">{elm[lang].company}</p>
        </div>
      ))}
    </div>
  );
}
