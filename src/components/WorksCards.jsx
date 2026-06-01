import { useMemo } from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import reframe3 from "/src/assets/reframe3.png";
import clippr from "/src/assets/clippr.png";
import portfolio from "/src/assets/portfolio1.png";
import galaxy from "/src/assets/gg.png";
import FadeIn from "./FadeIn";
import marketing from "/src/assets/marketing.png";
import aisacover from "/src/assets/aisacover.png";

const WorksCards = ({ currentProject = "froth" }) => {
  const projects = useMemo(
    () => [
      {
        id: "humanonly",
        image: aisacover,
        title: "HumanOnly",
        link: "/projects/humanonly",
      },
      {
        id: "marketing",
        image: marketing,
        title: "SMM Portfolio",
        link: "/projects/marketing",
      },
      {
        id: "portfolio",
        image: portfolio,
        title: "Portfolio",
        link: "/projects/portfolio",
      },
      {
        id: "reframe",
        image: reframe3,
        title: "Refra:me",
        link: "/projects/reframe",
      },
      {
        id: "galaxy",
        image: galaxy,
        title: "Galaxy Grid II",
        link: "/projects/galaxy-grid-2",
      },
    ],
    [],
  );

  const randomProjects = useMemo(() => {
    const filteredProjects = projects.filter(
      (project) => project.id !== currentProject,
    );
    return filteredProjects.sort(() => Math.random() - 0.5).slice(0, 3);
  }, [projects, currentProject]);

  return (
    <FadeIn>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-10 mb-20 m-6">
        {randomProjects.map((project) => (
          <div
            key={project.id}
            className="w-[230px] bg-white dark:bg-gradient-to-b dark:from-[#1d253a] dark:to-darkBackground dark:border-[#414141] border-1 rounded-xl overflow-hidden shadow-[0_4px_7px_rgba(0,0,0,0.2)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.2)]"
          >
            <img
              src={project.image}
              className="w-full h-[140px] object-cover"
              alt={project.title}
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold mb-4 dark:text-white text-[#222222]">
                {project.title}
              </h2>
              <Link to={project.link} className="flex justify-center">
                <Button
                  radius="full"
                  className="bg-primary text-white px-6 py-2 mb-2 rounded-full font-[500] hover:opacity-70 transition-opacity"
                >
                  View Project
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
};

export default WorksCards;
