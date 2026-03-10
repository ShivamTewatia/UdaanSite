import { useState } from 'react';
import { useEffect } from "react";
import Nav from "../components/nav/nav.jsx";
import HeroSection from "../components/placement/hero/placementhero.jsx";
import TabNavigation from "../components/placement/innertab/placementInnerTab.jsx";
import DutiesCommittees from "../components/placement/duties/placementDuties.jsx";
import ProcedureGuidelines from "../components/placement/procedure/procedure.jsx";
import RulesTraining from "../components/placement/rules/placementRules.jsx";
import Statistics from "../components/placement/stats/zstats.jsx";
import Recruters from "../components/placement/recruiters/recruters.jsx";
import Footer from "../components/footer/footer.jsx";
import { useSearchParams } from "react-router-dom";



const PlacementPage = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('procedure');

  useEffect(() => {
    const tabFromUrl = searchParams.get("tab");
    if (!tabFromUrl) return;

    setActiveTab(tabFromUrl);

    // tab switch hone ke baad scroll
    setTimeout(() => {
      const anchor = document.getElementById("tab-anchor");
      anchor?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  }, [searchParams]);


  const handleTabChange = (tabId) => {
    setActiveTab(tabId);

    setTimeout(() => {
      const anchor = document.getElementById("tab-anchor");
      if (!anchor) return;

      const yOffset = 0;
      const y =
        anchor.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 100);
  };

  const scrollToStats = () => {
    const el = document.getElementById("stats-top");
    if (!el) return;

    const yOffset = -130;
    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const showStatsWithAnimation = () => {
    setActiveTab('stats');

    // 👇 tab render hone ke baad scroll
    setTimeout(() => {
      scrollToStats();
    }, 120);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'procedure':
        return <ProcedureGuidelines />;
      case 'rules-training':
        return <RulesTraining />;
      case 'duties':
        return <DutiesCommittees />;
      case 'stats':
        return <Statistics />;
      case 'recruiters':
        return <Recruters />;
      default:
        return <ProcedureGuidelines />;
    }
  };

  return (
    
    <>
      <Nav />
      <HeroSection onShowStats={showStatsWithAnimation} />
      <div id="tab-anchor"></div>
      <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      {renderTabContent()}

      <Footer />
    </>
  );
};

export default PlacementPage;
