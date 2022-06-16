const filesMethods = require('./filesMethods')

const addExpense = async (date ,name, amount ) => {
    const newExpense = {
        date: date,
        name: name,
        amount: amount
        
    }
    try {
        const ListOfExpenses = await filesMethods.getExpenses()

        ListOfExpenses.push(newExpense)
        

        await filesMethods.saveExpenses(ListOfExpenses)
    }catch (err) {
    
        throw err
    }

    return newExpense
}


const getListOfExpenses = async () => {

    try {
        const ListOfExpenses = await filesMethods.getExpenses();
    
        return ListOfExpenses;

    } catch (err) {
        throw err;
    }

}



const getAverageExpense= async () => {

    let expensesSum = 0

    const listExpenses = await filesMethods.getExpenses();

    listExpenses.forEach(element => {

        expensesSum += parseFloat(element.amount)
    });


    
    return expensesSum / listExpenses.length
}

const getSumPeriodExpenses = async () => {

    let expensesSum = 0
    
    const listExpenses = await filesMethods.getExpenses();

    listExpenses.forEach(element => {

        expensesSum += parseFloat(element.amount)
    });
    
    return expensesSum
}



module.exports = {
    addExpense,
    getListOfExpenses,
    getAverageExpense,
    getSumPeriodExpenses, 

};