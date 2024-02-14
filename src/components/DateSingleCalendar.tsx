import { useState } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import "moment/locale/ko";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const DateSingleCalendar = () => {
  return (
    <>
      <DateRangePicker initialSettings={{ singleDatePicker: true }}>
        <input type="text" />
      </DateRangePicker>
    </>
  );
};

export default DateSingleCalendar;
