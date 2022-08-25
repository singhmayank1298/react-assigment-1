import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetail from './ExpenseDetail'



const ExpenseItem=(props)=>{
 
    return (
    
    <div className="expense-item">
       < ExpenseDate date={props.date}></ExpenseDate>
       <ExpenseDetail title={props.title} amount={props.amount} Location={props.Location} ></ExpenseDetail>
      
        </div>
   
    )
}


export default ExpenseItem