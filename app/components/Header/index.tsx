"use client";

import React from "react";
import { ProfileAvatar } from "./ProfileAvatar";

export const Header = () => {
  return (
    <header className="header w-full bg-black text-green-500 flex items-center justify-between border-b border-white border-opacity-10">
      <div className="w-[215px] ecl-logo flex items-center space-x-2">
        <img
          src="/wordmark.png"
          className="desktop-logo"
          alt="Eclipse Logo"
          width={183}
          height={34}
          style={{ marginLeft: "14px", maxWidth: "none" }}
        />
      </div>
      <ProfileAvatar />
    </header>
  );
};
