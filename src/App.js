import './App.css';
import { Expenses } from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState, useEffect } from 'react';
import Error from "./components/UI/Error"


const App = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [expenses, setExpenses] = useState([])
  const [error, setError] = useState(null)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true)
      try {
        const response = await fetch('http://localhost:3005/expensss')
        const responseData = await response.json()
        if(!response.ok){
          throw new Error('Failed fetching data')
        }
        setExpenses(responseData.expenses)
      } catch (error) {
        setError({
          title: 'An error occurred!',
          message: 'Failed fetching expenses data, please try again later.'
        })
        setShowError(true)
      }
      setIsFetching(false)
    }
    getExpenses()
  }, [])


  const errorHandler = () => {
    setError(null)
    setShowError(false)
  }

  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
    setExpenses((previousExpenses) => {return [expense, ...previousExpenses]})
  }

  return (
    <div className="App">
      { showError && (
          <Error
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )
      }
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses
      isLoading={isFetching}
      expenses={expenses}
      />
    </div>
  );
}

export default App;
