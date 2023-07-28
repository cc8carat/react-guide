import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

function NewExpense({ onAddNewExpense }) {
  const [isShownAddForm, setIsShownAddForm] = useState(false);

  const saveNewExpenseHandler = (newExpenseFormData) => {
    const newExpense = { ...newExpenseFormData, id: Math.random().toString() };
    onAddNewExpense(newExpense);
    setIsShownAddForm(false);
  };

  const showFormHandler = (e) => setIsShownAddForm(true);

  const closeFormHandler = (e) => setIsShownAddForm(false);

  return (
    <div className='new-expense'>
      {!isShownAddForm && (
        <button type='button' onClick={showFormHandler}>
          Add New Expense
        </button>
      )}
      {isShownAddForm && <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} onCancel={closeFormHandler} />}
    </div>
  );
}

export default NewExpense;
