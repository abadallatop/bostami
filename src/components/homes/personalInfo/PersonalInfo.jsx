import { contactData } from "@/data/contactData";
import { profileInfo } from "@/data/profileInfo";
import { socialMediaData } from "@/data/socials";
import { staticText } from "@/data/staticText";
import Image from "next/image";
import React from "react";

export default function PersonalInfo({ lang }) {
  const isRTL = ["ar", "he"].includes(lang);

  return (
    <div className="col-xxl-3 col-xl-3">
      <div className="sk-parsonal-info-area">
        <div className="sk-parsonal-info-wrap">
          <div className="sk-parsonal-info-img">
            <Image
              width={240}
              height={240}
              src={profileInfo.imageSrcOne}
              alt="avatar"
            />
          </div>

          <h4 className="sk-parsonal-info-name">
            <a href="#">{profileInfo[lang].name}</a>
          </h4>
          <span className="sk-parsonal-info-bio mb-15">
            {profileInfo[lang].title}
          </span>

          <ul className="sk-parsonal-info-social-link mb-30">
            {socialMediaData.map((elm, i) => (
              <li key={i}>
                <a style={{ color: elm.color }} href={elm.href}>
                  <i className={elm.className}></i>
                </a>
              </li>
            ))}
          </ul>

          <div
            className={`sk-parsonal-info-contact mb-30 ${
              isRTL ? "rtl" : "ltr"
            }`}>
            {contactData[lang].map((elm, i) => (
              <div key={i} className="sk-parsonal-info-contact-item">
                <div
                  style={{ color: `${elm.color}`, fontSize: `${elm.fontSize}` }}
                  className="icon">
                  <i className={elm.iconClass}></i>
                </div>
                <div className="text">
                  <span>{elm.text.label}</span>
                  <p>{elm.text.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="sk-parsonal-info-btn">
            <a className="btn-1" href="/cv.pdf" download>
              <span style={{ color: "#fff" }} className="icon">
                <i className="fa-regular fa-download"></i>
              </span>
              {staticText.personalInfo.download[lang]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
