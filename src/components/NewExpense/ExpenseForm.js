import './ExpenseForm.css'

import { useState } from 'react'

function ExpenseForm(props) {
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    // data can get lost
    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // });

    const titleChangeHandler = event => {
        // copy and override value
        // safe update
        // setUserInput((prevState) => {
        //     return {...prevState, title: event.target.value}
        // })
        setTitle(event.target.value);
    };

    const amountChangeHandler = event => {
        setAmount(event.target.value)
        // value is always a string
        // setUserInput((prevState) => {
        //     return {...prevState, amount: event.target.value}
        // })
    };

    const dateChangeHandler = event => {
        setDate(event.target.value)
        // setUserInput((prevState) => {
        //     return {...prevState, date: event.target.value}
        // })

    };
    const sumbitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: enteredAmount
        }
        props.onSaveExpenseData(expenseData);
        // clear the inputs
        setTitle('');
        setAmount('');
        setDate('');
        props.onCancel();
    }

    const cancelHandler = (event) => {
        event.preventDefault();
        props.onCancel()
    }

    return (
        <form onSubmit={sumbitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    {/* Same event for all */}
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type='number'
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type='date'
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add expense</button>
                <button type="button" onClick={cancelHandler}>Cancel</button>
            </div>
        </form>
    );
}

export default ExpenseForm