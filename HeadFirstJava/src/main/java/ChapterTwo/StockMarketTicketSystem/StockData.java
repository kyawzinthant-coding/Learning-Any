package ChapterTwo.StockMarketTicketSystem;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class StockData implements Subject {
    private final Map<String, List<StockObserver>> observersByStock = new HashMap<>();
    private final Map<String, Integer> stockPrices = new HashMap<>();

    @Override
    public void registerObserver(String stockSymbol, StockObserver observer) {
        observersByStock.computeIfAbsent(stockSymbol, k -> new ArrayList<>()).add(observer);
    }

    @Override
    public void removeObserver(String stockSymbol, StockObserver observer) {
        List<StockObserver> observers = observersByStock.get(stockSymbol);
        if (observers != null) {
            observers.remove(observer);
        }
    }

    @Override
    public void notifyObservers(String stockSymbol, int price) {
        List<StockObserver> observers = observersByStock.get(stockSymbol);
        if (observers != null) {
            for (StockObserver observer : observers) {
                observer.update(stockSymbol, price);
            }
        }
    }

    public void setStockPrice(String stockSymbol, int price) {
        stockPrices.put(stockSymbol, price);
        notifyObservers(stockSymbol, price);
    }
}
