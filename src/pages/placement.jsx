import { useState } from 'react';
import Nav from "../components/nav/nav.jsx"
import HeroSection from "../components/placement/hero/placementhero.jsx"
import TabNavigation from "../components/placement/innerTab/placementInnerTab.jsx"
import DutiesCommittees from "../components/placement/duties/placementDuties.jsx"
import ProcedureGuidelines from "../components/placement/procedure/procedure.jsx"
import RulesTraining from "../components/placement/rules/placementRules.jsx"
import Statistics from "../components/placement/stats/zstats.jsx"
import Recruters from "../components/placement/recruiters/recruters.jsx"
import Footer from "../components/footer/footer.jsx"

const PlacementPage = () => {
  const [activeTab, setActiveTab] = useState('procedure');

  // Tab content render करने का function
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
      <Nav/>
      <HeroSection/>
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <div >
        {renderTabContent()}
      </div>
      <Footer/>
    </>
  );
};

export default PlacementPage;