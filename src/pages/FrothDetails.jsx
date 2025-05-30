import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import NavWorks from "../components/NavWorks";
import { Button } from "@nextui-org/react";
import GitHub from "/src/assets/github.svg";
import FrothTools from "../components/FrothTools";
import FooterWorks from "../components/FooterWorks";
import FadeIn from "../components/FadeIn";
import froth1 from "/src/assets/froth1.svg";
import froth2 from "/src/assets/froth2.svg";
import WorksCards from "../components/WorksCards";

function FrothDetails() {
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
                      <h1 className="font-bold uppercase text-[60px] sm-plus:text-[70px] xl-x:text-[90px] pt-[1rem] mb-0 text-[#2b2b2b] md:text-[78px] md:ml-0 lg-plus:text-[98px] dark:text-white text-left md:leading-tight xl-x:whitespace-nowrap">
                        <span className="text-primary">F</span>roth Matcha.
                      </h1>
                      <div className="hidden xl-x:flex items-center gap-4 mt-12 flex-shrink-0">
                        <Button
                          radius="full"
                          className="bg-primary text-white h-auto py-2 px-4 min-h-[32px] md:min-h-[36px] flex items-center justify-center"
                        >
                          <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                            <a
                              href="https://matchacafe.bcitwebdeveloper.ca/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live Demo
                            </a>
                          </span>
                        </Button>
                        <a
                          href="https://github.com/htpwebdesign/matchacafe-theme"
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
                      // Project <span className="font-bold">01</span> |
                      Wordpress Capstone
                    </h2>
                    <div className="flex xl-x:hidden items-center gap-4 mt-4">
                      <Button
                        radius="full"
                        className="bg-primary text-white h-auto py-2 px-4 min-h-[32px] md:min-h-[36px] flex items-center justify-center"
                      >
                        <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                          <a
                            href="https://matchacafe.bcitwebdeveloper.ca/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </a>
                        </span>
                      </Button>
                      <a
                        href="https://github.com/htpwebdesign/matchacafe-theme"
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
                        src={froth2}
                        alt="Project Preview 3"
                        className="w-[400px] h-auto"
                      />
                      <div className="absolute w-[250px] -right-[6rem] top-[8rem]">
                        <img
                          src={froth1}
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
                <span className="text-primary">P</span>roject 01.
              </h1>
            </div>
          </div>

          {/* Mobile Images */}
          <FadeIn>
            <div className="xl-x:hidden flex justify-center mb-16">
              <div className="relative w-fit">
                <div className="relative w-[295px] xs:w-[330px] sm-plus:w-[380px] sm-x:w-[420px] -z-10">
                  <img
                    src={froth2}
                    alt="Project Preview 3"
                    className="w-[295px] xs:w-[330px] sm-plus:w-[380px] sm-x:w-[420px] h-auto"
                  />
                  <div className="absolute w-[170px] xs:w-[180px] sm-plus:w-[200px] sm-x:w-[240px] sm-x:-right-16 -right-8 -bottom-[1rem]">
                    <img
                      src={froth1}
                      alt="Menu Items Preview"
                      className="w-[170px]  xs:w-[180px] sm-plus:w-[200px] sm-x:w-[240px] h-auto"
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
                This project is a dynamic matcha cafe website developed as the
                final Capstone project for the BCIT Front-End Web Developer
                program. This project was built with WordPress, using advanced
                development techniques like custom taxonomies and post types,
                which allows for a fully customized user experience.
              </p>

              <p className="mb-8 xl:text-[16px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white">
                This website features an interactive menu system where visitors
                can explore individual menu items, alongside a homepage that
                integrates live Instagram feed detailing the cafe's menu items.
                Additional features include cafe locations, career
                opportunities, and a contact page. The development process
                utilized essential WordPress tools such as Jetpack for enhanced
                functionality, and WP Migrate for deployment management.
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
              Since this project was highly collaborative, I feel I've gained
              valuable experience working with a team. I learned to overcome
              various challenges, including proper task delegation,
              conflict-free GitHub merging, and effective team communication.
              This experience enhanced my understanding of version control best
              practices , WordPress development workflows, and the importance of
              communication when multiple developers work on the same codebase.
              Additionally, I developed skills in maintaining consistent styling
              across different developers' contributions, which I initally found
              to be a challenge.
            </p>

            <p className="mb-8 xl:text-[16px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white">
              Initially, I found WordPress development to be quite challenging.
              However, after working on this larger-scale project, I've
              developed much more confidence in my abilities and look forward to
              taking on more WordPress projects in the future.
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
                Utilized an{" "}
                <span className="font-semibold text-primary">
                  Instagram Feed plugin
                </span>{" "}
                to display images on the homepage
              </li>
              <li className="mb-2">
                Created{" "}
                <span className="font-semibold text-primary">
                  custom taxonomies and CPTs
                </span>{" "}
                (Custom Post Types) to display individual menu items
              </li>
              <li className="mb-2">
                Implemented a{" "}
                <span className="font-semibold text-primary">
                  "You May Also Like"
                </span>{" "}
                section on individual menu item pages using WordPress query for
                randomization
              </li>
              <li className="mb-2">
                Added user review functionality using a{" "}
                <span className="font-semibold text-primary">
                  plugin to display reviews
                </span>{" "}
                and submission forms
              </li>
              <li className="mb-2">
                Developed the{" "}
                <span className="font-semibold text-primary">about page</span>{" "}
                showcasing staff and testimonials using:
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <span className="font-semibold text-primary">
                      Advanced Custom Fields
                    </span>{" "}
                    (ACF)
                  </li>
                  <li>Custom Post Type data</li>
                </ul>
              </li>
              <li className="mb-2">
                Implemented content and styling for a clean, theme-consistent
                interface
              </li>
              <li className="mb-2">
                Customized the{" "}
                <span className="font-semibold text-primary">footer</span> to
                display cafe information in a simplified format
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
          <FrothTools />
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
          <WorksCards currentProject="froth" />
        </div>
      </FadeIn>

      <FooterWorks />
    </div>
  );
}

export default FrothDetails;
