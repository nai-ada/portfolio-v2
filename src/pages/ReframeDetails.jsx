import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import NavWorks from "../components/NavWorks";
import { Button } from "@nextui-org/react";
import GitHub from "/src/assets/github.svg";
import ReframeTools from "../components/ReframeTools";
import FooterWorks from "../components/FooterWorks";
import FadeIn from "../components/FadeIn";
import reframe1 from "/src/assets/reframe1.svg";
import reframe2 from "/src/assets/reframe2.svg";
import WorksCards from "../components/WorksCards";

function ReframeDetails() {
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
                        <span className="text-primary">R</span>efra:me.
                      </h1>
                      <div className="hidden xl-x:flex gap-4 mt-12">
                        <Button
                          radius="full"
                          className="bg-primary text-white min-w-16 h-8 md:min-w-20 md:h-9 xs:p-5 p-4"
                        >
                          <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                            <a
                              href="https://getreframe.netlify.app/login"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live Demo
                            </a>
                          </span>
                        </Button>
                        <a
                          href="https://github.com/nai-ada/reframe"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-70 transition-opacity dark:invert"
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
                      // Project <span className="font-bold">07</span> | Mental
                      Wellness Application for Thought Reframing
                    </h2>
                    <div className="flex xl-x:hidden justify-left gap-4 mt-4">
                      <Button
                        radius="full"
                        className="bg-primary text-white min-w-16 h-8 md:min-w-20 md:h-9 xs:p-5 p-4"
                      >
                        <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                          <a
                            href="https://getreframe.netlify.app/login"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </a>
                        </span>
                      </Button>
                      <a
                        href="https://github.com/nai-ada/reframe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity dark:invert"
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
                        src={reframe2}
                        alt="Project Preview 3"
                        className="w-[400px] h-auto"
                      />
                      <div className="absolute w-[250px] -right-[6rem] top-[8rem]">
                        <img
                          src={reframe1}
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
                <span className="text-primary">P</span>roject 07.
              </h1>
            </div>
          </div>

          {/* Mobile Images */}
          <FadeIn>
            <div className="xl-x:hidden flex justify-center mb-16">
              <div className="relative w-fit">
                <div className="relative w-[295px] xs:w-[330px] sm-plus:w-[380px] sm-x:w-[420px] -z-10">
                  <img
                    src={reframe2}
                    alt="Project Preview 3"
                    className="w-[295px] xs:w-[330px] sm-plus:w-[380px] sm-x:w-[420px] h-auto"
                  />
                  <div className="absolute w-[170px] xs:w-[180px] sm-plus:w-[200px] sm-x:w-[240px] sm-x:-right-16 -right-8 -bottom-[1rem]">
                    <img
                      src={reframe1}
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
          <div
            style={{ display: activeSection === "overview" ? "block" : "none" }}
            className="mx-8 sm-plus:mx-16 md:mx-auto md:max-w-[800px] lg:max-w-[950px] text-left mt-16"
          >
            <div className="flex items-center gap-4 mb-10 md:mx-8 lg:mx-16">
              <h2 className="font-bold text-[24px] xl:text-[30px] text-[#222222] dark:text-white">
                Project Overview
              </h2>
            </div>
            <p className="mb-4 xl:text-[16px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white">
              Refra:me is a mental wellness web application designed to help
              users challenge negative mindsets and cognitive distortions into
              positive, empowering perspectives. Leveraging the Gemini API,
              Refra:me analyzes original journal entries and provides
              personalized, optimistic thought reframing, along with actionable
              tips to encourage healthier thinking patterns. Users can create an
              account to view, edit, update, and delete their journal entries.
            </p>
            <p className="mb-4 xl:text-[16px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white">
              Developed as my final capstone project for the BrainStation
              Software Engineering program, Refra:me is ideal for anyone seeking
              support in shifting their mindset and improving their well-being.
              Currently a prototype web app, Refra:me is on track to becoming a
              full-featured mobile application for both iOS and Android.
            </p>
            <p className="mb-8 xl:text-[16px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white">
              Next steps for Refra:me include email verification and password
              reset functionality, enhanced security including encryption,
              hashing, salting, and protected routes, a transition to a mobile
              app, and UI updates including dark mode.
            </p>
          </div>

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
              Throughout this project, I discovered that I can bring any idea to
              life, no matter how ambitious it may seem. Working with new
              technologies like PostgreSQL, Supabase, and Netlify presented
              unique challenges, especially in setting up the backend
              infrastructure and managing deployment. However, overcoming these
              obstacles was incredibly rewarding and deepened my technical
              skills. I’m excited about the future of this project and look
              forward to seeing how it evolves!
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
                Users can create, view, update, and delete entries connected to
                the PostgreSQL database.
              </li>
              <li className="mb-2">
                Users can create an account and login with their email and
                password.
              </li>
              <li className="mb-2">
                Users can access their dashboard, with the option to view all
                entries and create entries. Once users create a new entry, their
                original message is sent to the Gemini API and generates a
                reframed perspective of their original thoughts.
              </li>
              <li className="mb-2">
                Users may only process entries if they are logged in and have an
                account.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-8 md:mx-auto md:max-w-[800px] lg:max-w-[950px] text-left mt-20 mb-28  sm-plus:mx-16 ">
        <h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">
          Project Tools
        </h2>
        <div className="md:mx-8 lg:mx-16">
          <ReframeTools />
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
          <WorksCards currentProject="reframe" />
        </div>
      </FadeIn>
      <FooterWorks />
    </div>
  );
}

export default ReframeDetails;
