package LSP.Exercise;

public class TestBird {
    public static void makeFlyable ( Flyable bird) {
        bird.fly();
    }

    public static void main(String[] args) {

        Bird sparrow = new Sparrow();
        Bird penguin = new Penguin();

        sparrow.eat();
        penguin.eat();


        Flyable flyingBird = new Sparrow();
        makeFlyable(flyingBird);
    }
}
