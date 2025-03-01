// lecture 1 task ( ლექცია 1)
// 1)შევქმნათ ცვლადი var, let , const -ით შევინახოთ სტრინგ ტიპის, ნამბარ ტიპის, ბულიან ტიპის ინფორმაცია.
// 2)შევქმნათ ცვლადი let ის გამოყენებით , ხოლო მეორე ხაზზე გადააწერეთ მნიშვნელობა.
// 3) console.log ის გამოყენებით დაბეჭდეთ ცვლადში მოთავსებული ინფორმაცია
// 4) typeof -ის გამოყენებით დაბეჭდეთ ცვლადის ტიპი

// var surname ="Giorgi";
// var age = 5;
// var is_student =true;

// let age = 5;
// console.log(age);
// console.log(typeof age);
// // let is_student =true;

// let userName ="ana";
// userName ="elene";
// console.log(userName);

// let username1 = "Giorgi";
// username1 = "Nika";
// console.log( typeof username1);


// (ლექცია 2) lecture 2


// var number1 = "21";
// var number2 = "30";
// var sum =number1 + number2;
// console.log(sum);
// let const

// Array მასივი


// let array =[2,5,7,8,"apple", "mango", true, false, 34,22,24,28,34,58,69,98,'ball'];
// console.log(array [14]);
// // console.log(array[0]);
// console.log(array.length);
// console.log(array[array.length]);

// მასივიდან ბოლო ელემენტის ამოღება
// console.log(array[array.length-1]);


// let array =[2,5,7,8,"apple", "mango", true, false, 34,22,24,28,34,58,69,98,'ball'];
// array.push(8)
// array.unshift(1)
// array.pop()
// array.shift()
// let result =array.splice(1,1)
// let result =array.splice(2,14, 'banana')
// console.log(result);
// console.log(array);


// let array =[1,5,6,4,3,2,7]
// array.reverse() ატრიალებს და პირიქით წერს
// array.sort() ალაგებს ზრდადობით

// array.fill(7)
// let result1 = array.slice(1,3)
// let result1 = array.slice(1,1)
// let result1 = array.slice(1,3)
// let result1 = array.slice(4,6)

// console.log(array);
// console.log(result1);

// let array =[1,5,6,4,3,2,7]
// let array1 =["mango", "banana","aplle"]
// let result3 =array.concat(array1) აერთიანებს მასივებს
// console.log(array);
// console.log(result3)
// let array1 =["mango", "banana","aplle"]
// let result4 =array1.includes("aplle")
// console.log(result4); შეშმარიტია თუ მცდარი
// let array =[1,5,6,4,3,2,7]
// let array1 =["mango", "banana","aplle"]
// // let result5 =array1.join()
// // let result5 =array1.join("-")
// let result5 =array1.join("     /     ")
// console.log(result5);
// string methods




// დავალება 22.01.2025 წელი
// ელემენტის დამატება



// 1. დავალება: ელემენტის დამატება 
// დაამატეთ ელემენტი მასივის ბოლოს. 
// let fruits = ["apple", "banana", "cherry"];
// fruits.push ("orange")
// console.log(fruits);
// დაამატეთ "orange" მასივის ბოლოში. 


// 2. დავალება: ელემენტის ამოღება 
//  ამოიღეთ ელემენტი მასივის დასაწყისიდან. 
// let numbers = [10, 20, 30, 40]; 
// numbers.shift ();
// console.log(numbers);
// წაშალეთ პირველი ელემენტი და აჩვენეთ დარჩენილი მასივი. 


// 3. დავალება: ელემენტის ჩასმა 
//  დაამატეთ ელემენტი კონკრეტულ ინდექსზე. 
// let colors = ["red", "blue", "green"]; 
// colors.splice(3,0,"yallow");
// console.log(colors);
// ჩასვით "yellow" ინდექსზე 1. 

// 4. დავალება: მასივის გაერთიანება 
//  ორი მასივი გააერთიანეთ ერთ მასივად. 
// let animals1 = ["cat", "dog"]; 
// let animals2 = ["lion", "tiger"]; 
// let animals = animals1.concat(animals2);
// console.log(animals);
// გააერთიანეთ მასივები და მიიღეთ ახალი მასივი. 

// 5 დავალება: მასივის სორტირება 
//  დაალაგეთ მასივი ზრდადობის მიხედვით. 
// let scores = [50, 30, 20, 10, 40]; 
// scores.sort();
// console.log(scores);
// დაალაგეთ მასივი. 

// 6. დავალება: მასივის ელემენტების ტექსტად გაერთიანება 
// გაერთიანეთ მასივის ყველა ელემენტი ერთ სტრინგში. 
// let cities = ["Tbilisi", "Batumi", "Kutaisi"]; 
// let result =cities.join(" - ");
// console.log(result);
// გააერთიანეთ ელემენტები, სადაც მათ შორის იქნება " - ". 

// 8 დავალება: მასივის ზომის დადგენა 
// დაადგინეთ მასივის სიგრძე. 
// let books = ["Math", "Science", "History"]; 
// let result2 =books.length;
// console.log(result2);
// გაარკვიეთ მასივის სიგრძე. 




// 29.01.2025 წელი ლექცია N 3




// ჩანესტილი მასივები-მასივსი მასივი-მასივში მასივიში მასივი.
// let array = [1,2,3,4,[22,33,44,55]];
// console.log(array[4]);
// console.log(array[4][2]);
// let array = [1,2,3,4,[22,33,[44,55]]];
// console.log(array[4][2][1]);

// let array = [1,2,3,4,[22,33,44,55]];
// console.log(array);

// let array = [1,2,3,4,[22,33,44,55]];
// console.log(array[4]);

// let array = [1,2,3,4,[22,33,44,55]];
// console.log(array[4][2]);

// let array = [1,2,3,4,[22,33,[44,55]]];
// console.log(array[4][2][1]);

// სტინგის მეთოდები
// let word = "hello";
// let result2 = word.at(-5);
// console.log(result2);

// let word = "hello";
// let result2 = word.charAt(1);
// console.log(result2);

// let word = "hello";
// let result2 = word.concat("","dey");
// console.log(result2);

// let word = "hello";
// let result2 = word.includes("d")
// console.log(result2);

// let word = "hello";
// let result2 = word.match(/[A-Z]/g);
// console.log(result2);

// let word = "hello";
// let result2 = word.repeat(5);
// console.log(result2);

// let text = "hello";
// let result2 = text.replace("llo","y-Nik")
// console.log(result2);

// let text = "hello";
// let result2 = text.slice(1,4)
// console.log(result2);

// let text = "HELLO";
// let result2 = text.toLocaleLowerCase();
// console.log(result2);

// let text = "    hello    ";
// let result2 = text.trimStart();
// console.log(result2);

// let text = "    hello    ";
// let result2 = text.trim();
// console.log(result2);

// let text = "hello";
// let result2 = text.substring(0,4);
// console.log(result2);





// ობიექტი:





// let data ={
    
// key    value   property
    // userName: "Tinatin",
//     age:4,
//     is_student:false,
//     city:["Tbilisi", "Batumi"],
//     subjects:{}
// }
// console.log(data["userName"]);
// console.log(data["age"]);
// console.log(data["city"]);
// console.log(data["subjects"]);
// console.log(data["is_student"]);

// let products = [{ userName: "Tinatin",
//         age:4,
//         is_student:false,
//         city:["Tbilisi", "Batumi"],
//         subjects:{}

// }
// { userName: "Tinatin",
//         age:4,
//         is_student:false,
//         city:["Tbilisi", "Batumi"],
//         subjects:{}

// }
// { userName: "Tinatin",
//         age:4,
//         is_student:false,
//         city:["Tbilisi", "Batumi"],
//         subjects:{}

// }
// { userName: "Tinatin",
//         age:4,
//         is_student:false,
//         city:["Tbilisi", "Batumi"],
//         subjects:{}

// }
// { userName: "Tinatin",
//         age:4,
//         is_student:false,
//         city:["Tbilisi", "Batumi"],
//         subjects:{}

// }]
// console.log(products["userName"]);







// 29.01.2025 წლის დავალება

// დავალება 1: სტრიქონის სიგრძე 

// შეამოწმეთ მოცემული სტრიქონის სიგრძე და დააბეჭდეთ, რამდენი სიმბოლოა მასში. 

// ფიგურა 

// დავალება 2: სტრიქონის ყველა ასო დიდი 

// შეიტანეთ სტრიქონი და გამოიტანეთ ის მხოლოდ დიდი ასოებით. 

// ფიგურა 

// დავალება 3: სტრიქონის ყველა ასო პატარა 

// შეიტანეთ სტრიქონი და გამოიტანეთ ის მხოლოდ პატარა ასოებით. 

// ფიგურა 

// დავალება 4: სტრიქონის კონკრეტული სიმბოლო 

// შეიტანეთ სტრიქონი და შეამოწმეთ, რა სიმბოლოა კონკრეტულ ინდექსზე. 

// ფიგურა 

// დავალება 5: სტრიქონის ნაწილი 

// შეიტანეთ სტრიქონი და ამოჭერით მხოლოდ ნაწილობრივი სტრიქონი (ინდექსებით განსაზღვრული). 

// ფიგურა 

// დავალება 6: სტრიქონის ცვლილება 

// შეიტანეთ სტრიქონი და შეცვალეთ სიტყვა "hello" სიტყვით "hi". 

// ფიგურა 

// დავალება 7: სტრიქონის განაწილება 

// შეიტანეთ სტრიქონი, რომელშიც სიტყვები გამოყოფილია მძიმეთი, და გაყავით სტრიქონი შესაბამის ნაწილებად (მიუთითეთ split() მეთოდზე). 

// ფიგურა 

// დავალება 8: სტრიქონის დასაწყისი 

// შეამოწმეთ, იწყება თუ არა სტრიქონი სიტყვით "Java". 

// ფიგურა 

// დავალება 9: სტრიქონის ბოლოს 

// შეამოწმეთ, მთავრდება თუ არა სტრიქონი სიტყვით "Script". 

// ფიგურა 

// დავალება 10: სტრიქონის გამეორება 

// შეიტანეთ სტრიქონი და გამეორეთ ის 4-ჯერ. 

