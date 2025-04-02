public class Invoice {

    private Book book;
    private int quantity;
    private double discountRate;
    private double taxRate;
    private double total;
    private InvoicePersistence persistence;
    private InvoicePrinter printer;

    public Invoice(Book book, int quantity, double discountRate, double taxRate) {
        this.book = book;
        this.quantity = quantity;
        this.discountRate = discountRate;
        this.taxRate = taxRate;
        this.total = this.calculateTotal();
    }

    public double calculateTotal() {
        double price = ((book.price - book.price * discountRate) * this.quantity);
        double priceWithTaxes = price * (1 + taxRate);
        return priceWithTaxes;
    }

    public void saveToFile(String filename) {
        persistence.saveToFile(filename);
    }

    public void print() {
        printer.print();
    }

   

}