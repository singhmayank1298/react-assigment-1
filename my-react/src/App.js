import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenseitems';

function App() {
  const expenses=[
    {
       id:'e1',
       title1:'Toilet Paper',
       amount:'788',
       date:new Date(),
       location: 'delhi'
    },{
      id:'e1',
      title1:'Toilet Paper',
      amount:'788',
      date:new Date(),
      location: 'mumbai'
   },
   {
    id:'e1',
    title1:'Food',
    amount:'788',
    date:new Date(),
    location: 'new delhi'
 },
 {
  id:'e1',
  title1:'car Insurance',
  amount:'1000',
  date:new Date(),
  location: 'utterpardesh'
},
{
  id:'e4',
  title1:'New desk',
  amount:'400',
  date:new Date(),
  location: 'lucknow'
}
   
  ]
  return (
    <div className="App">
    <h1>Expense Items</h1>
    {expenses.map((x)=>{
      return(<ExpenseItem title={x.title1} amount={x.amount} date={x.date} Location={x.location}> </ExpenseItem>)

    })}
    
    

  </div>
  );
}

export default App;
