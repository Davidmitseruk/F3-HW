/* 
 * Типів транзацкій всього два. 
 * Можна покласти або зняти гроші з рахунку. 
 */ 
const Transaction = { 
    DEPOSIT: 'deposit', 
    WITHDRAW: 'withdraw', 
  }; 
   
  /* 
   * Кожна транзакція - це об'єкт з властивостями: id, type і amount 
   */ 
   
  const account = { 
    // Поточний баланс рахунку 
    balance: 0, 
   
    // Історія транзакцій 
    transactions: [], 
   
    /* 
     * Метод створює і повертає об'єкт транзакції. 
     * Приймає суму і тип транзакції. 
     */ 
    createTransaction(amount, type) {
        return{
            id:  this.transactions.length + 1,
            type,
            amount,
        }
    }, 
   
    /* 
     * Метод відповідає за додавання суми до балансу. 
     * Приймає суму танзакції. 
     * Викликає createTransaction для створення об'єкта транзакції 
     * після чого додає його в історію транзакцій 
     */ 
    deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
        this.balance += amount;
    }, 
   
    /* 
     * Метод відповідає за зняття суми з балансу. 
     * Приймає суму танзакції. 
     * Викликає createTransaction для створення об'єкта транзакції 
     * після чого додає його в історію транзакцій. 
     * 
     * Якщо amount більше, ніж поточний баланс, виводь повідомлення 
     * про те, що зняття такої суми не можливо, недостатньо коштів. 
     */ 
    withdraw(amount) {
        if(amount > this.balance){
            console.log("amount not possible")
            return;
        }
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transaction);
        this.balance -= amount;
    }, 
   
    /* 
     * Метод повертає поточний баланс 
     */ 
    getBalance() {
        return this.balance;
    }, 
   
    /* 
     * Метод шукає і повертає об'єкт транзакції по id 
     */ 
    getTransactionDetails(id) {
        return this.transactions.find(transaction => transaction.id === id);
    }, 
   
    /* 
     * Метод повертає кількість коштів 
     * певного типу транзакції з усієї історії транзакцій 
     */ 
    getTransactionTotal(type) {
        return this.transactions
        .filter(transaction => transaction.type === type)
        .reduce((total, transaction) => total + transaction.amount, 0);
    }, 
  };
  account.deposit(100);
  account.withdraw(50);
  account.deposit(200);
  console.log(account.getBalance()); //250

  console.log(account.getTransactionDetails(2)); //  {id: 2, type: 'withdraw', amount: 50}
  console.log(account.getTransactionTotal(Transaction.DEPOSIT)) // 300
  console.log(account.getTransactionTotal(Transaction.WITHDRAW)) // 50





// 2






//  Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт `account`
//в якому необхідно реалізувати методи для роботи з балансом та історією
//транзакцій.



const Transactions = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};



const accounts = {
 
  balance: 0,


  transactions: [],

  
  createTransaction(amount, type) {},

  deposit(amount) {},

 
  withdraw(amount) {},

 
  getBalance() {},

  
  getTransactionDetails(id) {},

 
  getTransactionTotal(type) {},
};
