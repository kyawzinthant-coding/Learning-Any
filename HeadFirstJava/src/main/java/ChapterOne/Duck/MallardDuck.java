package ChapterOne.Duck;

public class MallardDuck extends Duck {


    public MallardDuck() {
        quackBehaviour = new Quack();
        flyBehaviour = new FlyWithWings();
    }

    @Override
    public void Display() {
        System.out.println("I am real mallard duck");
    }
}
