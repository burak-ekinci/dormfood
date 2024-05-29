import { useEffect, useRef, useState } from "react";
import list from "../data/list.json";
import FeedbackButton from "./Mailto";
import Warning from "./Warning";
// import msgJson from "../data/msg.json";

const Card = ({ day, month }) => {
  // const msg = useRef();
  // const [message, setMessage] = useState(msgJson);
  const [today, setToday] = useState(list[day]);
  var [todayNumber, setTodayNumber] = useState(day);

  useEffect(() => {
    setToday(list[todayNumber]);
  }, [todayNumber]);

  // const today = list[day];
  return (
    <div>
      <Warning />
      <FeedbackButton />
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

      {/* <div className="m-3 p-2 border rounded">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("submitledi");
            if (msg.current.value) {
              setMessage([msg.current.value, ...message]);
              msg.current.value = "";
            }
          }}
        >
          <div className="mb-3">
            <label className="form-label">Uygulama Nasıl Gelişir?</label>
            <input ref={msg} type="text" className="form-control" />
            <div className="form-text">
              Uygulamayı geliştirmeye yardımcı fikirlerinizi iletebilirsiniz.
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Gönder
          </button>
        </form>

        <ul className="list-group mt-5 m-2 p-1 border border-3">
          {message.map((msge, index) => (
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                wordBreak: "break-word",
              }}
              key={index}
              className="list-group-item m-2 border border"
            >
              {msge}
              <button
                onDoubleClick={() => {
                  setMessage(message.filter((item) => item !== msge));
                }}
                className="btn btn-sm "
                type="button"
              ></button>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Card;
