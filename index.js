//question one

//pseudocode
// Create the object constructor named BankAccount
// Set the name and balance using 'this'
// Using the deposit(amount) method, increase the balance by amount
// Print the new balance
// Using the withdraw(amount) method, if, the amount if less than or equal to the balance, subtract amount from balance
// Print new balance
// else, print "insufficient funds"
// Using three BankAccount users, call deposit and withdraw methods


function BankAccount(name, balance){
    this.name = name;
    this.balance = balance;
    this.deposit = function(amount){
        this.balance += amount;
        console.log(`${this.name}, your  new balance is ${this.balance}`);
    }


    this.withdraw = function(amount){
        if(amount<= this.balance){
            this.balance -= amount;
            console.log(`${this.name}, you have used this ${this.amount}`)
        }
        else{
            console.log(`${this.name}, you have insufficient funds`);
        }
    }
}
const user1 = new BankAccount("Abigail", 500);
const user2 = new BankAccount("Jacob", 300);
const user3 = new BankAccount("Mary", 1000);
user1.deposit(100);
user1.withdraw(200);

user2.deposit(50);
user2.withdraw(400);

user3.withdraw(300);














//question two

//
const tasklist = {
    tasks:[],

    addTask:function(task){
        this.tasks.push(task);
        console.log(`Added: ${task}`);
    },


    completeTask: function(task){
        const index = this.tasks.indexOf(task);
        if(index!== -1){
            this.tasks.splice(index, 1);
            console.log(`Completed :${task}`);
        }
        else{
            console.log(`${task} not found`);
        }
    },


    listTasks: function(){
        console.log("Remaining tasks:", this.tasks.join(","));
    }
};
tasklist.addTask("Wash clothes");
tasklist.addTask("Clean my room");
tasklist.addTask("Visit the mall");
tasklist.addTask("Wash dishes");
tasklist.completeTask("Buy groceries");
tasklist.listTasks();
























//question three
function Student (name, scores){
    this.name = name;
    this.scores = scores;

    this.getAverage = function(){
        let sum = this.scores.reduce((a,b) => a+b, 0);
        return sum / this.scores.length;
    };

    this.hasPassed = function(){
        return this.getAverage()>=50;
    };
}
const student1 = new Student("Emma", [60, 70, 80]);
const student2 = new Student("Lilian", [30, 40, 45]);

console.log(`${student1.name} Average: ${student1.getAverage()}, Passed: ${student1.hasPassed()}`);
console.log(`${student2.name} Average: ${student2.getAverage()}, Passed: ${student2.hasPassed()}`);































//question four
const Shoppingcart = {
    items:[],

    addItem: function(item){
        this.items.push(item);
        console.log(`Added: ${item.names} - ${item.price}`);
    },

    getTotal: function(){
        let total = this.items.reduce((sum, item)=> 
            sum + item.price, 0);
        return total;
    }
};
Shoppingcart.addItem({names: "Ipad", price: 7000});
Shoppingcart.addItem({names: "Dish washer", price: 5000});
Shoppingcart.addItem({names: "Hair oil", price: 200});
console.log(`Total: ${Shoppingcart.getTotal()}`);


























//question five
function Movie(title, year, rating){
    this.title =  title;
    this.year = year;
    this.rating = rating;

    this.isClassic = function(){
        return this.year < 2000;
    };

    this.recommend = function(){
        return this.rating>8? "Highly recommended!": "Not bad";
    };
};
const movie1 = new Movie("The Last of Us", 1999, 8.7);
const movie2 = new Movie("Major Legue", 2010, 8.8);
const movie3 = new Movie("The Flash", 2023, 6.2);
console.log(`${movie1.title} Classic:${movie1.isClassic}, ${movie1.recommend()}`);
console.log(`${movie2.title} Classic:${movie2.isClassic}, ${movie2.recommend()}`);
console.log(`${movie3.title} Classic:${movie3.isClassic}, ${movie3.recommend()}`);