package SRP.ExerciseBlog;

public class PostPrinter {
    public void print ( Post post ) {
        System.out.println("Title " + post.getTitle());
        System.out.println("Content " + post.getContent());
    }
}
