import React, { useState, useEffect } from "react";
import Works from "../components/Works";
import Testimonials from "../components/Testimonials";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer/Footer";
import "./style.scss";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar isScrolled={isScrolled}></Navbar>
      <div className="relative -translate-y-23">
        <div className="relative">
          <div class="text-container flex flex-row justify-between items-center w-full">
            <div className="border flex flex-col p-4 max-w-200 justify-start">
              <div>Quick Donor</div>
              <div className="text-xl">
                Welcome to our all new Digital Blood Bank. We instantly connect
                donors with those in urgent need, ensuring life-saving blood
                reaches the right people at the right time.
                <p>
                  Join our network of lifesavers and help those in urgent need.
                  Find donors or donate blood in just a few clicks.
                </p>
              </div>
              <button className="w-fit text-xl tracking-wide bg-red-900 hover:bg-red-950 px-4 py-2 transition-all rounded-md mt-8 cursor-pointer">
                Join Now
              </button>
            </div>
            <img className="max-w-200" src="/hand_hold.png" alt="img" />
          </div>
          <div className="gradient-bg overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                    result="goo"
                  />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
            <div className="gradients-container">
              <div className="g1"></div>
              <div className="g2"></div>
              <div className="g3"></div>
              <div className="g4"></div>
              <div className="g5"></div>
              <div className="interactive"></div>
            </div>
          </div>
        </div>

        <Works />
        <Testimonials />
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
