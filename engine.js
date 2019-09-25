
var no1 = document.uts.item1.value;
var no1 = no1.toLowerCase();

var no2 = document.uts.item2.value;
var no2 = no2.toLowerCase();

var no3 = document.uts.item3.value;
var no3 = no3.toLowerCase();

var no4 = document.uts.item4.value;
var no4 = no4.toLowerCase();

var no5 = document.uts.item5.value;
var no5 = no5.toLowerCase();

var no6 = document.uts.item6.value;
var no6 = no6.toLowerCase();

var no7 = document.uts.item7.value;
var no7 = no7.toLowerCase();

var no8 = document.uts.item8.value;
var no8 = no8.toLowerCase();

var no9 = document.uts.item9.value;
var no9 = no9.toLowerCase();

var no10 = document.uts.item10.value;
var no10 = no10.toLowerCase();

var no11 = document.uts.item11.value;
var no11 = no11.toLowerCase();

var no12 = document.uts.item12.value;
var no12 = no12.toLowerCase();

var no13 = document.uts.item13.value;
var no13 = no13.toLowerCase();

var no14 = document.uts.item14.value;
var no14 = no14.toLowerCase();

var no15 = document.uts.item15.value;
var no15 = no15.toLowerCase();

var no16 = document.uts.item16.value;
var no16 = no16.toLowerCase();

var no17 = document.uts.item17.value;
var no17 = no17.toLowerCase();

var no18 = document.uts.item18.value;
var no18 = no18.toLowerCase();

var no19 = document.uts.item19.value;
var no19 = no19.toLowerCase();

var no20 = document.uts.item20.value;
var no20 = no20.toLowerCase();

/*
var allNumber = [
  no1,no2,no3,no4,no5,no6,no7,no8,no9,no10,no11,no12,no13,no14,no15,no16,no17,no18,no19,no20];
*/
  
  
var nilaiAngka = 0;
var nilaiHuruf = "";

var sendBtn = document.querySelector(".sendBtn");
sendBtn.style.display = "none"

var submitBtn = document.querySelector(".submitBtn");


function penilaian() {
 
  if (no1==="d") {
    nilaiAngka+=5;
  }
   if (no2==="a") {
    nilaiAngka+=5;
  }
   if (no3==="c") {
    nilaiAngka+=5;
  }
   if (no4==="d") {
    nilaiAngka+=5;
  }
   if (no5==="c") {
    nilaiAngka+=5;
  }
   if (no6==="b") {
    nilaiAngka+=5;
  }
   if (no7==="a") {
    nilaiAngka+=5;
  }
   if (no8==="d") {
    nilaiAngka+=5;
  }
   if (no9==="a") {
    nilaiAngka+=5;
  }
   if (no10==="a") {
    nilaiAngka+=5;
  }
   if (no11==="a") {
    nilaiAngka+=5;
  }
   if (no12==="b") {
    nilaiAngka+=5;
  }
   if (no13==="c") {
    nilaiAngka+=5;
  }
   if (no14==="c") {
    nilaiAngka+=5;
  }
   if (no15==="d") {
    nilaiAngka+=5;
  }
   if (no16==="c") {
    nilaiAngka+=5;
  }
   if (no17==="a") {
    nilaiAngka+=5;
  }
   if (no18==="c") {
    nilaiAngka+=5;
  }
   if (no19==="a") {
    nilaiAngka+=5;
  }
   if (no20==="b") {
    nilaiAngka+=5;
  }
  
  
 
 
  
  
   if (nilaiAngka>=80 && nilaiAngka<=100) {
    nilaiHuruf="A";
  }
   if (nilaiAngka>=70 && nilaiAngka<=79) {
    nilaiHuruf="B";
  }
   if (nilaiAngka>=50 && nilaiAngka<=69) {
    nilaiHuruf="C";
  }
   if (nilaiAngka>=30 && nilaiAngka<=49) {
    nilaiHuruf="D";
  }
   if (nilaiAngka>=0 && nilaiAngka<=29) {
    nilaiHuruf="E";
  }
  
  
  document.uts.score.value = nilaiHuruf +" " + "("+nilaiAngka+")";
  
  sendBtn.style.display   = "inline";
  submitBtn.style.display = "none";
  
/*  
//Disable the button
button.style.display = "none"

button.removeEventListener("click", clickHandler, false);
button.disabled = true;

//Disable the enter key
window.removeEventListener("keydown", keydownHandler, false);

//Disable the input field
input.disabled = true;

  playersInput = input.value;
  playersInput = playersInput.toLowerCase();

*/
}


