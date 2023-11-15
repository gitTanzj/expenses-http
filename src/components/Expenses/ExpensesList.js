import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = ({filteredExpenses, isLoading}) => {
    let expensesContent = <p className="expenses-list__fallback">No expenses found.</p>
    if(isLoading) {
        return <p className="expenses-list__fallback">
            <b>Fetching expenses data... </b>
        </p>
    }
    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((ob) => {
        return <ExpenseItem
            id={ob.id}
            title={ob.title}
            amount={ob.amount}
            date={ob.date}
        ></ExpenseItem>
        })
    }

    return (
        <ul className="expenses-list">
            {expensesContent}
        </ul>
    )
}

export default ExpensesList

