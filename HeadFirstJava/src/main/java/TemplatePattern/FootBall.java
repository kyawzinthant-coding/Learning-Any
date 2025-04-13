package TemplatePattern;

public class FootBall extends Game{
    @Override
    void initialize() {
        System.out.println("football");
    }

    @Override
    void startPlay() {
        System.out.println("foodbatll start");
    }

    @Override
    void endPlay() {

        System.out.println("football end");
    }
}
