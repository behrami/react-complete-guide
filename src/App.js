import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    console.log(expense);
  };
  return (
    <div>
      <h2>Expense Calculator</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses />
    </div>
  );
};

export default App;
