package ChapterTwo.WeatherStation;

public class WeatherStation {
    public static void main(String[] args) {
        WeatherData weatherData = new WeatherData();

        CurrentConditionDisplay currentConditionDisplay = new CurrentConditionDisplay(weatherData);
        HeadIndexDisplay headIndexDisplay = new HeadIndexDisplay(weatherData);

        weatherData.setMeasurements(80, 65, 30.4f);


    }
}
