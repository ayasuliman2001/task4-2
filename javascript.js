// إنشاء مصفوفة من 10 أعداد عشوائية
let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 10)); // توليد أعداد عشوائية من 0 إلى 9
}

// حساب ناتج جمع الأعداد الزوجية
let sumEven = 0;
// حساب ناتج جمع الأعداد التي دليلها أصغر من 5
let sumLessThan5 = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        sumEven += numbers[i];
    }
    if (numbers[i] < 5) {
        sumLessThan5 += numbers[i];
    }
}

console.log("ناتج جمع الأعداد الزوجية: " + sumEven);
console.log("ناتج جمع الأعداد التي دليلها أصغر من 5: " + sumLessThan5);
















// إنشاء غرض يحتوي على بيانات المستخدم
let user = {
    name: "أحمد",
    age: 30,
    email: "ahmed@example.com",
    phone: "123-456-7890"
};

// طريقة 1: طباعة الغرض كاملاً
console.log("بيانات المستخدم:");
console.log(user);

// طريقة 2: طباعة العناصر الموجودة ضمن الغرض كل عنصر على حدة
console.log("اسم المستخدم: " + user.name);
console.log("عمر المستخدم: " + user.age + " سنة");
console.log("بريد المستخدم الإلكتروني: " + user.email);
console.log("رقم الهاتف: " + user.phone);