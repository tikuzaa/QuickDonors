import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-[#2a0000] text-white translate-y-23">
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2025 Code Red. All rights reserved.</span>
        <span>Terms • Privacy Policy</span>
        <div className="flex justify-between mb-8"><SocialIcons Icons={Icons}/></div>
      </div>
    </footer>
  );
};

export default Footer;
