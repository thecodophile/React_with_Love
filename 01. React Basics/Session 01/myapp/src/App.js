import "./App.css";
import Item from "./components/item/Item";
import ItemsDate from "./components/itemsDate/ItemsDate";

function App() {
  const date = {
    day: 1,
    month: "Apr",
    year: 2023,
  };
  return (
    <div className="App">
      App
      <Item />
      <ItemsDate date={date}>Hey Everyone..</ItemsDate>
    </div>
  );
}

export default App;
