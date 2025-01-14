function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (a < 0) {
    return b; // Handle negative 'a' to prevent infinite recursion
  }
  if (a > 1000) { // Add a check for large values of 'a' 
    return a + b; // Return a value, preventing the infinite loop
  }
  return foo(a - 1, a + b);
} 