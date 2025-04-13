package Chapter5.Singleton;

public class DatabaseConnection {

    private static DatabaseConnection instance;

     private DatabaseConnection() {

    }

    public static DatabaseConnection getInstance() {
         if ( instance == null) {
             instance = new DatabaseConnection();
         }

         return instance;
    }

    public void connect() {
        System.out.println("db connection start");
    }
}
