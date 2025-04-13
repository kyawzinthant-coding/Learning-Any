package FacadePattern;

public class Main {
    public static void main(String[] args) {
        Amplifier amp = new Amplifier();
        Projector projector = new Projector();
        StreamingPlayer player = new StreamingPlayer();
        TheaterLights lights = new TheaterLights();

        HomeTheraterFacade theater = new HomeTheraterFacade(amp,projector,player,lights);
        theater.watchMovie("Naruto");

    }
}
