package BuilderPatten;

public interface CarBuilder {

    CarBuilder buildEngine ( String engine);
    CarBuilder buildWheels ( String wheels);
    CarBuilder paintColor (String color);
    Car build();

}
