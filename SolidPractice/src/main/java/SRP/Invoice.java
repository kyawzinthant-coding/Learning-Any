package SRP;

public class Invoice {

    private double amount;

    public Invoice(double amount) {
        this.amount = amount;
    }

    public double calculateTotal () {
        return amount * 1.1; // 10% tax
    }
}

class InvoicePrinter {
    public void print(Invoice invoice) {
        System.out.println("Total " + invoice.calculateTotal());
    }
}

class Test  {
    public static void main(String[] args) {
        Invoice mdyinvoice = new Invoice(30000);

        InvoicePrinter mdyPrinter = new InvoicePrinter();
        mdyPrinter.print(mdyinvoice);
    }
}