// ფიგურა 

// დავალება 11: სტრიქონის ცარიელი სივრცეების მოცილება 

// შეიტანეთ სტრიქონი, რომელშიც იქნება ცარიელი ადგილები დასაწყისსა და ბოლოში. წაშალეთ ეს ცარიელი ადგილები. 

// ფიგურა 

// დავალება 12: სტრიქონის გამოყოფა 

// შეიტანეთ სტრიქონი და შეამოწმეთ, თუ შეიცავს თუ არა ის სიტყვას "JavaScript". 





 
// ლექცია N 4    
// 31.01.2025

// let fullName = prompt("დაწერეთ სახელი")
// console.log(fullName); ბეჭდავს სახელს

// let age = Number( prompt ("დაწერეთ სახელი"))
// console.log(age);         44
// console.log(typeof age);            number

// let fullName = prompt("დაწერეთ სახელი")
// let result =fullName.trim(); სპეისების, გვერდების ჩამოჭრა
// console.log(result);

// let fullName = prompt("დაწერეთ სახელი")
// let result =fullName.toUpperCase();
// console.log(result); ჩაწერა დიდი ასოებით

// let fullName = prompt("დაწერეთ სახელი")
// let result =fullName.toLocaleLowerCase();
// console.log(result); ჩაწერა პატარა ასოებით

// let fullName = prompt("დაწერეთ სახელი")
// let result =fullName.replace();
// console.log(result); ჩანაცვლება

// let fullName = prompt("დაწერეთ სახელი")
// let result =fullName.repeat();განმეორება
// console.log(result); 

// let fullName = prompt("დაწერეთ სახელი")
// let result =fullName.charAt(0).toUpperCase();
// console.log(result); fulname-ში წერია თინათინი, charAt(0) ამოიღო პირველი ასობგერა და toUpperCase() გადაიყვანა დიდ ასობგერად.

// let fullName = prompt("დაწერეთ სახელი")
// let result =fullName.charAt(0).toUpperCase() + fullName.slice(1);
// console.log(result);fulname-ში წერია თინათინი, charAt(0) ამოიღო პირველი ასობგერა და toUpperCase() გადაიყვანა დიდ ასობგერად. fullName.slice(1)-მა კი სრულად აღადგინა სახელი დაწყებული დიდი ასობგერიდან, ანუ ამოღრილი მიაწება პირველ დიდ ასობგერას.


// ლითერალი
// template literal


// let text = prompt("დაწერე სახელი:");
// console.log("ჩემი სახელია: ${თინათინი}");

// let text = prompt("დაწერე სახელი:");
// let age = Number(prompt('დაწერე ასაკი'))
// console.log("ჩემი ასაკი: ${age}")


// // როგორ ანოვიღოთ ინფორმაცია:
// დაიბეჭდება მთლიანი ობიექტი

// let school = {
//     name: "Greenwood High School",
//     location: "Tbilisi, Georgia",
//     NumberOfStudents: 500,
//     HasSportsFakilitise: true,
//     subjects: ["Math", "Science","History","Geography","Literature",],
//     principal: {
//         name: "Mr. John Smith",
//         age: 45,    
//         contact: "John.smith@school.com"
//     }     
// }
// console.log(school);

// let school = {
//     name: "Greenwood High School",
//     location: "Tbilisi, Georgia",
//     NumberOfStudents: 500,
//     HasSportsFakilitise: true,
//     subjects: ["Math", "Science","History","Geography","Literature",],
//     principal: {
//         name: "Mr. John Smith",
//         age: 45,    
//         contact: "John.smith@school.com"
//     }     
// }
// console.log("${school.principal["contact"]} is director");

// let school = {
//     name: "Greenwood High School",
//     location: "Tbilisi, Georgia",
//     NumberOfStudents: 500,
//     HasSportsFakilitise: true,
//     subjects: ["Math", "Science","History","Geography","Literature",],
//     principal: {
//         name: "Mr. John Smith",
//         age: 45,    
//         contact: "John.smith@school.com"
//     }     
// }
// school.NumberOfStudents = 700; თუ მონაცემებს შევცვლით ან ვამატებათ ან კიდევ ვიღებთ, ვაკლებთ, მაშინ ობიექტის სახელით ვცვლი სიახლეს.
// console.log(school);


//  თუ მინდა წავშალო მონაცემი, მაშინ 
//  delete school.NumberOfStudents
//  console.log(school);
 

// console.log("${school.principal["contact"]} is director");


// ლექცია N 5 

// for(let i=0; i<4; i++){
//     console.log(i);    
// }
// for(let i=1; i<4; i++){
//     console.log(i);    
// }
// for(let i=2; i<4; i++){
//     console.log(i);    
// }
// for(let i=3; i<4; i++){
//     console.log(i);    
// }
// for(let i=0; i<7; i++){
//     console.log("hello","hay");    
// }
// for(let i=0; i<6; i++){
//     console.log("hello","hay");    
// }
// for(let i=0; i<=6; i++){
//     console.log("hello","hay");    
// }

// for(let i=10; i>0; i--){
//     console.log(i);    
// }
// for(let i=10; i>0; i--){
//     console.log("bay");    
// }

// while loop

// for(let i=10; i<4; i++){
//     console.log(i);    
// }
// for(let i=107; i>98; i--){
//     console.log("look");    
// }

//  ვაი ლუპი ---- while loop
// სანამ პირობა ჭეშმარიტია, იქამდე გააკეთე! while სანამ
// let i=0;
// while(i< 4){
//     console.log("hello");    
//     i++
// }

// let i=0;
// while(i< 4){
//     console.log("hello");    
//     i--
// }




// 31.01.2025 წლის დავალება




// შექმენით ობიექტი, რომელიც შეიცავს შემდეგ მონაცემებს: 
// სტრიქონი – მაგალითად, სტუდენტის სახელი. 
// რიცხვი – მაგალითად, ასაკი. 
// ბულიანი მნიშვნელობა – მაგალითად,თუ სწავლობს ახლა 
// მასივი – სტუდენტის საყვარელი საგნების სია 
// ობიექტი – სტუდენტის მისამართი (ქალაქი და ქუჩა). 

    //   let student = {
    //   nameofstudent:"Nikolas-Sinan",
    //   age:19,
    //   studying:true,
    //   subject: ['Physics','Mathematics','Chemistry','Biology'],
    //   address: {
    //              sity: "Zestafoni",
    //              street: "tsothne Dadiani",
    //              Number: 45,    
    //              contact: "John.smith@school.com"
    //         }   
    //  }
    //   student.age=20;
    //   student.studying =false;
    //   console.log(student.age);
    //   console.log(student.studying);
   


//   შექმენი ობიექტი  წიგნის  
//   ობიექტი უნდა შეიცავდეს მონაცემების ყველა ტიპს: 
// სტრიქონი (string): დასახელება, ავტორი, ადგილი. 
// რიცხვი (number): ფასი. 
// ბულიანი (boolean): ხელმისაწვდომობა.
// მასივი (array): ჟანრები 
// ობიექტი (object): ავტორი  
//   გამოიყენეთ კონსოლი, რათა გამოიტანოთ ინფორმაცია. 

// let book = {
//     nameofbook:["Data_Tutashkhia","witer_Chabua_Amirejibi","Thbilisi"],    
//     price:75,
//     inStock:true,
//     array:['novel',"detective","Romanticism","Comedy"],
//     Object: {               
//                witer1: "Konstantine_Gamsakhurdia",
//                witer2: "Vaja_Fshavela",
//                witer3: "Nodar_Dumbadze",
//           }   
//    }
//     book.price=52;
//     book.inStock =false;
//     book.Object.witer2 ="Grigol_Abashidze";
//     console.log(book.price);
//     console.log(book.inStock);
//     console.log(book.Object.witer2);
    

//   შექმენი ობიექტი, რომელიც აღწერს თეატრის ბილეთს. 
// სტრიქონი (string): ბილეთის ნომერი, თეატრის სახელი, შოუ.
// რიცხვი (number): ბილეთის ფასი. 
// ბულიანი (boolean): თუ ბილეთი ხელმისაწვდომია. 
// ობიექტი (object): თეატრის მისამართი. 
// თარიღი (Date): ბილეთის შეძენის თარიღი. 
//   შეცვალეთ ბილეთის ფასი და ხელმისაწვდომობა (isAvailable). 
//   დააბეჭდეთ კონსოლში თქვენი შექმნილი ობიექტი. 

// let ticket = {
//     nameofTheatre:"marjaniSvili",
//     NumberofTicket:29,
//     inStock:true,
//     dataofTheatre:18,
//     price:45,
// }
// ticket.price =20;
// ticket.inStock =false;
// console.log(ticket.price);
// console.log(ticket.inStock);


 // ციკლი --Loop

//  for(let of item){
//     console.log("hello");    
//  }

// let array =[1,2,3,4,5,6,7,8,9,13,14,18];
// for(let i=0; i < 12; i++){
//     console.log(array[i]);    
// }
// სტატიკურად ხელით გაწერილი მეთოდი რთულია და მიუღებელი. 
// გავწეროთ მასივის სახელი.სიგრძე. ე.ი. array.length; i++
// ეს მეთოდი ავტომატურად ითვლის ელემენტების რაოდენობას, სიგრძეს. იმდენჯერ გადაუვლის. ხელით სტატიკურად არ ვამატეებთ ან არ ვაკლეთ, ეს დინამიურად უნდა მოხდეს ცვლილება. 
// let array =[1,2,3,4,5,6,7,8,9,13,14,18];
// for(let i=0; i < array.length; i++){
//     console.log(array[i]);    
// }

// 2:42 საათი, ღამე
// if/else

// if(5>2){
//     console.log("right");    
// } ჭეშმარიტია და დაბეჭდავს
// if(5>8){
//     console.log("right");    
// } მცდარია და არ დაბეჭდავს
// let x = 5;
// if(x>2){
//     console.log("right");    
// }
// let x = 5;
// if(x>7){
//     console.log("right");    
// } მცდარია და არ დაბეჭდავს
// let x = 5;
// if(x>4){
//     console.log("right");    1 პირობა სწორია ბეჭდავს პირველს დ მეორეს აიგნორებს. 
// }else{
//     console.log("wrong"); 2 პირობა სრულდება, როცა პირველი მცდარია.    
// } ორივე პირობა არასდროს ნერთად არ სრულდება.
//  let x = 3;
//  if(x>4){
//     console.log("right");    
// }else if(x <1){

