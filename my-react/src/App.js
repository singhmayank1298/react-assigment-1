import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';
import  {useState} from 'react';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import ExpenseList from './components/Expenses/ExpenseList';
import FinelCall from './components/NewExpense/FinelCall';
import ExpensesChart from './components/Expenses/ExpensesChart';


const Dummy_Expense=[
  {
     id:'e1',
     title1:'Toilet Paper',
     amount:43,
     date:new Date(),
     location: 'delhi'
  },{
    id:'e2',
    title1:'Toilet Paper',
    amount:343,
    date:new Date(),
    location: 'mumbai'
 },
 {
  id:'e3',
  title1:'Food',
  amount:44,
  date:new Date(),
  location: 'new delhi'
},
{
id:'e4',
title1:'car Insurance',
amount:554,
date:new Date("2020"),
location: 'utterpardesh'
},
{
id:'e5',
title1:'New desk',
amount:344,
date:new Date(),
location: 'lucknow'
}
 
]

const App=()=> {
const [Expenses,setExpenses]= useState(Dummy_Expense)  

const addExpenseHendeler=(expense)=>{

//setExpenses([obj, ...Expenses])// we can use like this also but it is not correct
setExpenses((preExpenses)=>{
  return [expense,...preExpenses]
})
console.log(Dummy_Expense)
  }
  const [FilterYear,setFilterYear]=useState('2020')  // two way binding
  const onFilterHendeler=(FilterValue)=>{
     console.log(FilterValue)
     setFilterYear(FilterValue)
  }

  const filteredExpnses = Expenses.filter((expense) => {
    if(expense.date.getFullYear().toString() === FilterYear){
    return expense
    }
  });



 

  return (<div>
   
    <FinelCall   onAddExpense={addExpenseHendeler} />
   
   <li> <Card className="App">

    <h1>Expense Items</h1>
    <ExpensesFilter Selected={FilterYear} onChangeFilter={onFilterHendeler}></ExpensesFilter>
    <ExpensesChart expenses={filteredExpnses} />
    
    <ExpenseList items={filteredExpnses}/>
    {/* {filteredExpnses.length===0 && <p>No Expense Found</p>}   
    {filteredExpnses.length>0 &&   filteredExpnses.map((x)=>{
    
      return(<ExpenseItem  key={x.id} title={x.title1} amount={x.amount} date={x.date} Location={x.location}> </ExpenseItem>)})} */}

    {/* { filteredExpnses.length===0 ? (<p>No Expense Found</p>) : (filteredExpnses.map((x)=>{
//      // console.log(x.date.getFullYear().toString())
//      //if(x.date.getFullYear().toString()===FilterYear){
//       return(<ExpenseItem  key={x.id} title={x.title1} amount={x.amount} date={x.date} Location={x.location}> </ExpenseItem>)

//     }))
     
//   }
// */}

  </Card> </li>
  </div>
  );
}

export default App;
