import { useState } from 'react';

import './Expenses.css';
import ExpenseList from './ExpenseList';
import ExpensesFilter from './ExpenseFilter';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => filteredYear === expense.date.getFullYear().toString());

  return (
    <li>
      <Card className='expenses'>
        <ExpensesFilter onFilter={filterHandler} filteredYear={filteredYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList filteredExpenses={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
