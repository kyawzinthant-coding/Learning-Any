package ChapterTwo.StockMarketTicketSystem;

public class StockSystem {
    public static void main(String[] args) {
        StockData stockData = new StockData();

        new PriceDisplay(stockData, "AAPL");
        new PriceDisplay(stockData, "TSLA");

        stockData.setStockPrice("AAPL", 130);
        stockData.setStockPrice("TSLA", 800);
        stockData.setStockPrice("GOOGL", 2400); // no one subscribed = no output
    }
}
