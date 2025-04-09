package OCP;

import SRP.ExerciseBlog.Post;

public class HTMLFormatter implements PostFormatter {
    @Override
    public String format(Post post) {
        return "HTML formatter";
    }
}
