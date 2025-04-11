package ChapterOne.Exercise;

public class Racer {

    DrivingBehavior drivingBehavior;

    public void Driving() {
        drivingBehavior.drive();
    }

    public void setDrivingBehavior(DrivingBehavior drivingBehavior) {
        this.drivingBehavior = drivingBehavior;
    }
}
