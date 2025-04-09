package OCP;

import SRP.ExerciseBlog.Post;

public class PostPrinter {
    private PostFormatter formatter;

    public PostPrinter(PostFormatter formatter) {
        this.formatter = formatter;
    }

    public void print(Post post ) {
        System.out.println(formatter.format(post));
    }
}
