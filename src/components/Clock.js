import React, { Fragment } from "react";
import '../App.css'
const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds, timerMonths }) => {
  return (
    <Fragment>
      <section className="timer-container" style={{marginTop: '130px'}}>
        <section className="timer" >
          <div className="clock" style={{width: '100%',display: 'flex', flexDirection: 'row',alignItems: 'center', justifyContent: 'center'}}>
            <section>
              <p>{timerDays}</p>
              <p style={{marginLeft: '3px', fontWeight: 'normal'}}>Ngày</p>
            </section>
            <span style={{margin: '5px'}}>:</span>
            <section >
              <p>{timerHours}</p>
              <p style={{marginLeft: '3px', fontWeight: 'normal'}}>Giờ</p>
            </section>{" "}
            <span style={{margin: '5px'}}>:</span>
            <section>
              <p>{timerMinutes}</p>
              <p style={{marginLeft: '3px', fontWeight: 'normal'}}>Phút</p>
            </section>{" "}
            <span style={{margin: '5px'}}>:</span>
            <section>
              <p>{timerSeconds}</p>
              <p style={{marginLeft: '3px', fontWeight: 'normal'}}>Giây</p>
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