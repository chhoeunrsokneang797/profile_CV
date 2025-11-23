import React, { useState, useEffect } from "react";
import referenceImage from "../../assets/image_sokneang.jpg";
import Skill from "../skill/Skill";
import Services from "../services/Services";
import Education from "./Education";
import 'aos/dist/aos.css';
import Aos from "aos";
import Portfolio from "../portfolio/Portfolio";
const useTypingEffect = (phrases) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // The current phrase we are working on
  const currentPhrase = phrases[phraseIndex];
  // Determines if the effect should pause (after typing, before deleting)
  const isPaused = !isDeleting && displayText === currentPhrase;

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        // --- TYPING STATE ---
        const nextChar = currentPhrase.substring(0, displayText.length + 1);
        setDisplayText(nextChar);

        if (nextChar.length === currentPhrase.length) {
          // Phrase is complete: Set long pause, then switch to deleting
          setTypingSpeed(1500); // Long pause at the end of the line (1.5s)
          setIsDeleting(true);
        } else {
          setTypingSpeed(75); // Standard, deliberate typing speed
        }
      } else {
        // --- DELETING STATE ---
        const newText = currentPhrase.substring(0, displayText.length - 1);
        setDisplayText(newText);
        setTypingSpeed(45); // Faster deleting speed

        if (newText.length === 0) {
          // Deletion is complete: Set short pause, switch to typing next phrase
          setIsDeleting(false);
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setTypingSpeed(500); // Short pause before typing the new word (0.5s)
        }
      }
    };
    // The timer controls the animation loop
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer); // Cleanup function to clear the timer on unmount/re-run
  }, [
    displayText,
    isDeleting,
    phraseIndex,
    typingSpeed,
    phrases,
    currentPhrase,
  ]);

  return { typedText: displayText, isTyping: !isDeleting, isPaused };
};


// --- Main App Component ---
function About() {
  const phrases = [
    "HI, I AM CHHOEUNR SOKNEANG",
    "I AM A WEB FRONTEND DEVELOPER",
    "I HAVE 1 YEARS EXPERIENCE",
  ];

  const { typedText } = useTypingEffect(phrases);
  // Use a placeholder image URL for the background
  const backgroundImageUrl = "";

    useEffect(() => {
        // Fix 1: Initialize AOS here
        Aos.init({ duration: 1000 });
    }, []); // Empty array runs it once on mount

  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center min-h-screen text-center p-4 overflow-hidden font-inter" data-aos="fade-up"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content Container */}
        <div className="relative z-10 text-white flex flex-col items-center justify-center space-y-12">
          {/* Static Welcome Text */}
          <p className="text-3xl sm:text-4xl font-light tracking-wide text-gray-200 mt-[-20vh]">
            Welcome to my site!
          </p>

          {/* Dynamic Typing Text Container */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight h-32 flex items-center justify-center min-h-[6rem] sm:min-h-[10rem]">
            {/* Typed Text */}
            <span className="text-white drop-shadow-xl transition-opacity duration-300">
              {typedText}
            </span>

            {/* Blinking Cursor:
            - The 'animate-blink' class handles the standard 500ms opacity transition for the blinking effect.
            - We use 'w-1' (or 'w-4' on larger screens) for the width and high contrast to make it pop.
          */}
            <span className="inline-block ml-2 w-1 md:w-4 bg-white animate-blink">
              &nbsp;
            </span>
          </h1>

          {/* Action Button */}
          <button
            onClick={() => console.log("Button clicked: More About Me")}
            className="px-8 py-3 tracking-widest text-sm font-bold text-white uppercase bg-transparent border-2 border-gray-400 rounded-lg shadow-2xl hover:bg-gray-700 hover:border-white transition duration-300 ease-in-out transform hover:scale-[1.05] active:scale-95 focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50"
          >
            MORE ABOUT ME
          </button>
        </div>

        {/* Add a keyframes style block for the blinking cursor */}
        <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.7s step-end infinite;
        }
      `}</style>

        {/* // about me */}
      </div>

      <div className="lg:py-12 py-0" data-aos="fade-up">
        <div className="flex justify-center items-center p-4">
          <h2 className="text-2xl sm:text-xs lg:text-4xl uppercase font-medium">
            About me
          </h2>
        </div>

        <div className="min-h-screen p-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Reference Image */}
              <div className="p-6">
                <img
                  src={referenceImage}
                  alt="Reference image to recreate"
                  className="w-full rounded-lg border border-gray-200" />
              </div>

              {/* Recreation Template */}
              <div className="p-6">
                <h2 className="text-xl lg:text-5xl font-bold mb-4">
                  Chhoeunr Sokneang
                </h2>
                <div className="border-gray-300 rounded-lg">
                  <div className="text-gray-900">
                    <h2 className="text-xl lg:text-4xl font-medium mb-4">
                      Hi I'm a Web Frontend Developer
                    </h2>
                    <p className="mb-2 text-sm lg:text-2xl">
                      A passionate web Frontend developer focused on creating
                      clean, responsive websites with great user experiences.
                      Currently pursuing a degree in Information Technology.
                    </p>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 border border-blue-700 rounded mt-4 uppercase">
                    dowload resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Education />
      <Skill />
      <Services />
      <Portfolio/>
    </>
  );
}

export default About;