//     console.log("right1");
// }else{
//     console.log("wrong");
//     ელსე-ში პრობა არ გვაქვ. თუ პირველი ორი არ სრულდება იბეჭდება ბოლო, მესამე.
// }

// ლუწი და კენტი რიცხვები
// მასივზე მოქმედებას და რაღაც მანიპულაციას, ვფიქრობ როგორ მივწვდე თითოეულ მათგანს. ამისათვის ვიყენებთ for(), რომ გადავუაროთ და შევამოწმოთ თითოეული მათგანი. ლუწია თუ კენტი.array

// let array = [2,4,6,8,10,12,13,15,23,25,44,48,66,88,91,97,100];
// for( let i=0; i < array.length; i++){
//     console.log(array[i]);  
// }


// % ნიშანი არის ნაშთიანი გაყოფა
// == არამკაცრი ტოლობაა
// === მკაცრი ტოლობაა, ტიპებთან ერთად ადარებს. " 5" სტინგია ბრჭყალებში, ხოლო 5 ნამბერია, რიცხვია.
// 5=="5" ტრუა, სწორია
// 5==="5" სტრინგია ჩაგვიწერს, ადარებს ტიბებთან ერთად


//     let array = [2,4,6,8,10,12,13,15,23,25,44,48,66,88,91,97,100];
// for( let i=0; i < array.length; i++){
//     if(array[i] % 2 === 1){
//     console.log(array[i]);
    
//     } 
// }
// let array = [2,4,6,8,10,12,13,15,23,25,44,48,66,88,91,97,100];
// for( let i=0; i < array.length; i++){
//     if(array[i] % 2 === 0){
//     console.log(array[i]);    
//     } 
// }



 
//   სტუდენტის შეფასების განსაზღვრა ქულის მიხედვით: 
// დაწერეთ კოდი, რომელიც იღებს სტუდენტის ქულას (0-დან 100-მდე) და დაბეჭდავს შესაბამის შეფასებას შემდეგი კრიტერიუმების მიხედვით: 
// 90-100: "A" 
// 80-89: "B" 
// 70-79: "C" 
// 60-69: "D" 
// 0-59: "F" 

// let score =120;
// if(score >= 90 && score <= 100){
//     console.log("A");    
// }else if(score >= 80 && score <= 89){
//     console.log("B");    
// }else if(score >= 70 && score <= 79){
//     console.log("C");
// }else if(score >= 60 && score <= 69){
//     console.log("D");
// }else if(score >= 0 && score <= 59){
//     console.log("F");
// }else{
//     console.log("fail");    
// }


// ასაკის მიხედვით კატეგორიის განსაზღვრა: 
// დაწერეთ კოდი, რომელიც იღებს პირის ასაკს და დაბეჭდავს შესაბამის კატეგორიას: 
// 0-12 წელი: "ბავშვი" 
// 13-17 წელი: "მოზარდი" 
// 18-64 წელი: "ზრდასრული" 
// 65 და მეტი: "ხანდაზმული"

// let age =15;
// if(age >= 0 && age <= 12){
//         console.log("child");    
//     }else if(age >= 13 && age <= 17){
//         console.log("A teenager");    
//     }else if(age >= 18 && age <= 59){
//         console.log("adult");
//     }else if(age >= 60 && age <= 65){
//         console.log("retirement");
//     }else if(age >= 65 && age <= "95"){
//         console.log("elderlyF");
//     }else{
//         console.log("fail");    
//     }
    



    //    ლექცია N 6    (  მე-5 ლექციის დავალება)

    // 03,02,2025 (დავალება)




//       რიცხვების დაბეჭდვა 1-დან 10-მდე: 
// for ციკლით: დაწერეთ კოდი, რომელიც for ციკლის გამოყენებით დაბეჭდავს რიცხვებს 1-დან 10-მდე. 
// ( არ არის სავალდებულო)while ციკლით: დაწერეთ კოდი, რომელიც while ციკლის გამოყენებით დაბეჭდავს რიცხვებს 1-დან 10-მდე. 

// for(let i = 1; i <=10; i+=2){
//     console.log(i);    კენტები
//  }
//  for(let i = 1; i <=10; i++){
//     console.log(i);    ყველა რიცხვი
//  }

//       ლუწი რიცხვების დაბეჭდვა 2-დან 20-მდე:
// for ციკლით: დაწერეთ კოდი, რომელიც for ციკლის გამოყენებით დაბეჭდავს ლუწ რიცხვებს 2-დან 20-მდე. 
// ( არ არის სავალდებულო)while ციკლით: დაწერეთ კოდი, რომელიც while ციკლის გამოყენებით დაბეჭდავს ლუწ რიცხვებს 2-დან 20-მდე. 

// for(let i = 2; i <=20; i+=2){
//     console.log(i);    
//  }
// for(let i = 20; i <=20; i-=2){
//     console.log(i);    
// }




//     1.   ( არ არის სავალდებულო) რიცხვების ჯამის გამოთვლა 1-დან 100-მდე: 
// for ციკლით: დაწერეთ კოდი, რომელიც for ციკლის გამოყენებით გამოთვლის რიცხვების ჯამს 1-დან 100-მდე. 
// let sum = 0;
// for(let i =1; i <= 100; i++){
//     sum = sum + i    შემოკლებული ვარიანტი
//      sum += i
// }
// console.log(sum);

// while ციკლით: დაწერეთ კოდი, რომელიც while ციკლის გამოყენებით გამოთვლის რიცხვების ჯამს 1-დან 100-მდე. 


//   2.  რიცხვების ამოწერა უკუღმა: 
// for ციკლით: დაწერეთ კოდი, რომელიც for ციკლის გამოყენებით დაბეჭდავს რიცხვებს 10-დან 1-მდე. 
// // ( არ არის სავალდებულო)while ციკლით: დაწერეთ კოდი, რომელიც while ციკლის გამოყენებით დაბეჭდავს რიცხვებს 10-დან 1-მდე. 

//  for(let i = 10; i <=1; i--){
//     console.log(i);    
//  }


// 3.    რიცხვის ლუწი ან კენტი შემოწმება: 
// დაწერეთ კოდი, რომელიც იღებს რიცხვს და ამოწმებს, არის თუ არა ის ლუწი თუ კენტი. თუ რიცხვი ლუწია, დაბეჭდეთ "რიცხვი ლუწია", ხოლო თუ კენტია - "რიცხვი კენტია". 

// let array = [2,41,6,88,10,12,13,15,23,25,404,48,656,88,91,97,100,110,111,113,214,218,19];
// for( let i=0; i < array.length; i++){
//       if(array[i] % 2 === 0){
//     console.log(array[i]);  
//       }
// }
// let array = [2,41,6,88,10,12,13,15,23,25,404,48,656,88,91,97,100,110,111,113,214,218,19];
// for( let i=0; i < array.length; i++){
//       if(array[i] % 2 === 1){
//     console.log(array[i]);  
//       }
// }



// let array = [2,41,6,88,10,12,13,15,23,25,404,48,656,88,91,97,100,110,111,113,214,218,19];
// for( let i=0; i < array.length; i++){
//     console.log();  
// }


// 4.  რიცხვის დადებითი, უარყოფითი ან ნულის შემოწმება: 
// დაწერეთ კოდი, რომელიც იღებს რიცხვს და ამოწმებს, არის თუ არა ის დადებითი, უარყოფითი ან ნული. შესაბამისად, დაბეჭდეთ "რიცხვი დადებითია", "რიცხვი უარყოფითია" ან "რიცხვი ნულია".



// როცა რიცხვი დადებითია 
// let number =1;
// if( number > 0){
//     console.log("დადებითია");       
// }else if(number < 0){
//     console.log("უარყოფითია");
// }else{
//     console.log("ნული");    
// }



//  როცა რიცხვი უარყოფითია
// let number =-1;
// if( number > 0){
//     console.log("დადებითია");       
// }else if(number < 0){
//     console.log("უარყოფითია");
// }else{
//     console.log("ნული");    
// }



// როცა რიცხვი 0-ის ტოლია
// let number =0;
// if( number > 0){
//     console.log("დადებითია");       
// }else if(number < 0){
//     console.log("უარყოფითია");
// }else{
//     console.log("ნული");    
// }



// ბრაუზერით ვადგენთ რიცხვი დადებითია თუ არა
// let number = prompt('დაწერე რიცხვი')
// if( number > 0){
//     console.log("დადებითია");       
// }else if(number < 0){
//     console.log("უარყოფითია");
// }else{
//     console.log("ნული");   
// }


// let y = -78;
// if(y<-79){
//     console.log("right");    
// }else {
//     console.log("wrong");    
// }


// let y = -78;
// if(y<-79){
//     console.log("right");    
// }else if(y>-79){
//     console.log("right1");    
// }else{
//     console.log("wrong");    
// }

// 5.  ( არ არის სავალდებულო)წლის ნაკიანობის შემოწმება: 
// დაწერეთ კოდი, რომელიც იღებს წელს და ამოწმებს, არის თუ არა ის ნაკიანი. ნაკიანი წელია, რომელიც იყოფა 4-ზე, მაგრამ არ იყოფა 100-ზე, გარდა იმ შემთხვევისა, როცა ის იყოფა 400-ზე. თუ წელი ნაკიანია, დაბეჭდეთ "წელი ნაკიანია", წინააღმდეგ შემთხვევაში - "წელი არ არის ნაკიანი". 
// && და ოპერატორია 2 ერთად აღებული, >= მეტია ან ტოლი, 




// წელი & იყოფა 4-ზე ე.ი.  მაგრამ !== არ იყოფა 100-ზე, || გარდა იმ შემთხვევისა, რომელიც იყოფა400-ზე ყეარ % 400 === 0)

// let year = 2024
// if((year % 4 === 0 && year % 100 !== 0) || year & 400 === 0){
//     console.log("ნაკიანია");
// }else{
//     console.log("არ არის ნაკიანი");
    
