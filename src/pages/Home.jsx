
//components
import {Footer} from "../components/Footer";
import {LandingPage} from "../components/LandingPage";
import {About} from "../components/About";
import {Skills} from "../components/Skills";
import { PortfolioContent } from "../components/PortfolioContent";
import { Experience } from "../components/Experience";

export const Home = () => {
  return (
    <>
      <LandingPage />
      <div className="bg-white">
        <About />
        <Skills />
        <Experience />
        <PortfolioContent />
      </div>
      <Footer />
    </>
  )
}