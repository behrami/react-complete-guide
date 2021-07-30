import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "New TV",
      amount: 799.99,
      date: new Date(2021, 1, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 203.05,
      date: new Date(2021, 7, 25),
    },
    {
      id: "e3",
      title: "New Desk (Wooden)",
      amount: 105.56,
      date: new Date(2021, 2, 14),
    },
    {
      id: "e4",
      title: "Toilet Paper",
      amount: 50.55,
      date: new Date(2021, 3, 29),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    console.log(expense);
  };
  return (
    <div>
      <h2>Expense Calculator</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