// }
// let year = 2024
// if((year % 4 === 0 && year % 100 !== 0) || year & 400 === 0){
//     console.log("ნაკიანია");
// }else{
//     console.log("არ არის ნაკიანი");
    
// }


// 6.  რიცხვის ციფრების რაოდენობის განსაზღვრა: 
// დაწერეთ კოდი, რომელიც იღებს რიცხვს და დაბეჭდავს შეტყობინებას, თუ რამდენი ციფრი აქვს მას. მაგალითად, თუ რიცხვი არის 123, დაბეჭდეთ "რიცხვს აქვს 3 ციფრი". 

// string-ად გადავაქციოთ, რომ წაიკითხოს სიგრძე, სიგრძეს მხოლოდ მასივი და სტრინგი კითხულობს.
// let number = 123456789;
// let result = number.toString().length;
// console.log(result);



// 7.  ( არ არის სავალდებულო)დღის ტიპის განსაზღვრა: 
// დაწერეთ კოდი, რომელიც იღებს კვირის დღის ნომერს (1-დან 7-მდე, სადაც 1 შეესაბამება ორშაბათს და 7 - კვირას) და დაბეჭდავს შეტყობინებას, არის თუ არა ეს დღე სამუშაო დღე თუ დასვენების დღე. 
// let day = 2;
// if(day % 7 === 0 || day % 7 === 6){
//     console.log("დასვენების დღე");
// }else{
//     console.log("სამუშაო დღე");
// }


// let day = 6;
// if(day % 7 === 0 || day % 7 === 6){
//     console.log("დასვენების დღე");
// }else{
//     console.log("სამუშაო დღე");
// }


// let day = 8;
// if(day % 7 === 0 || day % 7 === 6){
//     console.log("დასვენების დღე");
// }else{
//     console.log("სამუშაო დღე");
// }


// let day = 3;
// if(day % 7 >=1 &&  day <=5){
//     console.log("სამუშაო დღე");
// }else if (day === 6 || day === 7){
//     console.log("დასვენების დღე");
// }else {
//     console.log("არ არის სწორად ჩაწერილი");    
// }


// let day = 8;
// if(day % 7 >=1 &&  day <=5){
//     console.log("სამუშაო დღე");
// }else if (day === 6 || day === 7){
//     console.log("დასვენების დღე");
// }else {
//     console.log("არ არის სწორად ჩაწერილი");    
// }


// let day = 6;
// if(day % 7 >=1 &&  day <=5){
//     console.log("სამუშაო დღე");
// }else if (day === 6 || day === 7){
//     console.log("დასვენების დღე");
// }else {
//     console.log("არ არის სწორად ჩაწერილი");    
// }





//   ახალი მასალა
//   თერნერი ოპეერატორი


// ნება დართული აქვს თუ არა 18 წლამდე მოსწავლეს, რომ მიიღოს თუ არა ალკოჰოლური სასმელი, თუ არა და დალიოს წყალი. 18 წელზე ნაკლებია დალიოს წყალი
// თუ 18 წლის არის ან მეტის დალიოს ალკოჰოლი

// let drink;


// let age = 12;
// if( age > 18){
//     console.log("can drink wine");    
// }else{
//     console.log("can drink water");    
// }


// let age = 19;
// if( age > 18){
//     console.log("can drink wine");    
// }else{
//     console.log("can drink water");    
// }


// Ternary   ( if - ის შემოკლებული ვარიანტი იყო)
// let age = 12;
// let result = age > 18 ?  "wine" : "water"
// console.log(result);


// let age = 19;
// let result = age > 18 ?  "wine" : "water"
// console.log(result);
 
// Ternary   ( for - ის შემოკლებული ვარიანტი იყო)
// let number =[1,2,3,4,5]
// for (let i=0; i <=5; i++){
//     console.log(numberumber[i]);
    
// }

// for (let i=0; i <=5; i++){
//     console.log(i);    
// }
// let number =[1,2,3,4,5]
// for( let num of number ){
//     console.log(num);    
// }
// let number =[1,2,3,4,5]
// for( let item of number ){
//     console.log(item);    
// }



// ES 6 სტანდარტი


// მე 7 ლექცია

// function declaration

// ფუნქცია
// ფუნქციას რაღაცა input-ს ვაწვდით, შემდეგ გადმოდის და მუშაობს algorithm-ის გამოყენებით და მიბრუნებს რაღაც შედეგს output.
// მაგ: hello, world ----> say ----> hello, world ვიზუალურად გამოდის რაც მივაწოდე თავიდან ფუნქციას, ვთქვათ ინფორმაცია. მიიღო ინფორმაცია, გადავიდა ყუთში, გადაამუშავა და მივიღეთ პასუხი.

// function არის ქივორდი, რეზერვურებული სიტყვა, რადგან ფერი ლურჯი აქვს. ვარქმევთ სახელს,რომელსაც მე თავად ვირჩევ,  sum(რაც უნდა გადავცე იმას ვწერთ input){რაც უნდა შეასრულოს algorithm}
// return ქივორდი და ნიშნავს დაბრუნებას

// function sum(a,b){
//     return a+b
// }
// // ფუნქციამ რომ კიმუშაოს მე უნდა გამოვიძახო
// let result = sum(198,52016);
// console.log(result);



// function sum(a,b){
//   return a*b
// }
// // ფუნქციამ რომ კიმუშაოს მე უნდა გამოვიძახო
// let result = sum(198,52016);
// console.log(result);

// function sum(a,b){
//   return a-b
// }
// // ფუნქციამ რომ კიმუშაოს მე უნდა გამოვიძახო
// let result = sum(89,52016);
// console.log(result);

// function sum(a,b){
//   return a/b
// }
// // ფუნქციამ რომ კიმუშაოს მე უნდა გამოვიძახო
// let result = sum(198,52016);
// console.log(result);



// შეგვიძლია რამდენიმე მოქმედება გავაერთიანოთ

// არის ვრაპერივით


// function sum(a,b,c,d){
//   return (a/b)*(c/d)
// }
// // ფუნქციამ რომ კიმუშაოს მე უნდა გამოვიძახო
// let result = sum(5,6,7,2);
// console.log(result);

// function sum(a,b){
//   return a+b
// }
// // ფუნქციამ რომ კიმუშაოს მე უნდა გამოვიძახო
// let result = sum(198,52016);
// let result1 = sum(155,25)
// let result2 = sum(28,94)
// let result3 = sum(34,54)
// console.log(result);
// console.log(result1);
// console.log(result2);
// console.log(result3);


// function sum(a,b){
//   return a*b
// }
// // ფუნქციამ რომ კიმუშაოს მე უნდა გამოვიძახო
// let result = sum(198,52016);
// let result1 = sum(155,25)
// let result2 = sum(28,94)
// let result3 = sum(34,54)
// console.log(result);
// console.log(result1);
// console.log(result2);
// console.log(result3);


// function calcday(day){    
//     if(day % 7 >=1 &&  day <=5){
//     console.log("სამუშაო დღე");
// }else if (day === 6 || day === 7){
//     console.log("დასვენების დღე");
// }else {
//     console.log("არ არის სწორად ჩაწერილი");    
// }
// }
// calcday(6)
// calcday(9)
// calcday(4)
// calcday(7)
// კონსოლოგს არ ვიყენებთ, მხოლოდ დასაბეჭდათ გვჭირდება სხვა დანარჩენი დანიშნულება არ გააჩნია, მას რეალურ პროექტებში არ გამოვიყენებთ.  return-ვიყენებთ ფუნქციაში. calcday ცვლადი უნდა შევინახოთ, რადგან ის ახლა თუ გამოვიყენეთ მერე აღარ გამოჩნდება. 







// 05.02.2025 (დავალება)

// 3 თებერვლის ყველა დავალებაში სადაც  if/else  გამოიყენე თ , გადაწერეთ ternary oparator -ით.
// ვურთავ ნიმუშს
//  let result = age > 18 ? 'wine' : 'water'
//   console.log(result);
// ხოლო სადაც for ციკლი   დაწერეთ ES 6 სტანდარტით.
 
// for( let item of number ){
//    console.log(item);
// }





// 3.    რიცხვის ლუწი ან კენტი შემოწმება: 
// დაწერეთ კოდი, რომელიც იღებს რიცხვს და ამოწმებს, არის თუ არა ის ლუწი თუ კენტი. თუ რიცხვი ლუწია, დაბეჭდეთ "რიცხვი ლუწია", ხოლო თუ კენტია - "რიცხვი კენტია". 

// let array = [2,41,6,88,10,12,13,15,23,25,404,48,656,88,91,97,100,110,111,113,214,218,19];
//   for(let item of array ){
//       if(item % 2 == 0){
//       console.log(item);
    
//       }
// }
//  სწორია

// let array = [2,41,6,88,10,12,13,15,23,25,404,48,656,88,91,97,100,110,111,113,214,218,19];
//   for(let item of array ){
//       if(item % 2 == 1){
//       console.log(item);
    
//       }
// }
//  სწორია
// let array = [2,41,6,88,10,12,13,15,23,25,404,48,656,88,91,97,100,110,111,113,214,218,19];
//   for(let item of array ){
//       if(item % 5 == 4){
//       console.log(item);
    
//       }
// }
//  სწორია
// let array = [2,41,6,88,10,12,13,15,23,25,404,48,656,88,91,97,100,110,111,113,214,218,19];
//   for(let item of array ){
//       if(item % 7 == 1){
//       console.log(item);
    
//       }
// }
//  სწორია


// let array = [2,41,6,88,10,12,13,15,23,25,404,48,656,88,91,97,100,110,111,113,214,218,19];
// for( let item of array){
//     console.log(item);  
// }
// სწორია




// 10.02.2025 ლექცია


        //    გასარკვევია არ იბეჭდება



// function greet(fullname){
//     console.log("hello ${fullname}");    
// }
// const greetresult = greet("Nikolas");



// function greet(fullname){
//    return "hello ${fullname}"
// }
// let result = greet("Nikolas");
// console.log(result);


// const greet = function(fullname){
//     return "hello ${fullname}" 
// }
// let result = greet("Nikolas");
// console.log(result);


