import React, { useState } from "react";
import Card from "./Card"; // Import the Card component

const Courses = () => {
  // State to track the active card index
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const courses = [
    {
      title: "Qaida Noorania Online",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.",
      buttonText: "Enroll Now",
      icon: "/card-logo-Quran.svg",
    },
    {
      title: "Quran Reading Online",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.",
      buttonText: "Enroll Now",
      icon: "/card-logo-Quran.svg",
    },
    {
      title: "Tajweed Quran Online",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.",
      buttonText: "Enroll Now",
      icon: "/card-logo-Quran.svg",
    },
    {
      title: "Quran Memorization Online",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.",
      buttonText: "Enroll Now",
      icon: "/card-logo-Quran.svg",
    },
    {
      title: "Quran Memorization Online",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.",
      buttonText: "Enroll Now",
      icon: "/card-logo-Quran.svg",
    },
    {
      title: "Quran Memorization Online",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.",
      buttonText: "Enroll Now",
      icon: "/card-logo-Quran.svg",
    },
  ];

  const handleCardClick = (index) => {
    // Set the clicked card as the active one
    setActiveCardIndex(index);
  };

  return (
    <>
      <section>
        <div className="bg-[#F2F2F2] flex flex-col md:flex-row justify-between items-center py-8">
          <div className="w-full md:w-1/2 px-4 md:px-16 mb-6 md:mb-0">
            <h1 className="font-semibold text-5xl md:text-7xl xl:text-8xl text-[#1A1A1A]">
              Courses
            </h1>
            <h2 className="text-[#1A1A1A] text-2xl md:text-4xl font-medium text-nowrap mt-4">
              What We Offer
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/image.png"
              alt="About-Us"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Card
              key={index}
              title={course.title}
              description={course.description}
              icon={course.icon}
              isActive={activeCardIndex === index} // Check if the current card is active
              onClick={() => handleCardClick(index)} // Pass the index of the clicked card
              buttonText={course.buttonText}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Courses;