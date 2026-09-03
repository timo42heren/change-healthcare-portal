import React from "react";
import "./ExpenseList.css";

function ExpenseList() {
  return (
    <div className="expense-list">
      <h2>Healthcare Expenses</h2>
      <ul>
        <li>Medical Consultation - $120</li>
        <li>Prescription Medication - $45</li>
      </ul>
    </div>
  );
}

export default ExpenseList;
