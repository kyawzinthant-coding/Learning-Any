package BuilderPatten;

public class Car {
    String engine;
    String wheels;
    String color;

    @Override
    public String toString() {
        return "Car{" +
                "engine='" + engine + '\'' +
                ", wheels='" + wheels + '\'' +
                ", color='" + color + '\'' +
                '}';
    }
}
