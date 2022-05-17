import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
  const [enterTitle,setEnterTitle]=useState('');
  const [enterAmount, setEnterAmount]=useState('');
  const [enterDate, setEnterDate]=useState('');


  // const [userInput, setUserInput] = useState({
  //   enterAmount: '',
  //   enterDate: '',
  //   enterTitle: '',
  // });

  const titleChangeHandler = (event) => {
     setEnterTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enterTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
     setEnterAmount(event.target.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, enterAmount: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
     setEnterDate(event.target.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, enterDate: event.target.value };
    // });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title:enterTitle,
      amount:+enterAmount,
      date:new Date(enterDate)
    }
    props.onSaveExpensedata(expenseData);
    setEnterAmount('');
    setEnterDate('');
    setEnterTitle('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}  value={enterTitle}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enterDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
