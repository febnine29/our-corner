import React, { Fragment } from "react";
import '../App.css'
const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds, timerMonths }) => {
  return (
    <Fragment>
      <section className="timer-container" style={{marginTop: '100px'}}>
        <section className="timer">
          <div className="clock" style={{width: '200px',margin: '0px auto', display: 'flex'}}>
            <section>
              <p>{timerDays}</p>
              <small>Ngày</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <small>Giờ</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <small>Phút</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <small>Giây</small>
            </section>
          </div>
          
        </section>
      </section>
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;