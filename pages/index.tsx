import HomePage from "../components/HomePage";
import CirclesOne from "@/components/roundDesigns/CirclesOne";
import CirclesTwo from "@/components/roundDesigns/CirclesTwo";
import CirclesThree from "@/components/roundDesigns/CirclesThree";

export default function Home() {
  return (
    <>
      <div className="w-full lgl:h-screen font-bodyfont overflow-hidden text-textColor bg-black relative">
        <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
          <HomePage />
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-10">
          <CirclesOne />
          <CirclesTwo />
          <CirclesThree />
        </div>
      </div>
    </>
  );
}
