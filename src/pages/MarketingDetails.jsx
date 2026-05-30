import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import NavWorks from "../components/NavWorks";
import { Button } from "@nextui-org/react";
import GitHub from "/src/assets/github.svg";
import MarketingTools from "../components/MarketingTools";
import FooterWorks from "../components/FooterWorks";
import FadeIn from "../components/FadeIn";
import marketingdesktop from "/src/assets/marketingdesktop.png";
import marketingmobile from "/src/assets/marketingmobile.png";
import WorksCards from "../components/WorksCards";

function MarketingDetails() {
  const [activeSection, setActiveSection] = useState("overview");
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-[460px] bg-gradient-to-b from-gray-100 to-transparent -z-100 dark:opacity-[8%]"
        style={{
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
        <NavWorks />
        <div className="pt-[100px] md:pt-[150px]">
          <div className="container mx-auto px-4 xl-x:px-0 lg-x:ml-20 xl-x:ml-0 pl-[0.2rem]">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[1920px] flex flex-col xl-x:flex-row xl-x:items-start xl-x:justify-center gap-8">
                <div className="ml-4 mr-4 xs:ml-6 sm-plus:ml-8 lg:ml-[9rem] xl-x:m-0">
                  <HashLink
                    smooth
                    to="/#works"
                    className="text-primary hover:opacity-70 transition-opacity block"
                  >
                    ← Back to Works
                  </HashLink>

                  <div className="relative mb-16">
                    <div className="xl-x:flex xl-x:items-center xl-x:justify-start xl-x:gap-4">
                      <h1 className="font-bold uppercase text-[48px] xs:text-[56px] sm-plus:text-[70px] xl-x:text-[90px] pt-[1rem] mb-0 text-[#2b2b2b] md:text-[78px] md:ml-0 lg-plus:text-[90px] dark:text-white text-left md:leading-tight xl-x:whitespace-nowrap">
                        <span className="text-primary">M</span>arketing
                        Portfolio.
                      </h1>
                      <div className="hidden xl-x:flex items-center gap-4 mt-12 flex-shrink-0">
                        <Button
                          radius="full"
                          className="bg-primary text-white h-auto py-2 px-4 min-h-[32px] md:min-h-[36px] flex items-center justify-center"
                        >
                          <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                            <a
                              href="https://portfolio-marketing-kappa.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live Demo
                            </a>
                          </span>
                        </Button>
                        <a
                          href="https://github.com/nai-ada/portfolio-marketing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-70 transition-opacity dark:invert flex-shrink-0"
                        >
                          <img
                            src={GitHub}
                            alt="GitHub Logo"
                            className="w-8 xs:w-9"
                          />
                        </a>
                      </div>
                    </div>
                    <h2 className="xl-x:text-[20px]">
                      // Project <span className="font-bold">02</span> | Social
                      Media Marketing Portfolio
                    </h2>
                    <div className="flex xl-x:hidden items-center gap-4 mt-4">
                      <Button
                        radius="full"
                        className="bg-primary text-white h-auto py-2 px-4 min-h-[32px] md:min-h-[36px] flex items-center justify-center"
                      >
                        <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                          <a
                            href="https://portfolio-marketing-kappa.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </a>
                        </span>
                      </Button>
                      <a
                        href="https://github.com/nai-ada/portfolio-marketing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity dark:invert flex-shrink-0"
                      >
                        <img
                          src={GitHub}
                          alt="GitHub Logo"
                          className="w-8 xs:w-9"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="hidden xl-x:block w-[420px]">
                  <div className="relative bottom-32">
                    <div className="relative w-[400px] -z-10">
                      <img
                        src={marketingdesktop}
                        alt="Project Preview 3"
                        className="w-[400px] h-auto"
                      />
                      <div className="absolute w-[250px] -right-[6rem] top-[8rem]">
                        <img
                          src={marketingmobile}
                          alt="Menu Items Preview"
                          className="w-[250px] h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="hidden 2xl:block absolute lg:-left-56 xl-plus:-left-32 4xl:left-32"
              style={{ top: "1050px" }}
            >
              <div className="absolute left-1/2 bottom-[265%] -translate-x-1/2 flex flex-col items-center">
                <div className="w-[6px] h-[6px] bg-primary rounded-full mb-2"></div>
                <div className="border-l-1 border-[#222222] h-[170px] dark:border-white"></div>
              </div>
              <h1 className="font-bold uppercase text-[125px] origin-center -rotate-90 text-[#2b2b2b] dark:text-white whitespace-nowrap">
                <span className="text-primary">P</span>roject 02.
              </h1>
            </div>
          </div>

          {/* Mobile Images */}
          <FadeIn>
            <div className="xl-x:hidden flex justify-center mb-16">
              <div className="relative w-fit">
                <div className="relative w-[295px] xs:w-[330px] sm-plus:w-[380px] sm-x:w-[420px] -z-10">
                  <img
                    src={marketingdesktop}
                    alt="Project Preview 3"
                    className="w-[295px] xs:w-[330px] sm-plus:w-[380px] sm-x:w-[420px] h-auto"
                  />
                  <div className="absolute w-[170px] xs:w-[180px] sm-plus:w-[200px] sm-x:w-[240px] sm-x:-right-16 -right-8 -bottom-[1rem]">
                    <img
                      src={marketingmobile}
                      alt="Menu Items Preview"
                      className="w-[170px] xs:w-[180px] sm-plus:w-[200px] sm-x:w-[240px] h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="x-sm-plus:flex justify-center text-center">
            <Button
              radius="full"
              className={`border-primary ${
                activeSection === "overview"
                  ? "bg-primary text-white"
                  : "bg-transparent text-[#222222] dark:text-white"
              } p-4 xs:p-5 border-2 min-w-16 h-8 md:min-w-20 md:h-10 ml-2 m-[0.5rem]`}
              onClick={() => setActiveSection("overview")}
            >
              <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                Project Overview
              </span>
            </Button>
            <Button
              radius="full"
              className={`border-primary ${
                activeSection === "execution"
                  ? "bg-primary text-white"
                  : "bg-transparent text-[#222222] dark:text-white"
              } p-4 xs:p-5 border-2 min-w-16 h-8 md:min-w-20 md:h-10 m-[0.5rem]`}
              onClick={() => setActiveSection("execution")}
            >
              <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                Project Execution
              </span>
            </Button>
            <Button
              radius="full"
              className={`border-primary ${
                activeSection === "takeaways"
                  ? "bg-primary text-white"
                  : "bg-transparent text-[#222222] dark:text-white"
              } p-4 xs:p-5 border-2 min-w-16 h-8 md:min-w-20 md:h-10 m-[0.5rem]`}
              onClick={() => setActiveSection("takeaways")}
            >
              <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                Key Takeaways
              </span>
            </Button>
          </div>

          {/* Overview Section */}
          <FadeIn>
            <div
              style={{
                display: activeSection === "overview" ? "block" : "none",
              }}
              className="mx-8 sm-plus:mx-16 md:mx-auto md:max-w-[800px] lg:max-w-[950px] text-left mt-16"
            >
              <div className="flex items-center gap-4 mb-10 md:mx-8 lg:mx-16">
                <h2 className="font-bold text-[24px] xl:text-[30px] text-[#222222] dark:text-white">
                  Project Overview
                </h2>
              </div>
              <p className="mb-6 xl:text-[16px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white">
                A web portfolio showcasing my work as a Social Media Marketing
                Coordinator. Built with React and Tailwind CSS and deployed via
                Vercel, the design came together organically during development
                — a creative outlet as much as a functional project. Built to be
                scalable for future media and content updates.
              </p>
            </div>
          </FadeIn>

          {/* Key Takeaways Section */}
          <div
            style={{
              display: activeSection === "takeaways" ? "block" : "none",
            }}
            className="mx-8 sm-plus:mx-16  md:mx-auto md:max-w-[800px] lg:max-w-[950px]  text-left mt-16"
          >
            <h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">
              Key Takeaways
            </h2>
            <p className="mb-6 xl:text-[16px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white">
              This project was a test and challenge in working with and
              optimising large media formats. To ensure the fastest load times
              possible, I used Cloudinary — a cloud media platform — to host my
              videos externally rather than hardcoding them into the codebase,
              alongside video compression to maintain quality while reducing
              loading errors and delays. Still a work in progress, but a solid
              learning experience in performance optimisation.
            </p>
          </div>

          {/* execution Section */}
          <div
            style={{
              display: activeSection === "execution" ? "block" : "none",
            }}
            className="mx-8  sm-plus:mx-16 md:mx-auto md:max-w-[800px] lg:max-w-[950px]  text-left mt-16"
          >
            <h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">
              Project Execution
            </h2>
            <ul className="mb-8 xl:text-[16px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white list-disc pl-6">
              <li className="mb-2">
                Built entirely from scratch using{" "}
                <span className="font-semibold text-primary">React</span> and{" "}
                <span className="font-semibold text-primary">Tailwind CSS</span>
                , with no templates or boilerplate. Designed directly in
                development with a deliberate early 2000s blog aesthetic —
                simple, clean, and visually distinct. Fully responsive across
                all screen sizes, with media hosted on{" "}
                <span className="font-semibold text-primary">Cloudinary</span>{" "}
                for optimised load performance. Deployed via{" "}
                <span className="font-semibold text-primary">Vercel</span>.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-8 md:mx-auto md:max-w-[800px] lg:max-w-[950px] text-left mt-20 mb-28  sm-plus:mx-16">
        <h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">
          Project Tools
        </h2>
        <div className="md:mx-8 lg:mx-16">
          <MarketingTools />
        </div>
      </div>

      <FadeIn>
        <div
          className="mx-8 md:mx-auto md:max-w-[800px] lg:max-w-[950px]  text-left mt-16  sm-plus:mx-16"
          id="other-works"
        >
          <h2 className="font-bold text-[24px] mb-10  md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">
            My Other Works
          </h2>
        </div>
        <div className="mt-16">
          <WorksCards currentProject="marketing" />
        </div>
      </FadeIn>
      <FooterWorks />
    </div>
  );
}

export default MarketingDetails;
