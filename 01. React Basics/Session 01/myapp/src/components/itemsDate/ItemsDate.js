import "./ItemsDate.css";

const ItemsDate = (props) => {
  const { date } = props;
  return (
    <div className="itemsDate">
      <span>{date.day}</span>
      <span>{date.month}</span>
      <span>{date.year}</span>
      <p className="children">{props.children}</p>
    </div>
  );
};
export default ItemsDate;
