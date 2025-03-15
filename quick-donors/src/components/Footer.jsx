import React from "react";
import SocialIcons from "./Footer/SocialIcons";
import { Icons } from "./Footer/Menus";

const Footer = () => {
  return (
    <>
      <footer class="bg-[#fd5c63]/20 font-sans dark:bg-gray-900 translate-y-23 pl-10 pr-10">
        <div class="container px-6 pt-10 mx-auto">
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div class="sm:col-span-2">
              <h1 class="max-w-lg text-[50px] font-semibold tracking-tight text-gray-800 xl:text-[60px] dark:text-white">
                QuickDonor
              </h1>
              <p class="px-2 max-w-lg text-[xl] font-semibold tracking-tight text-gray-800 xl:text-[20px] dark:text-white">
                Connecting Lives in Real-Time
              </p>
              {/* <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />
            
                    <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        Subscribe
                    </button>
                </div> */}
            </div>

            <div>
              <p class="font-semibold text-gray-800 dark:text-white">
                Quick Links
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-[#BE3144]  hover:cursor-pointer hover:text-[#BE3144]">
                  Home
                </p>
                <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-[#BE3144] hover:cursor-pointer hover:text-[#BE3144]">
                  Who We Are
                </p>
                <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-[#BE3144]  hover:cursor-pointer hover:text-[#BE3144]">
                  Learn More
                </p>
              </div>
            </div>

            <div>
              <p class="font-semibold text-gray-800 dark:text-white">
              Want to Donate Blood
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400  hover:cursor-pointer hover:text-[#BE3144]">
                About Blood Donation
                </p>
                <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400  hover:cursor-pointer hover:text-[#BE3144]">
                Donation Camps
                </p>
                <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400  hover:cursor-pointer hover:text-[#BE3144]">
                Donor Login
                </p>
              </div>
            </div>
          </div>

          <hr class="my-6 text-[#fd5c63]/20 md:my-8 dark:text-[#fd5c63]/20 h-2" />

          <div class="flex justify-around sm:flex sm:items-center sm:justify-between">

          <div class="flex flex-1 gap-4 hover:cursor-pointer">
              <form class="flex justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  class="p-2 border-1 border-gray-300 focus:outline-none focus:border-b-[#BE3144] transition duration-300"
                />
                <button
                  type="submit"
                  class="bg-[#D84040] text-white p-1.5 hover:bg-[#BE3144] transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div class="flex flex-1 gap-4 hover:cursor-pointer hover:text-[#BE3144] duration-300">
              {/* <h3 class="text-lg font-bold mb-2">Call Us :</h3> */}
              <a
                href="tel:+12345678901"
                class="text-xl "
              >
                <span class="text-lg font-bold mb-2">Call Us :</span> +1 (234) 567-8901
              </a>
            </div>


            <div class="flex gap-4 hover:cursor-pointer ml-4">
           <SocialIcons Icons={Icons}/>
            {/* <span className="p-1 cursor-pointer inline-flex items-center
        rounded-full mx-1.5 text-xl hover:text-gray-100 hover:bg-[#fc94af]
        duration-300 "><ion-icon name="mail-outline" size="large"></ion-icon></span>
            <span className="p-1 cursor-pointer inline-flex items-center
        rounded-full mx-1.5 text-xl hover:text-gray-100 hover:bg-[#fc94af]
        duration-300 "><ion-icon name="logo-facebook" size="large"></ion-icon></span>
            <span className="p-1 cursor-pointer inline-flex items-center
        rounded-full mx-1.5 text-xl hover:text-gray-100 hover:bg-[#fc94af]
        duration-300 "><ion-icon name="logo-twitter" size="large"></ion-icon></span> */}
            </div>
          </div>
          <p class="font-sans text-gray-500/50 mt-10 text-start md:text-center md:text-lg md:p-4">
          © 2025 Code Red. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
