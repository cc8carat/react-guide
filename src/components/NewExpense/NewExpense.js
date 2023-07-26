import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

function NewExpense({ onAddNewExpense }) {
  const saveNewExpenseHandler = (newExpenseFormData) => {
    const newExpense = { ...newExpenseFormData, id: Math.random().toString() };
    onAddNewExpense(newExpense);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} />
    </div>
  );
}

export default NewExpense;
