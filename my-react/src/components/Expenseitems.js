import './ExpenseItem.css'



function ExpenseItem(){
 const expenseDate=new Date().toISOString()
 const expenseItems='Food'
 const expenseAmount='200.99'
 const LocationOfExpenditure='delhi'

    return (<div className="expense-item">
        <div>{expenseDate}</div>    
        <div className="expense-item__description">
        <h2 >{expenseItems}</h2>
        
        <div className="expense-item__price">{expenseAmount}</div>
        <div className="expense-item__price"> Loction={LocationOfExpenditure}</div>
        </div>
    </div>)
}


export default ExpenseItem