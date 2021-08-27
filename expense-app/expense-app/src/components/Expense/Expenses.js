import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses({ expenses }) {
  return (
    <Card className="Expenses">
      <ExpenseItem
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    </Card>
  );
}

export default Expenses;
