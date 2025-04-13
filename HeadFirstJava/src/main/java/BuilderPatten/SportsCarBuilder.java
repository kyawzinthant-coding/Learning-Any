package BuilderPatten;

public class SportsCarBuilder implements  CarBuilder {

    Car car = new Car();

    @Override
    public CarBuilder buildEngine(String engine) {
        car.engine = engine;
        return this;
    }

    @Override
    public CarBuilder buildWheels(String wheels) {
        car.wheels = wheels;
        return this;
    }

    @Override
    public CarBuilder paintColor(String color) {
        car.color = color;
        return this;
    }

    @Override
    public Car build() {
        return car;
    }
}
