import { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(null);

  const TitleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const AmountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const DateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={TitleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={AmountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={DateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
