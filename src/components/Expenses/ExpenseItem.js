

import './ExpenseItem.css';
import Card from '../UI/Card';
// imports são dessa forma '-' se não dá pau
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>{props.amount}</div>
                </div>
            </Card>
        </li>
    );
}
// ctrl + shift i
/*
// not class because its not html
        
    //<p></p> */
export default ExpenseItem;