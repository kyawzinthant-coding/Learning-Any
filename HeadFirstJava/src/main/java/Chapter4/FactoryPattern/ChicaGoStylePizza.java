package Chapter4.FactoryPattern;

public class ChicaGoStylePizza extends Pizza{
    public ChicaGoStylePizza() {
        name = "Chicago Style Cheese Pizza";
    }

    @Override
    public void cut() {
        System.out.println("Cutting into square slcies");
    }
}
