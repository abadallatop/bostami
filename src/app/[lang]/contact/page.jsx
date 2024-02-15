import Contact from "@/components/homes/contact/Contact";

import React from "react";
export const metadata = {
  title: "SK_Contact",
  description: "Abdullah Sheikh Khalil",
};
export default function page({ params: { lang } }) {
  return (
    <>
      <Contact lang={lang} />
    </>
  );
}
