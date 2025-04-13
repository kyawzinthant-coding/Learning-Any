package Chapter4.FactoryPattern;

public class NyPizzaStore extends PizzaStore{

    @Override
    protected Pizza createPizza(String type) {
        if ( type.equals("cheese")){
            return new NSStyleCheesePizza();
        }
        return null;
    }
}