// arrow function

// const greet = (fullname) => "hello ${fullname}"
// let result = greet("Nikolas")
// console.log(result);

// ფუნქცია არ მუშაობს გამოძახების გარეშე


// ჰოისტი--- ჰოისტდება ნიშნავს, რომ ძრავი კითხულობს, ინფორმაცია ააქვს ზევით და სანამ შევქმნით ფუნქცია და უკვე იცი ეს greet("Nikolas"); რა არის და გვიბეჭდავს. ზევით ატანას ნიშნვს.მნიშვნელობების ზემოთ ატანა.



// greet("Nikolas");
// function greet(fullname){
//     console.log("hello ${fullname}");    
// }

// function declaration ჰოისტდება
// ✅ სრულად ჰოისტდება (შეგიძლიათ გამოიყენოთ მანამდე, სანამ გამოცხადდება) 
// return გავწეროთ ხელით





// let result = greet("Nikolas");
// console.log(result);
// const greet = function(fullname){
//     return "hello  ${fullname}" 
// }
// let result = greet("Nikolas");
// console.log(result);
// const greet = function(fullname){
//     return "hello ${fullname}" 
// }
// exspression function  ❌ ჰოისტდება, მაგრამ undefined მნიშვნელობით 
// return გავწეროთ ხელით

    
// Arrow Function ❌ არ ჰოისტდება 
// return => აქვს ერთხაზიან ჩანაწერში და ხელით არ ვწერთ


// const greet = (fullname) => `hello ${fullname}`
// let result = greet('Nikolas and Toma')
// console.log(result);





//1. დაწერე ფუნქცია , რომელიც დააჯამებს მხოლოდ დადებით რიცხვებს

// function sum(...num){
//     let result =0;
//     for(let item of num){
//         if(item > 0){
//             result = result + item

//         }
//     }
//    return result
// }

// let sumResult= sum(2,1,2,5,8,7,-4,-19,-78,-854,598,614.1,9,23,33,4,54,6,7,87,9,-2,-3,-5)
// console.log(sumResult);

// let sumResult2 = sum(2345,678,789,-2,-5,-1784)
// console.log(sumResult2);


// 1.1. დაწერე ფუნქცია , რომელიც დააჯამებს მხოლოდ უარყოფით რიცხვებს

// function sum(...num){
//     let result =0;
//     for(let item of num){
//         if(item < 0){
//             result = result + item
//         }
//     }
//    return result
// }
// let sumResult= sum(2,1,2,5,8,7,-4,-19,-78,-854,598,614.1,9,23,33,4,54,6,7,87,9,-2,-3,-5)
// console.log(sumResult);

// let sumResult2 = sum(2345,678,789,-2,-5,-1784)
// console.log(sumResult2);





// function lengthCount(...num){
//     return num.length
     
// }

// let sumResult= lengthCount(23,33,4,6,7,4,54,6,7,87,9,-2,-3,-5)

// console.log(sumResult);



// გადამრავლება

/////////////// // function sum(...num){
//     let result =0;
//     for(let item of num){    
//             result = result * item       
//     }
//    return result
// }

// let sumResult= sum(23,33,4,54,6,7,87,9,-2,-3,-5)
// let sumResult2 = sum(2345,678,789)
// console.log(sumResult2);


// სიგრძის დათვლა


// function lengthCount(...num){
//     return num.length
// }
// let sumResult = lengthCount(2,1,2,5,8,7,-4,-19,-78,-854,598,614.1,9,23,33,4,54,6,7,87,9,-2,-3,-5)
// console.log(sumResult);

// მასივი

// let array3 =[2,3,4,5]
// let resultNum = array3.map(num =>num * 8)
// console.log(resultNum);
 


// კვადრატში აყვანა


// let array3 =[2,3,4,5]
// let resultNum = array3.map(num =>num * num)
// console.log(resultNum);
// map ფუნქციაა




// 12.05.2025   (10 თებერვლის დავალება)




// 2.დაწერეთ ფუნქცია რომელიც დააბრუნებს სახელს და გვარს ობიექტიდან

                        //  გასარკვევი   

// const person = {
//         firstName: "David",
//         lastName: "Johnson",
//         ciry:"Batumi"
//         return person
//       };
//     let result = person("username","surname");
//     console.log(result);
    
// 3. დაწერეთ ფუნქცია რომელიც დააბრუნებს მაქსიმალურ რიცხვს


// პირველი ვარინტი

// function maxNumber(...num){
//     let max = 0;
//     for(item of num){
//         if(item > max){
//             max = item
//         }
//     }
//     return max
// }
// let result = maxNumber(2,1,22,5,8,7,-4,-19,-78,-854,598,614.1,9,23,33,4,54,6,7,87,9,-2,-3,-5)
// console.log(result);



// 3. დაწერეთ ფუნქცია რომელიც დააბრუნებს მინიმალურ რიცხვს


// function maxNumber(...num){
//     let min = 0;
//     for(item of num){
//         if(item < min){
//             min = item
//         }
//     }
//     return min
// }
// let result = maxNumber(2,1,22,5,8,7,-4,-19,-78,-854,598,614.1,9,23,33,4,54,6,7,87,9,-2,-3,-5)
// console.log(result);

       

// 4. ფუნქცია უნდა მიიღებდეს ორი პარამეტრი (start და end), რომლებიც არის რიცხვები.
// ფუნქციამ უნდა დააბრუნოს მასივი სადაც იქნება ამ რიცხვებს შორის არსებული ყველა რიცხვი მაგ ( თუ გადავცემ 3 და 9 , დააბრუნებს 3,4,5,6,7,8,9 -ს  )

// function range(start, and){
//     let rangeArray = []
//     for(let i = 7; i<=19; i++){
//   rangeArray.push(i)
//     }
//     return rangeArray
// }
// let result4 = range(2,19);
// console.log(result4);




    // საწყისი და ბოლო რიცხვები


// function range(start, and){
//     let rangeArray = []
//     for(let i =start; i<=and; i++){
//         rangeArray.push(i)
//     }
//     return rangeArray
// }
// let result4 = range(2,145);
// console.log(result4);




// 5.  დაწერეთ ფუნქცია, რომელიც მიიღებს რამდენიმე სახელს და მათ ყველას მიესალმება.


// function greet(...fullName){
//     return"გამარჯობა ${ fullName}"

// }
// let result = greet("Nikolas","Thoma","Gigi","Elene","Demetre","Thekla")
// console.log(result);









// function range(start, and){
//     let rangeArray = []
//     for(let i = 7; i<=19; i++){
//   rangeArray.push(i)
//     }
//     return rangeArray
// }
// let result4 = range(2,19);
// console.log(result4);

// function name1(...fullName){
//     let array =["gamarjoba"];
//     for( let item of fullName){
//         if(item < array){
//             array = array +  item
//         }
//     }
//     return array
// }
// let name1result = name1("Nikolas","Thoma","Gigi","Elene","Demetre","Thekla")
// console.log(name1result);



// ვერ გავაკათე ბოლომდე


// function name1(...fullName){
//     let result =["gamarjoba"];
//     for( let item of fullName){
//         if(item > result){
//           result=result+ item
//         }
//     }
//     return fullName 
// }
// let result1 = name1("Nikolas","Thoma","Gigi","Elene","Demetre","Thekla")
// console.log(result1);

// function greet(...fullname){
//       return `hello ${fullname}`
// }
// let result = greet("Nikolas","Thoma","Gigi","Elene","Demetre","Thekla");
// console.log(result);

// function sum(...num){
//     let result =0;
//     for(let item of num){
//         if(item < 0){
//             result = result + item
//         }
//     }
//    return result
// }
// let sumResult= sum(2,1,2,5,8,7,-4,-19,-78,-854,598,614.1,9,23,33,4,54,6,7,87,9,-2,-3,-5)
// console.log(sumResult);




//  ცალკცალკე გადავუაროთ
//  for ავიღოთ, რადგან მასივია, აითემოფ ფულლნეიმი  ან აიტემი



// 12.02.2025 ლექცია

// 1)   მასივის მეთოდები:  Map, filter, sort, reduce, foreach, every  [ერთი ლოგიკით მუშაობს ყველა, არ არის რთული]
// 2)   globalThis, function / local [ ფუნქციისსკოპი და ლოკალურისკოპი ერთი და იგივეა] and block scopes
// 3)   ობიექტისარგუმენტად მიწოდების პრაქტიკულ მაგალითს [ობიექტი რომ მივაწოდოთ არგუმენტად ფუნქციას, როგორ იმუშავებს და როგორშემიძლია ეს მონაცემები გამოვიყენო  დავამუშაო და მომხმარებელს გამოვუტანო]
// 4)   function defoult parametr [ ფუნქციას აქვს დეფოლ პარამეტრები]

            //  მასივის მეთოდები: map


// let array3 =[2,3,4,5]
// let resultNum = array3.map(num =>num * num)
// console.log(resultNum);
// map ფუნქციაა


// let sum = [2,1,2,5,8,7,-4,-19,-78,-854,598,614.1,9,23,33,4,54,6,7,87,9,-2,-3,-5]
// let sumResult = sum.map(num =>num * num)
// console.log(sumResult);


                //    filter

// ვაწვდი პირობას, filter მრთოდმა უნდა გაფილტროს პირობის საფუძველზე და  დააბრუნოს ის რიცხვები, რომლებმაც ეს პირობა დააკმაყოფილა. ანუ იყოფა 2-ზე და არ გვაქვს ნაშთი.
// let numbersArray = [2,33,44,55,66,77,8,9,7,35]
// let result = numbersArray.filter(num => num % 2 === 0)
// console.log(result);
// map ფუნქციაა





// ვაწვდი პირობას, filter მრთოდმა უნდა გაფილტროს პირობის საფუძველზე და  დააბრუნოს ის რიცხვები, რომლებმაც ეს პირობა დააკმაყოფილა. ანუ იყოფა 2-ზე და  გვაქვს ნაშთი 1.
// let numbersArray = [2,33,44,55,66,77,8,9,7,35]
// let result = numbersArray.filter(num => num % 2 === 1)
// console.log(result);


                //  sort

