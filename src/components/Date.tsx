// import { logo } from "../assets";
import React, { useState } from "react";

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div>
      <label htmlFor="datePicker">Selecciona una fecha:</label>
      <input
        type="date"
        id="datePicker"
        name="datePicker"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;
