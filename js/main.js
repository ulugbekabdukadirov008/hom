
alert("Assalomu aleikum hurmatli mijoz. Marhamat hoxlaganingizcha har xil turdagi valutalarni ko'rishingiz mumkin.😊👨‍💻.Sizning karta raqamingiz 💥'8585' 💥.Iltimos  karta raqamingizni eslab qoling.❗❗❗")
var elSiteForm = document.querySelector(".siteform");
var elInput = document.querySelector("#number");
var elResult = document.querySelector(".result");
var elSelect = document.querySelector("#select");

elSiteForm.addEventListener("submit", function (e) {
    e.preventDefault()

    var inputValue = elInput.value;
    var selectValue = elSelect.value;

    console.log(typeof Math.round(inputValue * selectValue));

    elResult.textContent = Math.round(inputValue * selectValue);
})


var cardNumber = prompt("Karta Raqamingizni kiriting")
var raqam = 8585

if (cardNumber == raqam) {
    alert("Parolingiz tasdiqlandi");
} else {
    alert("Parolingiz noto'g'ri🤬😡");
} 

if (cardNumber == raqam) {
    alert(`Hurmatli mijoz, hoxlagan pul birligini tanlashingiz mumkin 😉😊`)
} else {
    alert(`Hurmatli mijoz parolingizni qayta kiritishingizni iltimos qilib qolamiz😓`)
}

