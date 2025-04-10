package LSP;

public class Rectangle implements Shape {
    int length;
    int height;

    public Rectangle(int length, int height) {
        this.length = length;
        this.height = height;
    }

    public int getArea() {
        return length * height;
    }
}
