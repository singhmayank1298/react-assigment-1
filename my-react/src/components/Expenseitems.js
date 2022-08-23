import './ExpenseItem.css'



function ExpenseItem(props){
 

    return (<div className="expense-item"> 
      <div>{props.date.toISIString()}</div> 
        <div className="expense-item__description">
        <h2 >{props.title}</h2>
        
        <div className="expense-item__price">{props.amount}</div>
        <div className="expense-item__price"> Location={props.Location}</div>
        </div>
    </div>)
}


export default ExpenseItem