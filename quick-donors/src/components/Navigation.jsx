("use client");
import React from 'react';
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Contact Us", href: "#" },
  { name: "About", href: "#" },
];

const Navbar = ({isScrolled}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  if(isScrolled){
    return(
      <>
      <header className={`sticky top-3 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#58111a]/90 backdrop-blur-[8px] shadow-lg"
            : "bg-[#58111a]-500/90  backdrop-blur-[8px]"
        } rounded-[50px] m-4`}>
          <nav
            aria-label="Global"
            className="flex items-center justify-between py-4 lg:px-8 z-50"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="/logo_blood.png"
                  className="h-15 w-auto"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden gap-x-6 lg:flex lg:justify-end">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-lg text-white after:absolute after:left-0 py-0.5
                  after:bottom-0 after:h-[2px] after:w-0 after:bg-[#B03052] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </a>
              ))}
              <a href="#" className="relative text-lg px-2 py-0 text-white transition-all 
              duration-300 rounded-lg border-1 border-transparent hover:border-[#B03052] hover:rounded-lg hover:bg-[#F7A8C4]/15 
              ">
                <div className='flex flex-row items-center gap-1'>
                Log in
                <img className='h-6 invert' src="/login.png" alt="" />
                </div>
              </a>
            </div>
          </nav>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover bg-gray-50"
                    >
                  Log in

                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
    </>
    );
  }
  else{
  return (
    <>
    <header className="sticky top-0 z-50 backdrop-blur-sm rounded-md">
          <nav
            aria-label="Global"
            className="flex items-center justify-between py-4 lg:px-8 z-50"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="/logo_blood.png"
                  className="h-15 w-auto"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden gap-x-6 lg:flex lg:justify-end">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-lg text-white after:absolute after:left-0 py-0.5
                  after:bottom-0 after:h-[2px] after:w-0 after:bg-[#B03052] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </a>
              ))}
              <a href="#" className="relative text-lg px-2 py-0 text-white transition-all 
              duration-300 rounded-lg border-1 border-transparent hover:border-[#B03052] hover:rounded-lg hover:bg-[#F7A8C4]/15 
              ">
                <div className='flex flex-row items-center gap-1'>
                Log in
                <img className='h-6 invert' src="/login.png" alt="" />
                </div>
              </a>
            </div>
          </nav>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover bg-gray-50"
                    >
                  Log in

                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
    </>
  );}
};

export default Navbar;