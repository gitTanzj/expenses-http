import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import Card from '../UI/Card'

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
        }
      ]

  return (
    <Card className='expenses'>
        <h2>Mul on liiga palju väljaminekuid!</h2>
          {expenses.map((ob) => (
            <ExpenseItem date={ob.date} title={ob.title} price={ob.price}/>
          ))}
    </Card>
  )
}
