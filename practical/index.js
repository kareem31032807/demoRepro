// let firstName = "mike";
// let secondName = "tobi";
// let fullName = firstName + " " + " "+ secondName;
// console.log(fullName);


// let num1 = "5";
// let num2 = "10";
// let result = num1 + num2;
// console.log(result);


// let num1 = 8;
// age : 68,
// "complexion":"dark",
// country : ["Nige"]
// };
// console.log(person)

// let countryandfootballclub = {"england":"chelsea", "spain":"barcelona",
//  "italy":"intermilan", "germany":"bayermunich",
//  "usa":"intermiami", "suadi arabia":"ahlyla", 
//  "portugal":"porto", "netherlands":"ajax","france":"psg", "turkey":"galatasary",
//  bestplayers : ["palmer", "sancho", "messi", "mbappe", "madueke", "pepe", "felix", "halland", "sanchez","nkunku",],
//  myFunc:function newFun(){
//     console.log(countryandfootballclub.bestplayers[0] + " has scored " + this.numoffGoals + " goals")
//  }
// };

// console.log[countryandfootballclub.myFunc()]

// function myFunc(num1, num2){
//     return num1 + num2

// }

// result = myFunc(3, 5);
// console.log(result)

// let myNewFunc = function myNum(num1, num2){
//     return num1 + num2;

// }
// console.log(myNewFunc(2,4))


// function myNum(lenght, breath){
//     return lenght * breath;
// }
// let Area = myNum(5,9);
// let Area2 = myNum(10,5);
// console.log(Area);
// console.log(Area2);
// let myTotalArea = [Area, Area2];
// console.log(myTotalArea(0))

// function createContact(name, phoneNumber) {
//    return {
//        name: name,
//        phoneNumber: phoneNumber
//    };
// }


// let phoneBook = [];

// // Add contacts to the phonebook
// phoneBook.push(createContact('John Doe', '123-456-7890'));
// phoneBook.push(createContact(Jane Smith, 987-654-3210));
// phoneBook.push(createContact("Alice Johnson", "555-123-4567"));
// phoneBook.push(createContact("Bob Brown"," 444-987-6543"));

// console.log("Phonebook Contacts:");
// phoneBook.forEach(contact => {
//    console.log("Name: {contact.name}, Phone Number: {contact.phoneNumber}");
// });

//string and string methods


// let message = "bread and tea this morning";
// // console.log(message.endsWith("evening"));
// // console.log(message.endsWith("morning"));
// // console.log(message.includes("garri"))
// console.log(message.slice(3, 9));
// console.log(message.charAt(10))
// console.log(message.charAt(message.length-1))
// console.log(message.indexOf("a"));

// console.log(message[0]);
// let newMessage = message.lenght;
// console.log(newMessage);
// let newMessage = message.toUpperCase();
// console.log(newMessage);
// console.log(newMessage.toLowerCase());
// console.log(message.trim().toUpperCase());

// let message1 = " also pounded yam and goat meat in the afternoon";
// let result = message.concat(message1)
// console.log(result)

// console.log('i ordered for ${newmessage}')



// let firstName = "micheal";
// let secondName = "Dan";
// let fullName = `${firstName} ${secondName}`;
// console.log(fullName)

// let foodStuff = ["rice", "beans", "yam", "potatoes", "eggplant", "lobsters"];
// let transportation =[50, 45, 89, 200, 100];
// let result = foodStuff.concat(transportation);
// console.log(result.splice(1, 3));
// // console.log(arrchar.length);
// // console.log(arrchar)
// // console.log(arrchar.push("tomatoes"));
// // console.log(arrchar)
// // console.log(arrchar.pop();)
// // console.log(arrchar);
// // console.log(foodStuff.shift());
// console.log(foodStuff[foodStuff.length-1]);

//while loop
// let num = 0
// while(num <10){
//    console.log(num)
//     num++;
//  }

// //do while loop
// let num = 1;
// do{
//    console.log(num);
//    num++;
// }

// let num=10;
// for(i=10; 1>num; i--){
//    console.log(i)

// }



// let myTransportfee = [50, 100, 150, 200, 250, 300] 


// let num=50 
// for(i=0; i<myTransportfee.length; i++){  
//    let arrchar = []
//    console.log(arrchar[i]);
//    arrchar.push(myTransportfee[i]);
// }


// create a transport array : 50,34,5,78,46,36
//use a forloop to loop through th array ansd add it content together and log it out on the console,
//total.


// let myTransportfee = [50, 34, 5, 78, 46, 36];

// let totaltransportfee = 0;

