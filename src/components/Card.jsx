import { useEffect, useState } from "react";
import list from "../data/list.json";

const Card = ({ day, month }) => {
  const [today, setToday] = useState(list[day]);
  var [todayNumber, setTodayNumber] = useState(day);
  useEffect(() => {
    setToday(list[todayNumber]);
  }, [todayNumber]);

  // const today = list[day];
  return (
    <div>
      <div className="card m-5">
        <div className="card-body">
          <h5 className="card-title">🌅Sabah Menü</h5>
          <p className="card-text">
            <b>
              {" "}
              {todayNumber} {month} 2024
            </b>{" "}
            Sabah Menüsü:
          </p>
        </div>
        <ul className="list-group list-group-flush">
          {today.morning.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
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
            if (todayNumber == 31) {
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
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
