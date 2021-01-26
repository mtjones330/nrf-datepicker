import { Component, OnInit } from "@angular/core";
import { generateCalendar } from "./calendar-generator/calendar-generator";

@Component({
  selector: "nrf-datepicker",
  templateUrl: "./nrf-datepicker.component.html",
  styleUrls: ["./nrf-datepicker.component.scss"]
})
export class NrfDatepickerComponent implements OnInit {
  year = new Date().getFullYear();
  month = new Date().getMonth();
  selectedDate = new Date().setHours(0, 0, 0, 0);

  calendar: number[][] = [];

  constructor() {}

  ngOnInit() {
    this.initCalendar(this.year, this.month);
  }

  initCalendar = (year, month) => {
    this.calendar = generateCalendar(year, month);
  };

  getDay = (millis: number) => {
    return new Date(millis).getDate();
  };

  onSelectDate = (date: number) => {
    this.selectedDate = date;
  };

  isSelectedDate = (date: number): string => {
    if (date === this.selectedDate) {
      return "selectedDate";
    } else {
      return "";
    }
  };

  getSelectedDate = (): string => {
    return new Date(this.selectedDate).toDateString();
  };

  onNext = () => {
    if (this.month === 11) {
      this.year++;
      this.month = 0;
    } else {
      this.month++;
    }

    this.initCalendar(this.year, this.month);
  };

  onPrev = () => {
    if (this.month === 0) {
      this.year--;
      this.month = 11;
    } else {
      this.month--;
    }

    this.initCalendar(this.year, this.month);
  };

  getMonthHeader = month => {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "October",
      "September",
      "November",
      "December"
    ][month];
  };

  getStartingWeek = () => {
    return [49, 1, 5, 10, 14, 18, 23, 27, 31, 36, 40, 44][this.month];
  };
}
