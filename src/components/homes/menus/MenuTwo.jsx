"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { menuItems } from "@/data/menu";
export default function Menu({ lang }) {
  let pathname = usePathname();

  const currentLang = lang || "en";

  if (pathname.split("/").length <= 2) {
    pathname = `/${currentLang}/home`;
  }

  return (
    <div className="col-xxl-1 d-xxl-block d-none">
      <div className="sk-main-menu-wrap">
        <nav className="sk-main-menu main_menu ">
          <ul>
            {menuItems[currentLang].map((elm, i) => (
              <li
                className={`${pathname == elm.href && "active"}  shadow `}
                key={i}
              >
                <Link href={elm.href}>
                  <span>
                    <i style={{ fontSize: "25px" }} className={elm.icon}></i>
                  </span>
                  {elm.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
