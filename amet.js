const parser = {
  parse: function(input) {
    // Your parsing logic here
    return JSON.parse(input);
  },
  // You can add other methods or properties as needed
};

// Usage:
const jsonString = '{"name": "John", "age": 30}';
const parsedData = parser.parse(jsonString);
console.log(parsedData); // Output: { name: 'John', age: 30 }
