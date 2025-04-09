package SRP.ExerciseBlog;

public class PostSave {
    public void save (Post post ) {
        System.out.println("Saving post data of title " + post.getTitle() + " to the file");
    }
}
