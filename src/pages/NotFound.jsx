import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

function NotFound() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-100 to-transparent -z-100 dark:opacity-[15%]"
        style={{
          height: "1000px",
          backgroundImage: `
          linear-gradient(to right, rgba(229, 231, 235, 0.3) 2px, transparent 2px),
          linear-gradient(to bottom, rgba(229, 231, 235, 0.3) 2px, transparent 2px)
          `,
          backgroundSize: "120px 120px",
        }}
      />
      <div className="flex items-center justify-center min-h-screen px-6 relative z-10">
        <div className="flex flex-col items-center text-center ">
          <h1 className="font-bold text-[62px] xs:text-[70px] md:text-[84px] text-[#2b2b2b] dark:text-white">
            404<span className="text-lightTextColor dark:text-white">.</span>
          </h1>
          <h2 className="text-[20px] md:text-[24px] font-medium mb-4 bg-gradient-to-r from-[#b1dff3] via-[#86A6F6] to-[#8170aa] text-transparent bg-clip-text">
            Page Not Found
          </h2>
          <p className="text-[16px] md:text-[18px] mb-8 text-[#2b2b2b] dark:text-white">
            The page you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button
              radius="full"
              className="bg-primary text-white min-w-16 h-8 md:min-w-24 md:h-10 md:text-[16px]"
            >
              Back Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
