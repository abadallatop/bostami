import Resume from "@/components/homes/resume/Resume";
import React from "react";

export const metadata = {
  title: "SK_Resume",
  description: "Abdullah Sheikh Khalil",
};
export default function page({ params: { lang } }) {
  return (
    <>
      <Resume lang={lang} />
    </>
  );
}
