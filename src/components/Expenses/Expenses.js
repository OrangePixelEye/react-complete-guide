import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {
    let elements = [];

    // for each expens
    props.expenses.forEach(e => {
        if (e.date)
            elements.push(
                <ExpenseItem
                    title={e.title}
                    amount={e.amount}
                    date={e.date}
                />
            )
    });

    const [year, setYear] = useState('2020');
    const selectHandler = (enteredData) => {
        setYear(enteredData);
        console.log(enteredData);
    }

    return (

        <div id="expenses">
            <Card className="expenses">
                {/* pega o dado selecionado e colocar em um state */}
                <ExpensesFilter selected={year} onSelectOption={selectHandler} />
                {elements}
            </Card>
        </div>
    );
}

export default Expenses;