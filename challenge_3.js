exports.largestPrimeNumber = function(n){
  var primeNumber = 0;
  // do your work here

  for (var i = 2; i < n; i++) {
    if (n%i == 0) {

        console.log("prime factor: "+i);
        n = n/i;

        }
    } 
console.log("last prime factor: "+n);

  primeNumber = n;
  return primeNumber;
};