import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
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
      date: new Date(2022, 3, 2)
    },
    {
      id: 'e3',
      title: 'not so cool toilet paper',
      amount: 94.12,
      date: new Date(2017, 1, 2)
    },
    {
      id: 'e4',
      title: 'really cool toilet paper',
      amount: 94.12,
      date: new Date(2021, 1, 2)
    }
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
      
    </div>
  );
}

export default App;
