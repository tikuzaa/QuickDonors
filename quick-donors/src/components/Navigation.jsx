import React from "react";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HiMiniBars3BottomLeft, HiMiniXMark } from "react-icons/hi2";

const navigation = [
  { name: "Contact Us", href: "#" },
  { name: "About", href: "#" },
];

const Navbar = ({ isScrolled }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`sticky ${isScrolled ? "top-3 rounded-[50px] m-4" : "top-0 rounded-md"} z-50 transition-all duration-300 ${isScrolled ? "bg-[#B22222]/90 backdrop-blur-[8px] shadow-lg" : "backdrop-blur-sm"}`}
    >
      <nav
        aria-label="Global"
        className="flex items-center justify-between px-5 py-4 lg:px-8 z-50"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="/logo_blood.png" className="h-15 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <HiMiniBars3BottomLeft className="text-red-200 w-6 h-6" />
          </button>
        </div>
        <div className="hidden gap-x-6 lg:flex lg:justify-end">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-lg text-white after:absolute after:left-0 py-0.5 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FFFFFF] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#"
            className="relative text-lg px-2 py-0 text-white transition-all duration-300 rounded-lg border-1 border-transparent hover:rounded-lg hover:bg-red-500/40"
          >
            <div className="flex flex-row items-center gap-1">
              Log in
              <img className="h-6 invert" src="/login.png" alt="" />
            </div>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 min-w-screen overflow-y-auto bg-[#841617] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/logo_blood.png" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <HiMiniXMark className="text-white w-6 h-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-red-200/10"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                {!isLoggedIn ? (
                  <a
                    href="#"
                    onClick={() => setIsLoggedIn(true)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-red-200/10"
                  >
                    Log In
                  </a>
                ) : (
                  <a
                    href="#"
                    onClick={() => setIsLoggedIn(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-red-200/10"
                  >
                    Log Out
                  </a>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
