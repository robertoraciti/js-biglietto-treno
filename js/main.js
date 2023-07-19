const kiloMeters = prompt("Inserisci qui i kilometri che vuoi percorrere");
const userAge = prompt("Inserisci qui la tua età");
const unitPrice = 0.21;
const under = 18;
const over = 65;

parseInt(kiloMeters);
parseInt(userAge);

const fullPrice = kiloMeters * unitPrice;

console.log(typeof fullPrice);

const underDiscount = (fullPrice * 20) / 100;
const overDiscount = (fullPrice * 40) / 100;
const underPrice = fullPrice - underDiscount;

const overPrice = fullPrice - overDiscount;

if (userAge < under) {
  alert(underPrice);
} else if (userAge > over) {
  alert(overPrice);
} else {
  alert(fullPrice);
}
