package ChapterTwo.StockMarketTicketSystem;

public class PriceDisplay implements StockObserver {
    private final String stockSymbol;

    public PriceDisplay(Subject stockData, String stockSymbol) {
        this.stockSymbol = stockSymbol;
        stockData.registerObserver(stockSymbol, this);
    }

    @Override
    public void update(String stockSymbol, int price) {
        System.out.println("[PriceDisplay] " + stockSymbol + ": $" + price);
    }
}

