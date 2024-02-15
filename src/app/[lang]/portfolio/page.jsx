import Portfolio from "@/components/homes/portfolio/Portfolio";

import React from "react";

export const metadata = {
  title: "SK_Home",
  description: "Abdullah Sheikh Khalil",
};
export default function page({ params: { lang } }) {
  return (
    <>
      <Portfolio lang={lang} />
    </>
  );
}
