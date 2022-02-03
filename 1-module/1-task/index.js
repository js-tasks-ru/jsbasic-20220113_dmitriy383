function factorial(n) {
  let res = 1
  
  while(n) {
    res *= n--;
  }
  return res;
  }

  alert(factorial(5));
  alert(factorial(0));
  alert(factorial(1));
  alert(factorial(3));
  
  

