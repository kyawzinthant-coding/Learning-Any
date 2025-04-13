package FacadePattern;

public class HomeTheraterFacade {

    private Amplifier amp;
    private Projector projector;
    private StreamingPlayer player;
    private TheaterLights lights;

    public HomeTheraterFacade(Amplifier amplifier, Projector projector, StreamingPlayer player, TheaterLights lights) {
        this.amp = amplifier;
        this.projector = projector;
        this.player = player;
        this.lights = lights;
    }

    public void watchMovie(String movie) {
        System.out.println("Movie Start");
        lights.dim(10);
        amp.on();
        amp.setVolume(5);
        projector.on();
        projector.wideScreenMode();
        player.on();
        player.play(movie);
    }
}
