exports.largestPrimeNumber = function(n){
  var primeNumber = 0;
  // do your work here
  var primes = [ ];
  for (var i = 2; i < n; i++) {
    if (n%i == 0) {
        //console.log("i'm in if");
        //console.log("i: "+i);
        primes.push(i);
        console.log("prime factors: "+primes);
        n = n/i;
        console.log("last prime factor: "+n);
       //return largestPrimeNumber(n);
        }
    } 
  primes.push(n);
  primes.sort();
  primeNumber = n;
  return primeNumber;
};