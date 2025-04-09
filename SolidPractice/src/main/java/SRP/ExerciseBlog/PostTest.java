package SRP.ExerciseBlog;

public class PostTest {
    public static void main(String[] args) {
        Post myPost = new Post("Kyaw First Post", "What is the meaning of life and how can we survive in this cruel world");
        PostPrinter printer  = new PostPrinter();
        PostSave saver = new PostSave();
        saver.save (myPost);
        printer.print(myPost);
    }
}
