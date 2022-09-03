import NewExpense from "./NewExpense"


const FinelCall=(p)=>{


    const onSaveObjectHendler= (expense)=>{
        const obj={
            ...expense

        }
        p.onAddExpense(obj)
    }
    return <NewExpense onSaveObject={onSaveObjectHendler}></NewExpense>

}


export default FinelCall