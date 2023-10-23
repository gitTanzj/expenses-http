import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

export const Expenses = () => {

  const expenses = [
      {
        "date" : new Date(2023, 0, 10),
        "title" : "New Book",
        "price" : "30.99"
      },
      {
        "date" : new Date(2023, 0, 10),
        "title" : "New Jeans",
        "price" : "35.99"
      },
      {
        "date": new Date(2023, 9, 23),
        "title": "New TV",
        "price": "399.99"
      }
    ]

  const addExpenseFilterHandler = (expenseFilter) => {
    console.log('In Expenses.js')
    console.log(expenseFilter)
  }

  return (
    <Card className='expenses'>
        <ExpensesFilter onAddExpenseFilter={addExpenseFilterHandler}/>
          {expenses.map((ob) => (
            <ExpenseItem date={ob.date} title={ob.title} price={ob.price}/>
          ))}
    </Card>
  )
}