//  let numbersArray = [2,33,44,55,66,77,8,9,7,35]
//  let result = numbersArray.sort((a,b) => a-b)
//  console.log(result);
//  დაალაგა თანმიმდევრომის მიხედვით, ზრდადობის მიხედვით ალაგებს.


//  let numbersArray = [2,33,44,55,66,77,8,9,7,35]
//  let result = numbersArray.sort((a,b) => b-a)
//  console.log(result);
//  დაალაგა თანმიმდევრომის მიხედვით, კლებადობის მიხედვით ალაგებს.


                // reduce
//  reduce  მარტივად აჯამებს            
//  let numbersArray = [2,33,44,55,66,77,8,9,7,35]
//   let result = numbersArray.reduce((acumlator, current)=> acumlator + current,0)
//   console.log(result);
//  (0 -ს ნაცვლად შემძლია მასივი დავწერო და დავაბრუნო მასივში ,"სტრინგი" დავწერო და სიტყვები გავართიანო და მივიღო რაღაც წინადადება, იმის მიხედვით თუ რა ინფორმაცია მჭირდება განსხვავდება პარამეტრები.)






                // forEach

//   forEach არის for-ის მსგავსი, ის გადაუვლის მასივში არსებულ ყველა მონაცემს და დავაბეჭდინებთ  რასაც მივცემ პირობად. (ერთ პარამეტრს გავწერთ) , ხოლო { ლოგიკა ჩვენ უნდა გავწეროთ}. ანუ გადაუვლის და თან პირობას ასრულებს ერთად.  
//   forEach უფრო ნელია არის, for უფრო სწრაფია. 
//   მასივებზე ვიყენებთ მხ. ფორიჩს forEach-ის.

//  let numbersArray = [2,33,44,55,66,77,8,9,7,35]
//  let result = numbersArray.forEach(item => console.log(item))
//  console.log(result);



                //  every


 // ვაწვდი პირობას, every მეთოდმა უნდა დააკმაყოფილოს  პირობა. რიცხვი  იყოფა 2-ზე და  გვაქვს ნაშთი 1.რადგან მოცემულ მასივში ყველა ლუწი რიცხვი არ გავქს,კენტრი რიცხვებიც არის მასივში, ამიტომ დაბეჭდავს false - მცდარია.

//  let numbersArray = [2,33,44,55,66,77,8,9,7,35]
//  let result = numbersArray.every(num => num % 2 === 1);
//  console.log(result);


//  ვაწვდი პირობას, every მეთოდმა უნდა დააკმაყოფილოს  პირობა. რიცხვი  იყოფა 2-ზე და  გვაქვს ნაშთი 0.რადგან მოცემულ მასივში ყველა ლუწი რიცხვი  გავქს და კენტი რიცხვები არ არის მასივში,  ამიტომ დაბეჭდავს true - ჭეშმარიტია.

//  let numbersArray = [2,34,44,58,66,72,8,90,76,30]
//  let result = numbersArray.every(num => num % 2 === 0);
//  console.log(result);




                    //    some

 //  ვაწვდი პირობას, some მეთოდმა უნდა დააკმაყოფილოს  პირობა. რიცხვი  იყოფა 2-ზე და  გვაქვს ნაშთი 0 ან  რიცხვი  იყოფა 2-ზე და  გვაქვს ნაშთი 1.რადგან მოცემულ მასივში  ლუწი  და კენტი რიცხვები გვაქვს მასივში, თუნდაც ერთმა რიცხვმა დააკმაყოფილოს პირობა, მაინც ჭეშმარიტია- true-ს  დაბეჭდავს.

//  let numbersArray = [2,34,44,58,66,7,8,95,7,30]
//  let result = numbersArray.some(num => num % 2 === 0);
//  console.log(result);


                                     //  Global scope

//  ეს არის ლოკალური scope,გარეთ შევქმენით რაღაც ცვლადი


//  let message = "hello"
//  console.log(message);

// function greet(){
// let message = "hello"
//  console.log(message);
// }
// greet()

// იისფერი ფრჩხილები არის ბლოკ სკოუფი{
//     let message = "hello"
//  console.log(message);
// }ხოლო ყვითელი ფრჩხილი კი არის ლოკალური სკოუფი.{
    //     if(true){
    //         let message = "hello"
    //      console.log(message);
  //     }
   // }


// ფუნქციის გარეთ, რომ გასცდება არის გლობალური სკოუფი, გლობალური და ყველგან ხილული.

// function greet(){
//     if(true){
//         let message = "hello"
//      console.log(message);
//     }
// }
//  greet()

//როგორც კი ფიგურულ ფრჩხილებს გავცდებით  console.log(message); ვეღარ დაბეჭდავს, რადგან ვერ ხედავს. როცა ცვლად ვქმნი let da const - ით. 

// function greet(){
    //     if(true){
    //         let message = "hello"
    //      
    //     }
    // }
    //  greet()
    // console.log(message);
    
    // var მარტო ცვლადი 2016 წლიდან, გლობალურია. წაიკითხავს.
    
    //     if(true){
    //         var message = "hello"         
    //     }
    // console.log(message);  

                                //  Function scope

//                                 //  block scope(ES6)
//  1.დაწერეთ ფუნქცია რომელიც დააბრუნებს სახელს და გვარს ობიექტიდან
// მთლიანი ობიექტი უნდა გადავცე ფუნქციას, ამ ობიექტიდან მხოლოდ სახელი და გვარი უნდა დავაბრუნო. გამოვიძახებთ fullname-ს და გადავცემ არგუმენტს. არგუმენტი არის პერსონი-person მთლიანი ინფორმაცია მასში მოთავსებული.My fullName is -ეს არის სტატიკურად გაწერილი ინფორმაცია, ხოლო ${person1.firstName} ${person1.lastName}`
// არის დინამიურად გაწერილი ინფორმაცია.
// ფუნქციისშეცვლა არ დაგვჭირდება, მაშინაც კი თუ ინფორმაციებს შევცვლით, უბრალოდ person1-ში შემოვა გადაწერილი ინფორმაცია ახალი ობიექტის შემოტანის შემთხვევაში.ფუნქციაში აუცილებლად უნდა დავწეროთ პარამეტრის სახელი
// ფუნქციაში აუცილებლად პარამეტრის სახელი ფიგურირებს და არა ჩვენს მიერ მიწვდილი ობიექტის სახელი.

// const person = {
//         firstName: "Nikolas-Sinan",
//         lastName: "Amanathidi",
//         ciry:"Batumi"
//       };

//     function fullName(person1){
//         return `My fullName is ${person1.firstName} ${person1.lastName} i am live in ${person1.ciry}`

//     }
//     let result =fullName(person)
//     console.log(result);



// return აჩერებს ფუნქციის მუშაობას, მის შემდეგ არცერთი კოდი და ინფორმაცია არ იმუშავებს.



//  დავალება #2

// შექმენით ობიექტი, რომელიც ინახავს მაისურის მონაცემებს:

// აღწერა (description)
// ფერი (color)
// ზომა (size)
// ფასი (price)
// რაოდენობა (quantity)
// შემდეგ შექმენით ფუნქცია, რომელიც მიიღებს ამ ობიექტს და მომხმარებლის მიერ შეძენილი მაისურების რაოდენობას.



// თუ მომხმარებელი ითხოვს საწყობში არსებულზე მეტ რაოდენობას, უნდა დაბრუნდეს ტექსტი: "მარაგში საკმარისი რაოდენობა არ არის!"
// წინააღმდეგ შემთხვევაში, ფუნქციამ უნდა დააბრუნოს მაისურების ჯამური ფასი.







// დასასრულებელია




// const tshirt = {
//     description: ["Men's_shirts", "Women's_T_shirts", "Children's _T_shirts", "Summer_shirts"],
//     color: "yellow", "red", "green", "blue", "black","brown", "white",
//     size: 22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,
//     price: 65,
//     quantity: 1000,
// }
//          function shirtboy(tshirt,quantity){
//          if(quantity > tshirt.quantity)
//          return "მარაგში საკმარისი რაოდენობა არ არის!"
//         }else{
//             let totaAamount = tshirt.price * quantity
//             return "გადასახდელი თანხა არის ${totalAmount}ლ"
//         } 
    
//   let result = shirtboy(tshirt,1001),
//   console.log(result);
  











// ლექცია 19,02,2025 ლექცია





// 1.საფინალო პროექტის შეფასების რუბრიკის განხილვა
// 2.HTML CSS კითხვები
// 3.landing page

// 4.დავალების განხილვა
// 4.1.შექმენით ობიექტი, რომელიც ინახავს მაისურის მონაცემებს:
 
// აღწერა (description)
// ფერი (color)
// ზომა (size)
// ფასი (price)
// რაოდენობა (quantity)
// შემდეგ შექმენით ფუნქცია, რომელიც მიიღებს ამ ობიექტს და მომხმარებლის მიერ შეძენილი მაისურების რაოდენობას.
 
// თუ მომხმარებელი ითხოვს საწყობში არსებულზე მეტ რაოდენობას, უნდა დაბრუნდეს ტექსტი: "მარაგში საკმარისი რაოდენობა არ არის!"
// წინააღმდეგ შემთხვევაში, ფუნქციამ უნდა დააბრუნოს მაისურების ჯამური ფასი.



//   const tshirt = {
//     description: "მაღალი ხარისხის ბამბის მაისური",
//     color: "შავი",
//     size: "L",
//     price: 25, //ერთეულის ფსი
//     quantity: 100,  //საწყობში არსებული რაოდენობა
// }
// function shirtBuy(tshirt,quantity){
//     if(quantity > tshirt.quantity){
//         return "მარაგში საკმარისი რაოდენობა არ არის!"
//     }else{
//         let totalAmount = tshirt.price * quantity

//         return `გადასახდელი თანხა არის ${totalAmount}ლ`

//     }
// }
// let result = shirtBuy(tshirt,89)
// console.log(result);


// const tshirt = {
//     description: "მაღალი ხარისხის ბამბის მაისური",
//     color: "შავი",
//     size: "L",
//     price: 25, //ერთეულის ფსი
//     quantity: 100,  //საწყობში არსებული რაოდენობა
// }
// function shirtBuy(tshirt,quantity){
//     if(quantity > tshirt.quantity){
//         return "მარაგში საკმარისი რაოდენობა არ არის!"
//     }else{
//         let totalAmount = tshirt.price * quantity

