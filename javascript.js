var numeros = 100;
divisible = false;
for (var i = 1; i <= 100; i++) {
  divisible = false;
  if (esdivisible(i,3)) {
    document.write("Fizz");
    divisible = true;
  }
  if (esdivisible(i,5)) {
    document.write("Buzz");
    divisible = true;
  }
  if (!esdivisible(i,3) && !esdivisible(i,5)) {
    document.write(i);
  }
  document.write("<br />");
}
function esdivisible(num, divisor) {
  if (num % divisor == 0) {
    return true;
  } else {
    return false;
  }
}
