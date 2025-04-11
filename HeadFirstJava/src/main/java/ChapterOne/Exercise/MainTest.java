package ChapterOne.Exercise;

public class MainTest {
    public static void main(String[] args) {

        Racer redRacer = new RedRacer();

        redRacer.Driving();
        redRacer.setDrivingBehavior(new NormalDriving());

        redRacer.Driving();

    }
}
