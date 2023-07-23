import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';

function Expenses({ expenses }) {
  return (
    <Card className='expenses'>
      {expenses.map(({ id, title, amount, date }) => {
        return <ExpenseItem id={id} title={title} amount={amount} date={date} key={id} />;
      })}
    </Card>
  );
}

export default Expenses;
