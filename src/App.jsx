import Card from "./components/Card";
import Warning from "./components/Warning";
import BaseLayout from "./layout/BaseLayout";

function App() {
  const date = new Date();
  const todayNumber = date.getDate();
  var month = date.getMonth();

  switch (month) {
    case 0:
      month = "Ocak";
      break;
    case 1:
      month = "Şubat";
      break;
    case 2:
      month = "Mart";
      break;
    case 3:
      month = "Nisan";
      break;
    case 4:
      month = "Mayıs";
      break;
    case 5:
      month = "Haziran";
      break;
    case 6:
      month = "Temmuz";
      break;
    case 7:
      month = "Ağustos";
      break;
    case 8:
      month = "Eylül";
      break;
    case 9:
      month = "Ekim";
      break;
    case 10:
      month = "Kasım";
      break;
    case 11:
      month = "Aralık";
      break;
    default:
      month = "Bilinmeyen Ay";
  }

  return (
    <BaseLayout props={<Card day={todayNumber} month={month} />}></BaseLayout>
  );
}

export default App;
