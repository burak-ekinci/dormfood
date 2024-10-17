import { useEffect, useRef, useState } from "react";
import list from "../data/list.json";
import FeedbackButton from "./Mailto";
import Warning from "./Warning";
// import msgJson from "../data/msg.json";

const Card = ({ day, month }) => {
  const msg = useRef();
  const [message, setMessage] = useState();
  const [today, setToday] = useState(list[day]);
  var [todayNumber, setTodayNumber] = useState(day);

  useEffect(() => {
    setToday(list[todayNumber]);
  }, [todayNumber]);

  return (
    <div>
      <div className="card m-5">
        <div className="text-end me-5">
          <img
            width={70}
            className="z-3 position-absolute img-fluid"
            style={{ marginTop: -10, marginRight: "23" }}
            src="https://github.com/burak-ekinci/dormfood/blob/main/public/mnk.png?raw=true"
            alt=""
          />{" "}
        </div>
        <div className="card-body">
          <h5 className="card-title">🌅Sabah Menü</h5>
          <p className="card-text">
            <b>
              {" "}
              {todayNumber} {month} 2024
            </b>{" "}
            Sabah Menüsü:
          </p>
          {/* <span className="d-flex justify-content-center">
            <button className="btn btn-success me-2">👍</button>
            <button className="btn btn-danger">👎</button>
          </span> */}
        </div>
        <ul className="list-group list-group-flush">
          {today.morning.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
            >
              <span>{item}</span>
              {/* <span className="d-flex justify-content-center">
                <button className="btn btn-success me-2">👍</button>
                <button className="btn btn-danger">👎</button>
              </span> */}
            </li>
          ))}
        </ul>
      </div>
      <div className="d-flex justify-content-around">
        <button
          className="btn btn-success"
          onClick={() => {
            if (todayNumber == 5) {
              setTodayNumber(day);
              setToday(list[todayNumber]);
              alert("O kadar da gün girmeye uğraşamadım balım");
            } else {
              setTodayNumber(--todayNumber);
              setToday(list[todayNumber]);
            }
          }}
        >
          ❮❮ Previous Day
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            if (todayNumber == 21) {
              setTodayNumber(day);
              setToday(list[todayNumber]);
              alert("Hop! yeter da :)");
            } else {
              setTodayNumber(++todayNumber);
              setToday(list[todayNumber]);
            }
          }}
        >
          Next Day ❯❯
        </button>
      </div>
      <div className="card m-5">
        <div className="card-body">
          <h5 className="card-title">🌃 Akşam Menü</h5>
          <p className="card-text">
            <b>
              {" "}
              {todayNumber} {month} 2024
            </b>{" "}
            Akşam Menüsü:
          </p>
        </div>
        <ul className="list-group list-group-flush">
          {today.evening.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
            >
              <span>{item}</span>
              {/* <span className="d-flex justify-content-center">
                <button className="btn btn-success me-2">👍</button>
                <button className="btn btn-danger">👎</button>
              </span> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
