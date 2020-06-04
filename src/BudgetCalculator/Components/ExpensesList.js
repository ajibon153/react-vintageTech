import React from "react";
import Item from "./ExpensesItem";
import { MdDelete } from "react-icons/md";

const ExpensesList = ({ expenses, clearItems, deleteItems, editItems }) => {
  // console.log("List.js ", expenses);

  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          if (expense) {
            return (
              <Item
                key={expense.id}
                expense={expense}
                deleteItems={deleteItems}
                editItems={editItems}
              />
            );
          }
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          Clear Expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default ExpensesList;
