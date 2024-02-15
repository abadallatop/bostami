"use client";
import React from "react";
import PersonalInfo from "@/components/homes/personalInfo/PersonalInfo";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function page({ lang }) {
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        router.push("/");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [router]);

  return (
    <>
      <PersonalInfo lang={lang}></PersonalInfo>
    </>
  );
}