//         return `გადასახდელი თანხა არის ${totalAmount}ლ`

//     }
// }
// let result = shirtBuy(tshirt,123)
// console.log(result);


// ფუნქცია ამოწმებს მაარაგს და ანგარიშობს ჯამურ ფასს.








   



// 4.2.დავალების პირობა:
// // 3.დავალების პირობა:
//  შექმენით მაღაზიის ობიექტი (გლობალური scope-ში), რომელიც შეიცავს პროდუქტის მონაცემებს (სახელი, ფასი, რაოდენობა საწყობში).
//  შექმენით ფუნქცია (function scope), რომელიც მიიღებს მომხმარებლის შეკვეთას და დააბრუნებს ჯამურ ღირებულებას.
//  გამოიყენეთ ბლოკის scope if პირობაში, რათა გამოიანგარიშოთ ფასდაკლება შეკვეთაზე (მაგალითად, 3-ზე მეტი პროდუქტის შეძენისას 10% ფასდაკლება).
// დაბეჭდეთ საბოლოო თანხა ეკრანზე.

//  გლობალური scope - პროდუქტის მონაცემები
// const product = {
//     name: "მაისური",
//     price: 20,
//     stock: 10
// };

// სწორია

// const product = {
//     name: "მაისური",
//     price: 20,
//     stock: 10,
//     }
//     function order(quantity){ 
//         let totalPrice = product.price * quantity
//         if(quantity > 3){
//             let discount = totalPrice * 0.1
//             totalPrice = totalPrice - discount
//            console.log(discount);       
//         }
//     return ` გადასახდელი თანხა ${totalPrice}`

// }
//     let number1 = Number(prompt("დაწერეთ რაოდენობა"))
//     let result1 = order(number1)
// //    let result1 = order(7)
//    console.log(result1);
   






// const books = {
//     nameofbook:["Data_Tutashkhia","red and black", "Me, grandmother, Iliko, Hilarion", "guest_host"],    
//     price:29,
//     stock:72,
    
//         }
        
//         function nameofbook(komedi){
//            return "xelmisawvdomia"
//         }
       
// let result = nameofbook(books)
// console.log(result);






// const books = {
//     nameofbook:["Data_Tutashkhia","red and black", "Me, grandmother, Iliko, Hilarion", "guest_host"],    
//     price:29,
//     stock:72,    
//         }
//         function nameofbook(komedi){      
//           if(books.stock > 72){
//              return "მარაგში საკმარისი რაოდენობა არ არის!"
//             }
// return books.price * 36;
//   }
//   let result = nameofbook(books)
//   console.log(result);





// სწორია

// const books = {
//     nameofbook:["Data_Tutashkhia","red and black", "Me, grandmother, Iliko, Hilarion", "guest_host"],    
//     price:29,
//     stock:72,    
//         }

//         function nameofbook(komedi){      
//           if(books.stock > 72){
//              return "მარაგში საკმარისი რაოდენობა არ არის!"
//             }
// return books.price * 97;
//   }
//   let result = nameofbook(books)
//   console.log(result);


    
    // ბლოკის scope - ფასდაკლების ლოგიკა






    
//5. DOM - Document Object Model (WEB API -ის ნაწილი)
// API -Application Programming Interface-API-ის მეშვეობით პროგრამული მოდულები ან სისტემები ერთმანეთთან "ლაპარაკობენ" და ინფორმაციის გაცვლას ახდენენ.

// let divContainer = document.getElementById('container')
// divContainer.textContent ='Goodbye'

// let divContainer = document.getElementById('container')
// let divContainerClass =document.getElementsByClassName('container')
// let containerDiv = document.getElementsByTagName('div')


// let divContainer1 = document.querySelector('.text')
// let divContainer1 = document.querySelectorAll('.text')
// divContainer1 =[div, div, div]
// let divContainer1 = document.querySelectorAll('.text')[0]
// let divContainer1 = document.querySelectorAll('.text')[1]
// let divContainer1 = document.querySelectorAll('.text')[2]
// let divContainer1 = document.querySelectorAll('.text')[3]
// let divContainer1 = document.querySelectorAll('.text')[4]
// let divContainer12 = document.querySelectorAll('.text').forEach(function(item){
//     item.textContent = " farewell"
// })

// let divContainer12 = document.querySelectorAll('.text').forEach(function(item){
//     item.textContent = " wellcome"
// })



// divContainer.textContent ='Goodbye'

// 5.1.Element Selection Methods - როგორ მივწვდეთ ელემენტებს HTML -ში

// 5.2.Element Manipulation Methods- კლასის , ატრიბუტის , კონტენტის მინიჭება ,გადაწერა,წაშლა,ფერის დამატება

// 5.3. Element Creation and Insertion Methods- ელემენტის შექმნა, ჩასმა

// 5.4 . Event Handling (ივენტების დამუშავება)
// •	addEventListener(event, function)

// 6. body -ს მიანიჭეთ ფერი , შემოიტანეთ ღილაკი, მასზე დაკლიკებით შეუცვალეთ ფერი, ხოლო შემდეგ გამოიყენეთ toggle .ღილაკზე დაკლიკებით ვამატებთ კლასის სახელს.
// 7. შექმენით ჰედერი, შემოიტანეთ ლოგო, ნავიგაცია და ბურგერ მენიუს აიქონი,ნოუთბუქის რეზოლუციაზე ბურგერ მენიუ არ უნდა ჩანდეს ,ტაბლეტის რეზოლუციაზე უნდა გამოჩნდეს ბურგერ მენიუს აიქონი და  მასზე დაკლიკებისას კი ნავიგაცია.













// / 24 თებერვლის ლექცია 
 
// 1. script.js ფაილის დაკავშირების მეთოდები

// 2.გლობალური ობიექტი -- window





// object არის ობიექტი, მაგ. კონტეინერი(ქი ველიუს პრინციპით ), რომელშიც ვინახავთ ნებისმიერი პროდუქტის თვისებებს(propertis) და მეთოდებს(methods).
// თვისებებში ზედსართავ სახელებს ჩამოვწერთ. მაგ. რა ფერია? რამარკაა? და ა. შ.logმეთოდებში ანუ ფუნქციებში ჩამოვწერ როგორი არის მისი ფუნქციები, შეიძება ეს იყოს როგორი სიგნალი აქვს? როგორი მართვადია? 


// console.log(window);

// window.alert("გაფრთხილება");

// window.confirm("ნამდვილად მსურს ყიდვა?")

// 3. window -ს მეთოდები იგივე ფუნქციებია.ობიექტსი არსებულ ფუნქციას მეთოდს ვეძახით.( alert, confirm, propmt) მხოლოდ ამ სამ მეთოდს ვისწავლით, რომლებიც ჩაშენებულია თვითონწინდოუ ობიექტში.





// 4. window -ს თვისებები(document, location,console, navigator,history???)

// console.log(window.document);
// ამოიღო indexedDB.html დოკუმენტი, რაც გავაკეთეთ და ჩავწერეთ თუნდაც კომენტარსი, ყველაფერი გადმოიტანა და დააკონსოლოგა.ე.ი. მთლიანად საიტის სტრუქტურა, ჰედი, ბოდი მეინი თუ ფუთერი ყველაფერს რაც კი რამ გაწერილი გვექნება, ამოიღებს და გადმოიტანს მთლიან დოკუმენტს კომენტარების ჩათვლით და დააკონსოლოგებს.


// window რადგან გლობალურია, მისი დაწერა აღარ არის საჭირო, მხოლოდ დოკუმეტი რომ ჩავწეროთ მაინც იგივე გადმოიტანს. ელემენტების დასელექტების დროს პირდაპირ დოკუმენტით დავიწყებთ. ვინდოუსის დაწერა არ არის აუცილებელი თუმცა რომ დავწეროთ არც შეცდომა იქნება.
// დოკუმენტი არის რასაც indexe.html-ში რასაც გავწერთ.


// DOM არის დამაკავშირეველი java script-ის და ბრაუზერის.
// index.html - თითოეული ელემენტი ობიექტებად იქცევა, ეს ელემენტები nodes- ნოუდები ჰქვია. დომი არის დამაკავშირებელი. როგორც კი indexe.html-ი ჩაიტვირთება, გადაიქცევა დომად და შემდეგ java script-ის მეშვეობით ხდება დოკუმენტში ცვლილებების გაკეთება, ინფორმაციის გადაწერა.



// /5.DOM - Document Object Model (WEB API -ის ნაწილი) და არ არის java script-ის ნაწილი.



// ეი პი აი -API  არის დამაკავშირებელი, შამავალი front-სა და back-ს შორის.front-დან მოთხოვნას ვაგზავნით და API-ის მიაქვს  back-დან უკან გვიბრუნებს ჩვენ რასაც ვეუბნებით.



// API -Application Programming Interface-API-ის მეშვეობით პროგრამული მოდულები ან სისტემები ერთმანეთთან "ლაპარაკობენ" და ინფორმაციის გაცვლას ახდენენ.

// 5.1.Element Selection Methods - როგორ მივწვდეთ ელემენტებს HTML -ში

// let divContainer = document.getElementById('container')
// divContainer.textContent ='welcome1'

// let divContainerClass =document.getElementsByClassName('container')
// let containerDiv = document.getElementsByTagName('div')




// let ქივორდი, ცვლადი
// let divContainer1 = document.querySelector('.text')
// let divContainer1 = document.querySelector('#text')
// let divContainer12 = document.querySelectorAll('.text').forEach(function(item){
//     item.textContent = " farewell"
// })
// როცა ერთზე მეტი მაქვს კლასი, აუცილებლად მასი იქნება, ნებისმიერი მასივის მეთოდი გამოვიყენოთ. 





// 5.2.Element Manipulation Methods- კლასის , ატრიბუტის , კონტენტის მინიჭება ,გადაწერა,წაშლა,ფერის დამატება
                                



// let text =document.getElementById('text')
// text.innerHTML='<p>hello text</p>'


