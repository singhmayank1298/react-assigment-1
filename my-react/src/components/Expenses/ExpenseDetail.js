import React from 'react'
import './ExpenseItem.css'

const ExpenseDetail=(props)=>{
    // this is alternativ of JSX CODE
// return React.createElement('div',{ className:"expense-item__description"},React.createElement('h2',{},props.title),
// React.createElement('div',{className:"expense-item__price"},props.amount),
// React.createElement('div',{className:"expense-item__price"},"Location=",props.Location));

    
    return<div id="m" className="expense-item__description">
    <h2 >{props.title}</h2>
    {console.log(props)}
    <div className="expense-item__price">{props.amount}</div>
    <div className="expense-item__price">Location={props.Location}</div>
    </div>
}

export default ExpenseDetail