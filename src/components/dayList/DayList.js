import { useState } from "react";
import { DayListStyled } from "./DayListStyled";
import { week } from "./DayListData";

const DayList = () => {
  const [state, setState] = useState(week);

  const onHandleChange = (e) => {
    let weekdays = state;
    weekdays.forEach((day) => {
      if (day.value === e.target.value) day.isChecked = e.target.checked;
    });
    setState(weekdays);
  };

  return (
    <DayListStyled>
      {state.map((day) => (
        <li key={day.id}>
          {day.value}
          <input
            name={day.name}
            type="checkbox"
            value={day.value}
            checked={day.checked}
            onChange={onHandleChange}
          />
        </li>
      ))}
    </DayListStyled>
  );
};

export default DayList;
