import { useState } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import "moment/locale/ko";
import { DateTypes } from "./DateRangeCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { InputGroup, Form } from "react-bootstrap";

const DateSingleCalendar = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const changeDateSinglePicker = (e: Event, picker: DateTypes) => {
    setSelectedDate(picker.startDate.format("YYYY-MM-DD"));
  };

  return (
    <>
      <DateRangePicker
        onApply={changeDateSinglePicker}
        initialSettings={{
          singleDatePicker: true,
          locale: { applyLabel: "적용", cancelLabel: "취소" },
        }}
      >
        <InputGroup style={{ width: 350 }}>
          <Form.Control
            type="button"
            readOnly
            value={selectedDate}
            placeholder="0000-00-00"
            style={{ textAlign: "center" }}
          />
          <InputGroup.Text>
            <FontAwesomeIcon icon={faCalendar} />
          </InputGroup.Text>
        </InputGroup>
      </DateRangePicker>
    </>
  );
};

export default DateSingleCalendar;
