import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesList from "./ExpensesList";

function Expenses(props) {

    const [year, setYear] = useState('2020');
    const selectHandler = (enteredData) => {
        setYear(enteredData);
    }

    const filtered = props.items.filter(item => item.date.getFullYear() == year)

    return (

        <div id="expenses">
            <Card className="expenses">
                <ExpensesFilter selected={year} onSelectOption={selectHandler} />
                <ExpensesList items={filtered} />
            </Card>
        </div>
    );
}

export default Expenses;