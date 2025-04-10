package DIP.NotificationManager;

public class NotificationManager {
    private Notifier notifier;

    public NotificationManager(Notifier notifier) {
        this.notifier = notifier;
    }

    public void notifyUser(String mesage) {
        notifier.send(mesage);
    }
}
