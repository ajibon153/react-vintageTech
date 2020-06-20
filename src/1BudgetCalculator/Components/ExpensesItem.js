import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpensesItem = ({ expense, editItems, deleteItems }) => {
  // let id = expense && expense.id;
  // let charge = expense && expense.charge;
  // let amount = expense && expense.amount;
  let { id, charge, amount } = expense; //The error
  // console.log("Item.js", expense);

  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">{amount}</span>
      </div>
      <div>
        <button className="edit-btn" aria-label="edit button">
          <MdEdit onClick={() => editItems(id)} />
        </button>
      </div>
      <div>
        <button className="clear-btn" aria-label="clear button">
          <MdDelete onClick={() => deleteItems(id)} />
        </button>
      </div>
    </li>
  );
};

export default ExpensesItem;
