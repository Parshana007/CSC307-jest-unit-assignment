const StockPortfolio = require("./stock");

let portfolio = null;

test("create portfolio", () => {
    portfolio = new StockPortfolio();
    expect(portfolio.getPortfolio()).toEqual({});
});

test("is empty", () => {
  expect(portfolio.isEmpty()).toBe(true);
});

test("add stock", () => {
    portfolio.addStock("GME", 5); //5 shares of "GME" which is the Game Stop ticker symbol
    expect(portfolio.getPortfolio()).toEqual({ GME: 5 });
});

test("add stock 2", () => {
    portfolio.addStock("RBLX", 10); //10 shares of "RBLX" which is the Roblox ticker symbol
    expect(portfolio.getPortfolio()).toEqual({ GME: 5, RBLX: 10 });
});

test("count stocks", () => {
    count = portfolio.countStocks();
    expect(count).toBe(2);
});

test("make sale", () => {
    portfolio.sellStock("GME", 5);
    expect(portfolio.getPortfolio()).toEqual({ GME: 0, RBLX: 10 });
});

test("give stock return shares", () => {
    total_shares = portfolio.existingStock("GME");
    expect(total_shares).toBe(0);
});

test("check symbols in portfolio; delete if < 1 stock owned", () => {
    portfolio.checkStocks();
    expect(portfolio.checkStocks()).toEqual({ RBLX: 10 });
});

test("raise exception for selling too many shares", () => {
    expect(() => {
        portfolio.sellStock("RBLX", 11);
    }).toThrow("Not enough shares");
});