// ტეგი და ტექსტი მთლიანად ერთად არის ელემენტი. კარგი ვარიანტი 
// //   <!-- <script src="script.js" defer></script>სწრაფია -->
// // <!-- <script src="script.js"></script> ნელია -->
// დასაკავშირებლად  თანამედროვე ბრაუზერებში და პროექტებში.






// text.innerText = 'Hello innerText'
// text.setAttribute('class','extraClass')


// კლასის დამატება, კლასის მნიშვნელოვა ველიუ არის 'extraClass'


// text.classList.add('secondClass')


// კლასის დამატება მეორე ნაირად, ხშირად გამოვიყენებთ, ბურგერ მენიუს შემთხვევაში.ბურგერზე დაკლიკებით   სანავიგაციო მენიუ  გამოვაჩინოთ.
// ~ნებისმიერ ელემენტს დავამატებ კლასის სახელს და შევუცვლი ფუნქციას


// text.style.color = 'red'
// სტილის მინიჭება.

// ელემენტების მანიპულაციის მეთოდები.




// 5.3. Element Creation and Insertion Methods- ელემენტის შექმნა, ჩასმა

// // index.html-ში თუ არ მიწერია და მინდა დინამიურად შევქმნა და დავამატო


// let ulElement = document.createElement('ul')
// // createElement  ვქმნით
// let liElement = document.createElement('li')

// ulElement.appendChild(liElement)
// // ცაეფენდე ანუ ჩასვი ულში ლი, ე.ი. ul-S ში li ჩასვი.
// text.appendChild(ulElement)
// // appendChild   ვსვამთ



// // 6 რა არის Event
// // let button = document.getElementById('button')
// // let bodyId = document.getElementById('color')
// // button.addEventListener('click',function(){
// //     bodyId.classList.toggle('active')
// // })


// // 6.1. Event Handling (ივენთების დამუშავება)('click', 'focus', 'keydown')

// // 7. body -ს მიანიჭეთ ფერი , შემოიტანეთ ღილაკი, მასზე დაკლიკებით შეუცვალეთ ფერი, ხოლო შემდეგ გამოიყენეთ toggle .ღილაკზე დაკლიკებით ვამატებთ კლასის სახელს.

// // 8. შექმენით ჰედერი, შემოიტანეთ ლოგო, ნავიგაცია და ბურგერ მენიუს აიქონი,ნოუთბუქის რეზოლუციაზე ბურგერ მენიუ არ უნდა ჩანდეს ,ტაბლეტის რეზოლუციაზე უნდა გამოჩნდეს ბურგერ მენიუს აიქონი და  მასზე დაკლიკებისას კი ნავიგაცია.

// // ვასელექთებ ბურგერაიქონს,ნავიგაციას
// // let navigation = document.getElementById('navigation')
// // let burger = document.getElementById('burger')
// // // აიქონზე დაკლიკებისას 
// // burger.addEventListener('click',function(){
// //     if(navigation.classList.contains('activeNavigation')){
// //         navigation.classList.remove('activeNavigation')
// //         burger.innerHTML =' <i class="fa-solid fa-bars"></i>'

// //     }else{
// //         navigation.classList.add('activeNavigation')
// //         burger.innerHTML= '<i class="fas fa-times"></i>'

// //     }
// // })
// // თუ ნავიგაციის კლასი არის  activeNavigation მაშინ მოაშორეთ ეს კლასის სახელი და ბურგერაიქონს innerHTML ით დაუმატეთ fa-bars, წინააღმდეგ შემთხვევაში ნავიგაციას დაუმატეთ კლასის სახელი activeNavigation და burgerIcon innerHtLM fa-times




// function showError(error)
// {
//  switch(error.code)
// {
//  case error.PERMISSION_DENIED:
//  es.innerHTML="მომხმარებელის მიერ ადგილმდებარეობა ვერ განისაზღვრა
// ადგილმდებარეობა."
//  break;
//  case error.POSITION_UNAVAILABLE:
//  es.innerHTML = "ვერ დადგინდა ლოკაცის ადგილი "
//  break;
// 304
//  case error.TIMEOUT:
//  es.innerHTML = "ლოკაცის ადგილმდებაორების დადგენის დრო
// გავიდა"
//  break;
//  case error.UNKNOWN_ERROR:
//  es.innerHTML = "დაუდგენელი შეცდომა."
//  break;
//  }
// }


var es = document.getElementById("test");
function getLocation()
{
 if (navigator.geolocation)
{
 navigator.geolocation.getCurrentPosition(showPosition, showError);
 }
else
{
 es.innerHTML = "Geolocation is not supported by this browser.";
 }
}
function showPosition(position)
{
 var latlon = position.coords.latitude + "," + position.coords.longitude;
 var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
 +latlon+"&zoom=14&size=500x600&sensor=false&key=AIzaSyBu916DdpKAjTmJNIgngS6HL_kDIKU0aU";
 document.getElementById("ruka").innerHTML = "<img src='"+img_url+"'>";
}


// 26.02.2025  leqture



// 24* თებერვლის ლექცია 
 
// 1. script.js ფაილის დაკავშირების მეთოდები defer ატრიბუტი

// 2.გლობალური ობიექტი -- window

// 3. window -ს მეთოდები ( alert, confirm, propmt)
// 4. window -ს თვისებები(document, location,console, navigator,history???)

// 5.DOM - Document Object Model (WEB API -ის ნაწილი)
// API -Application Programming Interface-API-ის მეშვეობით პროგრამული მოდულები ან სისტემები ერთმანეთთან "ლაპარაკობენ" და ინფორმაციის გაცვლას ახდენენ.

// 5.1.Element Selection Methods - როგორ მივწვდეთ ელემენტებს HTML -ში

// 5.2.Element Manipulation Methods- კლასის , ატრიბუტის , კონტენტის მინიჭება ,გადაწერა,წაშლა,ფერის დამატება

// 5.3. Element Creation and Insertion Methods- ელემენტის შექმნა, ჩასმა



// 26 თებერვალი

// 1 რა არის Event
// 1.1 event.target , which property
// let button = document.getElementById('button')
// button.addEventListener('click',function(event){
//     console.log(event);
    // })


// 1.2 Event Handling (ივენთების დამუშავება)('click', 'focus', 'keydown')

//1.3 input- ში  ჩაწერის დროს შეუცვალეთ უკანაფონის ფერი 
// let input = document.getElementById('input')
// input.addEventListener('keydown',function(){
//     input.style.backgroundColor = 'pink'
// })

// 1.4. input ში ჩაწერილი სიტყვა რომ დაემატოს სიაში <ul> ში

// ვასელექთებ button, input, ul -ს
// button ზე დაკლიკებისას ..........
// 1.ვინახავ input ის მნიშვნელობას value -ში
// ვქმნი li -s, ვანიჭებ textContent -ს,(ვქმნი delete button -ს,ვანიჭებ კონტენტს,,delete ზე დაკლიკებისას ვშლი remove()-ით.
//  li ში ვაეფენდებ delete Button ს)
//  ul -ში ვაეფენდებ li -ს
//  input value -ს ვასუფთავებ



// 2.  რა არის this, რა განსხვავებაა window და this შორის 
// console.log(this);

// function showThis() {
//     console.log(this);
//   }
//   showThis();


// const userName = {
//     name: "David",
//     greet: function() {
//       console.log(this.name);
//     }
//   };
//   userName.greet();

// 3. როგორ წამოვიღოთ სერვერიდან ინფორმაცია, როგორ გავაკეთოთ ასინქრონული ოპერაცია
//3.1 როგორ მუშაობს AJAX(Asynchronous JavaScript and XML) 
// 3.2სინქრონული და ასინქრონული კოდი
// console.log(" დავალება 1");
// console.log(" დავალება 2");
// console.log(" დავალება 3");


// console.log("დავალება 1");

// setTimeout(() => {
//   console.log("დავალება 2 ");
// }, 5000);

// console.log("დავალება 3");

// როგორ განვახორციელოთ AJAX Request ?
// 3.3 XMLHttpRequest()
function getUsers(){
    let request = new XMLHttpRequest()
    request.addEventListener('load',render)
    request.addEventListener('error',errorRender)

    request.open('GET','https://reqres.in/api/users?page=1')
    request.send()

}

function render(){
    let response=this.response
    let responseData = JSON.parse(response)
    console.log(responseData);
    let container = document.getElementById('container')
    let ul = document.createElement('ul')
    responseData.data.forEach(function(item){
        let li = document.createElement('li')
        li.textContent =item.email
        let image = document.createElement('img')
        image.src = item.avatar
        ul.appendChild(li)
        ul.appendChild(image)
        container.appendChild(ul)

    })

  

    
   

    
}

function errorRender(){
    let container = document.getElementById('container')
    let p = document.createElement('p')
    p.textContent = 'server error'
    container.appendChild(p)

}

getUsers()


// 3.4 fetch()
3. HTML ელემენტზე და js -ში  onClick() ის გამოყენება

// let input =document.getElementById('inputEl')
// let button = document.getElementById('change')
// let ul = document.getElementById('ulEl')
// button.addEventListener('click' , function(){
//     let value = input.value;
    
//     let li = document.createElement('li')
//     li.textContent = value
//     let deleteButton = document.createElement('button')
//     deleteButton.textContent = 'delete'
//     deleteButton.addEventListener('click',function(){
//         li.remove()

//     })
//     li.appendChild(deleteButton)
  
//     ul.appendChild(li)
//     input.value = " "
// })







    
    
// let burger =document.getElementById('burger')
// let navigation = document.getElementById('navigation')
// burger.addEventListener('click', function(){
//     if(navigation.classList.contains('activeNavigation')){
//         navigation.classList.remove('activeNavigation')
//         burger.innerHTML = '<i class="fa-solid fa-bars"></i>'

//     }else{
//          navigation.classList.add('activeNavigation')
//         burger.innerHTML = '<i class="fas fa-times"></i>'

//     }
// })





// let site = document.getElementById('site')
// site.addEventListener('click', function(event){
//     event.preventDefault()
//     console.log('google is clicked');
    
// })
// 2. preventDefault() გამოყენება ,როდესაც <a></a> -ს ვაკლიკებ, default action რომ არ მოხდეს.
