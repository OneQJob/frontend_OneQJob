import { useState } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import "moment/locale/ko";

interface DateTypes {
  startDate: {
    format(date: string): string;
  };
  endDate: {
    format(date: string): string;
  };
}

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
      initialSettings={{ locale: { applyLabel: "적용", cancelLabel: "취소" } }}
    >
      <div className="input-group" style={{ width: 350 }}>
        <input
          type="text"
          className="form-control"
          readOnly
          value={
            selectedDates.startDate && selectedDates.endDate
              ? `${selectedDates.startDate} ~ ${selectedDates.endDate}`
              : ""
          }
          placeholder="0000-00-00 ~ 0000-00-00"
          style={{ textAlign: "center" }}
        />
        <span className="input-group-text">
          <FontAwesomeIcon icon={faCalendar} />
        </span>
      </div>
    </DateRangePicker>
  );
};

export default DateCalendar;
