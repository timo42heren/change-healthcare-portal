import React from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <div className="expense-form">
      <h2>Add Healthcare Expense</h2>
      <input type="text" placeholder="Expense Name" />
      <input type="number" placeholder="Amount" />
      <button>Add Expense</button>
    </div>
  );
}

export default ExpenseForm;
`
