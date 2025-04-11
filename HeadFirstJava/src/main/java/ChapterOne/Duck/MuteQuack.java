package ChapterOne.Duck;

public class MuteQuack implements   QuackBehaviour{

    @Override
    public void quack() {
        System.out.println("Mute quack");
    }
}
