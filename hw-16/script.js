//1

function Account({ login, email }) {
    this.login = login;
    this.email = email;
  }
  Account.prototype.getInfo = function() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  };
  console.log(Account.prototype.getInfo); // function
  const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
  });
  mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
  const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
  });
  poly.getInfo(); // Login: Poly, Email: poly@mail.com



//2
class User {
    // Конструктор класу приймає об'єкт з властивостями name, age, followers
    constructor({ name, age, followers }) {
      this.name = name;        // Встановлюємо властивість name для об'єкта
      this.age = age;          // Встановлюємо властивість age для об'єкта
      this.followers = followers;  // Встановлюємо властивість followers для об'єкта
    }
  
    // Метод getInfo, який виводить рядок з інформацією про користувача
    getInfo() {
      console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
  }
  
  // Створення екземпляра класу User з даними користувача Mango
  const mangos = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
  });
  
  // Виклик методу getInfo() для об'єкта mango
  mangos.getInfo(); // User Mango is 2 years old and has 20 followers
  
  // Створення іншого екземпляра класу User з даними користувача Poly
  const polys = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
  });
  
  // Виклик методу getInfo() для об'єкта poly
  polys.getInfo(); // User Poly is 3 years old and has 17 followers




//3
// Оголошення класу Storage
class Storage {
    // Конструктор класу приймає початковий масив товарів і зберігає його у властивість items
    constructor(items) {
      this.items = items;
    }
    // Метод getItems повертає поточний масив товарів
    getItems() {
      return this.items;
    }
    // Метод addItem додає новий товар до масиву
    addItem(item) {
      this.items.push(item);
    }
    // Метод removeItem видаляє товар з масиву, якщо він існує
    removeItem(item) {
      const itemIndex = this.items.indexOf(item); // Знаходимо індекс товару
      if (itemIndex !== -1) {
        this.items.splice(itemIndex, 1); // Видаляємо товар за його індексом
      }
    }
  }
  // Створення екземпляра класу Storage з початковим масивом товарів
  const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
  ]);
  // Отримання поточного масиву товарів
  const items = storage.getItems();
  console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
  // Додавання нового товару 'Дроїд'
  storage.addItem('Дроїд');
  console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
  // Видалення товару 'Пролонгер'
  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
