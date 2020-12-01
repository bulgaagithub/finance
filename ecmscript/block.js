// IIFE - Функцыг бичээд шууд газар дээр нь хэрэгжүүлдэг 
// функц

var name = "Болдоо";
var age = 33; 

console.log(name + " нэртэй хүн " + age + " настай");

// IIFE function 
// Encapsulation 
// (function(){
//     var name = "Цэцгээ"; // different above name variable 
//     var age = 21;  // different above age above age variable
// })();

// var global variable 

{
    // Зөвхөн энэ блок дотроо үйлчилнэ. 
    // Блок хандалт, encapsulation 
    // Кодыг хоорондоо зөрчилдөхгүй ажиллах,
    // Өгөгдлийн далдлалт хэрэгжүүлэх боломжийг 
    // олгож байгаа том feature юм.
    let name = "Цэцгээ";
    let age = 21; 
    console.log(name + " нэртэй хүн " + age + " настай");
}

console.log(name + " нэртэй хүн " + age + " настай");

