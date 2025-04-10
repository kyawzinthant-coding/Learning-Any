package LSP;

public class TestLSP {
    public static void main(String[] args) {
        Shape square = new Square(5);
        Shape rectangle  = new Rectangle(5,10);


        System.out.println(square.getArea());
        System.out.println(rectangle.getArea());
    }
}
