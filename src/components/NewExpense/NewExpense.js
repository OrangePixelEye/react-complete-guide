import './NewExpense.css'

import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredData) =>
    {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    let [show, setShow] = useState(false) 

    const visibleHandler = () => {
        setShow(!show);
    }

    if(!show){
        return(
            <div className='new-expense'>
                <button className='new-expense__actions' onClick={visibleHandler}>Add</button>
            </div>
        )
    }

    return(
        <div className='new-expense'>
            {/*  onMethodName */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={visibleHandler}/>
        </div>
    );
}

export default NewExpense