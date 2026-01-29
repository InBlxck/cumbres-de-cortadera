import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import ExecutiveSummary from "../sections/ExecutiveSummary";

import Gallery from "../sections/Gallery";
import DataRoom from "../sections/DataRoom";
import Contact from "../sections/Contact";
import Overview from "../sections/Overview";
import AtAGlance from "../sections/AtAGlance";
import ProjectOverview from "../sections/ProjectOverview";
import TechnicalSheetSection from "../sections/TechnicalSheetSection";
import LocationLeaflet from "../sections/LocationLeaflet";
import GeologyAndMining from "../sections/GeologyAndMining";
import ClosurePlan from "../sections/ClosurePlan";



export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <ExecutiveSummary />
        <AtAGlance/>
        <ProjectOverview />
        < TechnicalSheetSection />
        <LocationLeaflet />
        <GeologyAndMining />
        < ClosurePlan />

      </main>
      <Footer />
    </div>
  );
}
