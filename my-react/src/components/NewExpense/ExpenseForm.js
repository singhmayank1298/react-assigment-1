import  './ExpenseForm.css'

import React, { useState } from 'react'
import App from '../../App'
import ExpenseItem from '../Expenses/ExpenseItem'



const ExpenseForm =()=>{

const [enteredtitle,setenteredtitle]=useState('')
const [enteredAmount,setenteredAmount ]=useState('')
const [enteredDAte,setenteredDate]=useState('')

const Add1= (event)=>{
setenteredtitle(event.target.value)
console.log(event.target.value)
}

const Add2= (event)=>{
setenteredAmount(event.target.value)
console.log(event.target.value)
    }

 const Add3= (event)=>{
 setenteredDate(event.target.value)
 console.log(event.target.value)
        }

        const submit=(e)=>{
        e.preventDefault();
            const obj={
                title1:enteredtitle,
                amount:enteredAmount,
                date:enteredDAte
            }
            console.log(obj)
               }     

    return <div className="new-expense">

        <form>
            <div className="new-expense__controls">
            <div>
            <label>Expense Item</label>
            <input onChange={Add1} type="text"></input>
            </div>
            <div>
            <label>Amount</label>
            <input onChange={Add2} type="number"></input>
            </div>
            <div>
            <label>Date</label>
            <input onChange={Add3} type ="date"></input>
            </div>
            </div>
            <button onClick={submit} type="submit">SUBMIT</button>
        </form>
    </div>
}


export default ExpenseForm