// for( i=0; i<myTransportfee.length; i++){
//     totaltransportfee += myTransportfee[i];
// };
// console.log(" the total of the transport array is " + totaltransportfee);



//refrence type
//value type


// // let num1 = 20;
// // let num2 = num1
// let num2 = 90;

// // console.log(num1);
// // console.log(num2);

// let obj = {name : "dayo"}
// let obj2 = obj;
// obj2 = "moses";
// console.log(obj);
// console.log(obj2);


// if(18>9){
//     console.log("its truthy");

// }else{
//     console.log("they are falsy");

// }

// let num1 = 50;
// let num2 = 40;

// num1 ? (num1)
// if(num1 == num2){
//     console."log("they are equql");
// };
// if(num1 > num2){
//     console.log("num1 is bigger");

// }else{
//     console.log(" i dont know");
// }

// let Name = "mike";
// Name ? ("access granted"):("access denied");
// console.log(Name)

// let num = 90;

// function add(){
//     num = num + 200;
//     console.log(num);
// }
// result = add();
// console.log("this is my function ${result}");
// // num = 150;
// // console.log("changing num ${num}")


// function addNum(){
//     num = 80;
//     num = 500;
//     console.log(num)
// }
// // num = + 400;
// // console.log(num);
// addNum();
// // console.log(num);

// function multiply(num1, num2){
//     return num1 * num2;
// }
// function Add(a, b){
//     return (a + b);
// }

// let myComputation = [Add(5, 9), multiply(24, 8)];
// console.log(myComputation[1]);


// myFunc = ()=> 4 + 6;
// console.log(myFunc{})


// let bestcars = {"england":"chelsea", "spain":"barcelona",
//  "italy":"intermilan", "germany":"bayermunich",
//  "usa":"intermiami", "suadi arabia":"ahlyla", 
//  "portugal":"porto", "netherlands":"ajax","france":"psg", "turkey":"galatasary",
//  bestplayers : ["palmer", "sancho", "messi", "mbappe", "madueke", "pepe", "felix", "halland", "sanchez","nkunku",],
//  myFunc:



// var x =10;
// function num(){
//     if(5>12){
//         console.log(x);
        
//     }
// }
// num();

// function num(){
//     for(var i =5; i>1; i--){
//         console.log(i)
//     }

//     // console.log(i)
// };

// num();

// var myName = "jona"
// console.log(myName);

// var myFunc = function(){
//     console.log("function expression");
// };
// myFunc()

// let myTransportfee = "500"
// console.log(myTransportfee);

// class Hospital{
//     constructor(address, patient, doctorName){
//         this.address= address;
//         this.patient = patient;
//         this.doctorName = doctorName;
//         console.log(`hospital Adress is ${address}`)
//         console.log(`patient name is ${patient}`)
//         console.log(`doctors name is ${doctorName}`)
//     }
// }

// let hospital1 = new Hospital("number 25 Adeola odeku", "mary mathais", "Dr Adedeji");
// let hospital2 = oakhospital("numbere")


// class Person{
//     constructor(Firstname, Lastname, age){
//         this.Firstname= Firstname;
//            this.Lastname= Lastname;
//            this.age= age;
//            console.log(`my name is ${Firstname} ${Lastname} and i am ${age} years old`);
//     }
// }

// let person1 = new Person ("Ifeoluwa", "Kareem", 17);

// let person2 = new Person ("Damola", "Kareem", 15 );


// class Book{
//     constructor(Title, Authorsname, ISBN, Dateofpublication, Category  ){
//         this.Title= Title;
//         this.Authorsname=Authorsname;
//         this.ISBN=ISBN;
//         this.Dateofpublication=Dateofpublication;
//         this.Category=Category;
//         console.log(`the title of the book is ${Title}, the authors name is ${Authorsname} and the ISBN is ${ISBN} then the book was published in the year ${Dateofpublication} and it is a ${Category}`)
//         }
//     }
// }
// let book = new Book("second class citizen", "wole soyinka", 1234-567-890, 1978, "True life story");
// book.authorFunc()


// class properties extends Book{
//     constructor(chapter, pages, ){
//         this.chapter=chapter;
//         this.pages=pages
//         console.log("this book has  chapters")
//         console.log("the book has 100 pages")
//     }
// }

// let chapters = new properties("pages", "chapters")


const revealbtn = document.querySelector("#reveral-btn");
const hiddenContent = document.querySelector(".hidden-content");

function myText(){
    if(hiddenContent.classList.Contains("reveal-btn")){
        hiddenContent.classList.remove("reveal-btn")
    }else{
        hiddenContent.classList.add("reveal-btn")
    }
}

revealbtn.addEventListener("click", myText);
