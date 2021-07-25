import ExpenseItem from "./components/ExpenseItem";

function App() {
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
  return (
    <div>
      <h2>Expense Calculator</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date.toISOString()}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date.toISOString()}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date.toISOString()}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date.toISOString()}
      ></ExpenseItem>
    </div>
  );
}

export default App;
