import  './ExpenseForm.css'

import React, { useState } from 'react'




const ExpenseForm =(props)=>{

const [enteredtitle,setenteredtitle]=useState('')
const [enteredAmount,setenteredAmount ]=useState('')
const [enteredDAte,setenteredDate]=useState('')

const titleChangeHandler= (event)=>{
setenteredtitle(event.target.value)
console.log(event.target.value)
}

const amountChangeHandler= (event)=>{
setenteredAmount(event.target.value)
console.log(event.target.value)
    }

 const dateChangeHandler= (event)=>{
 setenteredDate(event.target.value)
 console.log(event.target.value)
        }

        const submit=(e)=>{
        e.preventDefault();
            const expenseData={
                title1:enteredtitle,
                amount:enteredAmount,
                date:new Date(enteredDAte)
            }
            props.onSaveExpenseData(expenseData)
            setenteredAmount('')
            setenteredDate('')
            setenteredtitle('')
               }     

return     <form>
            <div className="new-expense__controls">
            <div>
            <label>Expense Item</label>
            <input onChange={titleChangeHandler} value={enteredtitle} type="text"></input>
            </div>
            <div>
            <label>Amount</label>
            <input onChange={amountChangeHandler}value={enteredAmount} type="number"></input>
            </div>
            <div>
            <label>Date</label>
            <input onChange={dateChangeHandler} value={enteredDAte} type ="date"></input>
            </div>
            </div>
            <button onClick={submit} type="submit">SUBMIT</button>
        </form>
    
}


export default ExpenseForm

