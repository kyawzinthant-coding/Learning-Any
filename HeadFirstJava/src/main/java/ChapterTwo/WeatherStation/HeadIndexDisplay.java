package ChapterTwo.WeatherStation;

public class HeadIndexDisplay implements Observer , DisplayElement{

    private float temperature;
    private float humidity;
    private Subject weatherData;

    public HeadIndexDisplay(Subject weatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    public  float calculateHeadIndex () {
        return temperature + humidity;
    }

    @Override
    public void display() {
        System.out.println("Heat index is " + calculateHeadIndex());
    }

    @Override
    public void update(float temp, float humidity, float pressure) {
        this.temperature = temp;
        this.humidity = humidity;
        display();
    }
}
