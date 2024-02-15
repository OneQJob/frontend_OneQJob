import { useState } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import "moment/locale/ko";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { InputGroup, Form } from "react-bootstrap";

export type DateTypes = {
  startDate: {
    format(date: string): string;
  };
  endDate: {
    format(date: string): string;
  };
};

const DateCalendar = () => {
  const [selectedDates, setSelectedDates] = useState({
    startDate: "",
    endDate: "",
  });

  const changeDateRangePicker = (e: Event, picker: DateTypes) => {
    setSelectedDates({
      ...selectedDates,
      startDate: picker.startDate.format("YYYY-MM-DD"),
      endDate: picker.endDate.format("YYYY-MM-DD"),
    });
  };

  return (
    <DateRangePicker
      onApply={changeDateRangePicker}
      initialSettings={{
        locale: { applyLabel: "적용", cancelLabel: "취소" },
      }}
    >
      <InputGroup style={{ width: 350 }}>
        <Form.Control
          type="button"
          readOnly
          value={
            selectedDates.startDate && selectedDates.endDate
              ? `${selectedDates.startDate} ~ ${selectedDates.endDate}`
              : ""
          }
          placeholder="0000-00-00 ~ 0000-00-00"
          style={{ textAlign: "center" }}
        />
        <InputGroup.Text>
          <FontAwesomeIcon icon={faCalendar} />
        </InputGroup.Text>
      </InputGroup>
    </DateRangePicker>
  );
};

export default DateCalendar;
