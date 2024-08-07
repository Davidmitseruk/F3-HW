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



const products = [
    { name: "Радар", price: 1300, quantity: 4 },
    { name: "Сканер", price: 2700, quantity: 3 },
    { name: "Дроїд", price: 400, quantity: 7 },
    { name: "Захоплення", price: 1200, quantity: 2 },
  ];
  
  const [product1, product2, product3, product4] = products;
  const { name: name1, price: price1, quantity: quantity1 } = product1;const { name: name2, price: price2, quantity: quantity2 } = product2;
  const { name: name3, price: price3, quantity: quantity3 } = product3;const { name: name4, price: price4, quantity: quantity4 } = product4;
  
  console.log(name2, price2, quantity2);