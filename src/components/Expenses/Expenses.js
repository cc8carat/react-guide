import { useState } from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';
import Card from '../UI/Card';

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => filteredYear === expense.date.getFullYear().toString());

  return (
    <Card className='expenses'>
      <ExpensesFilter onFilter={filterHandler} filteredYear={filteredYear} />
      {filteredExpenses.map((expense) => {
        return <ExpenseItem key={expense.id} {...expense} />;
      })}
    </Card>
  );
}

export default Expenses;
