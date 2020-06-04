import Alert from "./BudgetCalculator/Components/Alert";
import ExpensesList from "./Components/ExpensesList";
import ExpensesForm from "./Components/ExpensesForm";
import { v4 as uuidv4 } from "uuid";

// const initialExpenses = [
//   { id: uuidv4(), charge: "rent", amount: 1600 },
//   { id: uuidv4(), charge: "Car Payment", amount: 400 },
//   { id: uuidv4(), charge: "Credit Card Bill", amount: 1200 },
// ];

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

export default function Index() {
  //  ************** state values **************
  // all expenses, add expenses
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState("");
  // single amount
  const [amount, setAmount] = useState("");
  // Alert
  const [alert, setAlert] = useState({ show: false });
  // edit
  const [edit, setEdit] = useState(false);
  // edit item
  const [id, setId] = useState(0);

  //  ************** useEffect **************
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  //  ************** functionality **************
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: alert });
    }, 3000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        handleAlert({ type: "success", text: "Item Edited" });
        setExpenses(tempExpenses);
        setEdit(false);
      } else {
        let newExpense = { id: uuidv4(), charge, amount };
        setExpenses([...expenses, newExpense]);
        handleAlert({ type: "success", text: "Item Added" });
      }
      setCharge("");
      setAmount("");
    } else {
      // handleError
      handleAlert({
        type: "danger",
        text: "charge can't be empty has to be  biigger than zero",
      });
    }
  };
  // clear item
  const clearItems = () => {
    setExpenses([]);
  };
  const deleteItems = (id) => {
    let tempExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "item deleted" });
  };
  const editItems = (id) => {
    let tempExpenses = expenses.find((item) => item.id === id);
    let { charge, amount } = tempExpenses;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  return (
    <div>
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpensesForm
          charge={charge}
          amount={amount}
          edit={edit}
          handleSubmit={handleSubmit}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
        />
        <ExpensesList
          expenses={expenses}
          clearItems={clearItems}
          deleteItems={deleteItems}
          editItems={editItems}
        />
      </main>
      <h1>
        Total spending :{" "}
        <span className="total">
          Rp.{" "}
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </div>
  );
}
