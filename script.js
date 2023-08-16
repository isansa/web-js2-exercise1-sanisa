let yearOfBirth = 1992;
let yearFuture = 2026;
let ageFuture1 = (yearFuture - yearOfBirth) - 1;
let ageFuture2 = yearFuture - yearOfBirth;
console.log(`If you were born in ${yearOfBirth}, then in ${yearFuture} you’ll be ${ageFuture1} or ${ageFuture2} 
(depending on the month in ${yearFuture}).`);