import  './ExpenseForm.css'

import React from 'react'



const ExpenseForm =()=>{

const Add= (event)=>{
    // const obj={
    //     title:"fdfdkmfd"
    // }
    // expenses.push(obj)
console.log(event.target.value)
}

    return <div className="new-expense">

        <form>
            <div className="new-expense__controls">
            <div>
            <label>Expense Item</label>
            <input onChange={Add} type="text"></input>
            </div>
            <div>
            <label>Amount</label>
            <input onChange={Add} type="number"></input>
            </div>
            <div>
            <label>Date</label>
            <input onChange={Add} type ="date"></input>
            </div>
            </div>
            <button  type="submit">SUBMIT</button>
        </form>
    </div>
}


export default ExpenseForm