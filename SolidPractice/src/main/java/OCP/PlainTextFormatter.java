package OCP;

import SRP.ExerciseBlog.Post;

public class PlainTextFormatter implements PostFormatter {
    @Override
    public String format(Post post) {
        return "===" + post.getTitle() + " ";
    }
}
