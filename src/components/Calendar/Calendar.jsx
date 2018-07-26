import React, { Component } from "react";

class Calendar extends Component {
  state = {
    startDate: "",
    finalDate: "",
    numeralDays: "",
    errorStartDate: false,
    errorFinalDate: false
  };

  handleChangeDate = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  mathDays = () => {
    //validation field
    const { startDate, finalDate } = this.state;
    const stringToMs = date => {
      return window.Date.parse(
        date
          .split("/")
          .reverse()
          .join("/")
      );
    };

    const result = (stringToMs(finalDate) - stringToMs(startDate)) / 86400000;

    this.setState({
      numeralDays: Math.round(result),
      errorStartDate: false,
      errorFinalDate: false
    });
  };

  checkValidDate = value => {
    let date = value.split("/");
    if (date.length !== 3) {
      return false;
    }

    date = date.reverse().join("/");

    if (new Date(date) === "Invalid Date") {
      return false;
    }

    return true;
  };

  handleBlur = event => {
    const validStart = this.checkValidDate(this.state.startDate);
    const validEnd = this.checkValidDate(this.state.finalDate);
    if (validStart && validEnd) {
      this.mathDays();
    } else {
      if (!validStart) {
        this.setState({
          errorStartDate: true
        });
      }

      if (!validEnd) {
        this.setState({
          errorFinalDate: true
        });
      }
    }
  };

  render() {
    const {
      errorStartDate,
      errorFinalDate,
      startDate,
      finalDate,
      numeralDays
    } = this.state;
    return (
      <div className="calendar">
        <h2 className="calendar__title">Difference days calculator</h2>
        <div className="calendar__form">
          <div className="start-date">
            <label className="start-date__label" htmlFor="start-date">
              Departure
            </label>
            <input
              className={
                errorStartDate
                  ? "start-date__input invalid"
                  : "start-date__input"
              }
              id="start-date"
              type="text"
              name="startDate"
              value={startDate}
              onChange={this.handleChangeDate}
              onBlur={this.handleBlur}
            />
          </div>
          <div className="final-date">
            <label className="final-date__label" htmlFor="final-date">
              Ariving
            </label>
            <input
              className={
                errorFinalDate
                  ? "final-date__input invalid"
                  : "final-date__input"
              }
              id="final-date"
              type="text"
              name="finalDate"
              value={finalDate}
              onChange={this.handleChangeDate}
              onBlur={this.handleBlur}
            />
          </div>
          <div className="difference-days">
            <span className="difference-days__title">Days</span>
            <div className="difference-days__numeral">{numeralDays}</div>
          </div>
        </div>
        <div className="recomenadion_format_date">
          * date of arrival and departure should be entered in the format 13 /12
          / 2018
        </div>
        {errorStartDate || errorFinalDate ? (
          <div className="error_days_sign">
            **You did not fill in the arrival and departure dates fields
          </div>
        ) : null}
      </div>
    );
  }
}

export default Calendar;
