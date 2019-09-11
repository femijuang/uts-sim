
var no1 = document.uts.item1.value;
var no2 = document.uts.item2.value;
var no3 = document.uts.item3.value;
var no4 = document.uts.item4.value;
var no5 = document.uts.item5.value;
var no6 = document.uts.item6.value;
var no7 = document.uts.item7.value;
var no8 = document.uts.item8.value;
var no9 = document.uts.item9.value;
var no10 = document.uts.item10.value;
var no11 = document.uts.item11.value;
var no12 = document.uts.item12.value;
var no13 = document.uts.item13.value;
var no14 = document.uts.item14.value;
var no15 = document.uts.item15.value;
var no16 = document.uts.item16.value;
var no17 = document.uts.item17.value;
var no18 = document.uts.item18.value;
var no19 = document.uts.item19.value;
var no20 = document.uts.item20.value;


var nilaiAngka = 0;
var nilaiHuruf = "";


function penilaian() {
  
    
 
  if (no1==="item1d") {
    nilaiAngka+=5;
  }
   if (no2==="item2a") {
    nilaiAngka+=5;
  }
   if (no3==="item3c") {
    nilaiAngka+=5;
  }
   if (no4==="item4d") {
    nilaiAngka+=5;
  }
   if (no5==="item5c") {
    nilaiAngka+=5;
  }
   if (no6==="item6b") {
    nilaiAngka+=5;
  }
   if (no7==="item7a") {
    nilaiAngka+=5;
  }
   if (no8==="item8d") {
    nilaiAngka+=5;
  }
   if (no9==="item9a") {
    nilaiAngka+=5;
  }
   if (no10==="item10a") {
    nilaiAngka+=5;
  }
   if (no11==="item11a") {
    nilaiAngka+=5;
  }
   if (no12==="item12b") {
    nilaiAngka+=5;
  }
   if (no13==="item13c") {
    nilaiAngka+=5;
  }
   if (no14==="item14c") {
    nilaiAngka+=5;
  }
   if (no15==="item15d") {
    nilaiAngka+=5;
  }
   if (no16==="item16c") {
    nilaiAngka+=5;
  }
   if (no17==="item17a") {
    nilaiAngka+=5;
  }
   if (no18==="item18c") {
    nilaiAngka+=5;
  }
   if (no19==="item19a") {
    nilaiAngka+=5;
  }
   if (no20==="item20b") {
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
  
  
  document.uts.nilai.value = nilaiHuruf +" " + "("+nilaiAngka+")";
  var score = document.uts.nilai.value;
  document.uts.score.value = score;

  
/*  
//Disable the button
button.style.display = "none"

button.removeEventListener("click", clickHandler, false);
button.disabled = true;

//Disable the enter key
window.removeEventListener("keydown", keydownHandler, false);

//Disable the input field
input.disabled = true;
*/
}


