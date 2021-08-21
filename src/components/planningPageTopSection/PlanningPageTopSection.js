import AddCustomTask from "./addCustomTask/AddCustomTask";
import { PlanningPageTopSectionStyled } from "./PlanningPageTopSectionStyled";
import PlanningPoints from "./planningPoints/PlanningPoints";

const PlanningPageTopSection = ({ isMobile }) => {
  return (
    <PlanningPageTopSectionStyled>
      <PlanningPoints isMobile={isMobile} />
      {!isMobile && <AddCustomTask />}
    </PlanningPageTopSectionStyled>
  );
};

export default PlanningPageTopSection;
