/// 1

const bankAccount = {
    ownerName: 'David',
    accountNumber: 10000,
    balance: 500,
    deposit(amount){
        this.balance += amount;
        updateBalance();
        alert('Balance:' + this.balance);
    },
    withdraw(amount){
        if(amount > this.balance){
            alert('not enough')
            return;
        } else{
            this.balance -= amount;
            updateBalance();
            alert('Balance:' + this.balance);
        }
    },
    displayInfo() {
        document.getElementById('balance').innerText = `Balance: ${this.balance} DKK`;
    },
};
bankAccount.displayInfo();
function updateBalance(){
    document.getElementById('balance').textContent = bankAccount.balance;
}
function deposit(){
    let amount = prompt("Enter sum:");
    if(amount > 0 && !isNaN(amount)){
        bankAccount.deposit(parseFloat(amount));
    } else{
        alert('Not correct');
    }
}
function withdraw(){
    let amount = prompt("Enter sum:");
    if(amount > 0 && !isNaN(amount)){
        bankAccount.withdraw(parseFloat(amount));
    } else{
        alert('Not correct');
    }
}
// 2



// 3

// 4

const movie ={
    title: 'Smile',
    director: 'Tom',
    year: 2023,
    rating: 9,
    displayInfo(){
        document.getElementById('title').innerText = `Title: ${this.title}`;
        document.getElementById('director').innerText = `Director: ${this.director}`;
        document.getElementById('year').innerText = `Year: ${this.year}`;
        document.getElementById('rating').innerText = `Rating: ${this.rating}`;

    }
};
function updateRating(){
    const ratingNew = parseFloat(document.getElementById('change').value);
    if(ratingNew > 8 && !isNaN(ratingNew)){
        movie.rating = ratingNew;
        movie.displayInfo();
        const title =document.getElementById('title');
        title.style.color = 'green';
    } else if (isNaN(ratingNew)) {
        alert('Enter number!');
    } else {
        movie.rating = ratingNew;
        movie.displayInfo();
    }
};
movie.displayInfo();