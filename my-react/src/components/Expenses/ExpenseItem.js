import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetail from './ExpenseDetail'
import Card from '../UI/Card'
import { useState } from 'react'



const ExpenseItem=(props)=>{

   const [title,setTitle]=useState(props.title)
   const [amount,setAmount]=useState(props.amount)

 const clickHandler= ()=>{
document.getElementById('m').remove()
    console.log('click')
 }
 
 const changeTitle=()=>{
setTitle('update')
console.log(title)
 }

 const changeAmount=()=>{
   setAmount('$100')
   console.log(amount)
    }

    return (
    <Card>
    <div  id="m"className="expense-item">
       < ExpenseDate date={props.date}></ExpenseDate>
       <ExpenseDetail  title={title} amount={amount} Location={props.Location} ></ExpenseDetail>
      <button onClick={clickHandler}>Delete Expense</button>
      <button onClick={changeTitle}>Change Title</button>
      <button onClick={changeAmount}>Change Amount</button>
        </div>
   </Card>
    )
}       


export default ExpenseItem