import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

export const Expenses = ({expenses}) => {

  const addExpenseFilterHandler = (expenseFilter) => {
    console.log('In Expenses.js')
    console.log(expenseFilter)
  }

  return (
    <Card className='expenses'>
        <ExpensesFilter onAddExpenseFilter={addExpenseFilterHandler}/>
          {expenses.map((ob) => (
            <ExpenseItem date={ob.date} title={ob.title} price={ob.price} id={ob.id}/>
          ))}
    </Card>
  )
}
