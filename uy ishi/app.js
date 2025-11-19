let yosh = parseInt(prompt("Yoshingizni kiriting:"));
let tajribaYil = parseInt(prompt("Haydovchilik tajribangiz (yil)ni kiriting:"));
let sugurtaNarxi;

if (yosh < 18) {
    sugurtaNarxi = "Sug'urta ruxsat etilmaydi";
} else if (yosh >= 18 && yosh <= 25) {
    if (tajribaYil < 2) {
        sugurtaNarxi = "Narx: 300$";
    } else {
        sugurtaNarxi = "Narx: 200$";
    }
} else if (yosh > 25) {
    sugurtaNarxi = "Narx: 150$";
} else {
    sugurtaNarxi = "Noto'g'ri qiymat kiritildi";
}

alert("Sug'urta narxi: " + sugurtaNarxi);
let price = parseFloat(prompt("Mahsulot narxini kiriting:"));
let coupon = prompt("Kupon nomini kiriting (SALE20 yoki SALE50):");
let finalPrice = price;
let message;

if (isNaN(price)) {
    message = "Noto'g'ri narx kiritildi.";
} else if (coupon === "SALE20") {
    finalPrice = price * 0.80;
    message = `20% chegirma qo'llandi. Yakuniy narx: ${finalPrice.toFixed(2)}`;
} else if (coupon === "SALE50") {
    finalPrice = price * 0.50;
    message = `50% chegirma qo'llandi. Yakuniy narx: ${finalPrice.toFixed(2)}`;
} else {
    message = "Kupon yaroqsiz. Narx o'zgarmadi.";
}

alert("Natija: " + message);

let hour = parseInt(prompt("Hozirgi soatni kiriting (0-23):"));
let modeStatus;

if (isNaN(hour) || hour < 0 || hour > 23) {
    modeStatus = "Noto'g'ri soat kiritildi";
} else if (hour >= 20 || hour < 6) {
    modeStatus = "Night mode ON";
} else {
    modeStatus = "Day mode ON";
}

alert("Rejim holati: " + modeStatus);

const currentYear = 2025; // Hozirgi yil
let expiryYear = parseInt(prompt(`Karta yaroqlilik yilini kiriting (Masalan, ${currentYear + 2}):`));
let kartaHolati;

if (isNaN(expiryYear) || expiryYear < 2000) {
    kartaHolati = "Noto'g'ri yil kiritildi.";
} else if (expiryYear < currentYear) {
    kartaHolati = "Karta muddati o'tgan";
} else {
    kartaHolati = "Karta amal qiladi";
}

alert("Karta holati: " + kartaHolati);

let orderType = prompt("Buyurtma turini kiriting (delivery, pickup, dine-in):").toLowerCase();
let orderStatus;

switch (orderType) {
    case "delivery":
        orderStatus = "Kuryer yo'lda";
        break;
    case "pickup":
        orderStatus = "Buyurtmani olib ketishingiz mumkin";
        break;
    case "dine-in":
        orderStatus = "Stol tayyor";
        break;
    default:
        orderStatus = "Noma'lum buyurtma turi";
}

alert("Buyurtma statusi: " + orderStatus);

let ball = parseInt(prompt("Talaba ballini kiriting (0-100):"));
let baho;

if (isNaN(ball) || ball < 0 || ball > 100) {
    baho = "Noto'g'ri ball kiritildi";
} else if (ball >= 90) {
    baho = "A";
} else if (ball >= 80) {
    baho = "B";
} else if (ball >= 70) {
    baho = "C";
} else if (ball >= 60) {
    baho = "D";
} else {
    baho = "F";
}

alert("Talabaning bahosi: " + baho);

let temp = parseFloat(prompt("Havo haroratini kiriting (°C):"));
let kiyimTavsiyasi;

if (isNaN(temp)) {
    kiyimTavsiyasi = "Noto'g'ri harorat kiritildi";
} else if (temp > 30) {
    kiyimTavsiyasi = "Yengil kiyim kiying";
} else if (temp >= 15) {
    kiyimTavsiyasi = "Oddiy kiyim kiying";
} else {
    kiyimTavsiyasi = "Issiq kiyim kiying";
}

alert("Kiyim tavsiyasi: " + kiyimTavsiyasi);

let stock = parseInt(prompt("Ombordagi mahsulot miqdorini kiriting:"));
let stockStatus;
if (isNaN(stock) || stock < 0) {
    stockStatus = "Noto'g'ri miqdor kiritildi";
} else if (stock > 10) {
    stockStatus = "Mahsulot yetarli";
} else if (stock >= 1) {
    stockStatus = "Mahsulot yetishmayapti";
} else {
    stockStatus = "Sotuvda yo'q";
}

alert("Ombor holati: " + stockStatus);

let internetGB = parseFloat(prompt("Sarflangan internet miqdorini kiriting (GB):"));
let tarifNomi;
