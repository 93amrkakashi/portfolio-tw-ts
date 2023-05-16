import RoundOne from '../components/roundDesigns/RoundOne';
import RoundTwo from '../components/roundDesigns/RoundTwo';
import RoundThree from '../components/roundDesigns/RoundThree';
import RoundFour from '../components/roundDesigns/RoundFour';
import RoundFive from '../components/roundDesigns/RoundFive';
import HomePage from '../components/HomePage';
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="w-full lgl:h-screen font-bodyfont overflow-hidden text-textColor bg-black relative">
        <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
          <HomePage />
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-10">
          {/* <RoundOne />
          <RoundTwo />
          <RoundThree />
          <RoundFour />
          <RoundFive /> */}
        </div>
      </div>
    </>
  );
}
