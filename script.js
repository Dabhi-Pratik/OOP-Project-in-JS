// Parent class for Bank Account
class BankAcc {
    constructor(accNo) {
        this.accNo = accNo; // Store account number
        this.balance = 0;   // Initial balance is zero
    }

    // Method to deposit money
    deposit(amount) {
        this.balance += amount; // Add amount to balance
        return `₹${amount} deposited. Balance: ₹${this.balance}`;
    }

    // Method to withdraw money
    withdraw(amount) {
        // Check for sufficient balance
        if (amount > this.balance) {
            return "Insufficient Balance....!";
        }

        this.balance -= amount; // Deduct amount
        return `₹${amount} withdrawn. Balance: ₹${this.balance}`;
    }
}

// Saving Account class (Inheritance)
class SavingAcc extends BankAcc {
    constructor(accNo) {
        super(accNo); // Call parent constructor
    }
}

// Current Account class (Inheritance)
class CurrentAcc extends BankAcc {
    constructor(accNo) {
        super(accNo); // Call parent constructor
    }
}

// Variable to store account object
let account = null;

// Deposit function
function deposit() {
    // Get input values
    const accNo = document.getElementById("accNo").value.trim();
    const accType = document.getElementById("accType").value;
    const amount = Number(document.getElementById("amount").value);

    // Validate account number (exactly 10 digits)
    if (!/^\d{10}$/.test(accNo)) {
        showOutput("Account number must be exactly 10 digits.....!");
        return;
    }

    // Validate amount
    if (amount <= 0 || isNaN(amount)) {
        showOutput("Enter a valid amount.....!");
        return;
    }

    // Validate account type
    if (!accType) {
        showOutput("Please select account type.....!");
        return;
    }

    // Create account object only once
    if (!account) {
        account = accType === "saving"
            ? new SavingAcc(accNo)
            : new CurrentAcc(accNo);
    }

    // Perform deposit and show result
    showOutput(account.deposit(amount));
}

// Withdraw function
function withdraw() {
    // Get input values
    const accNo = document.getElementById("accNo").value.trim();
    const amount = Number(document.getElementById("amount").value);

    // Validate account number
    if (!/^\d{10}$/.test(accNo)) {
        showOutput("Account number must be exactly 10 digits.....!");
        return;
    }

    // Check if account exists
    if (!account) {
        showOutput("Please deposit first.....!");
        return;
    }

    // Validate withdrawal amount
    if (amount <= 0 || isNaN(amount)) {
        showOutput("Enter valid amount.....!");
        return;
    }

    // Perform withdrawal and show result
    showOutput(account.withdraw(amount));
}

// Function to display output messages
function showOutput(msg) {
    document.getElementById("output").innerText = msg;
}
