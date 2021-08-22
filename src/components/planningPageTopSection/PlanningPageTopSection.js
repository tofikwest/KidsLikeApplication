import AddCustomTask from "./addCustomTask/AddCustomTask";
import { PlanningPageTopSectionStyled } from "./PlanningPageTopSectionStyled";
import PlanningPoints from "./planningPoints/PlanningPoints";

const PlanningPageTopSection = ({ isMobile, isDesktop }) => {
  return (
    <PlanningPageTopSectionStyled>
      <PlanningPoints isMobile={isMobile} isDesktop={isDesktop} />
      {!isMobile && <AddCustomTask />}
    </PlanningPageTopSectionStyled>
  );
};

export default PlanningPageTopSection;
