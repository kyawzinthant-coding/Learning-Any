package ChapterTwo.StockMarketTicketSystem;


public interface Subject {


    void registerObserver(String stockSymbol, StockObserver observer);
    void removeObserver(String stockSymbol, StockObserver observer);
    void notifyObservers(String stockSymbol, int price);
}
