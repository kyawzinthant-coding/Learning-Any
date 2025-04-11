package ChapterOne.Duck;

public class ModelDuck extends Duck{

    public ModelDuck() {
        quackBehaviour = new Quack();
        flyBehaviour = new FlyNoWay();
    }

    @Override
    public void Display() {
        System.out.println("This is model duck");
    }
}
