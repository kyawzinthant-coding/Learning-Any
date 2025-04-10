package DIP.NotificationManager;

public class MainTest {
    public static void main(String[] args) {

        Notifier email = new EmailNotifer();
        NotificationManager emailManager = new NotificationManager(email);

        emailManager.notifyUser("what");

        Notifier sms = new SMSNotifier();
        NotificationManager smsManager = new NotificationManager(sms);
        smsManager.notifyUser("sms");
    }
}
