import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './Expenseitem';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expanse found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expanse) => (
        <ExpenseItem
          key={expanse.id}
          title={expanse.title}
          amount={expanse.amount}
          date={expanse.date}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
