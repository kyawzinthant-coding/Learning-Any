package DIP.NotificationManager;

public class EmailNotifer implements Notifier {

    @Override
    public void send(String message) {
        System.out.println("Sending Email");
    }
}
