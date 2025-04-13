package BuilderPatten;

public class CarTest {

    public static void main(String[] args) {
        CarBuilder builder  = new SportsCarBuilder();

        Car car =builder
                .buildEngine("V8")
                .buildWheels("18 inch alloy")
                .paintColor("red")
                .build();

        System.out.println(car);
    }
}
