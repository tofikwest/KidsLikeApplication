import { useState } from "react";
import { DayListStyled } from "./DayListStyled";
import { week } from "./DayListData";
import checkedIcon from "../../images/checkbox-true.svg";
import uncheckedIcon from "../../images/checkbox-false.svg";

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
        <li className="dayListItem" key={day.id}>
          <input
            name={day.name}
            type="checkbox"
            value={day.value}
            checked={day.checked}
            onChange={onHandleChange}
          />
          {day.checked ? (
            <img src={checkedIcon} alt={day.value} />
          ) : (
            <img src={uncheckedIcon} alt={day.value} />
          )}

          <span className="dayListValue">{day.value}</span>
        </li>
      ))}
    </DayListStyled>
  );
};

export default DayList;
