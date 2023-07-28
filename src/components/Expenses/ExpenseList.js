import ExpenseItem from './ExpenseItem';

import './ExpenseList.css';

function ExpenseList({ filteredExpenses }) {
  if (filteredExpenses.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {filteredExpenses.map((expense) => {
        return <ExpenseItem key={expense.id} {...expense} />;
      })}
    </ul>
  );
}

export default ExpenseList;
