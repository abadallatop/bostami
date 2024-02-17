"use client"
import { skillData } from "@/data/skills";
import { useEffect ,useState } from "react"
import React from "react";
import { staticText } from "@/data/staticText";
export default function Skills({ lang }) {
  const [progressValues, setProgressValues] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgressValues((prevValues) =>
        prevValues.map((value, index) => {
          const targetProgress = skillData[index].progress;
          const newProgress = value + 1;
          return newProgress <= targetProgress ? newProgress : targetProgress;
        })
      );
    }, 40); // Adjust the interval as needed (1000 ms / 25 frames ≈ 40 ms)

    return () => clearInterval(intervalId);
  }, [skillData]);

  useEffect(() => {
    // Initialize progress values when the component mounts
    setProgressValues(skillData.map(() => 0));
  }, [skillData]);

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
              <span className="count" >{progressValues[i]}%</span>
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
