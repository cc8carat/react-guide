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

  return (
    <Card className='expenses'>
      <ExpensesFilter onFilter={filterHandler} filteredYear={filteredYear} />
      {expenses.map((expense, index) => {
        return <ExpenseItem {...expense} key={index} />;
      })}
    </Card>
  );
}

export default Expenses;
