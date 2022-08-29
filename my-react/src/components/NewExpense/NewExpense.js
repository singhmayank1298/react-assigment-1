import React from 'react';


import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const onSaveExpenseDataHandeler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
    //   console.log(expenseData)
        props.onAddExpense(expenseData)
    }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandeler} />
    </div>
  );
};

export default NewExpense;