package OCP;

import SRP.ExerciseBlog.Post;

public class PostPrinterTest {
    public static void main(String[] args) {
        Post kzt  = new Post("kzt","new");
        
        PostFormatter formatter = new HTMLFormatter();

        PostPrinter printer = new PostPrinter(formatter);

        printer.print(kzt);
        
        
    }
}
