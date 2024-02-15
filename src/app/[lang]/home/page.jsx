import AboutOne from "@/components/homes/about/AboutOne";
import React from "react";

export const metadata = {
  title: "SK_Home",
  description: "Abdullah Sheikh Khalil",
};

export default function Home1({ params: { lang } }) {
  return (
    <>
      <AboutOne lang={lang} />
    </>
  );
}
