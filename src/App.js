import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "New TV", amount: 499.99, date: new Date(2021, 1, 5) },
    { title: "Car Insurance", amount: 203.05, date: new Date(2021, 7, 25) },
    { title: "New Desk (Wooden)", amount: 105.56, date: new Date(2021, 2, 14) },
    { title: "Toilet Paper", amount: 50.55, date: new Date(2021, 3, 29) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
