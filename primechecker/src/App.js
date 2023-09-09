import React, { useState } from 'react';

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  const sqrtN = Math.sqrt(n);
  for (let i = 3; i <= sqrtN; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function PrimeChecker() {
  const [number, setNumber] = useState('');
  const [isPrimeNumber, setIsPrimeNumber] = useState(null);

  const handleNumberChange = (e) => {
    const inputNumber = parseInt(e.target.value);
    setNumber(inputNumber);
    setIsPrimeNumber(isPrime(inputNumber));
  };

  return (
    <div>
      <h1>Prime Number Checker</h1>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={handleNumberChange}
      />
      {isPrimeNumber !== null && (
        <p>
          {number} {isPrimeNumber ? 'is' : 'is not'} a prime number.
        </p>
      )}
    </div>
  );
}

export default PrimeChecker;
