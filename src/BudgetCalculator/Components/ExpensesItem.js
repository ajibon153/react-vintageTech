import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpensesItem = ({ expense }) => {
  // let charge = 0;
  // let amount = 0;
  // if (expense) {
  // let id = expense && expense.id;
  // let charge = expense && expense.charge;
  // let amount = expense && expense.amount;
  let { id, charge, amount } = expense; //The error
  // }
  console.log("Item.js", expense);

  return (
    <li className="item">
      <div className="info">
        {/* <span className="expense">{charge}</span>
        <span className="amount">{amount}</span> */}
      </div>
      <div>
        <button className="edit-btn" aria-label="edit button">
          <MdEdit />
        </button>
      </div>
      <div>
        <button className="clear-btn" aria-label="clear button">
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpensesItem;
