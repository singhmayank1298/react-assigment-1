import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'

const ExpenseList= (props) =>{
    


    if(props.items.length==0){
      return <h2 className='expenses-list__fallback'>Found no Expenses</h2>
    }
   
    if(props.items.length==1){
        return <ul className='expense-List'>
       { props.items.map((x)=>{
      
     return <ExpenseItem  key={x.id} title={x.title1} amount={x.amount} date={x.date} Location={x.location}> </ExpenseItem>
      })}
        <h2 className='expenses-list__fallback'>Only single Expense here. Please add more...</h2>
    </ul>
         
      } 
   
    return <ul className='expense-List'>
        { props.items.map((x)=>{
      
      return(<ExpenseItem  key={x.id} title={x.title1} amount={x.amount} date={x.date} Location={x.location}> </ExpenseItem>)})
        }
    </ul>
}

export default ExpenseList