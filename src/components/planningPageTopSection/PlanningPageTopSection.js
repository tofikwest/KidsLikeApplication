import AddCustomTask from "./addCustomTask/AddCustomTask";
import { PlanningPageTopSectionStyled } from "./PlanningPageTopSectionStyled";
import PlanningPoints from "./planningPoints/PlanningPoints";

const PlanningPageTopSection = ({ isMobile, isDesktop, openModal }) => {
  return (
    <PlanningPageTopSectionStyled>
      <PlanningPoints isMobile={isMobile} isDesktop={isDesktop} />
      {!isMobile && <AddCustomTask openModal={openModal} />}
    </PlanningPageTopSectionStyled>
  );
};

export default PlanningPageTopSection;
