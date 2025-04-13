package Chapter5.Singleton;

public class Main {
    public static void main(String[] args) {
        DatabaseConnection DB  = DatabaseConnection.getInstance();

        DB.connect();
    }
}
