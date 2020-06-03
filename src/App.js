import React, { useState } from "react";
import "./App.css";
import Alert from "./BudgetCalculator/Components/Alert";
import ExpensesList from "./BudgetCalculator/Components/ExpensesList";
import ExpensesItem from "./BudgetCalculator/Components/ExpensesItem";
import ExpensesForm from "./BudgetCalculator/Components/ExpensesForm";
import { v4 as uuidv4 } from "uuid";

const initialExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1600 },
  { id: uuidv4(), charge: "Car Payment", amount: 400 },
  { id: uuidv4(), charge: "Credit Card Bill", amount: 1200 },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpensesForm />
        <ExpensesList expenses={expenses} />
        <ExpensesItem />
      </main>
      <h1>
        TOtal spending :{" "}
        <span className="total">
          Rp.{" "}
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
