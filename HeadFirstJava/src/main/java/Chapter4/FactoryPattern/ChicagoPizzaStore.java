package Chapter4.FactoryPattern;

public class ChicagoPizzaStore extends PizzaStore{
    @Override
    protected Pizza createPizza(String type) {
        if (type.equals("cheese")){
            return new ChicaGoStylePizza();
        }
        return null;
    }
}
