package ChapterOne.Duck;

public class MiniDuckSimulator {
    public static void main(String[] args) {
        Duck mallard = new MallardDuck();

        mallard.performQuack();
        mallard.performQFly();


        Duck model = new ModelDuck();

        model.performQFly();
        model.setFlyBehaviour(new FlyWithRocket());
        model.performQFly();

    }
}
