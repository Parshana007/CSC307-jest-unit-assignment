class StockPortfolio{
    constructor(){
        this.portfolio = {};
    }

    getPortfolio(){
        return this.portfolio;
    }

    isEmpty(){
        //can only use length on arrays there need to use Object.keys
        //Object.keys makes an array of all the keys in the object to then use length on
        return Object.keys(this.portfolio).length === 0; 
    }

    addStock(symbol, shares){
        this.portfolio[symbol] = shares; //creates/ adds shares in the portfolio
    }

    countStocks(){
        return Object.keys(this.portfolio).length; //total count of stocks that have been added
    }

    sellStock(symbol, shares){
        if (this.portfolio[symbol] < shares) {
            throw "Not enough shares";
        }
        this.portfolio[symbol] -= shares; //gets rid of how many were sold
    }

    existingStock(symbol){
        return this.portfolio[symbol]; //returns the number of shares of a stock
    }

    checkStocks() {
        for (const symbol in this.portfolio) {
            if (this.portfolio[symbol] < 1) {
                delete this.portfolio[symbol];
            }
        }
        return this.portfolio;
    }
}

module.exports = StockPortfolio;