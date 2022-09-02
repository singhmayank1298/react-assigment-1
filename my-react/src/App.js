import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';
import  {useState} from 'react';
import ExpensesFilter from './components/Expenses/ExpensesFilter';


const Dummy_Expense=[
  {
     id:'e1',
     title1:'Toilet Paper',
     amount:'788',
     date:new Date(),
     location: 'delhi'
  },{
    id:'e2',
    title1:'Toilet Paper',
    amount:'788',
    date:new Date(),
    location: 'mumbai'
 },
 {
  id:'e3',
  title1:'Food',
  amount:'788',
  date:new Date(),
  location: 'new delhi'
},
{
id:'e4',
title1:'car Insurance',
amount:'1000',
date:new Date("2020"),
location: 'utterpardesh'
},
{
id:'e5',
title1:'New desk',
amount:'400',
date:new Date(),
location: 'lucknow'
}
 
]

const App=()=> {
const [Expenses,setExpenses]= useState(Dummy_Expense)  

const addExpenseHendeler=(expense)=>{

//setExpenses([obj, ...Expenses])// we can use like tjis also but it is not correct
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


  return (<div>
   
    <NewExpense  onAddExpense={addExpenseHendeler} />
    <Card className="App">

    <h1>Expense Items</h1>
    <ExpensesFilter Selected={FilterYear} onChangeFilter={onFilterHendeler}></ExpensesFilter>
    
    { 
     filteredExpnses.map((x)=>{
     // console.log(x.date.getFullYear().toString())
     //if(x.date.getFullYear().toString()===FilterYear){
      return(<ExpenseItem  key={x.id} title={x.title1} amount={x.amount} date={x.date} Location={x.location}> </ExpenseItem>)

    })
  }
    

  </Card>
  </div>
  );
}

export default App;
