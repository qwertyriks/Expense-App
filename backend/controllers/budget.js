const BudgetSchema = require("../models/BudgetModel");

// Add a budget
exports.addBudget = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    const budget = BudgetSchema({
        title,
        amount,
        category,
        description,
        date
    });

    try {
        // Validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' });
        }
        if (amount <= 0 || typeof amount !== 'number') {
            return res.status(400).json({ message: 'Amount must be a positive number!' });
        }
        await budget.save();
        res.status(200).json({ message: 'Budget Added' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }

    console.log(budget);
};

// Get all budget
exports.getBudget = async (req, res) => {
    try {
        const budgets = await BudgetSchema.find().sort({ createdAt: -1 });
        res.status(200).json(budgets);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete a budget
exports.deleteBudget = async (req, res) => {
    const { id } = req.params;
    BudgetSchema.findByIdAndDelete(id)
        .then((budget) => {
            res.status(200).json({ message: 'Budget Deleted' });
        })
        .catch((err) => {
            res.status(500).json({ message: 'Server Error' });
        });
};
