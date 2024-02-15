import Home from "@/components/homes/home/Home";

import React from "react";

export const metadata = {
  title: "SK_Home",
  description: "Abdullah Sheikh Khalil",
};
export default function page({ params: { lang } }) {
  return (
    <>
      <Home lang={lang} />
    </>
  );
}
