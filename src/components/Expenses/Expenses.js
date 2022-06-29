import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {

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
                {props.items.map((item) => {
                    return (
                    
                    <ExpenseItem 
                        // key helps to identify each element
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />)
                })
                }
            </Card>
        </div>
    );
}

export default Expenses;