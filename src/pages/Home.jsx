import { useState, useRef, useEffect } from "react";
import About from "../components/About";
import Works from "../components/Works";
import Connect from "../components/Connect";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GitHub from "/src/assets/github.svg";
import LinkedIn from "/src/assets/linkedin.svg";
import LocationPin from "/src/assets/locationpin.svg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words: [
      "Software Engineer.",
      "Full-stack Web Developer.",
      "UX/UI Designer.",
      "Web Designer.",
    ],
    loop: true,
    delaySpeed: 1000,
    typeSpeed: 80,
    deleteSpeed: 90,
  });

  const aboutRef = useRef(null);
  const [gridHeight, setGridHeight] = useState("100vh");

  useEffect(() => {
    if (aboutRef.current) {
      const aboutTop = aboutRef.current.offsetTop;
      setGridHeight(`${aboutTop}px`);
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-100 to-transparent -z-100 dark:opacity-[8%]"
        style={{
          minHeight: "100vh",
          height: "1000px",
          width: "500%",
          marginLeft: "-18%",
          backgroundImage: `
      linear-gradient(to right, rgba(229, 231, 235, 0.25) 2px, transparent 2px),
      linear-gradient(to bottom, rgba(229, 231, 235, 0.25) 2px, transparent 2px)
    `,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative z-10">
        <Nav />
        <div className="flex items-center justify-center min-h-screen px-6 md:pr-0">
          <div className="flex justify-center items-center min-h-screen w-full max-w-3xl md:mt-[1rem]">
            <div className="flex flex-col items-center md:items-start">
              <div className="md-2 md:mb-0 md:flex md:justify-between md:w-full md:w-[103%]">
                <div className="flex flex-col items-center md:items-baseline md:flex-row">
                  <h1 className="font-bold text-center md:text-left text-[55px] xs:text-[70px] md:text-[84px] md-x:text-[110px] md-plus:text-[95px] xs:h-20 sm-x:text-[100px] h-[4.5rem] md:h-28 text-[#2b2b2b] lg:text-[125px] xl-plus:text-[140px] sm-plus:text-[80px] sm-plus:h-24 sm:text-[90px] sm:h-28 lg-plus:text-[130px] dark:text-white 4xl:text-[170px]">
                    Nadia
                  </h1>
                  <h1 className="font-bold text-center md:text-left text-[55px] md:text-[84px] xs:text-[70px] sm:text-[90px] md-x:text-[110px] md-plus:text-[95px] sm-x:text-[100px] sm-plus:text-[80px] lg:text-[125px] bg-gradient-to-r from-[#b1dff3] via-[#86A6F6] via-[#99b0e2] to-[#8170aa] text-transparent bg-clip-text md:ml-4 md:text-[80px] md:text-[87px] xl-plus:text-[140px] 4xl:text-[170px] lg-plus:text-[130px]">
                    Vespalec
                    <span className="text-lightTextColor dark:text-white">
                      .
                    </span>
                  </h1>
                </div>
                <div className="hidden w-28 lg:w-10 lg:flex lg:flex-col space-y-6 lg:mt-11 xl:mt-12 xl:ml-9 md-x:mt-10 lg:ml-7 xl-plus:mt-[3.7rem] lg-plus:mt-[3rem] lg-plus:ml-8 lg:self-start dark:invert 4xl:mt-[4.9rem]">
                  <a
                    href="https://linkedin.com/in/nadiavespalec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                  >
                    <img
                      src={LinkedIn}
                      alt="LinkedIn Logo"
                      className="w-[36px] 4xl:w-[56px]"
                    />
                  </a>
                  <a
                    href="https://github.com/nai-ada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                  >
                    <img
                      src={GitHub}
                      alt="GitHub Logo"
                      className="w-[36px] 4xl:w-[56px]"
                    />
                  </a>
                </div>
              </div>
              <div className="mt-5 ml-2 md:w-full md:mt-1 md:mt-2 md:ml-1 lg:mt-0 text-center md:text-left">
                <h2 className="subTitleHome text-[18px] mb-4 xs:text-[20px] md:text-[24px] mb-2 font-medium sm-plus:text-[20px] sm:text-[22px] lg-plus:text-[28px] 4xl:text-[40px]">
                  Hi, I'm a{" "}
                  <span style={{ fontWeight: "bold", color: "#86A6F6" }}>
                    {text}
                  </span>
                  <Cursor />
                </h2>

                <div className="flex items-center justify-center md:justify-start mb-4 md:mb-2">
                  <img
                    src={LocationPin}
                    alt="Location Pin Logo"
                    width={14}
                    className="mr-2 dark:invert 4xl:w-5"
                  />
                  <h2 className="text-[14px] font-medium md:text-[18px] 4xl:text-[22px]">
                    Vancouver, BC
                  </h2>
                </div>
                <div className="flex justify-center md:justify-start space-x-4 lg:hidden">
                  <a
                    href="https://linkedin.com/in/nadiavespalec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity md:mt-2 dark:invert"
                  >
                    <img src={LinkedIn} alt="LinkedIn Logo" width={26} />
                  </a>
                  <a
                    href="https://github.com/nai-ada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity md:mt-2 dark:invert"
                  >
                    <img src={GitHub} alt="GitHub Logo" width={26} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={aboutRef}>
        <About />
        <Works />
        <div className="">
          <Connect />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
