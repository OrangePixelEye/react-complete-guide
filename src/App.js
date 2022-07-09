import { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'toilet paper',
    amount: 94.12,
    date: new Date(2022, 1, 2)
  },
  {
    id: 'e2',
    title: 'cool toilet paper',
    amount: 912.12,
    date: new Date(2020, 3, 2)
  },
  {
    id: 'e3',
    title: 'not so cool toilet paper',
    amount: 94.12,
    date: new Date(2020, 1, 2)
  },
  {
    id: 'e4',
    title: 'really cool toilet paper',
    amount: 94.12,
    date: new Date(2021, 1, 2)
  }
];

const App = () => {
  const [expenses, setExpenses]= useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;
