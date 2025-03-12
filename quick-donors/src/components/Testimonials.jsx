import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Reveal } from "./Reveal";

const organizersData = [
  {
    name: "Shekhar Hans",
    image: "/pfp/shekhar.jpg",
    post: "WebDev Lead",
  },
  {
    name: "Aniruddha Ghosh",
    image: "/pfp/aniruddha.jpg",
    post: "Admin Head",
  },
  {
    name: "Arnab Manna",
    image: "/pfp/arnab.jpg",
    post: "CDP Lead",
  },
  {
    name: "Bidisha Banik",
    image: "/pfp/bidisha.jpg",
    post: "Site Developer, Repo Owner",
  },
  {
    name: "Debangan Dey",
    image: "/pfp/debangan.jpg",
    post: "Site Developer, Repo Owner",
  },
  {
    name: "Sayandip Ghosh",
    image: "/pfp/sayandip.jpg",
    post: "Project Manager, Repo Owner",
  },
  {
    name: "Sayan Sanpui",
    image: "/pfp/sayan.jpg",
    post: "Repo Owner",
  },
  {
    name: "Sahil Golder",
    image: "/pfp/sahil.jpg",
    post: "Repo Owner",
  },
  {
    name: "Somshirsha Bhattacharya",
    image: "/pfp/somshirsha.jpg",
    post: "Repo Owner",
  },
  {
    name: "Ankit Kundu",
    image: "/pfp/ankit.jpg",
    post: "Repo Owner",
  },
  {
    name: "Aahana Malakar",
    image: "/pfp/aahana.jpg",
    post: "PR Manager",
  },
  {
    name: "Sagarika Bandyopadhyay",
    image: "/pfp/sagarika.jpg",
    post: "PR Manager",
  },
  {
    name: "Muskaan Das",
    image: "/pfp/muskaan.jpg",
    post: "Repo Owner",
  },
];

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <button className="bg-[#00749d] text-white rounded-full p-2 m-8 w-12 h-12">
        &#10094; {/* Left arrow symbol */}
      </button>
    </div>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <button className="bg-[#00749d] text-white rounded-full p-2 m-8 w-12 h-12">
        &#10095; {/* Right arrow symbol */}
      </button>
    </div>
  );
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1200, // For screens up to 640px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800, // For screens up to 500px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen organizers-section relative py-40 px-10 bg-[#ffffff]">
      <div className="absolute z-4 -rotate-[20deg] h-[355px] w-[355px] -left-[3rem] -top-[12rem]">
      <Reveal> <img src="/pfp/calendar.png" alt=".." />   </Reveal>
      </div>
      <h2 className="text-center font-oxanium text-[#003c54] text-8xl font-bold mb-[8rem] max-[640px]:text-5xl md:text-6xl lg:text-8xl">
        <Reveal>Meet Our Organizers</Reveal>
      </h2>

      <Reveal>
        <Slider {...settings} className="custom-dots">
          {organizersData.map((organizer, index) => (
            <div key={index} className="p-4">
            <div className="flex justify-center items-center flex-wrap">
              <div className="relative w-[350px] h-[350px] m-[2.5rem] group">
                <div className="absolute top-0 left-0 w-full h-full z-20 transition-transform duration-500 ease-in-out transform group-hover:-translate-y-14">
                  <img
                    className="w-full h-full object-cover rounded-[1.5rem]"
                    src={organizer.image}
                    alt={organizer.name}
                  />
                </div>
                <div className="bg-gray-200 rounded-[1.5rem] absolute top-0 left-0 w-full h-full p-6 flex justify-center items-end z-10 transition-transform duration-500 ease-in-out transform group-hover:translate-y-14 text-center">
                  <h2 className="text-2xl text-gray-900 font-medium leading-8">
                    {organizer.name}
                    <br />
                    <span className="text-gray-600 text-lg font-light tracking-wide">
                    {organizer.post}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          ))}
        </Slider>
      </Reveal>
    </div>
  );
};

export default Testimonials;
