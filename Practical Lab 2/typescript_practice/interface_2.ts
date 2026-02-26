// interface 1
interface Account {
    accountNumber : number
    balance : number
}

// extending the interface
interface savingsAccount extends Account {
    interestRate : number ;
}

// object with savingsAccount interface
const savings : savingsAccount = {
    accountNumber : 123456 ,
    balance : 5000 ,
    interestRate : 5
} ; 

// function to display the details
function calculateInterest(acc : savingsAccount) {
    const interest = acc.balance * acc.interestRate / 100 ;
    console.log('Account Number :', acc.accountNumber) ;
    console.log('Balance:', acc.balance) ;
    console.log('Interest Earned :', interest) ;
}

calculateInterest(savings);
