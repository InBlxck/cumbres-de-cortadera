import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import ExecutiveSummary from "../sections/ExecutiveSummary";
import InvestorOpportunity from "../sections/InvestorOpportunity";
import Milestones from "../sections/Milestones";
import TechSheet from "../sections/TechSheet";
import Location from "../sections/Location";
import Gallery from "../sections/Gallery";
import DataRoom from "../sections/DataRoom";
import Contact from "../sections/Contact";
import Overview from "../sections/Overview";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <ExecutiveSummary />
        <InvestorOpportunity />
        <Milestones />
        <TechSheet />
        <Location />
        <Gallery />
        <DataRoom />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
