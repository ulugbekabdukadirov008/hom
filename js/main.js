
alert("Assalomu aleikum hurmatli mijoz. Marhamat hoxlaganingizcha har xil turdagi valutalarni ko'rishingiz mumkin.ππ¨βπ».Sizning karta raqamingiz π₯'8585' π₯.Iltimos  karta raqamingizni eslab qoling.βββ")
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
    alert("Parolingiz noto'g'riπ€¬π‘");
} 

if (cardNumber == raqam) {
    alert(`Hurmatli mijoz, hoxlagan pul birligini tanlashingiz mumkin ππ`)
} else {
    alert(`Hurmatli mijoz parolingizni qayta kiritishingizni iltimos qilib qolamizπ`)
}

