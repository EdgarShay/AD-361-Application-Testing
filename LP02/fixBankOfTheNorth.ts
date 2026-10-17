const USER = "Rose Thecat";
let BALANCE = 15983;
const USER_PIN = 1234;

// Deposits money into a user's account.
export function deposit(pin: number, amount: number): number | undefined {
    if (pin !== USER_PIN) {
        console.log("Incorrect PIN");
        return undefined;
    }

    if (amount <= 0) {
        console.log("Deposit amount must be greater than zero");
        return undefined;
    }

    BALANCE += amount;
    console.log(`Your balance is ${BALANCE}`);
    return BALANCE;
}

// Withdraws money from a user's account.
export function withdrawl(pin: number, amount: number): number | undefined {
    if (pin !== USER_PIN) {
        console.log("Incorrect PIN");
        return undefined;
    }

    if (amount <= 0) {
        console.log("Withdrawal amount must be greater than zero");
        return undefined;
    }

    if (amount > BALANCE) {
        console.log("Insufficient funds");
        return undefined;
    }

    BALANCE -= amount;
    console.log(`Your balance is ${BALANCE}`);
    return BALANCE;
}

// Returns the account balance.
export function balanceCheck(): number {
    console.log(`Your balance is ${BALANCE}`);
    return BALANCE;
}

// Transfers money to another user's account and withdraws it from the account.
export function transfer(
    pin: number,
    amount: number,
    receiver: string
): number | undefined {
    if (pin !== USER_PIN) {
        console.log("Incorrect PIN");
        return undefined;
    }

    if (amount <= 0) {
        console.log("Transfer amount must be greater than zero");
        return undefined;
    }

    if (amount > BALANCE) {
        console.log("Insufficient funds");
        return undefined;
    }

    if (receiver.trim() === "" || receiver === USER) {
        console.log("Invalid receiver");
        return undefined;
    }

    BALANCE -= amount;
    console.log(`Success! ${amount} was transferred to ${receiver}`);
    console.log(`Your balance is ${BALANCE}`);
    return BALANCE;
}