import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetail from './ExpenseDetail'
import Card from '../UI/Card'



const ExpenseItem=(props)=>{
 const clickHandler= ()=>{
document.getElementById('m').remove()
    console.log('click')
 }
    return (
    <Card>
    <div  id="m"className="expense-item">
       < ExpenseDate date={props.date}></ExpenseDate>
       <ExpenseDetail  title={props.title} amount={props.amount} Location={props.Location} ></ExpenseDetail>
      <button onClick={clickHandler}>Delet Expense</button>
        </div>
   </Card>
    )
}       


export default ExpenseItem