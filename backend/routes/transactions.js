const { addBudget, getBudget, deleteBudget } = require('../controllers/budget');
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const router = require('express').Router();

// Importing the necessary controllers

// Importing the express router

// Defining the routes and their corresponding controller functions
router
    .post('/add-income', addIncome) // Route to add income
    .get('/get-incomes', getIncomes) // Route to get all incomes
    .delete('/delete-income/:id', deleteIncome) // Route to delete an income by ID
    .post('/add-expense', addExpense) // Route to add expense
    .get('/get-expenses', getExpense) // Route to get all expenses
    .delete('/delete-expense/:id', deleteExpense) // Route to delete an expense by ID
    .post('/add-budget', addBudget) // Route to add budget
    .get('/get-budget', getBudget) // Route to get all budget
    .delete('/delete-budget/:id', deleteBudget); // Route to delete a budget by ID

module.exports = router; // Exporting the router for use in other files
