package LSP.Exercise;

public class Sparrow implements Bird, Flyable {
    @Override
    public void eat() {
        System.out.println("Sparrow can eat");
    }

    @Override
    public void fly() {
        System.out.println("Sparrow can fly");
    }
}
