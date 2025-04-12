package ChapterTwo.StockMarketTicketSystem;

public interface StockObserver {
    void update(String stockSymbol, int price);
}
