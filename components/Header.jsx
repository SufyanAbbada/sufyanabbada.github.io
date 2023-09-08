"use client";
import { useState, useEffect } from "react";
import { Tangerine } from "next/font/google";
import { Rye } from "next/font/google";

const tangerine = Tangerine({ subsets: ["latin"], weight: ["700"] });
const rye = Rye({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  const [index, setIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // const words = [
  //   "Full-Stack Developer",
  //   "Backend Engineer",
  //   "Frontend Maestro",
  //   "Database Guru",
  //   "Security Guardian",
  //   "3rd-party Integrations Manager",
  //   "JavaScript Connoisseur",
  //   "Deployment Extraordinaire",
  // ];

  const words = [
    "Mehengi Chars",
    "Sasti Chars",
    "Imported Chars",
    "Homemade Chars",
  ];

  useEffect(() => {
    const timer = setTimeout(
      () => {
        const currentWord = words[counter];

        if (index === currentWord.length) {
          setIsDeleting(true);
        } else if (index === 0 && isDeleting) {
          setIsDeleting(false);
          setCounter((prevCounter) => (prevCounter + 1) % words.length);
        }

        if (isDeleting) {
          setIndex((prevIndex) => prevIndex - 1);
        } else {
          setIndex((prevIndex) => prevIndex + 1);
        }
      },
      isDeleting ? 100 : 200
    ); // You can adjust these timings

    return () => clearTimeout(timer); // This will clear the timer when the component unmounts
  }, [index, counter, isDeleting]);

  return (
    <main className="magnify-cursor w-full h-72 xs:h-96">
      <video
        autoPlay
        loop
        muted
        preload="metadata"
        src="/video.mp4"
        poster="/SufyanPosterImage.jpg"
        className="w-full h-72 xs:h-96 object-fill z-0 absolute opacity-70"
      ></video>
      <div className="relative flex flex-col items-center justify-center h-full">
        <h1
          className={`${tangerine.className} text-6xl xs:text-8xl mb-3 outlined-font`}
        >
          Charsi
          {/* Sufyan Abbada  */}
        </h1>
        <div id="changing-text" className={`${rye.className} xs:text-2xl `}>
          {words[counter].substring(0, index) || "\u00A0"}
        </div>
      </div>
    </main>
  );
}
