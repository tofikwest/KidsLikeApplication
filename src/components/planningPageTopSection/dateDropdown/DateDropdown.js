import React, { useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import { getTasks } from "../../../redux/tasks/tasksSelector";
import { DateDropdownStyled } from "./DateDropdownStyled";
import selectIcon from "../../../images/dropdown-arrow.svg";

const DateDropdown = ({
  configuredDate,
  startWeekDate,
  onSelectDate,
  commonValue,
}) => {
  const tasks = useSelector(getTasks);
  const [value, setValue] = useState(-1);

  const getLocalShortDayNameById = (dateId) => {
    const formatDate = new Date(tasks[0].days[dateId].date);
    let options = { weekday: "short" };
    const weekday = new Intl.DateTimeFormat("ru-RU", options).format(
      formatDate
    );

    return weekday;
  };

  const getLabel = (id) => {
    return `${configuredDate(startWeekDate, id)} - ${getLocalShortDayNameById(
      id
    )}`;
  };

  const getOptions = () => {
    const exactDays = tasks[0]?.days?.map((day, idx) => ({
      value: idx,
      label: getLabel(idx),
    }));

    let options = [];

    if (exactDays) {
      options = [{ value: "default", label: commonValue }, ...exactDays];
    } else {
      options = [{ value: "default", label: commonValue }];
    }

    return options;
  };

  const onHandleChange = (e) => {
    onSelectDate(e.value);
    setValue(e.value);
  };

  return (
    <DateDropdownStyled>
      <Select
        options={getOptions()}
        onChange={onHandleChange}
        classNamePrefix="react-select"
        isSearchable={false}
        value={getOptions()[value + 1]}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
      />

      <img className="arrowIcon" src={selectIcon} alt="icon" />
    </DateDropdownStyled>
  );
};

export default DateDropdown;
