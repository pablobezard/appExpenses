const expenses = require("./expenses");


const run = async () => {
    const args = process.argv.slice(2)  
    console.log (process.argv) 
    console.log("myArgs: ", args[0], " ",  args[1], " ",  args[2], " ",  args[3])



    switch (args[0]) {
        case "addExpense":
            try {
    
                const newExpense = await expenses.addGasto(args[1], args[2], args[3])
                console.log("Created gasto ok: " + JSON.stringify(newExpense))
            } catch (err) {
                console.log('Error creating expense: ' + error)                           
            }
            break;

        case "getExpenses":
    
            try {
        
                //Recupero la lista de Gastos al Archivo de Gastos en forma asyncronica: y espero para continuar 
                const listadoDeGastos = await expenses.getListOfExpenses()
                console.log ("the epenses list is:", listadoDeGastos)              
            } catch (err) {
                console.log ("Error in getExpenses: " + err)
            }
            break;

    

        case "getAverage":
            try {
            
                const averageSpending = await expenses.getAverageExpense()
                console.log("the average of expenses is:", averageSpending)
            } catch (err) {
                console.log("Error in getAverageExpense " + err)
            }
            break;

        case "getSum":
            try {
        
                const expensesSum = await expenses.getSumPeriodExpenses()
                console.log("The sum of expeses is ",  expensesSum)
            } catch (err) {
                console.log("Error in getSumPeriodExpenses " + err)
            }
            break;
        
        default:
            console.log (" default ")
            break;  
    }

    
};




run();

