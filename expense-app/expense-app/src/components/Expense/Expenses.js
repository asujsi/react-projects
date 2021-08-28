import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <Card className="Expenses">
      <ExpensesFilter selected={filteredYear} onFilter={filterChangeHandler} />
      <ExpenseItem
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    </Card>
  );
}

export default Expenses;
